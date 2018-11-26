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

import { CompositeDisposable, TextEditor } from 'atom'

import { AtomXtermProfilesSingleton } from './atom-xterm-profiles'
import { AtomXtermDeleteProfileModel } from './atom-xterm-delete-profile-model'
import { AtomXtermSaveProfileModel } from './atom-xterm-save-profile-model'
import { createHorizontalLine } from './atom-xterm-utils'

import React from 'react'

class MenuItemContainer extends React.Component {
  render () {
    return (
      <div className='atom-xterm-profile-menu-item' id={this.props.id}>
        <label className='atom-xterm-profile-menu-item-label'>
          <div className='atom-xterm-profile-menu-item-title'>
            {this.props.labelTitle}
          </div>
          <div className='atom-xterm-profile-menu-item-description'>
            {this.props.labelDescription}
          </div>
        </label>
        {this.props.item}
      </div>
    )
  }
}

class ProfilesMenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
    this.props.componentsData[this.props.id] = this
  }

  getValue () {
    return this.state.value
  }

  onChange (event) {
    this.setState((prevState, props) => {
      return {
        value: event.target.value
      }
    })
    this.props.onChangeHandler(event)
  }

  render () {
    let profilesOptions = [
      <option value=''></option>
    ]
    if (this.props.profiles) {
      profilesOptions.concat(
        this.props.profiles.map((profile) => {
          <option value={profile}>{profile}</option>
        })
      )
    }
    const profilesDropDown = (
      <select
        className='atom-xterm-profile-menu-item-select'
        value={this.state.value}
        onChange={this.onChange}
      >
        {profilesOptions}
      </select>
    )
    return (
      <MenuItemContainer
        id={this.props.id}
        labelTitle={this.props.labelTitle}
        labelDescription={this.props.labelDescription}
        item={profilesDropDown}
      />
    )
  }
}

class ProfileMenuButton extends React.Component {
  render () {
    return (
      <button
        className='atom-xterm-profile-menu-button'
        onClick={this.props.clickHandler}
      >
        {this.props.text}
      </button>
    )
  }
}

class TextBoxMenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.textbox = new TextEditor({
      mini: true,
      placeholderText: this.props.defaultValue
    })
    if (this.props.initialValue) {
      if (this.props.initialValue.constructor === Array || this.props.initialValue.constructor === Object) {
        this.textbox.setText(JSON.stringify(this.props.initialValue))
      } else {
        this.textbox.setText(this.props.initialValue)
      }
    }
    this.props.componentsData[this.props.id] = this
  }

  getText () {
    return this.textbox.getText()
  }

  setText (text) {
    this.textbox.setText(text)
  }

  render () {
    return (
      <MenuItemContainer
        id={this.props.id}
        labelTitle={this.props.labelTitle}
        labelDescription={this.props.labelDescription}
        item={this.textbox.getElement()}
      />
    )
  }
}

class CheckBoxMenuItem extends React.Component {
  constructor (props) {
    super(props)
    let checked = this.props.defaultValue
    if (this.props.initialValue !== undefined) {
      checked = this.props.initialValue
    }
    this.state = {
      checked: checked
    }
    this.onChange = this.onChange.bind(this)
    this.props.componentsData[this.props.id] = this
  }

  isChecked () {
    return this.state.checked
  }

  setChecked (value) {
    this.setState(() => {
      return {
        checked: value
      }
    })
  }

  onChange (event) {
    this.setState((prevState, props) => {
      return {
        checked: event.target.checked
      }
    })
  }

  render () {
    const checkbox = (
      <input
        type='checkbox'
        className='atom-xterm-profile-menu-item-checkbox'
        checked={this.state.checked}
        onChange={this.onChange}
      />
    )
    return (
      <div className='atom-xterm-profile-menu-item' id={this.props.id}>
        <label className='atom-xterm-profile-menu-item-label atom-xterm-profile-menu-item-label-checkbox'>
          <input
            type='checkbox'
            className='atom-xterm-profile-menu-item-checkbox'
            checked={checked}
          />
          <div className='atom-xterm-profile-menu-item-title'>
            {this.props.labelTitle}
          </div>
          <div className='atom-xterm-profile-menu-item-description'>
            {this.props.labelDescription}
          </div>
        </label>
      </div>
    )
  }
}

class AtomXtermProfileMenuComponent extends React.Component {
  constructor (props) {
    super(props)
    this.profilesSingleton = AtomXtermProfilesSingleton.instance
    this.disposables = new CompositeDisposable()
    this.componentsData = {}
    this.isMounted = false
    this.deleteProfileModel = new AtomXtermDeleteProfileModel(this)
    this.saveProfileModel = new AtomXtermSaveProfileModel(this)
    this.disposables.add(this.profilesSingleton.onDidReloadProfiles((profiles) => {
      if (this.isMounted) {
        this.setState((prevState, props) => {
          return {
            profiles: profiles,
            visibility: this.state.visibility
          }
        })
      }
    }))
    this.element = React.createRef()
    this.handleProfilesDropDownChange = this.handleProfilesDropDownChange.bind(this)
    this.loadProfile = this.loadProfile.bind(this)
    this.saveProfile = this.saveProfile.bind(this)
    this.deleteProfile = this.deleteProfile.bind(this)
    this.restartTerminal = this.restartTerminal.bind(this)
    this.hideProfileMenu = this.hideProfileMenu.bind(this)
  }

  componentDidMount () {
    this.isMounted = true
    this.profilesSingleton.getProfiles().then((profiles) => {
      if (this.isMounted) {
        this.setState((prevState, props) => {
          return {
            profiles: profiles,
            visibility: this.state.visibility
          }
        })
      }
    })
  }

  componentWillUnmount () {
    this.isMounted = false
  }

  render () {
    const modelProfile = this.getModelProfile()
    const baseProfile = this.profilesSingleton.getBaseProfile()
    const classNames = [
      'atom-xterm-profile'
    ]
    if (this.state.visibility === 'hidden') {
      classNames.push('atom-xterm-profile-hidden')
    }
    return (
      <div
        className={classNames.join(' ')}
        ref={this.element}
      >
        <div className='atom-xterm-profile-menu-element-top-div' />
        <div className='atom-xterm-profile-menu-element-left-div' />
        <div className='atom-xterm-profile-menu-element-main-div'>
          // Profiles
          <ProfilesMenuItem
            id='profiles-selection'
            labelTitle='Profiles'
            labelDescription='Available profiles'
            componentsData={this.componentsData}
            onChangeHandler={this.handleProfilesDropDownChange}
            profiles={this.state.profiles}
          />

          // Buttons div
          <div className='atom-xterm-profile-menu-buttons-div'>
            <ProfileMenuButton
              text='Load Settings'
              clickHandler={this.loadProfile}
            />
            <ProfileMenuButton
              text='Save Settings'
              clickHandler={this.saveProfile}
            />
            <ProfileMenuButton
              text='Delete Settings'
              clickHandler={this.deleteProfile}
            />
            <ProfileMenuButton
              text='Restart'
              clickHandler={this.restartTerminal}
            />
            <ProfileMenuButton
              text='Hide Menu'
              clickHandler={this.hideProfileMenu}
            />
          </div>

          // Horizontal line.
          {createHorizontalLine()}

          // Command
          <TextBoxMenuItem
            id='command-textbox'
            labelTitle='Command'
            labelDescription='Command to run in the terminal.'
            defaultValue={baseProfile.command}
            initialValue={modelProfile.command}
            componentsData={this.componentsData}
          />
          // Arguments
          <TextBoxMenuItem
            id='args-textbox'
            labelTitle='Arguments'
            labelDescription='Arguments to pass to command. This must be defined as a JSON list.'
            defaultValue={baseProfile.args}
            initialValue={modelProfile.args}
            componentsData={this.componentsData}
          />
          // Terminal type
          <TextBoxMenuItem
            id='name-textbox'
            labelTitle='Terminal Type'
            labelDescription='The terminal type to use for the terminal. Note that this does nothing on Windows.'
            defaultValue={baseProfile.name}
            initialValue={modelProfile.name}
            componentsData={this.componentsData}
          />
          // Current working directory.
          <TextBoxMenuItem
            id='cwd-textbox'
            labelTitle='Current Working Directory'
            labelDescription='The current working directory to set for the terminal process.'
            defaultValue={baseProfile.cwd}
            initialValue={modelProfile.cwd}
            componentsData={this.componentsData}
          />
          // Environment
          <TextBoxMenuItem
            id='env-textbox'
            labelTitle='Environment'
            labelDescription='The environment to use for the terminal process. If not set, the current environment is used. This must be defined as a JSON object.'
            defaultValue={baseProfile.env}
            initialValue={modelProfile.env}
            componentsData={this.componentsData}
          />
          // Environment overrides
          <TextBoxMenuItem
            id='setenv-textbox'
            labelTitle='Environment Overrides'
            labelDescription='A key/value mapping of environment variables to set/override from the environment. This must be defined as a JSON object.'
            defaultValue={baseProfile.setEnv}
            initialValue={modelProfile.setEnv}
            componentsData={this.componentsData}
          />
          // Environment deletions
          <TextBoxMenuItem
            id='deleteenv-textbox'
            labelTitle='Environment Deletions'
            labelDescription='A list of environment variables to delete from the environment. This must be defined as a JSON list.'
            defaultValue={baseProfile.deleteEnv}
            initialValue={modelProfile.deleteEnv}
            componentsData={this.componentsData}
          />
          // Encoding
          <TextBoxMenuItem
            id='encoding-textbox'
            labelTitle='Encoding'
            labelDescription='The encoding to use for the terminal.'
            defaultValue={baseProfile.encoding}
            initialValue={modelProfile.encoding}
            componentsData={this.componentsData}
          />
          // Font size
          <TextBoxMenuItem
            id='fontsize-textbox'
            labelTitle='Font Size'
            labelDescription='The font size to use for the terminal.'
            defaultValue={baseProfile.fontSize}
            initialValue={modelProfile.fontSize}
            componentsData={this.componentsData}
          />
          // Leave open after terminal exit
          <CheckBoxMenuItem
            id='leaveopenafterexit-checkbox'
            labelTitle='Leave Open After Exit'
            labelDescription='Whether to leave the terminal open after the terminal process has exited.'
            defaultValue={baseProfile.leaveOpenAfterExit}
            initialValue={modelProfile.leaveOpenAfterExit}
            componentsData={this.componentsData}
          />
          // Relaunch terminal on startup.
          <CheckBoxMenuItem
            id='relaunchterminalonstartup-checkbox'
            labelTitle='Relaunch terminal on startup'
            labelDescription='Whether to relaunch the terminal after exiting the Atom editor.'
            defaultValue={baseProfile.relaunchTerminalOnStartup}
            initialValue={modelProfile.relaunchTerminalOnStartup}
            componentsData={this.componentsData}
          />
          // Title
          <TextBoxMenuItem
            id='title-textbox'
            labelTitle='Title'
            labelDescription='The title to give to the terminal tab.'
            defaultValue={baseProfile.title}
            initialValue={modelProfile.title}
            componentsData={this.componentsData}
          />
          // xterm.js Terminal options
          <TextBoxMenuItem
            id='xtermoptions-textbox'
            labelTitle='xterm.js Terminal Options'
            labelDescription='The xterm.js options to use for Terminal object (i.e to apply theme for example). This must be defined as a JSON object.'
            defaultValue={baseProfile.xtermOptions}
            initialValue={modelProfile.xtermOptions}
            componentsData={this.componentsData}
          />
          // Prompt to startup terminal command
          <CheckBoxMenuItem
            id='prompttostartup-checkbox'
            labelTitle='Prompt to start command'
            labelDescription='Whether to prompt to start command in terminal on startup.'
            defaultValue={baseProfile.promptToStartup}
            initialValue={modelProfile.promptToStartup}
            componentsData={this.componentsData}
          />
        </div>
        <div className='atom-xterm-profile-menu-element-right-div' />
        <div className='atom-xterm-profile-menu-element-bottom-div' />
      </div>
    )
  }

  destroy () {
    if (this.disposables) {
      this.disposables.dispose()
    }
  }

  getModelProfile () {
    return this.props.atomXtermModel.profile
  }

  parseJson (value, defaultValue, type) {
    let retval = value
    try {
      retval = JSON.parse(retval)
    } catch (e) {
      if (!(e instanceof SyntaxError)) {
        throw e
      }
      retval = null
    }
    if (!retval || retval.constructor !== type) {
      retval = defaultValue
    }
    return retval
  }

  getMenuComponents () {
    let menuComponents = {}
    menuComponents.commandComponent = this.componentsData['command-textbox']
    menuComponents.argsComponent = this.componentsData['args-textbox']
    menuComponents.nameComponent = this.componentsData['name-textbox']
    menuComponents.cwdComponent = this.componentsData['cwd-textbox']
    menuComponents.envComponent = this.componentsData['env-textbox']
    menuComponents.setEnvComponent = this.componentsData['setenv-textbox']
    menuComponents.deleteEnvComponent = this.componentsData['deleteenv-textbox']
    menuComponents.encodingComponent = this.componentsData['encoding-textbox']
    menuComponents.fontSizeComponent = this.componentsData['fontsize-textbox']
    menuComponents.leaveOpenAfterExitComponent = this.componentsData['leaveopenafterexit-checkbox']
    menuComponents.relaunchTerminalOnStartupComponent = this.componentsData['relaunchterminalonstartup-checkbox']
    menuComponents.titleComponent = this.componentsData['title-textbox']
    menuComponents.xtermOptionsComponent = this.componentsData['xtermoptions-textbox']
    menuComponents.promptToStartupComponent = this.componentsData['prompttostartup-checkbox']
    return menuComponents
  }

  getProfileMenuSettings () {
    let newProfile = {}
    let baseProfile = this.profilesSingleton.getBaseProfile()
    let menuComponents = this.getMenuComponents()
    newProfile.command = menuComponents.commandComponent.getText() || baseProfile.command
    newProfile.args = this.parseJson(
      menuComponents.argsComponent.getText(),
      baseProfile.args,
      Array
    )
    newProfile.name = menuComponents.nameComponent.getText() || baseProfile.name
    newProfile.cwd = menuComponents.cwdComponent.getText() || baseProfile.cwd
    newProfile.env = this.parseJson(
      menuComponents.envComponent.getText(),
      baseProfile.env,
      Object
    )
    newProfile.setEnv = this.parseJson(
      menuComponents.setEnvComponent.getText(),
      baseProfile.setEnv,
      Object
    )
    newProfile.deleteEnv = this.parseJson(
      menuComponents.deleteEnvComponent.getText(),
      baseProfile.deleteEnv,
      Array
    )
    newProfile.encoding = menuComponents.encodingComponent.getText() || baseProfile.encoding
    newProfile.fontSize = this.parseJson(
      menuComponents.fontSizeComponent.getText(),
      baseProfile.fontSize,
      Number
    )
    newProfile.leaveOpenAfterExit = menuComponents.leaveOpenAfterExitComponent.isChecked()
    newProfile.relaunchTerminalOnStartup = menuComponents.relaunchTerminalOnStartupComponent.isChecked()
    newProfile.title = menuComponents.titleComponent.getText() || baseProfile.title
    newProfile.xtermOptions = this.parseJson(
      menuComponents.xtermOptionsComponent.getText(),
      baseProfile.xtermOptions,
      Object
    )
    newProfile.promptToStartup = menuComponents.promptToStartupComponent.isChecked()
    return newProfile
  }

  applyProfileChanges (profileChanges) {
    this.hideProfileMenu()
    this.props.atomXtermModel.applyProfileChanges(profileChanges)
  }

  restartTerminal () {
    this.hideProfileMenu()
    this.props.atomXtermModel.restartPtyProcess()
  }

  handleProfilesDropDownChange (event) {
    let profile = this.profilesSingleton.getBaseProfile()
    if (!event.target.value) {
      this.setNewMenuSettings(profile, true)
    } else {
      this.profilesSingleton.getProfile(event.target.value).then((profile) => {
        this.setNewMenuSettings(profile)
      })
    }
  }

  isVisible () {
    return (this.state.visibility === 'visible')
  }

  hideProfileMenu () {
    this.setState((prevState, props) => {
      return {
        profiles: this.state.profiles,
        visibility: 'hidden'
      }
    })
    this.props.atomXtermModel.showTerminal()
    this.props.atomXtermModel.focusOnTerminal()
  }

  showProfileMenu () {
    this.props.atomXtermModel.hideTerminal()
    this.setState((prevState, props) => {
      return {
        profiles: this.state.profiles,
        visibility: 'visible'
      }
    })
  }

  toggleProfileMenu () {
    if (!this.isVisible()) {
      this.showProfileMenu()
    } else {
      this.hideProfileMenu()
    }
  }

  getNewProfileAndChanges () {
    let newProfile = this.getProfileMenuSettings()
    let profileChanges = this.profilesSingleton.diffProfiles(
      this.props.atomXtermModel.getProfile(),
      newProfile
    )
    return {
      newProfile: newProfile,
      profileChanges: profileChanges
    }
  }

  loadProfile () {
    let newProfileAndChanges = this.getNewProfileAndChanges()
    this.applyProfileChanges(newProfileAndChanges.profileChanges)
  }

  saveProfile () {
    // Get the current profile settings before entering the promise.
    let newProfileAndChanges = this.getNewProfileAndChanges()
    this.promptForNewProfileName(
      newProfileAndChanges.newProfile,
      newProfileAndChanges.profileChanges
    )
  }

  deleteProfile () {
    let profilesComponent = this.componentsData['profiles-dropdown']
    let profileName = profilesComponent.getValue()
    if (!profileName) {
      atom.notifications.addWarning('Profile must be selected in order to delete it.')
      return
    }
    this.promptDelete(profileName)
  }

  promptDelete (newProfile) {
    return new Promise((resolve, reject) => {
      this.deleteProfileModel.promptDelete(newProfile)
    })
  }

  promptForNewProfileName (newProfile, profileChanges) {
    return new Promise((resolve, reject) => {
      this.saveProfileModel.promptForNewProfileName(newProfile, profileChanges)
    })
  }

  convertNullToEmptyString (value) {
    if (value === null) {
      return ''
    }
    return JSON.stringify(value)
  }

  setNewMenuSettings (profile, clear = false) {
    let newTextList = []
    let value = null
    newTextList.push(
      // Command
      {
        'id': 'command-textbox',
        'value': profile.command
      }
    )
    value = JSON.stringify(profile.args)
    newTextList.push(
      // Arguments
      {
        'id': 'args-textbox',
        'value': value
      }
    )
    newTextList.push(
      // Terminal type
      {
        'id': 'name-textbox',
        'value': profile.name
      }
    )
    newTextList.push(
      // Current working directory
      {
        'id': 'cwd-textbox',
        'value': profile.cwd
      }
    )
    value = this.convertNullToEmptyString(profile.env)
    newTextList.push(
      // Environment
      {
        'id': 'env-textbox',
        'value': value
      }
    )
    value = JSON.stringify(profile.setEnv)
    newTextList.push(
      // Environment overrides
      {
        'id': 'setenv-textbox',
        'value': value
      }
    )
    value = JSON.stringify(profile.deleteEnv)
    newTextList.push(
      // Environment deletions
      {
        'id': 'deleteenv-textbox',
        'value': value
      }
    )
    value = this.convertNullToEmptyString(profile.encoding)
    newTextList.push(
      // Encoding
      {
        'id': 'encoding-textbox',
        'value': value
      }
    )
    value = profile.fontSize
    newTextList.push(
      // Font size
      {
        'id': 'fontsize-textbox',
        'value': value
      }
    )
    value = profile.title || ''
    newTextList.push(
      // Title
      {
        'id': 'title-textbox',
        'value': value
      }
    )
    value = JSON.stringify(profile.xtermOptions)
    newTextList.push(
      // xterm.js Terminal options
      {
        'id': 'xtermoptions-textbox',
        'value': value
      }
    )
    for (let newText of newTextList) {
      let component = this.componentsData[newText.id]
      if (!clear) {
        component.setText(newText.value)
      } else {
        component.setText('')
      }
    }

    let newCheckboxList = [
      // Leave open after terminal exit
      {
        'id': 'leaveopenafterexit-checkbox',
        'value': profile.leaveOpenAfterExit
      },
      // Relaunch terminal on startup
      {
        'id': 'relaunchterminalonstartup-checkbox',
        'value': profile.relaunchTerminalOnStartup
      },
      // Prompt to startup terminal command
      {
        'id': 'prompttostartup-checkbox',
        'value': profile.promptToStartup
      }
    ]
    for (let newCheckbox of newCheckboxList) {
      let component = this.componentsData[newCheckbox.id]
      component.setChecked(newCheckbox.value)
    }
  }
}

export {
  AtomXtermProfileMenuComponent
}
