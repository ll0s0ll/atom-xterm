/*! This file is auto-generated. Do not modify directly. */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/move-winpty-binaries.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fs-extra/lib/copy-sync/copy-sync.js":
/*!**********************************************************!*\
  !*** ./node_modules/fs-extra/lib/copy-sync/copy-sync.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const path = __webpack_require__(/*! path */ "path");

const mkdirpSync = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js").mkdirsSync;

const utimesSync = __webpack_require__(/*! ../util/utimes.js */ "./node_modules/fs-extra/lib/util/utimes.js").utimesMillisSync;

const notExist = Symbol('notExist');

function copySync(src, dest, opts) {
  if (typeof opts === 'function') {
    opts = {
      filter: opts
    };
  }

  opts = opts || {};
  opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now

  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber
  // Warn about using preserveTimestamps on 32-bit node

  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
  }

  const destStat = checkPaths(src, dest);
  if (opts.filter && !opts.filter(src, dest)) return;
  const destParent = path.dirname(dest);
  if (!fs.existsSync(destParent)) mkdirpSync(destParent);
  return startCopy(destStat, src, dest, opts);
}

function startCopy(destStat, src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return;
  return getStats(destStat, src, dest, opts);
}

function getStats(destStat, src, dest, opts) {
  const statSync = opts.dereference ? fs.statSync : fs.lstatSync;
  const srcStat = statSync(src);
  if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);
}

function onFile(srcStat, destStat, src, dest, opts) {
  if (destStat === notExist) return copyFile(srcStat, src, dest, opts);
  return mayCopyFile(srcStat, src, dest, opts);
}

function mayCopyFile(srcStat, src, dest, opts) {
  if (opts.overwrite) {
    fs.unlinkSync(dest);
    return copyFile(srcStat, src, dest, opts);
  } else if (opts.errorOnExist) {
    throw new Error(`'${dest}' already exists`);
  }
}

function copyFile(srcStat, src, dest, opts) {
  if (typeof fs.copyFileSync === 'function') {
    fs.copyFileSync(src, dest);
    fs.chmodSync(dest, srcStat.mode);

    if (opts.preserveTimestamps) {
      return utimesSync(dest, srcStat.atime, srcStat.mtime);
    }

    return;
  }

  return copyFileFallback(srcStat, src, dest, opts);
}

function copyFileFallback(srcStat, src, dest, opts) {
  const BUF_LENGTH = 64 * 1024;

  const _buff = __webpack_require__(/*! ../util/buffer */ "./node_modules/fs-extra/lib/util/buffer.js")(BUF_LENGTH);

  const fdr = fs.openSync(src, 'r');
  const fdw = fs.openSync(dest, 'w', srcStat.mode);
  let pos = 0;

  while (pos < srcStat.size) {
    const bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos);
    fs.writeSync(fdw, _buff, 0, bytesRead);
    pos += bytesRead;
  }

  if (opts.preserveTimestamps) fs.futimesSync(fdw, srcStat.atime, srcStat.mtime);
  fs.closeSync(fdr);
  fs.closeSync(fdw);
}

function onDir(srcStat, destStat, src, dest, opts) {
  if (destStat === notExist) return mkDirAndCopy(srcStat, src, dest, opts);

  if (destStat && !destStat.isDirectory()) {
    throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
  }

  return copyDir(src, dest, opts);
}

function mkDirAndCopy(srcStat, src, dest, opts) {
  fs.mkdirSync(dest);
  copyDir(src, dest, opts);
  return fs.chmodSync(dest, srcStat.mode);
}

function copyDir(src, dest, opts) {
  fs.readdirSync(src).forEach(item => copyDirItem(item, src, dest, opts));
}

function copyDirItem(item, src, dest, opts) {
  const srcItem = path.join(src, item);
  const destItem = path.join(dest, item);
  const destStat = checkPaths(srcItem, destItem);
  return startCopy(destStat, srcItem, destItem, opts);
}

function onLink(destStat, src, dest, opts) {
  let resolvedSrc = fs.readlinkSync(src);

  if (opts.dereference) {
    resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
  }

  if (destStat === notExist) {
    return fs.symlinkSync(resolvedSrc, dest);
  } else {
    let resolvedDest;

    try {
      resolvedDest = fs.readlinkSync(dest);
    } catch (err) {
      // dest exists and is a regular file or directory,
      // Windows may throw UNKNOWN error. If dest already exists,
      // fs throws error anyway, so no need to guard against it here.
      if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlinkSync(resolvedSrc, dest);
      throw err;
    }

    if (opts.dereference) {
      resolvedDest = path.resolve(process.cwd(), resolvedDest);
    }

    if (isSrcSubdir(resolvedSrc, resolvedDest)) {
      throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
    } // prevent copy if src is a subdir of dest since unlinking
    // dest in this case would result in removing src contents
    // and therefore a broken symlink would be created.


    if (fs.statSync(dest).isDirectory() && isSrcSubdir(resolvedDest, resolvedSrc)) {
      throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
    }

    return copyLink(resolvedSrc, dest);
  }
}

function copyLink(resolvedSrc, dest) {
  fs.unlinkSync(dest);
  return fs.symlinkSync(resolvedSrc, dest);
} // return true if dest is a subdir of src, otherwise false.


function isSrcSubdir(src, dest) {
  const srcArray = path.resolve(src).split(path.sep);
  const destArray = path.resolve(dest).split(path.sep);
  return srcArray.reduce((acc, current, i) => acc && destArray[i] === current, true);
}

function checkStats(src, dest) {
  const srcStat = fs.statSync(src);
  let destStat;

  try {
    destStat = fs.statSync(dest);
  } catch (err) {
    if (err.code === 'ENOENT') return {
      srcStat,
      destStat: notExist
    };
    throw err;
  }

  return {
    srcStat,
    destStat
  };
}

function checkPaths(src, dest) {
  const {
    srcStat,
    destStat
  } = checkStats(src, dest);

  if (destStat.ino && destStat.ino === srcStat.ino) {
    throw new Error('Source and destination must not be the same.');
  }

  if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
    throw new Error(`Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`);
  }

  return destStat;
}

module.exports = copySync;

/***/ }),

/***/ "./node_modules/fs-extra/lib/copy-sync/index.js":
/*!******************************************************!*\
  !*** ./node_modules/fs-extra/lib/copy-sync/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  copySync: __webpack_require__(/*! ./copy-sync */ "./node_modules/fs-extra/lib/copy-sync/copy-sync.js")
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/copy/copy.js":
/*!************************************************!*\
  !*** ./node_modules/fs-extra/lib/copy/copy.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const path = __webpack_require__(/*! path */ "path");

const mkdirp = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js").mkdirs;

const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/fs-extra/lib/path-exists/index.js").pathExists;

const utimes = __webpack_require__(/*! ../util/utimes */ "./node_modules/fs-extra/lib/util/utimes.js").utimesMillis;

const notExist = Symbol('notExist');

function copy(src, dest, opts, cb) {
  if (typeof opts === 'function' && !cb) {
    cb = opts;
    opts = {};
  } else if (typeof opts === 'function') {
    opts = {
      filter: opts
    };
  }

  cb = cb || function () {};

  opts = opts || {};
  opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now

  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber
  // Warn about using preserveTimestamps on 32-bit node

  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
  }

  checkPaths(src, dest, (err, destStat) => {
    if (err) return cb(err);
    if (opts.filter) return handleFilter(checkParentDir, destStat, src, dest, opts, cb);
    return checkParentDir(destStat, src, dest, opts, cb);
  });
}

function checkParentDir(destStat, src, dest, opts, cb) {
  const destParent = path.dirname(dest);
  pathExists(destParent, (err, dirExists) => {
    if (err) return cb(err);
    if (dirExists) return startCopy(destStat, src, dest, opts, cb);
    mkdirp(destParent, err => {
      if (err) return cb(err);
      return startCopy(destStat, src, dest, opts, cb);
    });
  });
}

function handleFilter(onInclude, destStat, src, dest, opts, cb) {
  Promise.resolve(opts.filter(src, dest)).then(include => {
    if (include) {
      if (destStat) return onInclude(destStat, src, dest, opts, cb);
      return onInclude(src, dest, opts, cb);
    }

    return cb();
  }, error => cb(error));
}

function startCopy(destStat, src, dest, opts, cb) {
  if (opts.filter) return handleFilter(getStats, destStat, src, dest, opts, cb);
  return getStats(destStat, src, dest, opts, cb);
}

function getStats(destStat, src, dest, opts, cb) {
  const stat = opts.dereference ? fs.stat : fs.lstat;
  stat(src, (err, srcStat) => {
    if (err) return cb(err);
    if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts, cb);else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts, cb);else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts, cb);
  });
}

function onFile(srcStat, destStat, src, dest, opts, cb) {
  if (destStat === notExist) return copyFile(srcStat, src, dest, opts, cb);
  return mayCopyFile(srcStat, src, dest, opts, cb);
}

function mayCopyFile(srcStat, src, dest, opts, cb) {
  if (opts.overwrite) {
    fs.unlink(dest, err => {
      if (err) return cb(err);
      return copyFile(srcStat, src, dest, opts, cb);
    });
  } else if (opts.errorOnExist) {
    return cb(new Error(`'${dest}' already exists`));
  } else return cb();
}

function copyFile(srcStat, src, dest, opts, cb) {
  if (typeof fs.copyFile === 'function') {
    return fs.copyFile(src, dest, err => {
      if (err) return cb(err);
      return setDestModeAndTimestamps(srcStat, dest, opts, cb);
    });
  }

  return copyFileFallback(srcStat, src, dest, opts, cb);
}

function copyFileFallback(srcStat, src, dest, opts, cb) {
  const rs = fs.createReadStream(src);
  rs.on('error', err => cb(err)).once('open', () => {
    const ws = fs.createWriteStream(dest, {
      mode: srcStat.mode
    });
    ws.on('error', err => cb(err)).on('open', () => rs.pipe(ws)).once('close', () => setDestModeAndTimestamps(srcStat, dest, opts, cb));
  });
}

function setDestModeAndTimestamps(srcStat, dest, opts, cb) {
  fs.chmod(dest, srcStat.mode, err => {
    if (err) return cb(err);

    if (opts.preserveTimestamps) {
      return utimes(dest, srcStat.atime, srcStat.mtime, cb);
    }

    return cb();
  });
}

function onDir(srcStat, destStat, src, dest, opts, cb) {
  if (destStat === notExist) return mkDirAndCopy(srcStat, src, dest, opts, cb);

  if (destStat && !destStat.isDirectory()) {
    return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`));
  }

  return copyDir(src, dest, opts, cb);
}

function mkDirAndCopy(srcStat, src, dest, opts, cb) {
  fs.mkdir(dest, err => {
    if (err) return cb(err);
    copyDir(src, dest, opts, err => {
      if (err) return cb(err);
      return fs.chmod(dest, srcStat.mode, cb);
    });
  });
}

function copyDir(src, dest, opts, cb) {
  fs.readdir(src, (err, items) => {
    if (err) return cb(err);
    return copyDirItems(items, src, dest, opts, cb);
  });
}

function copyDirItems(items, src, dest, opts, cb) {
  const item = items.pop();
  if (!item) return cb();
  return copyDirItem(items, item, src, dest, opts, cb);
}

function copyDirItem(items, item, src, dest, opts, cb) {
  const srcItem = path.join(src, item);
  const destItem = path.join(dest, item);
  checkPaths(srcItem, destItem, (err, destStat) => {
    if (err) return cb(err);
    startCopy(destStat, srcItem, destItem, opts, err => {
      if (err) return cb(err);
      return copyDirItems(items, src, dest, opts, cb);
    });
  });
}

function onLink(destStat, src, dest, opts, cb) {
  fs.readlink(src, (err, resolvedSrc) => {
    if (err) return cb(err);

    if (opts.dereference) {
      resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
    }

    if (destStat === notExist) {
      return fs.symlink(resolvedSrc, dest, cb);
    } else {
      fs.readlink(dest, (err, resolvedDest) => {
        if (err) {
          // dest exists and is a regular file or directory,
          // Windows may throw UNKNOWN error. If dest already exists,
          // fs throws error anyway, so no need to guard against it here.
          if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlink(resolvedSrc, dest, cb);
          return cb(err);
        }

        if (opts.dereference) {
          resolvedDest = path.resolve(process.cwd(), resolvedDest);
        }

        if (isSrcSubdir(resolvedSrc, resolvedDest)) {
          return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`));
        } // do not copy if src is a subdir of dest since unlinking
        // dest in this case would result in removing src contents
        // and therefore a broken symlink would be created.


        if (destStat.isDirectory() && isSrcSubdir(resolvedDest, resolvedSrc)) {
          return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`));
        }

        return copyLink(resolvedSrc, dest, cb);
      });
    }
  });
}

function copyLink(resolvedSrc, dest, cb) {
  fs.unlink(dest, err => {
    if (err) return cb(err);
    return fs.symlink(resolvedSrc, dest, cb);
  });
} // return true if dest is a subdir of src, otherwise false.


function isSrcSubdir(src, dest) {
  const srcArray = path.resolve(src).split(path.sep);
  const destArray = path.resolve(dest).split(path.sep);
  return srcArray.reduce((acc, current, i) => acc && destArray[i] === current, true);
}

function checkStats(src, dest, cb) {
  fs.stat(src, (err, srcStat) => {
    if (err) return cb(err);
    fs.stat(dest, (err, destStat) => {
      if (err) {
        if (err.code === 'ENOENT') return cb(null, {
          srcStat,
          destStat: notExist
        });
        return cb(err);
      }

      return cb(null, {
        srcStat,
        destStat
      });
    });
  });
}

function checkPaths(src, dest, cb) {
  checkStats(src, dest, (err, stats) => {
    if (err) return cb(err);
    const {
      srcStat,
      destStat
    } = stats;

    if (destStat.ino && destStat.ino === srcStat.ino) {
      return cb(new Error('Source and destination must not be the same.'));
    }

    if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
      return cb(new Error(`Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`));
    }

    return cb(null, destStat);
  });
}

module.exports = copy;

/***/ }),

/***/ "./node_modules/fs-extra/lib/copy/index.js":
/*!*************************************************!*\
  !*** ./node_modules/fs-extra/lib/copy/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

module.exports = {
  copy: u(__webpack_require__(/*! ./copy */ "./node_modules/fs-extra/lib/copy/copy.js"))
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/empty/index.js":
/*!**************************************************!*\
  !*** ./node_modules/fs-extra/lib/empty/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js");

const remove = __webpack_require__(/*! ../remove */ "./node_modules/fs-extra/lib/remove/index.js");

const emptyDir = u(function emptyDir(dir, callback) {
  callback = callback || function () {};

  fs.readdir(dir, (err, items) => {
    if (err) return mkdir.mkdirs(dir, callback);
    items = items.map(item => path.join(dir, item));
    deleteItem();

    function deleteItem() {
      const item = items.pop();
      if (!item) return callback();
      remove.remove(item, err => {
        if (err) return callback(err);
        deleteItem();
      });
    }
  });
});

function emptyDirSync(dir) {
  let items;

  try {
    items = fs.readdirSync(dir);
  } catch (err) {
    return mkdir.mkdirsSync(dir);
  }

  items.forEach(item => {
    item = path.join(dir, item);
    remove.removeSync(item);
  });
}

module.exports = {
  emptyDirSync,
  emptydirSync: emptyDirSync,
  emptyDir,
  emptydir: emptyDir
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/ensure/file.js":
/*!**************************************************!*\
  !*** ./node_modules/fs-extra/lib/ensure/file.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js");

const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/fs-extra/lib/path-exists/index.js").pathExists;

function createFile(file, callback) {
  function makeFile() {
    fs.writeFile(file, '', err => {
      if (err) return callback(err);
      callback();
    });
  }

  fs.stat(file, (err, stats) => {
    // eslint-disable-line handle-callback-err
    if (!err && stats.isFile()) return callback();
    const dir = path.dirname(file);
    pathExists(dir, (err, dirExists) => {
      if (err) return callback(err);
      if (dirExists) return makeFile();
      mkdir.mkdirs(dir, err => {
        if (err) return callback(err);
        makeFile();
      });
    });
  });
}

function createFileSync(file) {
  let stats;

  try {
    stats = fs.statSync(file);
  } catch (e) {}

  if (stats && stats.isFile()) return;
  const dir = path.dirname(file);

  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir);
  }

  fs.writeFileSync(file, '');
}

module.exports = {
  createFile: u(createFile),
  createFileSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/ensure/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fs-extra/lib/ensure/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const file = __webpack_require__(/*! ./file */ "./node_modules/fs-extra/lib/ensure/file.js");

const link = __webpack_require__(/*! ./link */ "./node_modules/fs-extra/lib/ensure/link.js");

const symlink = __webpack_require__(/*! ./symlink */ "./node_modules/fs-extra/lib/ensure/symlink.js");

module.exports = {
  // file
  createFile: file.createFile,
  createFileSync: file.createFileSync,
  ensureFile: file.createFile,
  ensureFileSync: file.createFileSync,
  // link
  createLink: link.createLink,
  createLinkSync: link.createLinkSync,
  ensureLink: link.createLink,
  ensureLinkSync: link.createLinkSync,
  // symlink
  createSymlink: symlink.createSymlink,
  createSymlinkSync: symlink.createSymlinkSync,
  ensureSymlink: symlink.createSymlink,
  ensureSymlinkSync: symlink.createSymlinkSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/ensure/link.js":
/*!**************************************************!*\
  !*** ./node_modules/fs-extra/lib/ensure/link.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js");

const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/fs-extra/lib/path-exists/index.js").pathExists;

function createLink(srcpath, dstpath, callback) {
  function makeLink(srcpath, dstpath) {
    fs.link(srcpath, dstpath, err => {
      if (err) return callback(err);
      callback(null);
    });
  }

  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err);
    if (destinationExists) return callback(null);
    fs.lstat(srcpath, err => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureLink');
        return callback(err);
      }

      const dir = path.dirname(dstpath);
      pathExists(dir, (err, dirExists) => {
        if (err) return callback(err);
        if (dirExists) return makeLink(srcpath, dstpath);
        mkdir.mkdirs(dir, err => {
          if (err) return callback(err);
          makeLink(srcpath, dstpath);
        });
      });
    });
  });
}

function createLinkSync(srcpath, dstpath) {
  const destinationExists = fs.existsSync(dstpath);
  if (destinationExists) return undefined;

  try {
    fs.lstatSync(srcpath);
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink');
    throw err;
  }

  const dir = path.dirname(dstpath);
  const dirExists = fs.existsSync(dir);
  if (dirExists) return fs.linkSync(srcpath, dstpath);
  mkdir.mkdirsSync(dir);
  return fs.linkSync(srcpath, dstpath);
}

module.exports = {
  createLink: u(createLink),
  createLinkSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/ensure/symlink-paths.js":
/*!***********************************************************!*\
  !*** ./node_modules/fs-extra/lib/ensure/symlink-paths.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/fs-extra/lib/path-exists/index.js").pathExists;
/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */


function symlinkPaths(srcpath, dstpath, callback) {
  if (path.isAbsolute(srcpath)) {
    return fs.lstat(srcpath, err => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureSymlink');
        return callback(err);
      }

      return callback(null, {
        'toCwd': srcpath,
        'toDst': srcpath
      });
    });
  } else {
    const dstdir = path.dirname(dstpath);
    const relativeToDst = path.join(dstdir, srcpath);
    return pathExists(relativeToDst, (err, exists) => {
      if (err) return callback(err);

      if (exists) {
        return callback(null, {
          'toCwd': relativeToDst,
          'toDst': srcpath
        });
      } else {
        return fs.lstat(srcpath, err => {
          if (err) {
            err.message = err.message.replace('lstat', 'ensureSymlink');
            return callback(err);
          }

          return callback(null, {
            'toCwd': srcpath,
            'toDst': path.relative(dstdir, srcpath)
          });
        });
      }
    });
  }
}

function symlinkPathsSync(srcpath, dstpath) {
  let exists;

  if (path.isAbsolute(srcpath)) {
    exists = fs.existsSync(srcpath);
    if (!exists) throw new Error('absolute srcpath does not exist');
    return {
      'toCwd': srcpath,
      'toDst': srcpath
    };
  } else {
    const dstdir = path.dirname(dstpath);
    const relativeToDst = path.join(dstdir, srcpath);
    exists = fs.existsSync(relativeToDst);

    if (exists) {
      return {
        'toCwd': relativeToDst,
        'toDst': srcpath
      };
    } else {
      exists = fs.existsSync(srcpath);
      if (!exists) throw new Error('relative srcpath does not exist');
      return {
        'toCwd': srcpath,
        'toDst': path.relative(dstdir, srcpath)
      };
    }
  }
}

module.exports = {
  symlinkPaths,
  symlinkPathsSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/ensure/symlink-type.js":
/*!**********************************************************!*\
  !*** ./node_modules/fs-extra/lib/ensure/symlink-type.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

function symlinkType(srcpath, type, callback) {
  callback = typeof type === 'function' ? type : callback;
  type = typeof type === 'function' ? false : type;
  if (type) return callback(null, type);
  fs.lstat(srcpath, (err, stats) => {
    if (err) return callback(null, 'file');
    type = stats && stats.isDirectory() ? 'dir' : 'file';
    callback(null, type);
  });
}

function symlinkTypeSync(srcpath, type) {
  let stats;
  if (type) return type;

  try {
    stats = fs.lstatSync(srcpath);
  } catch (e) {
    return 'file';
  }

  return stats && stats.isDirectory() ? 'dir' : 'file';
}

module.exports = {
  symlinkType,
  symlinkTypeSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/ensure/symlink.js":
/*!*****************************************************!*\
  !*** ./node_modules/fs-extra/lib/ensure/symlink.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const _mkdirs = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js");

const mkdirs = _mkdirs.mkdirs;
const mkdirsSync = _mkdirs.mkdirsSync;

const _symlinkPaths = __webpack_require__(/*! ./symlink-paths */ "./node_modules/fs-extra/lib/ensure/symlink-paths.js");

const symlinkPaths = _symlinkPaths.symlinkPaths;
const symlinkPathsSync = _symlinkPaths.symlinkPathsSync;

const _symlinkType = __webpack_require__(/*! ./symlink-type */ "./node_modules/fs-extra/lib/ensure/symlink-type.js");

const symlinkType = _symlinkType.symlinkType;
const symlinkTypeSync = _symlinkType.symlinkTypeSync;

const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/fs-extra/lib/path-exists/index.js").pathExists;

function createSymlink(srcpath, dstpath, type, callback) {
  callback = typeof type === 'function' ? type : callback;
  type = typeof type === 'function' ? false : type;
  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err);
    if (destinationExists) return callback(null);
    symlinkPaths(srcpath, dstpath, (err, relative) => {
      if (err) return callback(err);
      srcpath = relative.toDst;
      symlinkType(relative.toCwd, type, (err, type) => {
        if (err) return callback(err);
        const dir = path.dirname(dstpath);
        pathExists(dir, (err, dirExists) => {
          if (err) return callback(err);
          if (dirExists) return fs.symlink(srcpath, dstpath, type, callback);
          mkdirs(dir, err => {
            if (err) return callback(err);
            fs.symlink(srcpath, dstpath, type, callback);
          });
        });
      });
    });
  });
}

function createSymlinkSync(srcpath, dstpath, type) {
  const destinationExists = fs.existsSync(dstpath);
  if (destinationExists) return undefined;
  const relative = symlinkPathsSync(srcpath, dstpath);
  srcpath = relative.toDst;
  type = symlinkTypeSync(relative.toCwd, type);
  const dir = path.dirname(dstpath);
  const exists = fs.existsSync(dir);
  if (exists) return fs.symlinkSync(srcpath, dstpath, type);
  mkdirsSync(dir);
  return fs.symlinkSync(srcpath, dstpath, type);
}

module.exports = {
  createSymlink: u(createSymlink),
  createSymlinkSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/fs/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fs-extra/lib/fs/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // This is adapted from https://github.com/normalize/mz
// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors

const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const api = ['access', 'appendFile', 'chmod', 'chown', 'close', 'copyFile', 'fchmod', 'fchown', 'fdatasync', 'fstat', 'fsync', 'ftruncate', 'futimes', 'lchown', 'lchmod', 'link', 'lstat', 'mkdir', 'mkdtemp', 'open', 'readFile', 'readdir', 'readlink', 'realpath', 'rename', 'rmdir', 'stat', 'symlink', 'truncate', 'unlink', 'utimes', 'writeFile'].filter(key => {
  // Some commands are not available on some systems. Ex:
  // fs.copyFile was added in Node.js v8.5.0
  // fs.mkdtemp was added in Node.js v5.10.0
  // fs.lchown is not available on at least some Linux
  return typeof fs[key] === 'function';
}); // Export all keys:

Object.keys(fs).forEach(key => {
  if (key === 'promises') {
    // fs.promises is a getter property that triggers ExperimentalWarning
    // Don't re-export it here, the getter is defined in "lib/index.js"
    return;
  }

  exports[key] = fs[key];
}); // Universalify async methods:

api.forEach(method => {
  exports[method] = u(fs[method]);
}); // We differ from mz/fs in that we still ship the old, broken, fs.exists()
// since we are a drop-in replacement for the native module

exports.exists = function (filename, callback) {
  if (typeof callback === 'function') {
    return fs.exists(filename, callback);
  }

  return new Promise(resolve => {
    return fs.exists(filename, resolve);
  });
}; // fs.read() & fs.write need special treatment due to multiple callback args


exports.read = function (fd, buffer, offset, length, position, callback) {
  if (typeof callback === 'function') {
    return fs.read(fd, buffer, offset, length, position, callback);
  }

  return new Promise((resolve, reject) => {
    fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
      if (err) return reject(err);
      resolve({
        bytesRead,
        buffer
      });
    });
  });
}; // Function signature can be
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// OR
// fs.write(fd, string[, position[, encoding]], callback)
// We need to handle both cases, so we use ...args


exports.write = function (fd, buffer, ...args) {
  if (typeof args[args.length - 1] === 'function') {
    return fs.write(fd, buffer, ...args);
  }

  return new Promise((resolve, reject) => {
    fs.write(fd, buffer, ...args, (err, bytesWritten, buffer) => {
      if (err) return reject(err);
      resolve({
        bytesWritten,
        buffer
      });
    });
  });
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/fs-extra/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign({}, // Export promiseified graceful-fs:
__webpack_require__(/*! ./fs */ "./node_modules/fs-extra/lib/fs/index.js"), // Export extra methods:
__webpack_require__(/*! ./copy-sync */ "./node_modules/fs-extra/lib/copy-sync/index.js"), __webpack_require__(/*! ./copy */ "./node_modules/fs-extra/lib/copy/index.js"), __webpack_require__(/*! ./empty */ "./node_modules/fs-extra/lib/empty/index.js"), __webpack_require__(/*! ./ensure */ "./node_modules/fs-extra/lib/ensure/index.js"), __webpack_require__(/*! ./json */ "./node_modules/fs-extra/lib/json/index.js"), __webpack_require__(/*! ./mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js"), __webpack_require__(/*! ./move-sync */ "./node_modules/fs-extra/lib/move-sync/index.js"), __webpack_require__(/*! ./move */ "./node_modules/fs-extra/lib/move/index.js"), __webpack_require__(/*! ./output */ "./node_modules/fs-extra/lib/output/index.js"), __webpack_require__(/*! ./path-exists */ "./node_modules/fs-extra/lib/path-exists/index.js"), __webpack_require__(/*! ./remove */ "./node_modules/fs-extra/lib/remove/index.js")); // Export fs.promises as a getter property so that we don't trigger
// ExperimentalWarning before fs.promises is actually accessed.

const fs = __webpack_require__(/*! fs */ "fs");

if (Object.getOwnPropertyDescriptor(fs, 'promises')) {
  Object.defineProperty(module.exports, 'promises', {
    get() {
      return fs.promises;
    }

  });
}

/***/ }),

/***/ "./node_modules/fs-extra/lib/json/index.js":
/*!*************************************************!*\
  !*** ./node_modules/fs-extra/lib/json/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const jsonFile = __webpack_require__(/*! ./jsonfile */ "./node_modules/fs-extra/lib/json/jsonfile.js");

jsonFile.outputJson = u(__webpack_require__(/*! ./output-json */ "./node_modules/fs-extra/lib/json/output-json.js"));
jsonFile.outputJsonSync = __webpack_require__(/*! ./output-json-sync */ "./node_modules/fs-extra/lib/json/output-json-sync.js"); // aliases

jsonFile.outputJSON = jsonFile.outputJson;
jsonFile.outputJSONSync = jsonFile.outputJsonSync;
jsonFile.writeJSON = jsonFile.writeJson;
jsonFile.writeJSONSync = jsonFile.writeJsonSync;
jsonFile.readJSON = jsonFile.readJson;
jsonFile.readJSONSync = jsonFile.readJsonSync;
module.exports = jsonFile;

/***/ }),

/***/ "./node_modules/fs-extra/lib/json/jsonfile.js":
/*!****************************************************!*\
  !*** ./node_modules/fs-extra/lib/json/jsonfile.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const jsonFile = __webpack_require__(/*! jsonfile */ "./node_modules/jsonfile/index.js");

module.exports = {
  // jsonfile exports
  readJson: u(jsonFile.readFile),
  readJsonSync: jsonFile.readFileSync,
  writeJson: u(jsonFile.writeFile),
  writeJsonSync: jsonFile.writeFileSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/json/output-json-sync.js":
/*!************************************************************!*\
  !*** ./node_modules/fs-extra/lib/json/output-json-sync.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const path = __webpack_require__(/*! path */ "path");

const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js");

const jsonFile = __webpack_require__(/*! ./jsonfile */ "./node_modules/fs-extra/lib/json/jsonfile.js");

function outputJsonSync(file, data, options) {
  const dir = path.dirname(file);

  if (!fs.existsSync(dir)) {
    mkdir.mkdirsSync(dir);
  }

  jsonFile.writeJsonSync(file, data, options);
}

module.exports = outputJsonSync;

/***/ }),

/***/ "./node_modules/fs-extra/lib/json/output-json.js":
/*!*******************************************************!*\
  !*** ./node_modules/fs-extra/lib/json/output-json.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(/*! path */ "path");

const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js");

const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/fs-extra/lib/path-exists/index.js").pathExists;

const jsonFile = __webpack_require__(/*! ./jsonfile */ "./node_modules/fs-extra/lib/json/jsonfile.js");

function outputJson(file, data, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  const dir = path.dirname(file);
  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err);
    if (itDoes) return jsonFile.writeJson(file, data, options, callback);
    mkdir.mkdirs(dir, err => {
      if (err) return callback(err);
      jsonFile.writeJson(file, data, options, callback);
    });
  });
}

module.exports = outputJson;

/***/ }),

/***/ "./node_modules/fs-extra/lib/mkdirs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fs-extra/lib/mkdirs/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const mkdirs = u(__webpack_require__(/*! ./mkdirs */ "./node_modules/fs-extra/lib/mkdirs/mkdirs.js"));

const mkdirsSync = __webpack_require__(/*! ./mkdirs-sync */ "./node_modules/fs-extra/lib/mkdirs/mkdirs-sync.js");

module.exports = {
  mkdirs,
  mkdirsSync,
  // alias
  mkdirp: mkdirs,
  mkdirpSync: mkdirsSync,
  ensureDir: mkdirs,
  ensureDirSync: mkdirsSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/mkdirs/mkdirs-sync.js":
/*!*********************************************************!*\
  !*** ./node_modules/fs-extra/lib/mkdirs/mkdirs-sync.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const path = __webpack_require__(/*! path */ "path");

const invalidWin32Path = __webpack_require__(/*! ./win32 */ "./node_modules/fs-extra/lib/mkdirs/win32.js").invalidWin32Path;

const o777 = parseInt('0777', 8);

function mkdirsSync(p, opts, made) {
  if (!opts || typeof opts !== 'object') {
    opts = {
      mode: opts
    };
  }

  let mode = opts.mode;
  const xfs = opts.fs || fs;

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.');
    errInval.code = 'EINVAL';
    throw errInval;
  }

  if (mode === undefined) {
    mode = o777 & ~process.umask();
  }

  if (!made) made = null;
  p = path.resolve(p);

  try {
    xfs.mkdirSync(p, mode);
    made = made || p;
  } catch (err0) {
    if (err0.code === 'ENOENT') {
      if (path.dirname(p) === p) throw err0;
      made = mkdirsSync(path.dirname(p), opts, made);
      mkdirsSync(p, opts, made);
    } else {
      // In the case of any other error, just see if there's a dir there
      // already. If so, then hooray!  If not, then something is borked.
      let stat;

      try {
        stat = xfs.statSync(p);
      } catch (err1) {
        throw err0;
      }

      if (!stat.isDirectory()) throw err0;
    }
  }

  return made;
}

module.exports = mkdirsSync;

/***/ }),

/***/ "./node_modules/fs-extra/lib/mkdirs/mkdirs.js":
/*!****************************************************!*\
  !*** ./node_modules/fs-extra/lib/mkdirs/mkdirs.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const path = __webpack_require__(/*! path */ "path");

const invalidWin32Path = __webpack_require__(/*! ./win32 */ "./node_modules/fs-extra/lib/mkdirs/win32.js").invalidWin32Path;

const o777 = parseInt('0777', 8);

function mkdirs(p, opts, callback, made) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (!opts || typeof opts !== 'object') {
    opts = {
      mode: opts
    };
  }

  if (process.platform === 'win32' && invalidWin32Path(p)) {
    const errInval = new Error(p + ' contains invalid WIN32 path characters.');
    errInval.code = 'EINVAL';
    return callback(errInval);
  }

  let mode = opts.mode;
  const xfs = opts.fs || fs;

  if (mode === undefined) {
    mode = o777 & ~process.umask();
  }

  if (!made) made = null;

  callback = callback || function () {};

  p = path.resolve(p);
  xfs.mkdir(p, mode, er => {
    if (!er) {
      made = made || p;
      return callback(null, made);
    }

    switch (er.code) {
      case 'ENOENT':
        if (path.dirname(p) === p) return callback(er);
        mkdirs(path.dirname(p), opts, (er, made) => {
          if (er) callback(er, made);else mkdirs(p, opts, callback, made);
        });
        break;
      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.

      default:
        xfs.stat(p, (er2, stat) => {
          // if the stat fails, then that's super weird.
          // let the original error be the failure reason.
          if (er2 || !stat.isDirectory()) callback(er, made);else callback(null, made);
        });
        break;
    }
  });
}

module.exports = mkdirs;

/***/ }),

/***/ "./node_modules/fs-extra/lib/mkdirs/win32.js":
/*!***************************************************!*\
  !*** ./node_modules/fs-extra/lib/mkdirs/win32.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const path = __webpack_require__(/*! path */ "path"); // get drive on windows


function getRootPath(p) {
  p = path.normalize(path.resolve(p)).split(path.sep);
  if (p.length > 0) return p[0];
  return null;
} // http://stackoverflow.com/a/62888/10333 contains more accurate
// TODO: expand to include the rest


const INVALID_PATH_CHARS = /[<>:"|?*]/;

function invalidWin32Path(p) {
  const rp = getRootPath(p);
  p = p.replace(rp, '');
  return INVALID_PATH_CHARS.test(p);
}

module.exports = {
  getRootPath,
  invalidWin32Path
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/move-sync/index.js":
/*!******************************************************!*\
  !*** ./node_modules/fs-extra/lib/move-sync/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const path = __webpack_require__(/*! path */ "path");

const copySync = __webpack_require__(/*! ../copy-sync */ "./node_modules/fs-extra/lib/copy-sync/index.js").copySync;

const removeSync = __webpack_require__(/*! ../remove */ "./node_modules/fs-extra/lib/remove/index.js").removeSync;

const mkdirpSync = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js").mkdirsSync;

const buffer = __webpack_require__(/*! ../util/buffer */ "./node_modules/fs-extra/lib/util/buffer.js");

function moveSync(src, dest, options) {
  options = options || {};
  const overwrite = options.overwrite || options.clobber || false;
  src = path.resolve(src);
  dest = path.resolve(dest);
  if (src === dest) return fs.accessSync(src);
  if (isSrcSubdir(src, dest)) throw new Error(`Cannot move '${src}' into itself '${dest}'.`);
  mkdirpSync(path.dirname(dest));
  tryRenameSync();

  function tryRenameSync() {
    if (overwrite) {
      try {
        return fs.renameSync(src, dest);
      } catch (err) {
        if (err.code === 'ENOTEMPTY' || err.code === 'EEXIST' || err.code === 'EPERM') {
          removeSync(dest);
          options.overwrite = false; // just overwriteed it, no need to do it again

          return moveSync(src, dest, options);
        }

        if (err.code !== 'EXDEV') throw err;
        return moveSyncAcrossDevice(src, dest, overwrite);
      }
    } else {
      try {
        fs.linkSync(src, dest);
        return fs.unlinkSync(src);
      } catch (err) {
        if (err.code === 'EXDEV' || err.code === 'EISDIR' || err.code === 'EPERM' || err.code === 'ENOTSUP') {
          return moveSyncAcrossDevice(src, dest, overwrite);
        }

        throw err;
      }
    }
  }
}

function moveSyncAcrossDevice(src, dest, overwrite) {
  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    return moveDirSyncAcrossDevice(src, dest, overwrite);
  } else {
    return moveFileSyncAcrossDevice(src, dest, overwrite);
  }
}

function moveFileSyncAcrossDevice(src, dest, overwrite) {
  const BUF_LENGTH = 64 * 1024;

  const _buff = buffer(BUF_LENGTH);

  const flags = overwrite ? 'w' : 'wx';
  const fdr = fs.openSync(src, 'r');
  const stat = fs.fstatSync(fdr);
  const fdw = fs.openSync(dest, flags, stat.mode);
  let pos = 0;

  while (pos < stat.size) {
    const bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos);
    fs.writeSync(fdw, _buff, 0, bytesRead);
    pos += bytesRead;
  }

  fs.closeSync(fdr);
  fs.closeSync(fdw);
  return fs.unlinkSync(src);
}

function moveDirSyncAcrossDevice(src, dest, overwrite) {
  const options = {
    overwrite: false
  };

  if (overwrite) {
    removeSync(dest);
    tryCopySync();
  } else {
    tryCopySync();
  }

  function tryCopySync() {
    copySync(src, dest, options);
    return removeSync(src);
  }
} // return true if dest is a subdir of src, otherwise false.
// extract dest base dir and check if that is the same as src basename


function isSrcSubdir(src, dest) {
  try {
    return fs.statSync(src).isDirectory() && src !== dest && dest.indexOf(src) > -1 && dest.split(path.dirname(src) + path.sep)[1].split(path.sep)[0] === path.basename(src);
  } catch (e) {
    return false;
  }
}

module.exports = {
  moveSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/move/index.js":
/*!*************************************************!*\
  !*** ./node_modules/fs-extra/lib/move/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const path = __webpack_require__(/*! path */ "path");

const copy = __webpack_require__(/*! ../copy */ "./node_modules/fs-extra/lib/copy/index.js").copy;

const remove = __webpack_require__(/*! ../remove */ "./node_modules/fs-extra/lib/remove/index.js").remove;

const mkdirp = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js").mkdirp;

const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/fs-extra/lib/path-exists/index.js").pathExists;

function move(src, dest, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  const overwrite = opts.overwrite || opts.clobber || false;
  src = path.resolve(src);
  dest = path.resolve(dest);
  if (src === dest) return fs.access(src, cb);
  fs.stat(src, (err, st) => {
    if (err) return cb(err);

    if (st.isDirectory() && isSrcSubdir(src, dest)) {
      return cb(new Error(`Cannot move '${src}' to a subdirectory of itself, '${dest}'.`));
    }

    mkdirp(path.dirname(dest), err => {
      if (err) return cb(err);
      return doRename(src, dest, overwrite, cb);
    });
  });
}

function doRename(src, dest, overwrite, cb) {
  if (overwrite) {
    return remove(dest, err => {
      if (err) return cb(err);
      return rename(src, dest, overwrite, cb);
    });
  }

  pathExists(dest, (err, destExists) => {
    if (err) return cb(err);
    if (destExists) return cb(new Error('dest already exists.'));
    return rename(src, dest, overwrite, cb);
  });
}

function rename(src, dest, overwrite, cb) {
  fs.rename(src, dest, err => {
    if (!err) return cb();
    if (err.code !== 'EXDEV') return cb(err);
    return moveAcrossDevice(src, dest, overwrite, cb);
  });
}

function moveAcrossDevice(src, dest, overwrite, cb) {
  const opts = {
    overwrite,
    errorOnExist: true
  };
  copy(src, dest, opts, err => {
    if (err) return cb(err);
    return remove(src, cb);
  });
}

function isSrcSubdir(src, dest) {
  const srcArray = src.split(path.sep);
  const destArray = dest.split(path.sep);
  return srcArray.reduce((acc, current, i) => {
    return acc && destArray[i] === current;
  }, true);
}

module.exports = {
  move: u(move)
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/output/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fs-extra/lib/output/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const path = __webpack_require__(/*! path */ "path");

const mkdir = __webpack_require__(/*! ../mkdirs */ "./node_modules/fs-extra/lib/mkdirs/index.js");

const pathExists = __webpack_require__(/*! ../path-exists */ "./node_modules/fs-extra/lib/path-exists/index.js").pathExists;

function outputFile(file, data, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding;
    encoding = 'utf8';
  }

  const dir = path.dirname(file);
  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err);
    if (itDoes) return fs.writeFile(file, data, encoding, callback);
    mkdir.mkdirs(dir, err => {
      if (err) return callback(err);
      fs.writeFile(file, data, encoding, callback);
    });
  });
}

function outputFileSync(file, ...args) {
  const dir = path.dirname(file);

  if (fs.existsSync(dir)) {
    return fs.writeFileSync(file, ...args);
  }

  mkdir.mkdirsSync(dir);
  fs.writeFileSync(file, ...args);
}

module.exports = {
  outputFile: u(outputFile),
  outputFileSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/path-exists/index.js":
/*!********************************************************!*\
  !*** ./node_modules/fs-extra/lib/path-exists/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromPromise;

const fs = __webpack_require__(/*! ../fs */ "./node_modules/fs-extra/lib/fs/index.js");

function pathExists(path) {
  return fs.access(path).then(() => true).catch(() => false);
}

module.exports = {
  pathExists: u(pathExists),
  pathExistsSync: fs.existsSync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/remove/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fs-extra/lib/remove/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const u = __webpack_require__(/*! universalify */ "./node_modules/universalify/index.js").fromCallback;

const rimraf = __webpack_require__(/*! ./rimraf */ "./node_modules/fs-extra/lib/remove/rimraf.js");

module.exports = {
  remove: u(rimraf),
  removeSync: rimraf.sync
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/remove/rimraf.js":
/*!****************************************************!*\
  !*** ./node_modules/fs-extra/lib/remove/rimraf.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const path = __webpack_require__(/*! path */ "path");

const assert = __webpack_require__(/*! assert */ "assert");

const isWindows = process.platform === 'win32';

function defaults(options) {
  const methods = ['unlink', 'chmod', 'stat', 'lstat', 'rmdir', 'readdir'];
  methods.forEach(m => {
    options[m] = options[m] || fs[m];
    m = m + 'Sync';
    options[m] = options[m] || fs[m];
  });
  options.maxBusyTries = options.maxBusyTries || 3;
}

function rimraf(p, options, cb) {
  let busyTries = 0;

  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  assert(p, 'rimraf: missing path');
  assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string');
  assert.strictEqual(typeof cb, 'function', 'rimraf: callback function required');
  assert(options, 'rimraf: invalid options argument provided');
  assert.strictEqual(typeof options, 'object', 'rimraf: options should be object');
  defaults(options);
  rimraf_(p, options, function CB(er) {
    if (er) {
      if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') && busyTries < options.maxBusyTries) {
        busyTries++;
        const time = busyTries * 100; // try again, with the same exact callback as this one.

        return setTimeout(() => rimraf_(p, options, CB), time);
      } // already gone


      if (er.code === 'ENOENT') er = null;
    }

    cb(er);
  });
} // Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.


function rimraf_(p, options, cb) {
  assert(p);
  assert(options);
  assert(typeof cb === 'function'); // sunos lets the root user unlink directories, which is... weird.
  // so we have to lstat here and make sure it's not a dir.

  options.lstat(p, (er, st) => {
    if (er && er.code === 'ENOENT') {
      return cb(null);
    } // Windows can EPERM on stat.  Life is suffering.


    if (er && er.code === 'EPERM' && isWindows) {
      return fixWinEPERM(p, options, er, cb);
    }

    if (st && st.isDirectory()) {
      return rmdir(p, options, er, cb);
    }

    options.unlink(p, er => {
      if (er) {
        if (er.code === 'ENOENT') {
          return cb(null);
        }

        if (er.code === 'EPERM') {
          return isWindows ? fixWinEPERM(p, options, er, cb) : rmdir(p, options, er, cb);
        }

        if (er.code === 'EISDIR') {
          return rmdir(p, options, er, cb);
        }
      }

      return cb(er);
    });
  });
}

function fixWinEPERM(p, options, er, cb) {
  assert(p);
  assert(options);
  assert(typeof cb === 'function');

  if (er) {
    assert(er instanceof Error);
  }

  options.chmod(p, 0o666, er2 => {
    if (er2) {
      cb(er2.code === 'ENOENT' ? null : er);
    } else {
      options.stat(p, (er3, stats) => {
        if (er3) {
          cb(er3.code === 'ENOENT' ? null : er);
        } else if (stats.isDirectory()) {
          rmdir(p, options, er, cb);
        } else {
          options.unlink(p, cb);
        }
      });
    }
  });
}

function fixWinEPERMSync(p, options, er) {
  let stats;
  assert(p);
  assert(options);

  if (er) {
    assert(er instanceof Error);
  }

  try {
    options.chmodSync(p, 0o666);
  } catch (er2) {
    if (er2.code === 'ENOENT') {
      return;
    } else {
      throw er;
    }
  }

  try {
    stats = options.statSync(p);
  } catch (er3) {
    if (er3.code === 'ENOENT') {
      return;
    } else {
      throw er;
    }
  }

  if (stats.isDirectory()) {
    rmdirSync(p, options, er);
  } else {
    options.unlinkSync(p);
  }
}

function rmdir(p, options, originalEr, cb) {
  assert(p);
  assert(options);

  if (originalEr) {
    assert(originalEr instanceof Error);
  }

  assert(typeof cb === 'function'); // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.

  options.rmdir(p, er => {
    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) {
      rmkids(p, options, cb);
    } else if (er && er.code === 'ENOTDIR') {
      cb(originalEr);
    } else {
      cb(er);
    }
  });
}

function rmkids(p, options, cb) {
  assert(p);
  assert(options);
  assert(typeof cb === 'function');
  options.readdir(p, (er, files) => {
    if (er) return cb(er);
    let n = files.length;
    let errState;
    if (n === 0) return options.rmdir(p, cb);
    files.forEach(f => {
      rimraf(path.join(p, f), options, er => {
        if (errState) {
          return;
        }

        if (er) return cb(errState = er);

        if (--n === 0) {
          options.rmdir(p, cb);
        }
      });
    });
  });
} // this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.


function rimrafSync(p, options) {
  let st;
  options = options || {};
  defaults(options);
  assert(p, 'rimraf: missing path');
  assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string');
  assert(options, 'rimraf: missing options');
  assert.strictEqual(typeof options, 'object', 'rimraf: options should be object');

  try {
    st = options.lstatSync(p);
  } catch (er) {
    if (er.code === 'ENOENT') {
      return;
    } // Windows can EPERM on stat.  Life is suffering.


    if (er.code === 'EPERM' && isWindows) {
      fixWinEPERMSync(p, options, er);
    }
  }

  try {
    // sunos lets the root user unlink directories, which is... weird.
    if (st && st.isDirectory()) {
      rmdirSync(p, options, null);
    } else {
      options.unlinkSync(p);
    }
  } catch (er) {
    if (er.code === 'ENOENT') {
      return;
    } else if (er.code === 'EPERM') {
      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er);
    } else if (er.code !== 'EISDIR') {
      throw er;
    }

    rmdirSync(p, options, er);
  }
}

function rmdirSync(p, options, originalEr) {
  assert(p);
  assert(options);

  if (originalEr) {
    assert(originalEr instanceof Error);
  }

  try {
    options.rmdirSync(p);
  } catch (er) {
    if (er.code === 'ENOTDIR') {
      throw originalEr;
    } else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') {
      rmkidsSync(p, options);
    } else if (er.code !== 'ENOENT') {
      throw er;
    }
  }
}

function rmkidsSync(p, options) {
  assert(p);
  assert(options);
  options.readdirSync(p).forEach(f => rimrafSync(path.join(p, f), options));

  if (isWindows) {
    // We only end up here once we got ENOTEMPTY at least once, and
    // at this point, we are guaranteed to have removed all the kids.
    // So, we know that it won't be ENOENT or ENOTDIR or anything else.
    // try really hard to delete stuff on windows, because it has a
    // PROFOUNDLY annoying habit of not closing handles promptly when
    // files are deleted, resulting in spurious ENOTEMPTY errors.
    const startTime = Date.now();

    do {
      try {
        const ret = options.rmdirSync(p, options);
        return ret;
      } catch (er) {}
    } while (Date.now() - startTime < 500); // give up after 500ms

  } else {
    const ret = options.rmdirSync(p, options);
    return ret;
  }
}

module.exports = rimraf;
rimraf.sync = rimrafSync;

/***/ }),

/***/ "./node_modules/fs-extra/lib/util/buffer.js":
/*!**************************************************!*\
  !*** ./node_modules/fs-extra/lib/util/buffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable node/no-deprecated-api */

module.exports = function (size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    try {
      return Buffer.allocUnsafe(size);
    } catch (e) {
      return new Buffer(size);
    }
  }

  return new Buffer(size);
};

/***/ }),

/***/ "./node_modules/fs-extra/lib/util/utimes.js":
/*!**************************************************!*\
  !*** ./node_modules/fs-extra/lib/util/utimes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");

const os = __webpack_require__(/*! os */ "os");

const path = __webpack_require__(/*! path */ "path"); // HFS, ext{2,3}, FAT do not, Node.js v0.10 does not


function hasMillisResSync() {
  let tmpfile = path.join('millis-test-sync' + Date.now().toString() + Math.random().toString().slice(2));
  tmpfile = path.join(os.tmpdir(), tmpfile); // 550 millis past UNIX epoch

  const d = new Date(1435410243862);
  fs.writeFileSync(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141');
  const fd = fs.openSync(tmpfile, 'r+');
  fs.futimesSync(fd, d, d);
  fs.closeSync(fd);
  return fs.statSync(tmpfile).mtime > 1435410243000;
}

function hasMillisRes(callback) {
  let tmpfile = path.join('millis-test' + Date.now().toString() + Math.random().toString().slice(2));
  tmpfile = path.join(os.tmpdir(), tmpfile); // 550 millis past UNIX epoch

  const d = new Date(1435410243862);
  fs.writeFile(tmpfile, 'https://github.com/jprichardson/node-fs-extra/pull/141', err => {
    if (err) return callback(err);
    fs.open(tmpfile, 'r+', (err, fd) => {
      if (err) return callback(err);
      fs.futimes(fd, d, d, err => {
        if (err) return callback(err);
        fs.close(fd, err => {
          if (err) return callback(err);
          fs.stat(tmpfile, (err, stats) => {
            if (err) return callback(err);
            callback(null, stats.mtime > 1435410243000);
          });
        });
      });
    });
  });
}

function timeRemoveMillis(timestamp) {
  if (typeof timestamp === 'number') {
    return Math.floor(timestamp / 1000) * 1000;
  } else if (timestamp instanceof Date) {
    return new Date(Math.floor(timestamp.getTime() / 1000) * 1000);
  } else {
    throw new Error('fs-extra: timeRemoveMillis() unknown parameter type');
  }
}

function utimesMillis(path, atime, mtime, callback) {
  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
  fs.open(path, 'r+', (err, fd) => {
    if (err) return callback(err);
    fs.futimes(fd, atime, mtime, futimesErr => {
      fs.close(fd, closeErr => {
        if (callback) callback(futimesErr || closeErr);
      });
    });
  });
}

function utimesMillisSync(path, atime, mtime) {
  const fd = fs.openSync(path, 'r+');
  fs.futimesSync(fd, atime, mtime);
  return fs.closeSync(fd);
}

module.exports = {
  hasMillisRes,
  hasMillisResSync,
  timeRemoveMillis,
  utimesMillis,
  utimesMillisSync
};

/***/ }),

/***/ "./node_modules/graceful-fs/fs.js":
/*!****************************************!*\
  !*** ./node_modules/graceful-fs/fs.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(/*! fs */ "fs");

module.exports = clone(fs);

function clone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Object) var copy = {
    __proto__: obj.__proto__
  };else var copy = Object.create(null);
  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
  });
  return copy;
}

/***/ }),

/***/ "./node_modules/graceful-fs/graceful-fs.js":
/*!*************************************************!*\
  !*** ./node_modules/graceful-fs/graceful-fs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs */ "fs");

var polyfills = __webpack_require__(/*! ./polyfills.js */ "./node_modules/graceful-fs/polyfills.js");

var legacy = __webpack_require__(/*! ./legacy-streams.js */ "./node_modules/graceful-fs/legacy-streams.js");

var queue = [];

var util = __webpack_require__(/*! util */ "util");

function noop() {}

var debug = noop;
if (util.debuglog) debug = util.debuglog('gfs4');else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) debug = function () {
  var m = util.format.apply(util, arguments);
  m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ');
  console.error(m);
};

if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
  process.on('exit', function () {
    debug(queue);

    __webpack_require__(/*! assert */ "assert").equal(queue.length, 0);
  });
}

module.exports = patch(__webpack_require__(/*! ./fs.js */ "./node_modules/graceful-fs/fs.js"));

if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH) {
  module.exports = patch(fs);
} // Always patch fs.close/closeSync, because we want to
// retry() whenever a close happens *anywhere* in the program.
// This is essential when multiple graceful-fs instances are
// in play at the same time.


module.exports.close = fs.close = function (fs$close) {
  return function (fd, cb) {
    return fs$close.call(fs, fd, function (err) {
      if (!err) retry();
      if (typeof cb === 'function') cb.apply(this, arguments);
    });
  };
}(fs.close);

module.exports.closeSync = fs.closeSync = function (fs$closeSync) {
  return function (fd) {
    // Note that graceful-fs also retries when fs.closeSync() fails.
    // Looks like a bug to me, although it's probably a harmless one.
    var rval = fs$closeSync.apply(fs, arguments);
    retry();
    return rval;
  };
}(fs.closeSync);

function patch(fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs);
  fs.gracefulify = patch;
  fs.FileReadStream = ReadStream; // Legacy name.

  fs.FileWriteStream = WriteStream; // Legacy name.

  fs.createReadStream = createReadStream;
  fs.createWriteStream = createWriteStream;
  var fs$readFile = fs.readFile;
  fs.readFile = readFile;

  function readFile(path, options, cb) {
    if (typeof options === 'function') cb = options, options = null;
    return go$readFile(path, options, cb);

    function go$readFile(path, options, cb) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readFile, [path, options, cb]]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
          retry();
        }
      });
    }
  }

  var fs$writeFile = fs.writeFile;
  fs.writeFile = writeFile;

  function writeFile(path, data, options, cb) {
    if (typeof options === 'function') cb = options, options = null;
    return go$writeFile(path, data, options, cb);

    function go$writeFile(path, data, options, cb) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$writeFile, [path, data, options, cb]]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
          retry();
        }
      });
    }
  }

  var fs$appendFile = fs.appendFile;
  if (fs$appendFile) fs.appendFile = appendFile;

  function appendFile(path, data, options, cb) {
    if (typeof options === 'function') cb = options, options = null;
    return go$appendFile(path, data, options, cb);

    function go$appendFile(path, data, options, cb) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$appendFile, [path, data, options, cb]]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
          retry();
        }
      });
    }
  }

  var fs$readdir = fs.readdir;
  fs.readdir = readdir;

  function readdir(path, options, cb) {
    var args = [path];

    if (typeof options !== 'function') {
      args.push(options);
    } else {
      cb = options;
    }

    args.push(go$readdir$cb);
    return go$readdir(args);

    function go$readdir$cb(err, files) {
      if (files && files.sort) files.sort();
      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$readdir, [args]]);else {
        if (typeof cb === 'function') cb.apply(this, arguments);
        retry();
      }
    }
  }

  function go$readdir(args) {
    return fs$readdir.apply(fs, args);
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacy(fs);
    ReadStream = legStreams.ReadStream;
    WriteStream = legStreams.WriteStream;
  }

  var fs$ReadStream = fs.ReadStream;
  ReadStream.prototype = Object.create(fs$ReadStream.prototype);
  ReadStream.prototype.open = ReadStream$open;
  var fs$WriteStream = fs.WriteStream;
  WriteStream.prototype = Object.create(fs$WriteStream.prototype);
  WriteStream.prototype.open = WriteStream$open;
  fs.ReadStream = ReadStream;
  fs.WriteStream = WriteStream;

  function ReadStream(path, options) {
    if (this instanceof ReadStream) return fs$ReadStream.apply(this, arguments), this;else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
  }

  function ReadStream$open() {
    var that = this;
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose) that.destroy();
        that.emit('error', err);
      } else {
        that.fd = fd;
        that.emit('open', fd);
        that.read();
      }
    });
  }

  function WriteStream(path, options) {
    if (this instanceof WriteStream) return fs$WriteStream.apply(this, arguments), this;else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
  }

  function WriteStream$open() {
    var that = this;
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy();
        that.emit('error', err);
      } else {
        that.fd = fd;
        that.emit('open', fd);
      }
    });
  }

  function createReadStream(path, options) {
    return new ReadStream(path, options);
  }

  function createWriteStream(path, options) {
    return new WriteStream(path, options);
  }

  var fs$open = fs.open;
  fs.open = open;

  function open(path, flags, mode, cb) {
    if (typeof mode === 'function') cb = mode, mode = null;
    return go$open(path, flags, mode, cb);

    function go$open(path, flags, mode, cb) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE')) enqueue([go$open, [path, flags, mode, cb]]);else {
          if (typeof cb === 'function') cb.apply(this, arguments);
          retry();
        }
      });
    }
  }

  return fs;
}

function enqueue(elem) {
  debug('ENQUEUE', elem[0].name, elem[1]);
  queue.push(elem);
}

function retry() {
  var elem = queue.shift();

  if (elem) {
    debug('RETRY', elem[0].name, elem[1]);
    elem[0].apply(null, elem[1]);
  }
}

/***/ }),

/***/ "./node_modules/graceful-fs/legacy-streams.js":
/*!****************************************************!*\
  !*** ./node_modules/graceful-fs/legacy-streams.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(/*! stream */ "stream").Stream;

module.exports = legacy;

function legacy(fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  };

  function ReadStream(path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);
    Stream.call(this);
    var self = this;
    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;
    this.flags = 'r';
    this.mode = 438;
    /*=0666*/

    this.bufferSize = 64 * 1024;
    options = options || {}; // Mixin options into this

    var keys = Object.keys(options);

    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }

      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function () {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);

      self._read();
    });
  }

  function WriteStream(path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);
    Stream.call(this);
    this.path = path;
    this.fd = null;
    this.writable = true;
    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438;
    /*=0666*/

    this.bytesWritten = 0;
    options = options || {}; // Mixin options into this

    var keys = Object.keys(options);

    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }

      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;

      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);

      this.flush();
    }
  }
}

/***/ }),

/***/ "./node_modules/graceful-fs/polyfills.js":
/*!***********************************************!*\
  !*** ./node_modules/graceful-fs/polyfills.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! ./fs.js */ "./node_modules/graceful-fs/fs.js");

var constants = __webpack_require__(/*! constants */ "constants");

var origCwd = process.cwd;
var cwd = null;
var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;

process.cwd = function () {
  if (!cwd) cwd = origCwd.call(process);
  return cwd;
};

try {
  process.cwd();
} catch (er) {}

var chdir = process.chdir;

process.chdir = function (d) {
  cwd = null;
  chdir.call(process, d);
};

module.exports = patch;

function patch(fs) {
  // (re-)implement some things that are known busted or missing.
  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs);
  } // lutimes implementation, or no-op


  if (!fs.lutimes) {
    patchLutimes(fs);
  } // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.


  fs.chown = chownFix(fs.chown);
  fs.fchown = chownFix(fs.fchown);
  fs.lchown = chownFix(fs.lchown);
  fs.chmod = chmodFix(fs.chmod);
  fs.fchmod = chmodFix(fs.fchmod);
  fs.lchmod = chmodFix(fs.lchmod);
  fs.chownSync = chownFixSync(fs.chownSync);
  fs.fchownSync = chownFixSync(fs.fchownSync);
  fs.lchownSync = chownFixSync(fs.lchownSync);
  fs.chmodSync = chmodFixSync(fs.chmodSync);
  fs.fchmodSync = chmodFixSync(fs.fchmodSync);
  fs.lchmodSync = chmodFixSync(fs.lchmodSync);
  fs.stat = statFix(fs.stat);
  fs.fstat = statFix(fs.fstat);
  fs.lstat = statFix(fs.lstat);
  fs.statSync = statFixSync(fs.statSync);
  fs.fstatSync = statFixSync(fs.fstatSync);
  fs.lstatSync = statFixSync(fs.lstatSync); // if lchmod/lchown do not exist, then make them no-ops

  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb);
    };

    fs.lchmodSync = function () {};
  }

  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb);
    };

    fs.lchownSync = function () {};
  } // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.
  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.


  if (platform === "win32") {
    fs.rename = function (fs$rename) {
      return function (from, to, cb) {
        var start = Date.now();
        var backoff = 0;
        fs$rename(from, to, function CB(er) {
          if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 60000) {
            setTimeout(function () {
              fs.stat(to, function (stater, st) {
                if (stater && stater.code === "ENOENT") fs$rename(from, to, CB);else cb(er);
              });
            }, backoff);
            if (backoff < 100) backoff += 10;
            return;
          }

          if (cb) cb(er);
        });
      };
    }(fs.rename);
  } // if read() returns EAGAIN, then just try it again.


  fs.read = function (fs$read) {
    return function (fd, buffer, offset, length, position, callback_) {
      var callback;

      if (callback_ && typeof callback_ === 'function') {
        var eagCounter = 0;

        callback = function (er, _, __) {
          if (er && er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter++;
            return fs$read.call(fs, fd, buffer, offset, length, position, callback);
          }

          callback_.apply(this, arguments);
        };
      }

      return fs$read.call(fs, fd, buffer, offset, length, position, callback);
    };
  }(fs.read);

  fs.readSync = function (fs$readSync) {
    return function (fd, buffer, offset, length, position) {
      var eagCounter = 0;

      while (true) {
        try {
          return fs$readSync.call(fs, fd, buffer, offset, length, position);
        } catch (er) {
          if (er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter++;
            continue;
          }

          throw er;
        }
      }
    };
  }(fs.readSync);
}

function patchLchmod(fs) {
  fs.lchmod = function (path, mode, callback) {
    fs.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function (err, fd) {
      if (err) {
        if (callback) callback(err);
        return;
      } // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.


      fs.fchmod(fd, mode, function (err) {
        fs.close(fd, function (err2) {
          if (callback) callback(err || err2);
        });
      });
    });
  };

  fs.lchmodSync = function (path, mode) {
    var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode); // prefer to return the chmod error, if one occurs,
    // but still try to close, and report closing errors if they occur.

    var threw = true;
    var ret;

    try {
      ret = fs.fchmodSync(fd, mode);
      threw = false;
    } finally {
      if (threw) {
        try {
          fs.closeSync(fd);
        } catch (er) {}
      } else {
        fs.closeSync(fd);
      }
    }

    return ret;
  };
}

function patchLutimes(fs) {
  if (constants.hasOwnProperty("O_SYMLINK")) {
    fs.lutimes = function (path, at, mt, cb) {
      fs.open(path, constants.O_SYMLINK, function (er, fd) {
        if (er) {
          if (cb) cb(er);
          return;
        }

        fs.futimes(fd, at, mt, function (er) {
          fs.close(fd, function (er2) {
            if (cb) cb(er || er2);
          });
        });
      });
    };

    fs.lutimesSync = function (path, at, mt) {
      var fd = fs.openSync(path, constants.O_SYMLINK);
      var ret;
      var threw = true;

      try {
        ret = fs.futimesSync(fd, at, mt);
        threw = false;
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd);
          } catch (er) {}
        } else {
          fs.closeSync(fd);
        }
      }

      return ret;
    };
  } else {
    fs.lutimes = function (_a, _b, _c, cb) {
      if (cb) process.nextTick(cb);
    };

    fs.lutimesSync = function () {};
  }
}

function chmodFix(orig) {
  if (!orig) return orig;
  return function (target, mode, cb) {
    return orig.call(fs, target, mode, function (er) {
      if (chownErOk(er)) er = null;
      if (cb) cb.apply(this, arguments);
    });
  };
}

function chmodFixSync(orig) {
  if (!orig) return orig;
  return function (target, mode) {
    try {
      return orig.call(fs, target, mode);
    } catch (er) {
      if (!chownErOk(er)) throw er;
    }
  };
}

function chownFix(orig) {
  if (!orig) return orig;
  return function (target, uid, gid, cb) {
    return orig.call(fs, target, uid, gid, function (er) {
      if (chownErOk(er)) er = null;
      if (cb) cb.apply(this, arguments);
    });
  };
}

function chownFixSync(orig) {
  if (!orig) return orig;
  return function (target, uid, gid) {
    try {
      return orig.call(fs, target, uid, gid);
    } catch (er) {
      if (!chownErOk(er)) throw er;
    }
  };
}

function statFix(orig) {
  if (!orig) return orig; // Older versions of Node erroneously returned signed integers for
  // uid + gid.

  return function (target, cb) {
    return orig.call(fs, target, function (er, stats) {
      if (!stats) return cb.apply(this, arguments);
      if (stats.uid < 0) stats.uid += 0x100000000;
      if (stats.gid < 0) stats.gid += 0x100000000;
      if (cb) cb.apply(this, arguments);
    });
  };
}

function statFixSync(orig) {
  if (!orig) return orig; // Older versions of Node erroneously returned signed integers for
  // uid + gid.

  return function (target) {
    var stats = orig.call(fs, target);
    if (stats.uid < 0) stats.uid += 0x100000000;
    if (stats.gid < 0) stats.gid += 0x100000000;
    return stats;
  };
} // ENOSYS means that the fs doesn't support the op. Just ignore
// that, because it doesn't matter.
//
// if there's no getuid, or if getuid() is something other
// than 0, and the error is EINVAL or EPERM, then just ignore
// it.
//
// This specific case is a silent failure in cp, install, tar,
// and most other unix tools that manage permissions.
//
// When running as root, or if other types of errors are
// encountered, then it's strict.


function chownErOk(er) {
  if (!er) return true;
  if (er.code === "ENOSYS") return true;
  var nonroot = !process.getuid || process.getuid() !== 0;

  if (nonroot) {
    if (er.code === "EINVAL" || er.code === "EPERM") return true;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/jsonfile/index.js":
/*!****************************************!*\
  !*** ./node_modules/jsonfile/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _fs;

try {
  _fs = __webpack_require__(/*! graceful-fs */ "./node_modules/graceful-fs/graceful-fs.js");
} catch (_) {
  _fs = __webpack_require__(/*! fs */ "fs");
}

function readFile(file, options, callback) {
  if (callback == null) {
    callback = options;
    options = {};
  }

  if (typeof options === 'string') {
    options = {
      encoding: options
    };
  }

  options = options || {};
  var fs = options.fs || _fs;
  var shouldThrow = true;

  if ('throws' in options) {
    shouldThrow = options.throws;
  }

  fs.readFile(file, options, function (err, data) {
    if (err) return callback(err);
    data = stripBom(data);
    var obj;

    try {
      obj = JSON.parse(data, options ? options.reviver : null);
    } catch (err2) {
      if (shouldThrow) {
        err2.message = file + ': ' + err2.message;
        return callback(err2);
      } else {
        return callback(null, null);
      }
    }

    callback(null, obj);
  });
}

function readFileSync(file, options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      encoding: options
    };
  }

  var fs = options.fs || _fs;
  var shouldThrow = true;

  if ('throws' in options) {
    shouldThrow = options.throws;
  }

  try {
    var content = fs.readFileSync(file, options);
    content = stripBom(content);
    return JSON.parse(content, options.reviver);
  } catch (err) {
    if (shouldThrow) {
      err.message = file + ': ' + err.message;
      throw err;
    } else {
      return null;
    }
  }
}

function stringify(obj, options) {
  var spaces;
  var EOL = '\n';

  if (typeof options === 'object' && options !== null) {
    if (options.spaces) {
      spaces = options.spaces;
    }

    if (options.EOL) {
      EOL = options.EOL;
    }
  }

  var str = JSON.stringify(obj, options ? options.replacer : null, spaces);
  return str.replace(/\n/g, EOL) + EOL;
}

function writeFile(file, obj, options, callback) {
  if (callback == null) {
    callback = options;
    options = {};
  }

  options = options || {};
  var fs = options.fs || _fs;
  var str = '';

  try {
    str = stringify(obj, options);
  } catch (err) {
    // Need to return whether a callback was passed or not
    if (callback) callback(err, null);
    return;
  }

  fs.writeFile(file, str, options, callback);
}

function writeFileSync(file, obj, options) {
  options = options || {};
  var fs = options.fs || _fs;
  var str = stringify(obj, options); // not sure if fs.writeFileSync returns anything, but just in case

  return fs.writeFileSync(file, str, options);
}

function stripBom(content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8');
  content = content.replace(/^\uFEFF/, '');
  return content;
}

var jsonfile = {
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
};
module.exports = jsonfile;

/***/ }),

/***/ "./node_modules/universalify/index.js":
/*!********************************************!*\
  !*** ./node_modules/universalify/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.fromCallback = function (fn) {
  return Object.defineProperty(function () {
    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments);else {
      return new Promise((resolve, reject) => {
        arguments[arguments.length] = (err, res) => {
          if (err) return reject(err);
          resolve(res);
        };

        arguments.length++;
        fn.apply(this, arguments);
      });
    }
  }, 'name', {
    value: fn.name
  });
};

exports.fromPromise = function (fn) {
  return Object.defineProperty(function () {
    const cb = arguments[arguments.length - 1];
    if (typeof cb !== 'function') return fn.apply(this, arguments);else fn.apply(this, arguments).then(r => cb(null, r), cb);
  }, 'name', {
    value: fn.name
  });
};

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/scripts/move-winpty-binaries.js":
/*!*********************************************!*\
  !*** ./src/scripts/move-winpty-binaries.js ***!
  \*********************************************/
/*! exports provided: mkdtempSyncForRenamingDLLs, main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkdtempSyncForRenamingDLLs", function() { return mkdtempSyncForRenamingDLLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ "./node_modules/fs-extra/lib/index.js");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
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




function mkdtempSyncForRenamingDLLs(atomHome) {
  if (!atomHome) {
    throw new Error('must provide atomHome parameter');
  }

  var tmp = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(atomHome, 'tmp');
  if (!fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(tmp)) fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(tmp);
  return fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.mkdtempSync(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(tmp, 'moved-dll-'));
}

function main() {
  console.log('Executing script at \'' + path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__filename) + '\''); // Proceed only for Windows platforms.

  if (process.platform !== 'win32') {
    console.log('Not win32 platform, exiting.');
    process.exit(0);
  }

  console.log('=== Start process.argv log ===');
  process.argv.forEach(function (val, index) {
    console.log("".concat(index, ": ").concat(val));
  });
  console.log('=== End process.argv log ===');
  console.log('process.cwd(): ' + process.cwd());
  console.log('=== Start process.env log ===');
  Object.keys(process.env).forEach(function (key) {
    console.log(key + ' = ' + process.env[key]);
  });
  console.log('=== End process.env log ==='); // NOTE: Atom package installs/updates are done through a staging directory
  // first. Therefore, this whole script is needed to deal with moving the
  // winpty binaries on Windows platforms.

  var homeDir = os__WEBPACK_IMPORTED_MODULE_1___default.a.homedir();
  console.log('homeDir = \'' + homeDir + '\' from os.homedir()');
  var atomHome = process.env.ATOM_HOME;

  if (atomHome) {
    console.log('Using ATOM_HOME environment variable.');
    atomHome = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(atomHome);
  } else {
    atomHome = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(homeDir, '.atom');

    if (!fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(atomHome)) {
      console.log('atomHome = \'' + atomHome + '\' doesn\'t exist.');
      console.log('Checking if home directory is set to .node-gyp path');
      var regexp = new RegExp(path__WEBPACK_IMPORTED_MODULE_2___default.a.join('.atom', '.node-gyp').replace(/\.\\/g, '\\$&') + '$');

      if (regexp.test(homeDir)) {
        homeDir = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(homeDir, '..', '..'));
        console.log('Setting homeDir = \'' + homeDir + '\' from two directories lower from previous homeDir.');
        atomHome = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(homeDir, '.atom');
        console.log('New atomHome = \'' + atomHome + '\'.');
      }
    }

    if (!fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(atomHome)) {
      console.log('Attempting use of HOMEDRIVE and HOMEPATH environment variables.');
      var homeDrive = process.env.HOMEDRIVE;
      var homePath = process.env.HOMEPATH;

      if (homeDrive && homePath) {
        homeDir = homeDrive + path__WEBPACK_IMPORTED_MODULE_2___default.a.sep + homePath;
        console.log('homeDir = \'' + homeDir + '\' derived from HOMEDRIVE and HOMEPATH environment variables.');
      }

      atomHome = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(homeDir, '.atom'));
    }
  }

  console.log('Using atomHome = \'' + atomHome + '\'');
  var atomXtermPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(atomHome, 'packages', 'atom-xterm');
  console.log('Using atomXtermPath = \'' + atomXtermPath + '\'');

  if (!fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(atomXtermPath)) {
    console.log('atom-xterm not installed, exiting.');
    process.exit(0);
  } // NOTE: This script will move binaries for the 'node-pty' module. Although
  // 'node-pty' has been replaced with 'node-pty-prebuilt', this script will
  // still move the binaries in the 'node-pty' module to make upgrades
  // smoother for Windows users.


  var nodePtyPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(atomXtermPath, 'node_modules', 'node-pty');
  console.log('Using nodePtyPath = \'' + nodePtyPath + '\'');
  var nodePtyPrebuiltPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(atomXtermPath, 'node_modules', 'node-pty-prebuilt');
  console.log('Using nodePtyPrebuiltPath = \'' + nodePtyPrebuiltPath + '\''); // Move the directories containing the Windows binaries under a tmp
  // directory.

  var _arr = [nodePtyPath, nodePtyPrebuiltPath];

  for (var _i = 0; _i < _arr.length; _i++) {
    var nodePtyModulePath = _arr[_i];
    var releaseBuildPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(nodePtyModulePath, 'build', 'Release');
    var debugBuildPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(nodePtyModulePath, 'build', 'Debug');
    var _arr2 = [releaseBuildPath, debugBuildPath];

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var buildPath = _arr2[_i2];
      console.log("Checking if '".concat(buildPath, "' exists"));

      if (fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.existsSync(buildPath)) {
        var tmpdir = mkdtempSyncForRenamingDLLs(atomHome);
        var newPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(tmpdir, path__WEBPACK_IMPORTED_MODULE_2___default.a.basename(buildPath));
        console.log("Moving '".concat(buildPath, "' to '").concat(newPath, "'."));
        fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.renameSync(buildPath, newPath);
      }
    }
  }
}



if (__webpack_require__.c[__webpack_require__.s] === module) {
  main();
}
/* WEBPACK VAR INJECTION */}.call(this, "/index.js", __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("constants");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });