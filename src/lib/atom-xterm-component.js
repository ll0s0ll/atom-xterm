/** @babel */
/*
 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Copyright 2017-2018 Andres Mejia <amejia004@gmail.com>. All Rights Reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { CompositeDisposable } from 'atom'
import { spawn as spawnPty } from 'node-pty-prebuilt'
import { Terminal } from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'
import urlRegex from 'url-regex'
import { shell } from 'electron'

import atomXtermConfig from './atom-xterm-config'
import { AtomXtermProfileMenuComponent } from './atom-xterm-profile-menu-component'
import { AtomXtermProfileMenuModel } from './atom-xterm-profile-menu-model'
import { AtomXtermProfilesSingleton } from './atom-xterm-profiles'

import fs from 'fs-extra'

import elementResizeDetectorMaker from 'element-resize-detector'
import React from 'react'

Terminal.applyAddon(fit)

const STRICT_URL_REGEX = new RegExp(`(${urlRegex({exact: false, strict: true}).source})`)
const PTY_PROCESS_OPTIONS = new Set([
  'command',
  'args',
  'name',
  'cwd',
  'env',
  'setEnv',
  'deleteEnv',
  'encoding'
])
const ATOM_XTERM_OPTIONS = [
  'leaveOpenAfterExit',
  'relaunchTerminalOnStartup',
  'title',
  'promptToStartup'
]

class AtomXtermTopComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: true
    }
    this.restartButtonClickHandler = this.restartButtonClickHandler.bind(this)
  }

  showNotification (message, infoType, restartButtonText = 'Restart') {
    if (infoType === 'success') {
      atom.notifications.addSuccess(message)
    } else if (infoType === 'error') {
      atom.notifications.addError(message)
    } else if (infoType === 'warning') {
      atom.notifications.addWarning(message)
    } else if (infoType === 'info') {
      atom.notifications.addInfo(message)
    } else {
      throw new Error(`Unknown info type: ${infoType}`)
    }
    this.setState(() => {
      return {
        isHidden: false,
        message: message,
        infoType: infoType,
        restartButtonText: restartButtonText
      }
    })
  }

  hideNotification () {
    this.setState(() => {
      return {
        isHidden: true
      }
    })
  }

  restartButtonClickHandler () {
    this.hideNotification()
    this.props.getAtomXtermComponent().restartPtyProcess()
  }

  render () {
    if (this.state.isHidden) {
      return null
    }
    let restartButtonClasses = `btn btn-${this.state.infoType} atom-xterm-restart-btn`
    let messageClasses = `atom-xterm-notice-${this.state.infoType}`
    return (
      <div className='atom-xterm-top-div'>
        <div className={messageClasses}>
          {this.state.message}
          <button className={restartButtonClasses} onClick={this.restartButtonClickHandler}>
            {this.state.restartButtonText}
          </button>
        </div>
      </div>
    )
  }
}

class AtomXtermTerminalComponent extends React.Component {
  // NOTE: This React component should not have anything that will trigger a
  // re-render.
  constructor (props) {
    super(props)
    this.terminalComponentRef = React.createRef()
    this.profilesSingleton = AtomXtermProfilesSingleton.instance
    this.disposables = new CompositeDisposable()
    this.hoveredLink = null
    this.pendingTerminalProfileOptions = {}
    this.terminalDivIntersectionRatio = 0.0
    // NOTE: The terminal container is created and maintained through the DOM.
    this.terminalDiv = document.createElement('div')
    this.terminalDiv.classList.add('atom-xterm-terminal-container')
    this.terminalDiv.style.backgroundColor = '#000'
  }

  render () {
    return (
      <div
        ref={this.terminalComponentRef}
        className='atom-xterm-terminal-component'
      />
    )
  }

  componentDidMount () {
    this.terminalComponentRef.current.appendChild(this.terminalDiv)
    this.props.atomXtermModel.initializedPromise.then(() => {
      this.createTerminal().then(() => {
        // Add an IntersectionObserver in order to apply new options and
        // refit as soon as the terminal is visible.
        this.terminalDivIntersectionObserver = new IntersectionObserver((entries, observer) => {
          // NOTE: Only the terminal div should be observed therefore there
          // should only be one entry.
          let entry = entries[0]
          this.terminalDivIntersectionRatio = entry.intersectionRatio
          this.applyPendingTerminalProfileOptions()
        }, {
          root: this.terminalComponentRef.current,
          threshold: 1.0
        })
        this.terminalDivIntersectionObserver.observe(this.terminalDiv)
        // Add event handler for increasing/decreasing the font when
        // holding 'ctrl' and moving the mouse wheel up or down.
        this.terminalDiv.addEventListener(
          'wheel',
          (wheelEvent) => {
            if (wheelEvent.ctrlKey && atom.config.get('editor.zoomFontWhenCtrlScrolling')) {
              if (wheelEvent.deltaY < 0) {
                let fontSize = this.props.atomXtermModel.profile.fontSize + 1
                if (fontSize > atomXtermConfig.getMaximumFontSize()) {
                  fontSize = atomXtermConfig.getMaximumFontSize()
                }
                this.props.atomXtermModel.applyProfileChanges({fontSize: fontSize})
                wheelEvent.stopPropagation()
              } else if (wheelEvent.deltaY > 0) {
                let fontSize = this.props.atomXtermModel.profile.fontSize - 1
                if (fontSize < atomXtermConfig.getMinimumFontSize()) {
                  fontSize = atomXtermConfig.getMinimumFontSize()
                }
                this.props.atomXtermModel.applyProfileChanges({fontSize: fontSize})
                wheelEvent.stopPropagation()
              }
            }
          },
          {capture: true}
        )
      })
    })
  }

  destroy () {
    if (this.ptyProcess) {
      this.ptyProcess.kill()
    }
    if (this.terminal) {
      this.terminal.destroy()
    }
    this.disposables.dispose()
  }

  getShellCommand () {
    return this.props.atomXtermModel.profile.command
  }

  getArgs () {
    let args = this.props.atomXtermModel.profile.args
    if (!Array.isArray(args)) {
      throw new Error('Arguments set are not an array.')
    }
    return args
  }

  getTermType () {
    return this.props.atomXtermModel.profile.name
  }

  checkPathIsDirectory (path) {
    return new Promise((resolve, reject) => {
      if (path) {
        fs.stat(path, (err, stats) => {
          if (err) {
            resolve(false)
          }
          if (stats && stats.isDirectory()) {
            resolve(true)
          }
          resolve(false)
        })
      } else {
        resolve(false)
      }
    })
  }

  getCwd () {
    return new Promise((resolve, reject) => {
      let cwd = this.props.atomXtermModel.profile.cwd
      this.checkPathIsDirectory(cwd).then((isDirectory) => {
        if (isDirectory) {
          resolve(cwd)
        } else {
          cwd = this.props.atomXtermModel.getPath()
          this.checkPathIsDirectory(cwd).then((isDirectory) => {
            if (isDirectory) {
              resolve(cwd)
            } else {
              // If the cwd from the model was invalid, reset it to null.
              this.props.atomXtermModel.cwd = null
              cwd = this.profilesSingleton.getBaseProfile.cwd
              this.checkPathIsDirectory(cwd).then((isDirectory) => {
                if (isDirectory) {
                  this.props.atomXtermModel.profile.cwd = cwd
                  resolve(cwd)
                }
                resolve(null)
              })
            }
          })
        }
      })
    })
  }

  getEnv () {
    let env = this.props.atomXtermModel.profile.env
    if (!env) {
      env = Object.assign({}, process.env)
    }
    if (typeof env !== 'object' || Array.isArray(env)) {
      throw new Error('Environment set is not an object.')
    }
    let setEnv = this.props.atomXtermModel.profile.setEnv
    let deleteEnv = this.props.atomXtermModel.profile.deleteEnv
    for (let key in setEnv) {
      env[key] = setEnv[key]
    }
    for (let key of deleteEnv) {
      delete env[key]
    }
    return env
  }

  getEncoding () {
    return this.props.atomXtermModel.profile.encoding
  }

  leaveOpenAfterExit () {
    return this.props.atomXtermModel.profile.leaveOpenAfterExit
  }

  isPromptToStartup () {
    return this.props.atomXtermModel.profile.promptToStartup
  }

  isPtyProcessRunning () {
    return (this.ptyProcess && this.ptyProcessRunning)
  }

  getXtermOptions () {
    let xtermOptions = {
      cursorBlink: true,
      experimentalCharAtlas: 'dynamic'
    }
    xtermOptions = Object.assign(xtermOptions, this.props.atomXtermModel.profile.xtermOptions)
    xtermOptions.fontSize = this.props.atomXtermModel.profile.fontSize
    // NOTE: The cloning is needed because the Terminal class modifies the
    // options passed to it.
    return this.profilesSingleton.deepClone(xtermOptions)
  }

  setMainBackgroundColor () {
    let xtermOptions = this.getXtermOptions()
    if (xtermOptions.theme && xtermOptions.theme.background) {
      this.terminalDiv.style.backgroundColor = xtermOptions.theme.background
    }
  }

  createTerminal () {
    // Attach terminal emulator to this element and refit.
    this.setMainBackgroundColor()
    this.terminal = new Terminal(this.getXtermOptions())
    this.terminal.open(this.terminalDiv)
    this.ptyProcessCols = 80
    this.ptyProcessRows = 25
    this.refitTerminal()
    this.ptyProcess = null
    this.ptyProcessRunning = false
    this.terminal.on('data', (data) => {
      if (this.isPtyProcessRunning()) {
        this.ptyProcess.write(data)
      }
    })
    this.terminal.registerLinkMatcher(
      STRICT_URL_REGEX,
      (mouseEvent, uri) => {
        shell.openExternal(uri)
      },
      {
        matchIndex: 1,
        leaveCallback: () => {
          this.clearHoveredLink()
        },
        priority: 100,
        willLinkActivate: (mouseEvent, uri) => {
          this.setHoveredLink(uri)
        }
      }
    )
    this.disposables.add(this.profilesSingleton.onDidResetBaseProfile((baseProfile) => {
      let profileChanges = this.profilesSingleton.diffProfiles(
        this.props.atomXtermModel.getProfile(),
        {
          // Only allow changes to settings related to the terminal front end
          // to be applied to existing terminals.
          fontSize: baseProfile.fontSize,
          xtermOptions: baseProfile.xtermOptions
        }
      )
      this.props.atomXtermModel.applyProfileChanges(profileChanges)
    }))
    if (this.isPromptToStartup()) {
      return this.promptToStartup()
    }
    return this.restartPtyProcess()
  }

  showNotification (message, infoType, restartButtonText = 'Restart') {
    this.props.getAtomXtermComponent().showNotification(
      message,
      infoType,
      restartButtonText
    )
  }

  promptToStartup () {
    return new Promise((resolve, reject) => {
      let message
      if (this.props.atomXtermModel.profile.title === null) {
        let command = [this.getShellCommand()]
        command.push(...this.getArgs())
        message = `New command ${JSON.stringify(command)} ready to start.`
      } else {
        message = `New command for profile ${this.props.atomXtermModel.profile.title} ready to start.`
      }
      this.showNotification(
        message,
        'info',
        'Start'
      )
      resolve()
    })
  }

  restartPtyProcess () {
    return new Promise((resolve, reject) => {
      this.getCwd().then((cwd) => {
        if (this.ptyProcessRunning) {
          this.ptyProcess.removeAllListeners('exit')
          this.ptyProcess.kill()
        }
        // Reset the terminal.
        this.terminal.reset()

        // Setup pty process.
        this.ptyProcessCommand = this.getShellCommand()
        this.ptyProcessArgs = this.getArgs()
        let name = this.getTermType()
        let env = this.getEnv()
        let encoding = this.getEncoding()

        // Attach pty process to terminal.
        // NOTE: This must be done after the terminal is attached to the
        // parent element and refitted.
        this.ptyProcessOptions = {
          'name': name,
          'cwd': cwd,
          'env': env
        }
        if (encoding) {
          // There's some issue if 'encoding=null' is passed in the options,
          // therefore, only set it if there's an actual encoding to set.
          this.ptyProcessOptions['encoding'] = encoding
        }

        this.ptyProcessOptions.cols = this.ptyProcessCols
        this.ptyProcessOptions.rows = this.ptyProcessRows
        this.ptyProcess = null
        this.ptyProcessRunning = false
        try {
          this.ptyProcess = spawnPty(this.ptyProcessCommand, this.ptyProcessArgs, this.ptyProcessOptions)
        } catch (err) {
          let message = 'Launching \'' + this.ptyProcessCommand + '\' raised the following error: ' + err.message
          if (err.message.startsWith('File not found:')) {
            message = 'Could not find command \'' + this.ptyProcessCommand + '\'.'
          }
          this.showNotification(
            message,
            'error'
          )
          resolve()
        }
        if (this.ptyProcess) {
          this.ptyProcessRunning = true
          this.ptyProcess.on('data', (data) => {
            let oldTitle = this.props.atomXtermModel.title
            if (this.props.atomXtermModel.profile.title !== null) {
              this.props.atomXtermModel.title = this.props.atomXtermModel.profile.title
            } else if (process.platform !== 'win32') {
              this.props.atomXtermModel.title = this.ptyProcess.process
            }
            if (oldTitle !== this.props.atomXtermModel.title) {
              this.props.atomXtermModel.emitter.emit('did-change-title', this.props.atomXtermModel.title)
            }
            this.terminal.write(data)
            this.props.atomXtermModel.handleNewDataArrival()
          })
          this.ptyProcess.on('exit', (code, signal) => {
            this.ptyProcessRunning = false
            if (!this.leaveOpenAfterExit()) {
              this.props.atomXtermModel.exit()
            } else {
              if (code === 0) {
                this.showNotification(
                  'The terminal process has finished successfully.',
                  'success'
                )
              } else {
                this.showNotification(
                  'The terminal process has exited with failure code \'' + code + '\'.',
                  'error'
                )
              }
            }
          })
          resolve()
        }
      })
    })
  }

  applyPendingTerminalProfileOptions () {
    // For any changes involving the xterm.js Terminal object, only apply them
    // when the terminal is visible.
    if (this.terminalDivIntersectionRatio === 1.0) {
      let xtermOptions = this.pendingTerminalProfileOptions.xtermOptions || {}
      // NOTE: For legacy reasons, the font size is defined from the 'fontSize'
      // key outside of any defined xterm.js Terminal options.
      delete xtermOptions.fontSize
      if (this.pendingTerminalProfileOptions.hasOwnProperty('fontSize')) {
        xtermOptions.fontSize = this.pendingTerminalProfileOptions.fontSize
        delete this.pendingTerminalProfileOptions.fontSize
      }
      this.setMainBackgroundColor()
      for (const key of Object.keys(xtermOptions)) {
        this.terminal.setOption(key, xtermOptions[key])
      }
      delete this.pendingTerminalProfileOptions.xtermOptions

      // Restart the pty process if changes to the pty process settings are
      // being made.
      // NOTE: When applying new pty settings, the terminal still needs to be
      // visible.
      let a = new Set(Object.keys(this.pendingTerminalProfileOptions))
      let intersection = new Set([...a].filter(x => PTY_PROCESS_OPTIONS.has(x)))
      if (intersection.size !== 0) {
        this.restartPtyProcess()
        for (const key of intersection) {
          delete this.pendingTerminalProfileOptions[key]
        }
      }
      this.refitTerminal()
    }

    // atom-xterm specific options can be removed since at this point they
    // should already be applied in the terminal's profile.
    for (const key of ATOM_XTERM_OPTIONS) {
      delete this.pendingTerminalProfileOptions[key]
    }
  }

  refitTerminal () {
    // Only refit the terminal when it is completely visible.
    if (this.terminalDivIntersectionRatio === 1.0) {
      const geometry = this.terminal.proposeGeometry()
      if (geometry) {
        if (geometry.rows === Infinity || geometry.cols === Infinity) {
          console.warn('Proposed geometry included an infinite value, resizing will not be done.')
          return
        }
        // Resize terminal
        let newTerminalCols = geometry.cols
        if (process.platform === 'win32' && newTerminalCols < this.terminal.cols) {
          // In Windows, resizing to smaller amount of columns poses a problem.
          // Workaround this by only allowing increasing the number of columns.
          // See also
          // https://github.com/amejia1/atom-xterm/issues/10 .
          newTerminalCols = this.terminal.cols
        }
        if (geometry.rows !== this.terminal.rows || newTerminalCols !== this.terminal.cols) {
          this.terminal.resize(newTerminalCols, geometry.rows)
        }

        // Resize pty process
        if (this.isPtyProcessRunning()) {
          if (this.ptyProcessCols !== geometry.cols || this.ptyProcessRows !== geometry.rows) {
            this.ptyProcess.resize(geometry.cols, geometry.rows)
          }
        }
        this.ptyProcessCols = geometry.cols
        this.ptyProcessRows = geometry.rows
      }
    }
  }

  focusOnTerminal () {
    if (this.terminal) {
      this.terminal.focus()
    }
  }

  hideTerminal () {
    this.terminalDiv.style.visibility = 'hidden'
  }

  showTerminal () {
    this.terminalDiv.style.visibility = 'visible'
  }

  setHoveredLink (link) {
    this.hoveredLink = link
    this.terminalDiv.classList.add('atom-xterm-term-container-has-link')
  }

  clearHoveredLink () {
    this.terminalDiv.classList.remove('atom-xterm-term-container-has-link')
    this.hoveredLink = null
  }

  openHoveredLink () {
    if (this.hoveredLink) {
      shell.openExternal(this.hoveredLink)
    }
  }

  getHoveredLink () {
    if (this.hoveredLink) {
      return this.hoveredLink
    }
  }

  queueNewProfileChanges (profileChanges) {
    this.pendingTerminalProfileOptions = Object.assign(this.pendingTerminalProfileOptions, profileChanges)
    this.applyPendingTerminalProfileOptions()
  }
}

class AtomXtermMainComponent extends React.Component {
  constructor (props) {
    super(props)
    this.componentRef = React.createRef()
    this.terminalComponentRef = React.createRef()
    this.erd = elementResizeDetectorMaker({
      strategy: 'scroll'
    })
  }

  render () {
    return (
      <div
        ref={this.componentRef}
        className='atom-xterm-main-div'
      >
        <AtomXtermTerminalComponent
          ref={this.terminalComponentRef}
          atomXtermModel={this.props.atomXtermModel}
          getAtomXtermComponent={this.props.getAtomXtermComponent}
        />
      </div>
    )
  }

  componentDidMount () {
    this.erd.listenTo(this.componentRef.current, (element) => {
      this.terminalComponentRef.current.refitTerminal()
    })
  }
}

class AtomXtermComponent extends React.Component {
  constructor (props) {
    super(props)
    this.props.atomXtermModel.setComponent(this)
    this.state = {
      sessionId: null
    }
    this.topComponentRef = React.createRef()
    this.mainComponentRef = React.createRef()
    this.getSelf = this.getSelf.bind(this)
    // Always wait for the model to finish initializing before proceeding.
    this.props.atomXtermModel.initializedPromise.then(() => {
      this.setState((state, props) => {
        return {
          sessionId: props.atomXtermModel.getSessionId()
        }
      })
    })
  }

  render () {
    return (
      <div
        className='atom-xterm'
        session-id={this.state.sessionId}
      >
        <AtomXtermTopComponent
          ref={this.topComponentRef}
          getAtomXtermComponent={this.getSelf}
        />
        <AtomXtermMainComponent
          ref={this.mainComponentRef}
          atomXtermModel={this.props.atomXtermModel}
          getAtomXtermComponent={this.getSelf}
        />
      </div>
    )
  }

  getTerminalComponentRef () {
    return this.mainComponentRef.current.terminalComponentRef
  }

  destroy () {
    this.getTerminalComponentRef().current.destroy()
  }

  getSelf () {
    return this
  }

  showNotification (message, infoType, restartButtonText = 'Restart') {
    this.topComponentRef.current.showNotification(
      message,
      infoType,
      restartButtonText
    )
  }

  focusOnTerminal () {
    this.getTerminalComponentRef().current.focusOnTerminal()
  }

  restartPtyProcess () {
    this.getTerminalComponentRef().current.restartPtyProcess()
  }

  copyFromTerminal () {
    return this.getTerminalComponentRef().current.terminal.getSelection()
  }

  pasteToTerminal (text) {
    this.getTerminalComponentRef().current.ptyProcess.write(text)
  }

  openHoveredLink () {
    this.getTerminalComponentRef().current.openHoveredLink()
  }

  getHoveredLink () {
    return this.getTerminalComponentRef().current.getHoveredLink()
  }

  toggleProfileMenu () {
    console.warn('TODO: AtomXtermComponent toggleProfileMenu()')
  }

  queueNewProfileChanges (profileChanges) {
    this.getTerminalComponentRef().current.queueNewProfileChanges(profileChanges)
  }
}

export {
  AtomXtermComponent
}
