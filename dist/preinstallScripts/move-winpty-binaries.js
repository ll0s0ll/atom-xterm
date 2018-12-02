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

/***/ "./node_modules/buffer-from/index.js":
/*!*******************************************!*\
  !*** ./node_modules/buffer-from/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;
var isModern = typeof Buffer.alloc === 'function' && typeof Buffer.allocUnsafe === 'function' && typeof Buffer.from === 'function';

function isArrayBuffer(input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer';
}

function fromArrayBuffer(obj, byteOffset, length) {
  byteOffset >>>= 0;
  var maxLength = obj.byteLength - byteOffset;

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds");
  }

  if (length === undefined) {
    length = maxLength;
  } else {
    length >>>= 0;

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds");
    }
  }

  return isModern ? Buffer.from(obj.slice(byteOffset, byteOffset + length)) : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)));
}

function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  return isModern ? Buffer.from(string, encoding) : new Buffer(string, encoding);
}

function bufferFrom(value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }

  return isModern ? Buffer.from(value) : new Buffer(value);
}

module.exports = bufferFrom;

/***/ }),

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

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/array-set.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/array-set.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(/*! ./util */ "./node_modules/source-map-support/node_modules/source-map/lib/util.js");

var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */

function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */


ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();

  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }

  return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */


ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */


ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;

  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }

  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */


ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */


ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);

    if (idx >= 0) {
      return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);

    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */


ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }

  throw new Error('No element indexed by ' + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */


ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/base64-vlq.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/base64-vlq.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var base64 = __webpack_require__(/*! ./base64 */ "./node_modules/source-map-support/node_modules/source-map/lib/base64.js"); // A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011


var VLQ_BASE_SHIFT = 5; // binary: 100000

var VLQ_BASE = 1 << VLQ_BASE_SHIFT; // binary: 011111

var VLQ_BASE_MASK = VLQ_BASE - 1; // binary: 100000

var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */

function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */


function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */


exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;

    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }

    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */


exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));

    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/base64.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/base64.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */

exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }

  throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */


exports.decode = function (charCode) {
  var bigA = 65; // 'A'

  var bigZ = 90; // 'Z'

  var littleA = 97; // 'a'

  var littleZ = 122; // 'z'

  var zero = 48; // '0'

  var nine = 57; // '9'

  var plus = 43; // '+'

  var slash = 47; // '/'

  var littleOffset = 26;
  var numberOffset = 52; // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ

  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  } // 26 - 51: abcdefghijklmnopqrstuvwxyz


  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  } // 52 - 61: 0123456789


  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  } // 62: +


  if (charCode == plus) {
    return 62;
  } // 63: /


  if (charCode == slash) {
    return 63;
  } // Invalid base64 digit.


  return -1;
};

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/binary-search.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/binary-search.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */

function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);

  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  } else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    } // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  } else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    } // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */


exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);

  if (index < 0) {
    return -1;
  } // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.


  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }

    --index;
  }

  return index;
};

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/mapping-list.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/mapping-list.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(/*! ./util */ "./node_modules/source-map-support/node_modules/source-map/lib/util.js");
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */


function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */


function MappingList() {
  this._array = [];
  this._sorted = true; // Serves as infimum

  this._last = {
    generatedLine: -1,
    generatedColumn: 0
  };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */


MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
  this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */


MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;

    this._array.push(aMapping);
  } else {
    this._sorted = false;

    this._array.push(aMapping);
  }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */


MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);

    this._sorted = true;
  }

  return this._array;
};

exports.MappingList = MappingList;

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/quick-sort.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/quick-sort.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */


function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */


function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.
  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.
    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;
    swap(ary, pivotIndex, r);
    var pivot = ary[r]; // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.

    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1; // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */


exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/source-map-consumer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/source-map-consumer.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(/*! ./util */ "./node_modules/source-map-support/node_modules/source-map/lib/util.js");

var binarySearch = __webpack_require__(/*! ./binary-search */ "./node_modules/source-map-support/node_modules/source-map/lib/binary-search.js");

var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/source-map-support/node_modules/source-map/lib/array-set.js").ArraySet;

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/source-map-support/node_modules/source-map/lib/base64-vlq.js");

var quickSort = __webpack_require__(/*! ./quick-sort */ "./node_modules/source-map-support/node_modules/source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function (aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */


SourceMapConsumer.prototype._version = 3; // `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */

SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;

  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;

    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;

    default:
      throw new Error("Unknown order of iteration.");
  }

  var sourceRoot = this.sourceRoot;
  mappings.map(function (mapping) {
    var source = mapping.source === null ? null : this._sources.at(mapping.source);
    source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
    return {
      source: source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : this._names.at(mapping.name)
    };
  }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */


SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util.getArg(aArgs, 'line'); // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
  // returns the index of the closest mapping less than the needle. By
  // setting needle.originalColumn to 0, we thus find the last mapping for
  // the given line, provided such a mapping exists.

  var needle = {
    source: util.getArg(aArgs, 'source'),
    originalLine: line,
    originalColumn: util.getArg(aArgs, 'column', 0)
  };
  needle.source = this._findSourceIndex(needle.source);

  if (needle.source < 0) {
    return [];
  }

  var mappings = [];

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (aArgs.column === undefined) {
      var originalLine = mapping.originalLine; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we found. Since
      // mappings are sorted, this is guaranteed to find all mappings for
      // the line we found.

      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we were searching for.
      // Since mappings are sorted, this is guaranteed to find all mappings for
      // the line we are searching for.

      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }

  return mappings;
};

exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */

function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources'); // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.

  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null); // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources.map(String) // Some source maps produce relative source paths like "./foo.js" instead of
  // "foo.js".  Normalize these first so that future comparisons will succeed.
  // See bugzil.la/1090768.
  .map(util.normalize) // Always ensure that absolute sources are internally stored relative to
  // the source root, if the source root is absolute. Not doing this would
  // be particularly problematic when the source root is a prefix of the
  // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
  .map(function (source) {
    return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
  }); // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.

  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */

BasicSourceMapConsumer.prototype._findSourceIndex = function (aSource) {
  var relativeSource = aSource;

  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  } // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.


  var i;

  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */


BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
  smc.file = aSourceMap._file;
  smc._sourceMapURL = aSourceMapURL;
  smc._absoluteSources = smc._sources.toArray().map(function (s) {
    return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
  }); // Because we are modifying the entries (by converting string sources and
  // names to indices into the sources and names ArraySets), we have to make
  // a copy of the entry or else bad things happen. Shared mutable state
  // strikes again! See github issue #191.

  var generatedMappings = aSourceMap._mappings.toArray().slice();

  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];

  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;

    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;

      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }

      destOriginalMappings.push(destMapping);
    }

    destGeneratedMappings.push(destMapping);
  }

  quickSort(smc.__originalMappings, util.compareByOriginalPositions);
  return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */


BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */

function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var cachedSegments = {};
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, str, segment, end, value;

  while (index < length) {
    if (aStr.charAt(index) === ';') {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
    } else if (aStr.charAt(index) === ',') {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine; // Because each offset is encoded relative to the previous one,
      // many segments often have the same encoding. We can exploit this
      // fact by caching the parsed variable length fields of each segment,
      // allowing us to avoid a second parse if we encounter the same
      // segment again.

      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }

      str = aStr.slice(index, end);
      segment = cachedSegments[str];

      if (segment) {
        index += str.length;
      } else {
        segment = [];

        while (index < end) {
          base64VLQ.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }

        if (segment.length === 2) {
          throw new Error('Found a source, but no line and column');
        }

        if (segment.length === 3) {
          throw new Error('Found a source and line, but no column');
        }

        cachedSegments[str] = segment;
      } // Generated column.


      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;

      if (segment.length > 1) {
        // Original source.
        mapping.source = previousSource + segment[1];
        previousSource += segment[1]; // Original line.

        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine; // Lines are stored 0-based

        mapping.originalLine += 1; // Original column.

        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;

        if (segment.length > 4) {
          // Original name.
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }

      generatedMappings.push(mapping);

      if (typeof mapping.originalLine === 'number') {
        originalMappings.push(mapping);
      }
    }
  }

  quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = generatedMappings;
  quickSort(originalMappings, util.compareByOriginalPositions);
  this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */


BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  // To return the position we are searching for, we must first find the
  // mapping for the given position and then return the opposite position it
  // points to. Because the mappings are sorted, we can use binary search to
  // find the best mapping.
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
  }

  if (aNeedle[aColumnName] < 0) {
    throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
  }

  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */


BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index]; // Mappings do not contain a field for the last generated columnt. We
    // can come up with an optimistic estimate, however, by assuming that
    // mappings are contiguous (i.e. given two consecutive mappings, the
    // first mapping ends where the second one starts).

    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];

      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    } // The last mapping for each line spans the entire line.


    mapping.lastGeneratedColumn = Infinity;
  }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */


BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._generatedMappings[index];

    if (mapping.generatedLine === needle.generatedLine) {
      var source = util.getArg(mapping, 'source', null);

      if (source !== null) {
        source = this._sources.at(source);
        source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
      }

      var name = util.getArg(mapping, 'name', null);

      if (name !== null) {
        name = this._names.at(name);
      }

      return {
        source: source,
        line: util.getArg(mapping, 'originalLine', null),
        column: util.getArg(mapping, 'originalColumn', null),
        name: name
      };
    }
  }

  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }

  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (sc) {
    return sc == null;
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }

  var index = this._findSourceIndex(aSource);

  if (index >= 0) {
    return this.sourcesContent[index];
  }

  var relativeSource = aSource;

  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  var url;

  if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
    // XXX: file:// URIs and absolute paths lead to unexpected behavior for
    // many users. We can help them out when they expect file:// URIs to
    // behave like it would if they were running a local HTTP server. See
    // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
    var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");

    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }

    if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
  } // This function is used recursively from
  // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
  // don't want to throw if we can't find the source - we just want to
  // return null, so we provide a flag to exit gracefully.


  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + relativeSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */


BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util.getArg(aArgs, 'source');
  source = this._findSourceIndex(source);

  if (source < 0) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }

  var needle = {
    source: source,
    originalLine: util.getArg(aArgs, 'line'),
    originalColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (mapping.source === needle.source) {
      return {
        line: util.getArg(mapping, 'generatedLine', null),
        column: util.getArg(mapping, 'generatedColumn', null),
        lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
      };
    }
  }

  return {
    line: null,
    column: null,
    lastColumn: null
  };
};

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */

function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }

    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }

    lastOffset = offset;
    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    };
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */

IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];

    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }

    return sources;
  }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */

IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  }; // Find the section containing the generated position we're trying to map
  // to an original position.

  var sectionIndex = binarySearch.search(needle, this._sections, function (needle, section) {
    var cmp = needle.generatedLine - section.generatedOffset.generatedLine;

    if (cmp) {
      return cmp;
    }

    return needle.generatedColumn - section.generatedOffset.generatedColumn;
  });
  var section = this._sections[sectionIndex];

  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }

  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function (s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);

    if (content) {
      return content;
    }
  }

  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */


IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i]; // Only consider this section if the requested source is in the list of
    // sources of the consumer.

    if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
      continue;
    }

    var generatedPosition = section.consumer.generatedPositionFor(aArgs);

    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }

  return {
    line: null,
    column: null
  };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];

  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;

    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];

      var source = section.consumer._sources.at(mapping.source);

      source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);

      this._sources.add(source);

      source = this._sources.indexOf(source);
      var name = null;

      if (mapping.name) {
        name = section.consumer._names.at(mapping.name);

        this._names.add(name);

        name = this._names.indexOf(name);
      } // The mappings coming from the consumer for the section have
      // generated positions relative to the start of the section, so we
      // need to offset them to be relative to the start of the concatenated
      // generated file.


      var adjustedMapping = {
        source: source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: name
      };

      this.__generatedMappings.push(adjustedMapping);

      if (typeof adjustedMapping.originalLine === 'number') {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }

  quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util.compareByOriginalPositions);
};

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/source-map-generator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/source-map-generator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/source-map-support/node_modules/source-map/lib/base64-vlq.js");

var util = __webpack_require__(/*! ./util */ "./node_modules/source-map-support/node_modules/source-map/lib/util.js");

var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/source-map-support/node_modules/source-map/lib/array-set.js").ArraySet;

var MappingList = __webpack_require__(/*! ./mapping-list */ "./node_modules/source-map-support/node_modules/source-map/lib/mapping-list.js").MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */


function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }

  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */

SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
  var sourceRoot = aSourceMapConsumer.sourceRoot;
  var generator = new SourceMapGenerator({
    file: aSourceMapConsumer.file,
    sourceRoot: sourceRoot
  });
  aSourceMapConsumer.eachMapping(function (mapping) {
    var newMapping = {
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn
      }
    };

    if (mapping.source != null) {
      newMapping.source = mapping.source;

      if (sourceRoot != null) {
        newMapping.source = util.relative(sourceRoot, newMapping.source);
      }

      newMapping.original = {
        line: mapping.originalLine,
        column: mapping.originalColumn
      };

      if (mapping.name != null) {
        newMapping.name = mapping.name;
      }
    }

    generator.addMapping(newMapping);
  });
  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var sourceRelative = sourceFile;

    if (sourceRoot !== null) {
      sourceRelative = util.relative(sourceRoot, sourceFile);
    }

    if (!generator._sources.has(sourceRelative)) {
      generator._sources.add(sourceRelative);
    }

    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      generator.setSourceContent(sourceFile, content);
    }
  });
  return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */


SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
  var generated = util.getArg(aArgs, 'generated');
  var original = util.getArg(aArgs, 'original', null);
  var source = util.getArg(aArgs, 'source', null);
  var name = util.getArg(aArgs, 'name', null);

  if (!this._skipValidation) {
    this._validateMapping(generated, original, source, name);
  }

  if (source != null) {
    source = String(source);

    if (!this._sources.has(source)) {
      this._sources.add(source);
    }
  }

  if (name != null) {
    name = String(name);

    if (!this._names.has(name)) {
      this._names.add(name);
    }
  }

  this._mappings.add({
    generatedLine: generated.line,
    generatedColumn: generated.column,
    originalLine: original != null && original.line,
    originalColumn: original != null && original.column,
    source: source,
    name: name
  });
};
/**
 * Set the source content for a source file.
 */


SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
  var source = aSourceFile;

  if (this._sourceRoot != null) {
    source = util.relative(this._sourceRoot, source);
  }

  if (aSourceContent != null) {
    // Add the source content to the _sourcesContents map.
    // Create a new _sourcesContents map if the property is null.
    if (!this._sourcesContents) {
      this._sourcesContents = Object.create(null);
    }

    this._sourcesContents[util.toSetString(source)] = aSourceContent;
  } else if (this._sourcesContents) {
    // Remove the source file from the _sourcesContents map.
    // If the _sourcesContents map is empty, set the property to null.
    delete this._sourcesContents[util.toSetString(source)];

    if (Object.keys(this._sourcesContents).length === 0) {
      this._sourcesContents = null;
    }
  }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */


SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
  var sourceFile = aSourceFile; // If aSourceFile is omitted, we will use the file property of the SourceMap

  if (aSourceFile == null) {
    if (aSourceMapConsumer.file == null) {
      throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' + 'or the source map\'s "file" property. Both were omitted.');
    }

    sourceFile = aSourceMapConsumer.file;
  }

  var sourceRoot = this._sourceRoot; // Make "sourceFile" relative if an absolute Url is passed.

  if (sourceRoot != null) {
    sourceFile = util.relative(sourceRoot, sourceFile);
  } // Applying the SourceMap can add and remove items from the sources and
  // the names array.


  var newSources = new ArraySet();
  var newNames = new ArraySet(); // Find mappings for the "sourceFile"

  this._mappings.unsortedForEach(function (mapping) {
    if (mapping.source === sourceFile && mapping.originalLine != null) {
      // Check if it can be mapped by the source map, then update the mapping.
      var original = aSourceMapConsumer.originalPositionFor({
        line: mapping.originalLine,
        column: mapping.originalColumn
      });

      if (original.source != null) {
        // Copy mapping
        mapping.source = original.source;

        if (aSourceMapPath != null) {
          mapping.source = util.join(aSourceMapPath, mapping.source);
        }

        if (sourceRoot != null) {
          mapping.source = util.relative(sourceRoot, mapping.source);
        }

        mapping.originalLine = original.line;
        mapping.originalColumn = original.column;

        if (original.name != null) {
          mapping.name = original.name;
        }
      }
    }

    var source = mapping.source;

    if (source != null && !newSources.has(source)) {
      newSources.add(source);
    }

    var name = mapping.name;

    if (name != null && !newNames.has(name)) {
      newNames.add(name);
    }
  }, this);

  this._sources = newSources;
  this._names = newNames; // Copy sourcesContents of applied map.

  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aSourceMapPath != null) {
        sourceFile = util.join(aSourceMapPath, sourceFile);
      }

      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }

      this.setSourceContent(sourceFile, content);
    }
  }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */


SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
  // When aOriginal is truthy but has empty values for .line and .column,
  // it is most likely a programmer error. In this case we throw a very
  // specific error message to try to guide them the right way.
  // For example: https://github.com/Polymer/polymer-bundler/pull/519
  if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
    throw new Error('original.line and original.column are not numbers -- you probably meant to omit ' + 'the original mapping entirely and only map the generated position. If so, pass ' + 'null for the original mapping instead of an object with empty or null values.');
  }

  if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
    // Case 1.
    return;
  } else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
    // Cases 2 and 3.
    return;
  } else {
    throw new Error('Invalid mapping: ' + JSON.stringify({
      generated: aGenerated,
      source: aSource,
      original: aOriginal,
      name: aName
    }));
  }
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */


SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
  var previousGeneratedColumn = 0;
  var previousGeneratedLine = 1;
  var previousOriginalColumn = 0;
  var previousOriginalLine = 0;
  var previousName = 0;
  var previousSource = 0;
  var result = '';
  var next;
  var mapping;
  var nameIdx;
  var sourceIdx;

  var mappings = this._mappings.toArray();

  for (var i = 0, len = mappings.length; i < len; i++) {
    mapping = mappings[i];
    next = '';

    if (mapping.generatedLine !== previousGeneratedLine) {
      previousGeneratedColumn = 0;

      while (mapping.generatedLine !== previousGeneratedLine) {
        next += ';';
        previousGeneratedLine++;
      }
    } else {
      if (i > 0) {
        if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
          continue;
        }

        next += ',';
      }
    }

    next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
    previousGeneratedColumn = mapping.generatedColumn;

    if (mapping.source != null) {
      sourceIdx = this._sources.indexOf(mapping.source);
      next += base64VLQ.encode(sourceIdx - previousSource);
      previousSource = sourceIdx; // lines are stored 0-based in SourceMap spec version 3

      next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
      previousOriginalLine = mapping.originalLine - 1;
      next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
      previousOriginalColumn = mapping.originalColumn;

      if (mapping.name != null) {
        nameIdx = this._names.indexOf(mapping.name);
        next += base64VLQ.encode(nameIdx - previousName);
        previousName = nameIdx;
      }
    }

    result += next;
  }

  return result;
};

SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
  return aSources.map(function (source) {
    if (!this._sourcesContents) {
      return null;
    }

    if (aSourceRoot != null) {
      source = util.relative(aSourceRoot, source);
    }

    var key = util.toSetString(source);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
  }, this);
};
/**
 * Externalize the source map.
 */


SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
  var map = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };

  if (this._file != null) {
    map.file = this._file;
  }

  if (this._sourceRoot != null) {
    map.sourceRoot = this._sourceRoot;
  }

  if (this._sourcesContents) {
    map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
  }

  return map;
};
/**
 * Render the source map being generated to a string.
 */


SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
  return JSON.stringify(this.toJSON());
};

exports.SourceMapGenerator = SourceMapGenerator;

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/source-node.js":
/*!************************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/source-node.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "./node_modules/source-map-support/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;

var util = __webpack_require__(/*! ./util */ "./node_modules/source-map-support/node_modules/source-map/lib/util.js"); // Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).


var REGEX_NEWLINE = /(\r?\n)/; // Newline character code for charCodeAt() comparisons

var NEWLINE_CODE = 10; // Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!

var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */

function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */


SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
  // The SourceNode we want to fill with the generated code
  // and the SourceMap
  var node = new SourceNode(); // All even indices of this array are one line of the generated code,
  // while all odd indices are the newlines between two adjacent lines
  // (since `REGEX_NEWLINE` captures its match).
  // Processed fragments are accessed by calling `shiftNextLine`.

  var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
  var remainingLinesIndex = 0;

  var shiftNextLine = function () {
    var lineContents = getNextLine(); // The last line of a file might not have a newline.

    var newLine = getNextLine() || "";
    return lineContents + newLine;

    function getNextLine() {
      return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
    }
  }; // We need to remember the position of "remainingLines"


  var lastGeneratedLine = 1,
      lastGeneratedColumn = 0; // The generate SourceNodes we need a code range.
  // To extract it current and last mapping is used.
  // Here we store the last mapping.

  var lastMapping = null;
  aSourceMapConsumer.eachMapping(function (mapping) {
    if (lastMapping !== null) {
      // We add the code from "lastMapping" to "mapping":
      // First check if there is a new line in between.
      if (lastGeneratedLine < mapping.generatedLine) {
        // Associate first line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        lastGeneratedLine++;
        lastGeneratedColumn = 0; // The remaining code is added without mapping
      } else {
        // There is no new line in between.
        // Associate the code between "lastGeneratedColumn" and
        // "mapping.generatedColumn" with "lastMapping"
        var nextLine = remainingLines[remainingLinesIndex] || '';
        var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
        addMappingWithCode(lastMapping, code); // No more remaining code, continue

        lastMapping = mapping;
        return;
      }
    } // We add the generated code until the first mapping
    // to the SourceNode without any mapping.
    // Each line is added as separate string.


    while (lastGeneratedLine < mapping.generatedLine) {
      node.add(shiftNextLine());
      lastGeneratedLine++;
    }

    if (lastGeneratedColumn < mapping.generatedColumn) {
      var nextLine = remainingLines[remainingLinesIndex] || '';
      node.add(nextLine.substr(0, mapping.generatedColumn));
      remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
      lastGeneratedColumn = mapping.generatedColumn;
    }

    lastMapping = mapping;
  }, this); // We have processed all mappings.

  if (remainingLinesIndex < remainingLines.length) {
    if (lastMapping) {
      // Associate the remaining code in the current line with "lastMapping"
      addMappingWithCode(lastMapping, shiftNextLine());
    } // and add the remaining lines without any mapping


    node.add(remainingLines.splice(remainingLinesIndex).join(""));
  } // Copy sourcesContent into SourceNode


  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aRelativePath != null) {
        sourceFile = util.join(aRelativePath, sourceFile);
      }

      node.setSourceContent(sourceFile, content);
    }
  });
  return node;

  function addMappingWithCode(mapping, code) {
    if (mapping === null || mapping.source === undefined) {
      node.add(code);
    } else {
      var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
      node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
    }
  }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length - 1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;

  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];

    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    } else {
      if (chunk !== '') {
        aFn(chunk, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }
  }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */


SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;

  if (len > 0) {
    newChildren = [];

    for (i = 0; i < len - 1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }

    newChildren.push(this.children[i]);
    this.children = newChildren;
  }

  return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */


SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];

  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  } else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  } else {
    this.children.push(''.replace(aPattern, aReplacement));
  }

  return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */


SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
  this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
  for (var i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i][isSourceNode]) {
      this.children[i].walkSourceContents(aFn);
    }
  }

  var sources = Object.keys(this.sourceContents);

  for (var i = 0, len = sources.length; i < len; i++) {
    aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
  }
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */


SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */


SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;

    if (original.source !== null && original.line !== null && original.column !== null) {
      if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }

      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }

    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0; // Mappings end at eol

        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });
  return {
    code: generated.code,
    map: map
  };
};

exports.SourceNode = SourceNode;

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/lib/util.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/lib/util.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}

exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);

  if (!match) {
    return null;
  }

  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}

exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';

  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }

  url += '//';

  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }

  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }

  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }

  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }

  return url;
}

exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */

function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);

  if (url) {
    if (!url.path) {
      return aPath;
    }

    path = url.path;
  }

  var isAbsolute = exports.isAbsolute(path);
  var parts = path.split(/\/+/);

  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];

    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }

  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }

  return path;
}

exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */

function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  if (aPath === "") {
    aPath = ".";
  }

  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);

  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  } // `join(foo, '//www.example.org')`


  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }

    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  } // `join('http://', 'www.example.com')`


  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }

  return joined;
}

exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */


function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, ''); // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.

  var level = 0;

  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");

    if (index < 0) {
      return aPath;
    } // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.


    aRoot = aRoot.slice(0, index);

    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  } // Make sure we add a "../" for each component we removed from the root.


  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}

exports.relative = relative;

var supportsNullProto = function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}();

function identity(s) {
  return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */


function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}

exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}

exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9
  /* "__proto__".length */
  ) {
      return false;
    }

  if (s.charCodeAt(length - 1) !== 95
  /* '_' */
  || s.charCodeAt(length - 2) !== 95
  /* '_' */
  || s.charCodeAt(length - 3) !== 111
  /* 'o' */
  || s.charCodeAt(length - 4) !== 116
  /* 't' */
  || s.charCodeAt(length - 5) !== 111
  /* 'o' */
  || s.charCodeAt(length - 6) !== 114
  /* 'r' */
  || s.charCodeAt(length - 7) !== 112
  /* 'p' */
  || s.charCodeAt(length - 8) !== 95
  /* '_' */
  || s.charCodeAt(length - 9) !== 95
  /* '_' */
  ) {
      return false;
    }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36
    /* '$' */
    ) {
        return false;
      }
  }

  return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */


function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */

function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */


function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */

function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}

exports.parseSourceMapInput = parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */

function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    } // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.


    sourceURL = sourceRoot + sourceURL;
  } // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).


  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);

    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }

    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');

      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }

    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}

exports.computeSourceURL = computeSourceURL;

/***/ }),

/***/ "./node_modules/source-map-support/node_modules/source-map/source-map.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/source-map-support/node_modules/source-map/source-map.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "./node_modules/source-map-support/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "./node_modules/source-map-support/node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "./node_modules/source-map-support/node_modules/source-map/lib/source-node.js").SourceNode;

/***/ }),

/***/ "./node_modules/source-map-support/register.js":
/*!*****************************************************!*\
  !*** ./node_modules/source-map-support/register.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ */ "./node_modules/source-map-support/source-map-support.js").install();

/***/ }),

/***/ "./node_modules/source-map-support/source-map-support.js":
/*!***************************************************************!*\
  !*** ./node_modules/source-map-support/source-map-support.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SourceMapConsumer = __webpack_require__(/*! source-map */ "./node_modules/source-map-support/node_modules/source-map/source-map.js").SourceMapConsumer;

var path = __webpack_require__(/*! path */ "path");

var fs;

try {
  fs = __webpack_require__(/*! fs */ "fs");

  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(/*! buffer-from */ "./node_modules/buffer-from/index.js"); // Only install once if called multiple times


var errorFormatterInstalled = false;
var uncaughtShimInstalled = false; // If true, the caches are reset before a stack trace formatting operation

var emptyCacheBetweenOperations = false; // Supports {browser, node, auto}

var environment = "auto"; // Maps a file path to a string containing the file contents

var fileContentsCache = {}; // Maps a file path to a source map for that file

var sourceMapCache = {}; // Regex for detecting source maps

var reSourceMap = /^data:application\/json[^,]+base64,/; // Priority list of retrieve handlers

var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser") return true;
  if (environment === "node") return false;
  return typeof window !== 'undefined' && typeof XMLHttpRequest === 'function' && !(window.require && window.module && window.process && window.process.type === "renderer");
}

function hasGlobalProcessEventEmitter() {
  return typeof process === 'object' && process !== null && typeof process.on === 'function';
}

function handlerExec(list) {
  return function (arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);

      if (ret) {
        return ret;
      }
    }

    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);
retrieveFileHandlers.push(function (path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();

  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function (protocol, drive) {
      return drive ? '' : // file:///C:/dir/file -> C:/dir/file
      '/'; // file:///root-dir/file -> /root-dir/file
    });
  }

  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';

  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path,
      /** async */
      false);
      xhr.send(null);

      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
}); // Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")

function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);

  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }

  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', source, false);
      xhr.send(null);
      fileData = xhr.readyState === 4 ? xhr.responseText : null; // Support providing a sourceMappingURL via the SourceMap header

      var sourceMapHeader = xhr.getResponseHeader("SourceMap") || xhr.getResponseHeader("X-SourceMap");

      if (sourceMapHeader) {
        return sourceMapHeader;
      }
    } catch (e) {}
  } // Get the URL of the source map


  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/mg; // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.

  var lastMatch, match;

  while (match = re.exec(fileData)) lastMatch = match;

  if (!lastMatch) return null;
  return lastMatch[1];
}

; // Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).

var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function (source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null; // Read the contents of the source map

  var sourceMapData;

  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];

  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);

    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      }; // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.

      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function (source, i) {
          var contents = sourceMap.map.sourcesContent[i];

          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  } // Resolve the source URL relative to the URL of the source map


  if (sourceMap && sourceMap.map) {
    var originalPosition = sourceMap.map.originalPositionFor(position); // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.

    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
} // Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js


function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);

  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' + position.line + ':' + (position.column + 1) + ')';
  } // Parse nested eval() calls using recursion


  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);

  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  } // Make sure we still return useful information if we didn't find anything


  return origin;
} // This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.


function CallSiteToString() {
  var fileName;
  var fileLocation = "";

  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();

    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", "; // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }

    var lineNumber = this.getLineNumber();

    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();

      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);

  if (isMethodCall) {
    var typeName = this.getTypeName(); // Fixes shim to be backward compatable with Node v0 to v4

    if (typeName === "[object Object]") {
      typeName = "null";
    }

    var methodName = this.getMethodName();

    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }

      line += functionName;

      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }

  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }

  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function (name) {
    object[name] = /^(?:is|get)/.test(name) ? function () {
      return frame[name].call(frame);
    } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame) {
  if (frame.isNative()) {
    return frame;
  } // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead


  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();

  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1; // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36

    var headerLength = 62;

    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;

    frame.getFunctionName = function () {
      return position.name || originalFunctionName();
    };

    frame.getFileName = function () {
      return position.source;
    };

    frame.getLineNumber = function () {
      return position.line;
    };

    frame.getColumnNumber = function () {
      return position.column + 1;
    };

    frame.getScriptNameOrSourceURL = function () {
      return position.source;
    };

    return frame;
  } // Code called using eval() needs special handling


  var origin = frame.isEval() && frame.getEvalOrigin();

  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);

    frame.getEvalOrigin = function () {
      return origin;
    };

    return frame;
  } // If we get here then we were unable to change the source position


  return frame;
} // This function is part of the V8 stack trace API, for more info see:
// http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi


function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  return error + stack.map(function (frame) {
    return '\n    at ' + wrapCallSite(frame);
  }).join('');
} // Generate position and snippet of original source with pointer


function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);

  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3]; // Support the inline sourceContents inside the source map

    var contents = fileContentsCache[source]; // Support files on disk

    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    } // Format the line from the original source code like node does


    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];

      if (code) {
        return source + ':' + line + '\n' + code + '\n' + new Array(column).join(' ') + '^';
      }
    }
  }

  return null;
}

function printErrorAndExit(error) {
  var source = getErrorSource(error); // Ensure error is printed synchronously and not truncated

  if (process.stderr._handle && process.stderr._handle.setBlocking) {
    process.stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
}

function shimEmitUncaughtException() {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = arguments[1] && arguments[1].stack;
      var hasListeners = this.listeners(type).length > 0;

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);
exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function (options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;

    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}");
    }
  } // Allow sources to be found by methods other than reading the files
  // directly from disk.


  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  } // Allow source maps to be found by methods other than reading the files
  // directly from disk.


  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  } // Support runtime transpilers that include inline source maps


  if (options.hookRequire && !isInBrowser()) {
    var Module;

    try {
      Module = __webpack_require__(/*! module */ "module");
    } catch (err) {// NOP: Loading in catch block to convert webpack error to warning.
    }

    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function (content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  } // Configure options


  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ? options.emptyCacheBetweenOperations : false;
  } // Install the error reformatter


  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ? options.handleUncaughtExceptions : true; // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.

    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function () {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;
  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);
};

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

/***/ "./src/scripts/move-winpty-binaries.js":
/*!*********************************************!*\
  !*** ./src/scripts/move-winpty-binaries.js ***!
  \*********************************************/
/*! exports provided: mkdtempSyncForRenamingDLLs, main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkdtempSyncForRenamingDLLs", function() { return mkdtempSyncForRenamingDLLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs-extra */ "./node_modules/fs-extra/lib/index.js");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
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

  var tmp = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(atomHome, 'tmp');
  if (!fs_extra__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(tmp)) fs_extra__WEBPACK_IMPORTED_MODULE_1___default.a.mkdirSync(tmp);
  return fs_extra__WEBPACK_IMPORTED_MODULE_1___default.a.mkdtempSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(tmp, 'moved-dll-'));
}

function main() {
  console.log('Executing script at \'' + path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(__filename) + '\''); // Proceed only for Windows platforms.

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

  var homeDir = os__WEBPACK_IMPORTED_MODULE_2___default.a.homedir();
  console.log('homeDir = \'' + homeDir + '\' from os.homedir()');
  var atomHome = process.env.ATOM_HOME;

  if (atomHome) {
    console.log('Using ATOM_HOME environment variable.');
    atomHome = path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(atomHome);
  } else {
    atomHome = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(homeDir, '.atom');

    if (!fs_extra__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(atomHome)) {
      console.log('atomHome = \'' + atomHome + '\' doesn\'t exist.');
      console.log('Checking if home directory is set to .node-gyp path');
      var regexp = new RegExp(path__WEBPACK_IMPORTED_MODULE_3___default.a.join('.atom', '.node-gyp').replace(/\.\\/g, '\\$&') + '$');

      if (regexp.test(homeDir)) {
        homeDir = path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(homeDir, '..', '..'));
        console.log('Setting homeDir = \'' + homeDir + '\' from two directories lower from previous homeDir.');
        atomHome = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(homeDir, '.atom');
        console.log('New atomHome = \'' + atomHome + '\'.');
      }
    }

    if (!fs_extra__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(atomHome)) {
      console.log('Attempting use of HOMEDRIVE and HOMEPATH environment variables.');
      var homeDrive = process.env.HOMEDRIVE;
      var homePath = process.env.HOMEPATH;

      if (homeDrive && homePath) {
        homeDir = homeDrive + path__WEBPACK_IMPORTED_MODULE_3___default.a.sep + homePath;
        console.log('homeDir = \'' + homeDir + '\' derived from HOMEDRIVE and HOMEPATH environment variables.');
      }

      atomHome = path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(homeDir, '.atom'));
    }
  }

  console.log('Using atomHome = \'' + atomHome + '\'');
  var atomXtermPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(atomHome, 'packages', 'atom-xterm');
  console.log('Using atomXtermPath = \'' + atomXtermPath + '\'');

  if (!fs_extra__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(atomXtermPath)) {
    console.log('atom-xterm not installed, exiting.');
    process.exit(0);
  } // NOTE: This script will move binaries for the 'node-pty' module. Although
  // 'node-pty' has been replaced with 'node-pty-prebuilt', this script will
  // still move the binaries in the 'node-pty' module to make upgrades
  // smoother for Windows users.


  var nodePtyPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(atomXtermPath, 'node_modules', 'node-pty');
  console.log('Using nodePtyPath = \'' + nodePtyPath + '\'');
  var nodePtyPrebuiltPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(atomXtermPath, 'node_modules', 'node-pty-prebuilt');
  console.log('Using nodePtyPrebuiltPath = \'' + nodePtyPrebuiltPath + '\''); // Move the directories containing the Windows binaries under a tmp
  // directory.

  var _arr = [nodePtyPath, nodePtyPrebuiltPath];

  for (var _i = 0; _i < _arr.length; _i++) {
    var nodePtyModulePath = _arr[_i];
    var releaseBuildPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(nodePtyModulePath, 'build', 'Release');
    var debugBuildPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(nodePtyModulePath, 'build', 'Debug');
    var _arr2 = [releaseBuildPath, debugBuildPath];

    for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
      var buildPath = _arr2[_i2];
      console.log("Checking if '".concat(buildPath, "' exists"));

      if (fs_extra__WEBPACK_IMPORTED_MODULE_1___default.a.existsSync(buildPath)) {
        var tmpdir = mkdtempSyncForRenamingDLLs(atomHome);
        var newPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(tmpdir, path__WEBPACK_IMPORTED_MODULE_3___default.a.basename(buildPath));
        console.log("Moving '".concat(buildPath, "' to '").concat(newPath, "'."));
        fs_extra__WEBPACK_IMPORTED_MODULE_1___default.a.renameSync(buildPath, newPath);
      }
    }
  }
}


main();
/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

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

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci1mcm9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvY29weS1zeW5jL2NvcHktc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2NvcHktc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2NvcHkvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2NvcHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9lbXB0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2Vuc3VyZS9maWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvZW5zdXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvZW5zdXJlL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9lbnN1cmUvc3ltbGluay1wYXRocy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2Vuc3VyZS9zeW1saW5rLXR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9lbnN1cmUvc3ltbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2ZzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9qc29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvanNvbi9qc29uZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2pzb24vb3V0cHV0LWpzb24tc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL2pzb24vb3V0cHV0LWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9ta2RpcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9ta2RpcnMvbWtkaXJzLXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZzLWV4dHJhL2xpYi9ta2RpcnMvbWtkaXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvbWtkaXJzL3dpbjMyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvbW92ZS1zeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvbW92ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL291dHB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL3BhdGgtZXhpc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvcmVtb3ZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvcmVtb3ZlL3JpbXJhZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnMtZXh0cmEvbGliL3V0aWwvYnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcy1leHRyYS9saWIvdXRpbC91dGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYWNlZnVsLWZzL2ZzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ncmFjZWZ1bC1mcy9ncmFjZWZ1bC1mcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3JhY2VmdWwtZnMvbGVnYWN5LXN0cmVhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dyYWNlZnVsLWZzL3BvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNvbmZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtc3VwcG9ydC9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYXJyYXktc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLXN1cHBvcnQvbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL2Jhc2U2NC12bHEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtc3VwcG9ydC9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLXN1cHBvcnQvbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL2JpbmFyeS1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtc3VwcG9ydC9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvbWFwcGluZy1saXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLXN1cHBvcnQvbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3F1aWNrLXNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtc3VwcG9ydC9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvc291cmNlLW1hcC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9zb3VyY2UtbWFwLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9zb3VyY2Utbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLXN1cHBvcnQvbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvc291cmNlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLXN1cHBvcnQvc291cmNlLW1hcC1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bml2ZXJzYWxpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW92ZS13aW5wdHktYmluYXJpZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29uc3RhbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJlYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOlsidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJpc01vZGVybiIsIkJ1ZmZlciIsImFsbG9jIiwiYWxsb2NVbnNhZmUiLCJmcm9tIiwiaXNBcnJheUJ1ZmZlciIsImlucHV0IiwiY2FsbCIsInNsaWNlIiwiZnJvbUFycmF5QnVmZmVyIiwib2JqIiwiYnl0ZU9mZnNldCIsImxlbmd0aCIsIm1heExlbmd0aCIsImJ5dGVMZW5ndGgiLCJSYW5nZUVycm9yIiwidW5kZWZpbmVkIiwiVWludDhBcnJheSIsImZyb21TdHJpbmciLCJzdHJpbmciLCJlbmNvZGluZyIsImlzRW5jb2RpbmciLCJUeXBlRXJyb3IiLCJidWZmZXJGcm9tIiwidmFsdWUiLCJlbmNvZGluZ09yT2Zmc2V0IiwibW9kdWxlIiwiZXhwb3J0cyIsImZzIiwicmVxdWlyZSIsInBhdGgiLCJta2RpcnBTeW5jIiwibWtkaXJzU3luYyIsInV0aW1lc1N5bmMiLCJ1dGltZXNNaWxsaXNTeW5jIiwibm90RXhpc3QiLCJTeW1ib2wiLCJjb3B5U3luYyIsInNyYyIsImRlc3QiLCJvcHRzIiwiZmlsdGVyIiwiY2xvYmJlciIsIm92ZXJ3cml0ZSIsInByZXNlcnZlVGltZXN0YW1wcyIsInByb2Nlc3MiLCJhcmNoIiwiY29uc29sZSIsIndhcm4iLCJkZXN0U3RhdCIsImNoZWNrUGF0aHMiLCJkZXN0UGFyZW50IiwiZGlybmFtZSIsImV4aXN0c1N5bmMiLCJzdGFydENvcHkiLCJnZXRTdGF0cyIsInN0YXRTeW5jIiwiZGVyZWZlcmVuY2UiLCJsc3RhdFN5bmMiLCJzcmNTdGF0IiwiaXNEaXJlY3RvcnkiLCJvbkRpciIsImlzRmlsZSIsImlzQ2hhcmFjdGVyRGV2aWNlIiwiaXNCbG9ja0RldmljZSIsIm9uRmlsZSIsImlzU3ltYm9saWNMaW5rIiwib25MaW5rIiwiY29weUZpbGUiLCJtYXlDb3B5RmlsZSIsInVubGlua1N5bmMiLCJlcnJvck9uRXhpc3QiLCJFcnJvciIsImNvcHlGaWxlU3luYyIsImNobW9kU3luYyIsIm1vZGUiLCJhdGltZSIsIm10aW1lIiwiY29weUZpbGVGYWxsYmFjayIsIkJVRl9MRU5HVEgiLCJfYnVmZiIsImZkciIsIm9wZW5TeW5jIiwiZmR3IiwicG9zIiwic2l6ZSIsImJ5dGVzUmVhZCIsInJlYWRTeW5jIiwid3JpdGVTeW5jIiwiZnV0aW1lc1N5bmMiLCJjbG9zZVN5bmMiLCJta0RpckFuZENvcHkiLCJjb3B5RGlyIiwibWtkaXJTeW5jIiwicmVhZGRpclN5bmMiLCJmb3JFYWNoIiwiaXRlbSIsImNvcHlEaXJJdGVtIiwic3JjSXRlbSIsImpvaW4iLCJkZXN0SXRlbSIsInJlc29sdmVkU3JjIiwicmVhZGxpbmtTeW5jIiwicmVzb2x2ZSIsImN3ZCIsInN5bWxpbmtTeW5jIiwicmVzb2x2ZWREZXN0IiwiZXJyIiwiY29kZSIsImlzU3JjU3ViZGlyIiwiY29weUxpbmsiLCJzcmNBcnJheSIsInNwbGl0Iiwic2VwIiwiZGVzdEFycmF5IiwicmVkdWNlIiwiYWNjIiwiY3VycmVudCIsImkiLCJjaGVja1N0YXRzIiwiaW5vIiwibWtkaXJwIiwibWtkaXJzIiwicGF0aEV4aXN0cyIsInV0aW1lcyIsInV0aW1lc01pbGxpcyIsImNvcHkiLCJjYiIsImhhbmRsZUZpbHRlciIsImNoZWNrUGFyZW50RGlyIiwiZGlyRXhpc3RzIiwib25JbmNsdWRlIiwiUHJvbWlzZSIsInRoZW4iLCJpbmNsdWRlIiwiZXJyb3IiLCJzdGF0IiwibHN0YXQiLCJ1bmxpbmsiLCJzZXREZXN0TW9kZUFuZFRpbWVzdGFtcHMiLCJycyIsImNyZWF0ZVJlYWRTdHJlYW0iLCJvbiIsIm9uY2UiLCJ3cyIsImNyZWF0ZVdyaXRlU3RyZWFtIiwicGlwZSIsImNobW9kIiwibWtkaXIiLCJyZWFkZGlyIiwiaXRlbXMiLCJjb3B5RGlySXRlbXMiLCJwb3AiLCJyZWFkbGluayIsInN5bWxpbmsiLCJzdGF0cyIsInUiLCJmcm9tQ2FsbGJhY2siLCJyZW1vdmUiLCJlbXB0eURpciIsImRpciIsImNhbGxiYWNrIiwibWFwIiwiZGVsZXRlSXRlbSIsImVtcHR5RGlyU3luYyIsInJlbW92ZVN5bmMiLCJlbXB0eWRpclN5bmMiLCJlbXB0eWRpciIsImNyZWF0ZUZpbGUiLCJmaWxlIiwibWFrZUZpbGUiLCJ3cml0ZUZpbGUiLCJjcmVhdGVGaWxlU3luYyIsImUiLCJ3cml0ZUZpbGVTeW5jIiwibGluayIsImVuc3VyZUZpbGUiLCJlbnN1cmVGaWxlU3luYyIsImNyZWF0ZUxpbmsiLCJjcmVhdGVMaW5rU3luYyIsImVuc3VyZUxpbmsiLCJlbnN1cmVMaW5rU3luYyIsImNyZWF0ZVN5bWxpbmsiLCJjcmVhdGVTeW1saW5rU3luYyIsImVuc3VyZVN5bWxpbmsiLCJlbnN1cmVTeW1saW5rU3luYyIsInNyY3BhdGgiLCJkc3RwYXRoIiwibWFrZUxpbmsiLCJkZXN0aW5hdGlvbkV4aXN0cyIsIm1lc3NhZ2UiLCJyZXBsYWNlIiwibGlua1N5bmMiLCJzeW1saW5rUGF0aHMiLCJpc0Fic29sdXRlIiwiZHN0ZGlyIiwicmVsYXRpdmVUb0RzdCIsImV4aXN0cyIsInJlbGF0aXZlIiwic3ltbGlua1BhdGhzU3luYyIsInN5bWxpbmtUeXBlIiwidHlwZSIsInN5bWxpbmtUeXBlU3luYyIsIl9ta2RpcnMiLCJfc3ltbGlua1BhdGhzIiwiX3N5bWxpbmtUeXBlIiwidG9Ec3QiLCJ0b0N3ZCIsImFwaSIsImtleSIsImtleXMiLCJtZXRob2QiLCJmaWxlbmFtZSIsInJlYWQiLCJmZCIsImJ1ZmZlciIsIm9mZnNldCIsInBvc2l0aW9uIiwicmVqZWN0Iiwid3JpdGUiLCJhcmdzIiwiYnl0ZXNXcml0dGVuIiwiYXNzaWduIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJwcm9taXNlcyIsImpzb25GaWxlIiwib3V0cHV0SnNvbiIsIm91dHB1dEpzb25TeW5jIiwib3V0cHV0SlNPTiIsIm91dHB1dEpTT05TeW5jIiwid3JpdGVKU09OIiwid3JpdGVKc29uIiwid3JpdGVKU09OU3luYyIsIndyaXRlSnNvblN5bmMiLCJyZWFkSlNPTiIsInJlYWRKc29uIiwicmVhZEpTT05TeW5jIiwicmVhZEpzb25TeW5jIiwicmVhZEZpbGUiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwib3B0aW9ucyIsIml0RG9lcyIsImVuc3VyZURpciIsImVuc3VyZURpclN5bmMiLCJpbnZhbGlkV2luMzJQYXRoIiwibzc3NyIsInBhcnNlSW50IiwicCIsIm1hZGUiLCJ4ZnMiLCJwbGF0Zm9ybSIsImVyckludmFsIiwidW1hc2siLCJlcnIwIiwiZXJyMSIsImVyIiwiZXIyIiwiZ2V0Um9vdFBhdGgiLCJub3JtYWxpemUiLCJJTlZBTElEX1BBVEhfQ0hBUlMiLCJycCIsInRlc3QiLCJtb3ZlU3luYyIsImFjY2Vzc1N5bmMiLCJ0cnlSZW5hbWVTeW5jIiwicmVuYW1lU3luYyIsIm1vdmVTeW5jQWNyb3NzRGV2aWNlIiwibW92ZURpclN5bmNBY3Jvc3NEZXZpY2UiLCJtb3ZlRmlsZVN5bmNBY3Jvc3NEZXZpY2UiLCJmbGFncyIsImZzdGF0U3luYyIsInRyeUNvcHlTeW5jIiwiaW5kZXhPZiIsImJhc2VuYW1lIiwibW92ZSIsImFjY2VzcyIsInN0IiwiZG9SZW5hbWUiLCJyZW5hbWUiLCJkZXN0RXhpc3RzIiwibW92ZUFjcm9zc0RldmljZSIsIm91dHB1dEZpbGUiLCJvdXRwdXRGaWxlU3luYyIsImZyb21Qcm9taXNlIiwiY2F0Y2giLCJwYXRoRXhpc3RzU3luYyIsInJpbXJhZiIsInN5bmMiLCJhc3NlcnQiLCJpc1dpbmRvd3MiLCJkZWZhdWx0cyIsIm1ldGhvZHMiLCJtIiwibWF4QnVzeVRyaWVzIiwiYnVzeVRyaWVzIiwic3RyaWN0RXF1YWwiLCJyaW1yYWZfIiwiQ0IiLCJ0aW1lIiwic2V0VGltZW91dCIsImZpeFdpbkVQRVJNIiwicm1kaXIiLCJlcjMiLCJmaXhXaW5FUEVSTVN5bmMiLCJybWRpclN5bmMiLCJvcmlnaW5hbEVyIiwicm1raWRzIiwiZmlsZXMiLCJuIiwiZXJyU3RhdGUiLCJmIiwicmltcmFmU3luYyIsInJta2lkc1N5bmMiLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwicmV0Iiwib3MiLCJoYXNNaWxsaXNSZXNTeW5jIiwidG1wZmlsZSIsIk1hdGgiLCJyYW5kb20iLCJ0bXBkaXIiLCJkIiwiaGFzTWlsbGlzUmVzIiwib3BlbiIsImZ1dGltZXMiLCJjbG9zZSIsInRpbWVSZW1vdmVNaWxsaXMiLCJ0aW1lc3RhbXAiLCJmbG9vciIsImdldFRpbWUiLCJmdXRpbWVzRXJyIiwiY2xvc2VFcnIiLCJjbG9uZSIsIl9fcHJvdG9fXyIsImNyZWF0ZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJwb2x5ZmlsbHMiLCJsZWdhY3kiLCJxdWV1ZSIsInV0aWwiLCJub29wIiwiZGVidWciLCJkZWJ1Z2xvZyIsImVudiIsIk5PREVfREVCVUciLCJmb3JtYXQiLCJhcHBseSIsImFyZ3VtZW50cyIsImVxdWFsIiwicGF0Y2giLCJURVNUX0dSQUNFRlVMX0ZTX0dMT0JBTF9QQVRDSCIsImZzJGNsb3NlIiwicmV0cnkiLCJmcyRjbG9zZVN5bmMiLCJydmFsIiwiZ3JhY2VmdWxpZnkiLCJGaWxlUmVhZFN0cmVhbSIsIlJlYWRTdHJlYW0iLCJGaWxlV3JpdGVTdHJlYW0iLCJXcml0ZVN0cmVhbSIsImZzJHJlYWRGaWxlIiwiZ28kcmVhZEZpbGUiLCJlbnF1ZXVlIiwiZnMkd3JpdGVGaWxlIiwiZ28kd3JpdGVGaWxlIiwiZnMkYXBwZW5kRmlsZSIsImFwcGVuZEZpbGUiLCJnbyRhcHBlbmRGaWxlIiwiZnMkcmVhZGRpciIsInB1c2giLCJnbyRyZWFkZGlyJGNiIiwiZ28kcmVhZGRpciIsInNvcnQiLCJ2ZXJzaW9uIiwic3Vic3RyIiwibGVnU3RyZWFtcyIsImZzJFJlYWRTdHJlYW0iLCJSZWFkU3RyZWFtJG9wZW4iLCJmcyRXcml0ZVN0cmVhbSIsIldyaXRlU3RyZWFtJG9wZW4iLCJ0aGF0IiwiYXV0b0Nsb3NlIiwiZGVzdHJveSIsImVtaXQiLCJmcyRvcGVuIiwiZ28kb3BlbiIsImVsZW0iLCJuYW1lIiwic2hpZnQiLCJTdHJlYW0iLCJzZWxmIiwicmVhZGFibGUiLCJwYXVzZWQiLCJidWZmZXJTaXplIiwiaW5kZXgiLCJzZXRFbmNvZGluZyIsInN0YXJ0IiwiZW5kIiwiSW5maW5pdHkiLCJuZXh0VGljayIsIl9yZWFkIiwid3JpdGFibGUiLCJidXN5IiwiX3F1ZXVlIiwiX29wZW4iLCJmbHVzaCIsImNvbnN0YW50cyIsIm9yaWdDd2QiLCJHUkFDRUZVTF9GU19QTEFURk9STSIsImNoZGlyIiwiaGFzT3duUHJvcGVydHkiLCJtYXRjaCIsInBhdGNoTGNobW9kIiwibHV0aW1lcyIsInBhdGNoTHV0aW1lcyIsImNob3duIiwiY2hvd25GaXgiLCJmY2hvd24iLCJsY2hvd24iLCJjaG1vZEZpeCIsImZjaG1vZCIsImxjaG1vZCIsImNob3duU3luYyIsImNob3duRml4U3luYyIsImZjaG93blN5bmMiLCJsY2hvd25TeW5jIiwiY2htb2RGaXhTeW5jIiwiZmNobW9kU3luYyIsImxjaG1vZFN5bmMiLCJzdGF0Rml4IiwiZnN0YXQiLCJzdGF0Rml4U3luYyIsInVpZCIsImdpZCIsImZzJHJlbmFtZSIsInRvIiwiYmFja29mZiIsInN0YXRlciIsImZzJHJlYWQiLCJjYWxsYmFja18iLCJlYWdDb3VudGVyIiwiXyIsIl9fIiwiZnMkcmVhZFN5bmMiLCJPX1dST05MWSIsIk9fU1lNTElOSyIsImVycjIiLCJ0aHJldyIsImF0IiwibXQiLCJsdXRpbWVzU3luYyIsIl9hIiwiX2IiLCJfYyIsIm9yaWciLCJ0YXJnZXQiLCJjaG93bkVyT2siLCJub25yb290IiwiZ2V0dWlkIiwiX2ZzIiwic2hvdWxkVGhyb3ciLCJ0aHJvd3MiLCJzdHJpcEJvbSIsIkpTT04iLCJwYXJzZSIsInJldml2ZXIiLCJjb250ZW50Iiwic3RyaW5naWZ5Iiwic3BhY2VzIiwiRU9MIiwic3RyIiwicmVwbGFjZXIiLCJpc0J1ZmZlciIsImpzb25maWxlIiwiaGFzIiwiaGFzTmF0aXZlTWFwIiwiTWFwIiwiQXJyYXlTZXQiLCJfYXJyYXkiLCJfc2V0IiwiZnJvbUFycmF5IiwiQXJyYXlTZXRfZnJvbUFycmF5IiwiYUFycmF5IiwiYUFsbG93RHVwbGljYXRlcyIsInNldCIsImxlbiIsImFkZCIsIkFycmF5U2V0X3NpemUiLCJBcnJheVNldF9hZGQiLCJhU3RyIiwic1N0ciIsInRvU2V0U3RyaW5nIiwiaXNEdXBsaWNhdGUiLCJpZHgiLCJBcnJheVNldF9oYXMiLCJBcnJheVNldF9pbmRleE9mIiwiQXJyYXlTZXRfYXQiLCJhSWR4IiwidG9BcnJheSIsIkFycmF5U2V0X3RvQXJyYXkiLCJiYXNlNjQiLCJWTFFfQkFTRV9TSElGVCIsIlZMUV9CQVNFIiwiVkxRX0JBU0VfTUFTSyIsIlZMUV9DT05USU5VQVRJT05fQklUIiwidG9WTFFTaWduZWQiLCJhVmFsdWUiLCJmcm9tVkxRU2lnbmVkIiwiaXNOZWdhdGl2ZSIsInNoaWZ0ZWQiLCJlbmNvZGUiLCJiYXNlNjRWTFFfZW5jb2RlIiwiZW5jb2RlZCIsImRpZ2l0IiwidmxxIiwiZGVjb2RlIiwiYmFzZTY0VkxRX2RlY29kZSIsImFJbmRleCIsImFPdXRQYXJhbSIsInN0ckxlbiIsInJlc3VsdCIsImNvbnRpbnVhdGlvbiIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJyZXN0IiwiaW50VG9DaGFyTWFwIiwibnVtYmVyIiwiY2hhckNvZGUiLCJiaWdBIiwiYmlnWiIsImxpdHRsZUEiLCJsaXR0bGVaIiwiemVybyIsIm5pbmUiLCJwbHVzIiwic2xhc2giLCJsaXR0bGVPZmZzZXQiLCJudW1iZXJPZmZzZXQiLCJHUkVBVEVTVF9MT1dFUl9CT1VORCIsIkxFQVNUX1VQUEVSX0JPVU5EIiwicmVjdXJzaXZlU2VhcmNoIiwiYUxvdyIsImFIaWdoIiwiYU5lZWRsZSIsImFIYXlzdGFjayIsImFDb21wYXJlIiwiYUJpYXMiLCJtaWQiLCJjbXAiLCJzZWFyY2giLCJnZW5lcmF0ZWRQb3NpdGlvbkFmdGVyIiwibWFwcGluZ0EiLCJtYXBwaW5nQiIsImxpbmVBIiwiZ2VuZXJhdGVkTGluZSIsImxpbmVCIiwiY29sdW1uQSIsImdlbmVyYXRlZENvbHVtbiIsImNvbHVtbkIiLCJjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZCIsIk1hcHBpbmdMaXN0IiwiX3NvcnRlZCIsIl9sYXN0IiwidW5zb3J0ZWRGb3JFYWNoIiwiTWFwcGluZ0xpc3RfZm9yRWFjaCIsImFDYWxsYmFjayIsImFUaGlzQXJnIiwiTWFwcGluZ0xpc3RfYWRkIiwiYU1hcHBpbmciLCJNYXBwaW5nTGlzdF90b0FycmF5Iiwic3dhcCIsImFyeSIsIngiLCJ5IiwidGVtcCIsInJhbmRvbUludEluUmFuZ2UiLCJsb3ciLCJoaWdoIiwicm91bmQiLCJkb1F1aWNrU29ydCIsImNvbXBhcmF0b3IiLCJyIiwicGl2b3RJbmRleCIsInBpdm90IiwiaiIsInEiLCJxdWlja1NvcnQiLCJiaW5hcnlTZWFyY2giLCJiYXNlNjRWTFEiLCJTb3VyY2VNYXBDb25zdW1lciIsImFTb3VyY2VNYXAiLCJhU291cmNlTWFwVVJMIiwic291cmNlTWFwIiwicGFyc2VTb3VyY2VNYXBJbnB1dCIsInNlY3Rpb25zIiwiSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyIiwiQmFzaWNTb3VyY2VNYXBDb25zdW1lciIsImZyb21Tb3VyY2VNYXAiLCJfdmVyc2lvbiIsIl9fZ2VuZXJhdGVkTWFwcGluZ3MiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiX3BhcnNlTWFwcGluZ3MiLCJfbWFwcGluZ3MiLCJzb3VyY2VSb290IiwiX19vcmlnaW5hbE1hcHBpbmdzIiwiX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IiLCJTb3VyY2VNYXBDb25zdW1lcl9jaGFySXNNYXBwaW5nU2VwYXJhdG9yIiwiYyIsIlNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MiLCJhU291cmNlUm9vdCIsIkdFTkVSQVRFRF9PUkRFUiIsIk9SSUdJTkFMX09SREVSIiwiZWFjaE1hcHBpbmciLCJTb3VyY2VNYXBDb25zdW1lcl9lYWNoTWFwcGluZyIsImFDb250ZXh0IiwiYU9yZGVyIiwiY29udGV4dCIsIm9yZGVyIiwibWFwcGluZ3MiLCJfZ2VuZXJhdGVkTWFwcGluZ3MiLCJfb3JpZ2luYWxNYXBwaW5ncyIsIm1hcHBpbmciLCJzb3VyY2UiLCJfc291cmNlcyIsImNvbXB1dGVTb3VyY2VVUkwiLCJfc291cmNlTWFwVVJMIiwib3JpZ2luYWxMaW5lIiwib3JpZ2luYWxDb2x1bW4iLCJfbmFtZXMiLCJhbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IiLCJTb3VyY2VNYXBDb25zdW1lcl9hbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IiLCJhQXJncyIsImxpbmUiLCJnZXRBcmciLCJuZWVkbGUiLCJfZmluZFNvdXJjZUluZGV4IiwiX2ZpbmRNYXBwaW5nIiwiY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMiLCJjb2x1bW4iLCJsYXN0Q29sdW1uIiwic291cmNlcyIsIm5hbWVzIiwic291cmNlc0NvbnRlbnQiLCJTdHJpbmciLCJfYWJzb2x1dGVTb3VyY2VzIiwicyIsImNvbnN1bWVyIiwiYVNvdXJjZSIsInJlbGF0aXZlU291cmNlIiwiU291cmNlTWFwQ29uc3VtZXJfZnJvbVNvdXJjZU1hcCIsInNtYyIsIl9zb3VyY2VSb290IiwiX2dlbmVyYXRlU291cmNlc0NvbnRlbnQiLCJfZmlsZSIsImdlbmVyYXRlZE1hcHBpbmdzIiwiZGVzdEdlbmVyYXRlZE1hcHBpbmdzIiwiZGVzdE9yaWdpbmFsTWFwcGluZ3MiLCJzcmNNYXBwaW5nIiwiZGVzdE1hcHBpbmciLCJNYXBwaW5nIiwicHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4iLCJwcmV2aW91c09yaWdpbmFsTGluZSIsInByZXZpb3VzT3JpZ2luYWxDb2x1bW4iLCJwcmV2aW91c1NvdXJjZSIsInByZXZpb3VzTmFtZSIsImNhY2hlZFNlZ21lbnRzIiwib3JpZ2luYWxNYXBwaW5ncyIsInNlZ21lbnQiLCJjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCIsIlNvdXJjZU1hcENvbnN1bWVyX2ZpbmRNYXBwaW5nIiwiYU1hcHBpbmdzIiwiYUxpbmVOYW1lIiwiYUNvbHVtbk5hbWUiLCJhQ29tcGFyYXRvciIsImNvbXB1dGVDb2x1bW5TcGFucyIsIlNvdXJjZU1hcENvbnN1bWVyX2NvbXB1dGVDb2x1bW5TcGFucyIsIm5leHRNYXBwaW5nIiwibGFzdEdlbmVyYXRlZENvbHVtbiIsIm9yaWdpbmFsUG9zaXRpb25Gb3IiLCJTb3VyY2VNYXBDb25zdW1lcl9vcmlnaW5hbFBvc2l0aW9uRm9yIiwiaGFzQ29udGVudHNPZkFsbFNvdXJjZXMiLCJCYXNpY1NvdXJjZU1hcENvbnN1bWVyX2hhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzIiwic29tZSIsInNjIiwic291cmNlQ29udGVudEZvciIsIlNvdXJjZU1hcENvbnN1bWVyX3NvdXJjZUNvbnRlbnRGb3IiLCJudWxsT25NaXNzaW5nIiwidXJsIiwidXJsUGFyc2UiLCJmaWxlVXJpQWJzUGF0aCIsInNjaGVtZSIsImdlbmVyYXRlZFBvc2l0aW9uRm9yIiwiU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IiLCJsYXN0T2Zmc2V0IiwiX3NlY3Rpb25zIiwib2Zmc2V0TGluZSIsIm9mZnNldENvbHVtbiIsImdlbmVyYXRlZE9mZnNldCIsImNvbnN0cnVjdG9yIiwiSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IiLCJzZWN0aW9uSW5kZXgiLCJzZWN0aW9uIiwiYmlhcyIsIkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9oYXNDb250ZW50c09mQWxsU291cmNlcyIsImV2ZXJ5IiwiSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX3NvdXJjZUNvbnRlbnRGb3IiLCJJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IiLCJnZW5lcmF0ZWRQb3NpdGlvbiIsIkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9wYXJzZU1hcHBpbmdzIiwic2VjdGlvbk1hcHBpbmdzIiwiYWRqdXN0ZWRNYXBwaW5nIiwiU291cmNlTWFwR2VuZXJhdG9yIiwiX3NraXBWYWxpZGF0aW9uIiwiX3NvdXJjZXNDb250ZW50cyIsIlNvdXJjZU1hcEdlbmVyYXRvcl9mcm9tU291cmNlTWFwIiwiYVNvdXJjZU1hcENvbnN1bWVyIiwiZ2VuZXJhdG9yIiwibmV3TWFwcGluZyIsImdlbmVyYXRlZCIsIm9yaWdpbmFsIiwiYWRkTWFwcGluZyIsInNvdXJjZUZpbGUiLCJzb3VyY2VSZWxhdGl2ZSIsInNldFNvdXJjZUNvbnRlbnQiLCJTb3VyY2VNYXBHZW5lcmF0b3JfYWRkTWFwcGluZyIsIl92YWxpZGF0ZU1hcHBpbmciLCJTb3VyY2VNYXBHZW5lcmF0b3Jfc2V0U291cmNlQ29udGVudCIsImFTb3VyY2VGaWxlIiwiYVNvdXJjZUNvbnRlbnQiLCJhcHBseVNvdXJjZU1hcCIsIlNvdXJjZU1hcEdlbmVyYXRvcl9hcHBseVNvdXJjZU1hcCIsImFTb3VyY2VNYXBQYXRoIiwibmV3U291cmNlcyIsIm5ld05hbWVzIiwiU291cmNlTWFwR2VuZXJhdG9yX3ZhbGlkYXRlTWFwcGluZyIsImFHZW5lcmF0ZWQiLCJhT3JpZ2luYWwiLCJhTmFtZSIsIl9zZXJpYWxpemVNYXBwaW5ncyIsIlNvdXJjZU1hcEdlbmVyYXRvcl9zZXJpYWxpemVNYXBwaW5ncyIsInByZXZpb3VzR2VuZXJhdGVkTGluZSIsIm5leHQiLCJuYW1lSWR4Iiwic291cmNlSWR4IiwiU291cmNlTWFwR2VuZXJhdG9yX2dlbmVyYXRlU291cmNlc0NvbnRlbnQiLCJhU291cmNlcyIsInRvSlNPTiIsIlNvdXJjZU1hcEdlbmVyYXRvcl90b0pTT04iLCJTb3VyY2VNYXBHZW5lcmF0b3JfdG9TdHJpbmciLCJSRUdFWF9ORVdMSU5FIiwiTkVXTElORV9DT0RFIiwiaXNTb3VyY2VOb2RlIiwiU291cmNlTm9kZSIsImFMaW5lIiwiYUNvbHVtbiIsImFDaHVua3MiLCJjaGlsZHJlbiIsInNvdXJjZUNvbnRlbnRzIiwiZnJvbVN0cmluZ1dpdGhTb3VyY2VNYXAiLCJTb3VyY2VOb2RlX2Zyb21TdHJpbmdXaXRoU291cmNlTWFwIiwiYUdlbmVyYXRlZENvZGUiLCJhUmVsYXRpdmVQYXRoIiwibm9kZSIsInJlbWFpbmluZ0xpbmVzIiwicmVtYWluaW5nTGluZXNJbmRleCIsInNoaWZ0TmV4dExpbmUiLCJsaW5lQ29udGVudHMiLCJnZXROZXh0TGluZSIsIm5ld0xpbmUiLCJsYXN0R2VuZXJhdGVkTGluZSIsImxhc3RNYXBwaW5nIiwiYWRkTWFwcGluZ1dpdGhDb2RlIiwibmV4dExpbmUiLCJzcGxpY2UiLCJTb3VyY2VOb2RlX2FkZCIsImFDaHVuayIsIkFycmF5IiwiaXNBcnJheSIsImNodW5rIiwicHJlcGVuZCIsIlNvdXJjZU5vZGVfcHJlcGVuZCIsInVuc2hpZnQiLCJ3YWxrIiwiU291cmNlTm9kZV93YWxrIiwiYUZuIiwiU291cmNlTm9kZV9qb2luIiwiYVNlcCIsIm5ld0NoaWxkcmVuIiwicmVwbGFjZVJpZ2h0IiwiU291cmNlTm9kZV9yZXBsYWNlUmlnaHQiLCJhUGF0dGVybiIsImFSZXBsYWNlbWVudCIsImxhc3RDaGlsZCIsIlNvdXJjZU5vZGVfc2V0U291cmNlQ29udGVudCIsIndhbGtTb3VyY2VDb250ZW50cyIsIlNvdXJjZU5vZGVfd2Fsa1NvdXJjZUNvbnRlbnRzIiwiZnJvbVNldFN0cmluZyIsIlNvdXJjZU5vZGVfdG9TdHJpbmciLCJ0b1N0cmluZ1dpdGhTb3VyY2VNYXAiLCJTb3VyY2VOb2RlX3RvU3RyaW5nV2l0aFNvdXJjZU1hcCIsInNvdXJjZU1hcHBpbmdBY3RpdmUiLCJsYXN0T3JpZ2luYWxTb3VyY2UiLCJsYXN0T3JpZ2luYWxMaW5lIiwibGFzdE9yaWdpbmFsQ29sdW1uIiwibGFzdE9yaWdpbmFsTmFtZSIsInNvdXJjZUNvbnRlbnQiLCJhRGVmYXVsdFZhbHVlIiwidXJsUmVnZXhwIiwiZGF0YVVybFJlZ2V4cCIsImFVcmwiLCJhdXRoIiwiaG9zdCIsInBvcnQiLCJ1cmxHZW5lcmF0ZSIsImFQYXJzZWRVcmwiLCJhUGF0aCIsInBhcnRzIiwicGFydCIsInVwIiwiYVJvb3QiLCJhUGF0aFVybCIsImFSb290VXJsIiwiam9pbmVkIiwibGV2ZWwiLCJsYXN0SW5kZXhPZiIsInN1cHBvcnRzTnVsbFByb3RvIiwiaWRlbnRpdHkiLCJpc1Byb3RvU3RyaW5nIiwib25seUNvbXBhcmVPcmlnaW5hbCIsInN0cmNtcCIsIm9ubHlDb21wYXJlR2VuZXJhdGVkIiwiYVN0cjEiLCJhU3RyMiIsInNvdXJjZVVSTCIsInNvdXJjZU1hcFVSTCIsInBhcnNlZCIsInN1YnN0cmluZyIsImluc3RhbGwiLCJlcnJvckZvcm1hdHRlckluc3RhbGxlZCIsInVuY2F1Z2h0U2hpbUluc3RhbGxlZCIsImVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucyIsImVudmlyb25tZW50IiwiZmlsZUNvbnRlbnRzQ2FjaGUiLCJzb3VyY2VNYXBDYWNoZSIsInJlU291cmNlTWFwIiwicmV0cmlldmVGaWxlSGFuZGxlcnMiLCJyZXRyaWV2ZU1hcEhhbmRsZXJzIiwiaXNJbkJyb3dzZXIiLCJ3aW5kb3ciLCJYTUxIdHRwUmVxdWVzdCIsImhhc0dsb2JhbFByb2Nlc3NFdmVudEVtaXR0ZXIiLCJoYW5kbGVyRXhlYyIsImxpc3QiLCJhcmciLCJyZXRyaWV2ZUZpbGUiLCJ0cmltIiwicHJvdG9jb2wiLCJkcml2ZSIsImNvbnRlbnRzIiwieGhyIiwic2VuZCIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzdXBwb3J0UmVsYXRpdmVVUkwiLCJleGVjIiwic3RhcnRQYXRoIiwicmV0cmlldmVTb3VyY2VNYXBVUkwiLCJmaWxlRGF0YSIsInNvdXJjZU1hcEhlYWRlciIsImdldFJlc3BvbnNlSGVhZGVyIiwicmUiLCJsYXN0TWF0Y2giLCJyZXRyaWV2ZVNvdXJjZU1hcCIsInNvdXJjZU1hcHBpbmdVUkwiLCJzb3VyY2VNYXBEYXRhIiwicmF3RGF0YSIsIm1hcFNvdXJjZVBvc2l0aW9uIiwidXJsQW5kTWFwIiwib3JpZ2luYWxQb3NpdGlvbiIsIm1hcEV2YWxPcmlnaW4iLCJvcmlnaW4iLCJDYWxsU2l0ZVRvU3RyaW5nIiwiZmlsZU5hbWUiLCJmaWxlTG9jYXRpb24iLCJpc05hdGl2ZSIsImdldFNjcmlwdE5hbWVPclNvdXJjZVVSTCIsImlzRXZhbCIsImdldEV2YWxPcmlnaW4iLCJsaW5lTnVtYmVyIiwiZ2V0TGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImdldENvbHVtbk51bWJlciIsImZ1bmN0aW9uTmFtZSIsImdldEZ1bmN0aW9uTmFtZSIsImFkZFN1ZmZpeCIsImlzQ29uc3RydWN0b3IiLCJpc01ldGhvZENhbGwiLCJpc1RvcGxldmVsIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsIm1ldGhvZE5hbWUiLCJnZXRNZXRob2ROYW1lIiwiY2xvbmVDYWxsU2l0ZSIsImZyYW1lIiwib2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJ3cmFwQ2FsbFNpdGUiLCJnZXRGaWxlTmFtZSIsImhlYWRlckxlbmd0aCIsIm9yaWdpbmFsRnVuY3Rpb25OYW1lIiwicHJlcGFyZVN0YWNrVHJhY2UiLCJzdGFjayIsImdldEVycm9yU291cmNlIiwicHJpbnRFcnJvckFuZEV4aXQiLCJzdGRlcnIiLCJfaGFuZGxlIiwic2V0QmxvY2tpbmciLCJleGl0Iiwic2hpbUVtaXRVbmNhdWdodEV4Y2VwdGlvbiIsIm9yaWdFbWl0IiwiaGFzU3RhY2siLCJoYXNMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJvcmlnaW5hbFJldHJpZXZlRmlsZUhhbmRsZXJzIiwib3JpZ2luYWxSZXRyaWV2ZU1hcEhhbmRsZXJzIiwib3ZlcnJpZGVSZXRyaWV2ZUZpbGUiLCJvdmVycmlkZVJldHJpZXZlU291cmNlTWFwIiwiaG9va1JlcXVpcmUiLCJNb2R1bGUiLCIkY29tcGlsZSIsIl9jb21waWxlIiwiX19zb3VyY2VNYXBTdXBwb3J0IiwiaW5zdGFsbEhhbmRsZXIiLCJoYW5kbGVVbmNhdWdodEV4Y2VwdGlvbnMiLCJyZXNldFJldHJpZXZlSGFuZGxlcnMiLCJmbiIsInJlcyIsIm1rZHRlbXBTeW5jRm9yUmVuYW1pbmdETExzIiwiYXRvbUhvbWUiLCJ0bXAiLCJta2R0ZW1wU3luYyIsIm1haW4iLCJsb2ciLCJfX2ZpbGVuYW1lIiwiYXJndiIsInZhbCIsImhvbWVEaXIiLCJob21lZGlyIiwiQVRPTV9IT01FIiwicmVnZXhwIiwiUmVnRXhwIiwiaG9tZURyaXZlIiwiSE9NRURSSVZFIiwiaG9tZVBhdGgiLCJIT01FUEFUSCIsImF0b21YdGVybVBhdGgiLCJub2RlUHR5UGF0aCIsIm5vZGVQdHlQcmVidWlsdFBhdGgiLCJub2RlUHR5TW9kdWxlUGF0aCIsInJlbGVhc2VCdWlsZFBhdGgiLCJkZWJ1Z0J1aWxkUGF0aCIsImJ1aWxkUGF0aCIsIm5ld1BhdGgiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJGLFFBQWhDO0FBRUEsSUFBSUcsUUFBUSxHQUNWLE9BQU9DLE1BQU0sQ0FBQ0MsS0FBZCxLQUF3QixVQUF4QixJQUNBLE9BQU9ELE1BQU0sQ0FBQ0UsV0FBZCxLQUE4QixVQUQ5QixJQUVBLE9BQU9GLE1BQU0sQ0FBQ0csSUFBZCxLQUF1QixVQUh6Qjs7QUFNQSxTQUFTQyxhQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUM3QixTQUFPVCxRQUFRLENBQUNVLElBQVQsQ0FBY0QsS0FBZCxFQUFxQkUsS0FBckIsQ0FB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LDJDQUFJLENBQUNzUCxRQUFMLENBQWNvckIsU0FBZCxDQUFsQixDQUFkO0FBQ0F6NUIsZUFBTyxDQUFDczRCLEdBQVIsbUJBQXVCbUIsU0FBdkIsbUJBQXlDQyxPQUF6QztBQUNBNzZCLHVEQUFFLENBQUNnUCxVQUFILENBQWM0ckIsU0FBZCxFQUF5QkMsT0FBekI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRDtBQUtBckIsSUFBSSxHOzs7Ozs7Ozs7Ozs7QUM3SEosbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoibW92ZS13aW5wdHktYmluYXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzL21vdmUtd2lucHR5LWJpbmFyaWVzLmpzXCIpO1xuIiwidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG52YXIgaXNNb2Rlcm4gPSAoXG4gIHR5cGVvZiBCdWZmZXIuYWxsb2MgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIEJ1ZmZlci5hbGxvY1Vuc2FmZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgQnVmZmVyLmZyb20gPT09ICdmdW5jdGlvbidcbilcblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlciAoaW5wdXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaW5wdXQpLnNsaWNlKDgsIC0xKSA9PT0gJ0FycmF5QnVmZmVyJ1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKG9iaiwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGJ5dGVPZmZzZXQgPj4+PSAwXG5cbiAgdmFyIG1heExlbmd0aCA9IG9iai5ieXRlTGVuZ3RoIC0gYnl0ZU9mZnNldFxuXG4gIGlmIChtYXhMZW5ndGggPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCInb2Zmc2V0JyBpcyBvdXQgb2YgYm91bmRzXCIpXG4gIH1cblxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSBtYXhMZW5ndGhcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPj4+PSAwXG5cbiAgICBpZiAobGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidsZW5ndGgnIGlzIG91dCBvZiBib3VuZHNcIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNNb2Rlcm5cbiAgICA/IEJ1ZmZlci5mcm9tKG9iai5zbGljZShieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgbGVuZ3RoKSlcbiAgICA6IG5ldyBCdWZmZXIobmV3IFVpbnQ4QXJyYXkob2JqLnNsaWNlKGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBsZW5ndGgpKSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICByZXR1cm4gaXNNb2Rlcm5cbiAgICA/IEJ1ZmZlci5mcm9tKHN0cmluZywgZW5jb2RpbmcpXG4gICAgOiBuZXcgQnVmZmVyKHN0cmluZywgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGJ1ZmZlckZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKGlzQXJyYXlCdWZmZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBpc01vZGVyblxuICAgID8gQnVmZmVyLmZyb20odmFsdWUpXG4gICAgOiBuZXcgQnVmZmVyKHZhbHVlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlckZyb21cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IG1rZGlycFN5bmMgPSByZXF1aXJlKCcuLi9ta2RpcnMnKS5ta2RpcnNTeW5jXG5jb25zdCB1dGltZXNTeW5jID0gcmVxdWlyZSgnLi4vdXRpbC91dGltZXMuanMnKS51dGltZXNNaWxsaXNTeW5jXG5cbmNvbnN0IG5vdEV4aXN0ID0gU3ltYm9sKCdub3RFeGlzdCcpXG5cbmZ1bmN0aW9uIGNvcHlTeW5jIChzcmMsIGRlc3QsIG9wdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0cyA9IHtmaWx0ZXI6IG9wdHN9XG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fVxuICBvcHRzLmNsb2JiZXIgPSAnY2xvYmJlcicgaW4gb3B0cyA/ICEhb3B0cy5jbG9iYmVyIDogdHJ1ZSAvLyBkZWZhdWx0IHRvIHRydWUgZm9yIG5vd1xuICBvcHRzLm92ZXJ3cml0ZSA9ICdvdmVyd3JpdGUnIGluIG9wdHMgPyAhIW9wdHMub3ZlcndyaXRlIDogb3B0cy5jbG9iYmVyIC8vIG92ZXJ3cml0ZSBmYWxscyBiYWNrIHRvIGNsb2JiZXJcblxuICAvLyBXYXJuIGFib3V0IHVzaW5nIHByZXNlcnZlVGltZXN0YW1wcyBvbiAzMi1iaXQgbm9kZVxuICBpZiAob3B0cy5wcmVzZXJ2ZVRpbWVzdGFtcHMgJiYgcHJvY2Vzcy5hcmNoID09PSAnaWEzMicpIHtcbiAgICBjb25zb2xlLndhcm4oYGZzLWV4dHJhOiBVc2luZyB0aGUgcHJlc2VydmVUaW1lc3RhbXBzIG9wdGlvbiBpbiAzMi1iaXQgbm9kZSBpcyBub3QgcmVjb21tZW5kZWQ7XFxuXG4gICAgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcHJpY2hhcmRzb24vbm9kZS1mcy1leHRyYS9pc3N1ZXMvMjY5YClcbiAgfVxuXG4gIGNvbnN0IGRlc3RTdGF0ID0gY2hlY2tQYXRocyhzcmMsIGRlc3QpXG5cbiAgaWYgKG9wdHMuZmlsdGVyICYmICFvcHRzLmZpbHRlcihzcmMsIGRlc3QpKSByZXR1cm5cblxuICBjb25zdCBkZXN0UGFyZW50ID0gcGF0aC5kaXJuYW1lKGRlc3QpXG4gIGlmICghZnMuZXhpc3RzU3luYyhkZXN0UGFyZW50KSkgbWtkaXJwU3luYyhkZXN0UGFyZW50KVxuICByZXR1cm4gc3RhcnRDb3B5KGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMpXG59XG5cbmZ1bmN0aW9uIHN0YXJ0Q29weSAoZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cykge1xuICBpZiAob3B0cy5maWx0ZXIgJiYgIW9wdHMuZmlsdGVyKHNyYywgZGVzdCkpIHJldHVyblxuICByZXR1cm4gZ2V0U3RhdHMoZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cylcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdHMgKGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMpIHtcbiAgY29uc3Qgc3RhdFN5bmMgPSBvcHRzLmRlcmVmZXJlbmNlID8gZnMuc3RhdFN5bmMgOiBmcy5sc3RhdFN5bmNcbiAgY29uc3Qgc3JjU3RhdCA9IHN0YXRTeW5jKHNyYylcblxuICBpZiAoc3JjU3RhdC5pc0RpcmVjdG9yeSgpKSByZXR1cm4gb25EaXIoc3JjU3RhdCwgZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cylcbiAgZWxzZSBpZiAoc3JjU3RhdC5pc0ZpbGUoKSB8fFxuICAgICAgICAgICBzcmNTdGF0LmlzQ2hhcmFjdGVyRGV2aWNlKCkgfHxcbiAgICAgICAgICAgc3JjU3RhdC5pc0Jsb2NrRGV2aWNlKCkpIHJldHVybiBvbkZpbGUoc3JjU3RhdCwgZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cylcbiAgZWxzZSBpZiAoc3JjU3RhdC5pc1N5bWJvbGljTGluaygpKSByZXR1cm4gb25MaW5rKGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMpXG59XG5cbmZ1bmN0aW9uIG9uRmlsZSAoc3JjU3RhdCwgZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cykge1xuICBpZiAoZGVzdFN0YXQgPT09IG5vdEV4aXN0KSByZXR1cm4gY29weUZpbGUoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzKVxuICByZXR1cm4gbWF5Q29weUZpbGUoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzKVxufVxuXG5mdW5jdGlvbiBtYXlDb3B5RmlsZSAoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzKSB7XG4gIGlmIChvcHRzLm92ZXJ3cml0ZSkge1xuICAgIGZzLnVubGlua1N5bmMoZGVzdClcbiAgICByZXR1cm4gY29weUZpbGUoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzKVxuICB9IGVsc2UgaWYgKG9wdHMuZXJyb3JPbkV4aXN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAnJHtkZXN0fScgYWxyZWFkeSBleGlzdHNgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHlGaWxlIChzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMpIHtcbiAgaWYgKHR5cGVvZiBmcy5jb3B5RmlsZVN5bmMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBkZXN0KVxuICAgIGZzLmNobW9kU3luYyhkZXN0LCBzcmNTdGF0Lm1vZGUpXG4gICAgaWYgKG9wdHMucHJlc2VydmVUaW1lc3RhbXBzKSB7XG4gICAgICByZXR1cm4gdXRpbWVzU3luYyhkZXN0LCBzcmNTdGF0LmF0aW1lLCBzcmNTdGF0Lm10aW1lKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICByZXR1cm4gY29weUZpbGVGYWxsYmFjayhzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMpXG59XG5cbmZ1bmN0aW9uIGNvcHlGaWxlRmFsbGJhY2sgKHNyY1N0YXQsIHNyYywgZGVzdCwgb3B0cykge1xuICBjb25zdCBCVUZfTEVOR1RIID0gNjQgKiAxMDI0XG4gIGNvbnN0IF9idWZmID0gcmVxdWlyZSgnLi4vdXRpbC9idWZmZXInKShCVUZfTEVOR1RIKVxuXG4gIGNvbnN0IGZkciA9IGZzLm9wZW5TeW5jKHNyYywgJ3InKVxuICBjb25zdCBmZHcgPSBmcy5vcGVuU3luYyhkZXN0LCAndycsIHNyY1N0YXQubW9kZSlcbiAgbGV0IHBvcyA9IDBcblxuICB3aGlsZSAocG9zIDwgc3JjU3RhdC5zaXplKSB7XG4gICAgY29uc3QgYnl0ZXNSZWFkID0gZnMucmVhZFN5bmMoZmRyLCBfYnVmZiwgMCwgQlVGX0xFTkdUSCwgcG9zKVxuICAgIGZzLndyaXRlU3luYyhmZHcsIF9idWZmLCAwLCBieXRlc1JlYWQpXG4gICAgcG9zICs9IGJ5dGVzUmVhZFxuICB9XG5cbiAgaWYgKG9wdHMucHJlc2VydmVUaW1lc3RhbXBzKSBmcy5mdXRpbWVzU3luYyhmZHcsIHNyY1N0YXQuYXRpbWUsIHNyY1N0YXQubXRpbWUpXG5cbiAgZnMuY2xvc2VTeW5jKGZkcilcbiAgZnMuY2xvc2VTeW5jKGZkdylcbn1cblxuZnVuY3Rpb24gb25EaXIgKHNyY1N0YXQsIGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMpIHtcbiAgaWYgKGRlc3RTdGF0ID09PSBub3RFeGlzdCkgcmV0dXJuIG1rRGlyQW5kQ29weShzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMpXG4gIGlmIChkZXN0U3RhdCAmJiAhZGVzdFN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IG92ZXJ3cml0ZSBub24tZGlyZWN0b3J5ICcke2Rlc3R9JyB3aXRoIGRpcmVjdG9yeSAnJHtzcmN9Jy5gKVxuICB9XG4gIHJldHVybiBjb3B5RGlyKHNyYywgZGVzdCwgb3B0cylcbn1cblxuZnVuY3Rpb24gbWtEaXJBbmRDb3B5IChzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMpIHtcbiAgZnMubWtkaXJTeW5jKGRlc3QpXG4gIGNvcHlEaXIoc3JjLCBkZXN0LCBvcHRzKVxuICByZXR1cm4gZnMuY2htb2RTeW5jKGRlc3QsIHNyY1N0YXQubW9kZSlcbn1cblxuZnVuY3Rpb24gY29weURpciAoc3JjLCBkZXN0LCBvcHRzKSB7XG4gIGZzLnJlYWRkaXJTeW5jKHNyYykuZm9yRWFjaChpdGVtID0+IGNvcHlEaXJJdGVtKGl0ZW0sIHNyYywgZGVzdCwgb3B0cykpXG59XG5cbmZ1bmN0aW9uIGNvcHlEaXJJdGVtIChpdGVtLCBzcmMsIGRlc3QsIG9wdHMpIHtcbiAgY29uc3Qgc3JjSXRlbSA9IHBhdGguam9pbihzcmMsIGl0ZW0pXG4gIGNvbnN0IGRlc3RJdGVtID0gcGF0aC5qb2luKGRlc3QsIGl0ZW0pXG4gIGNvbnN0IGRlc3RTdGF0ID0gY2hlY2tQYXRocyhzcmNJdGVtLCBkZXN0SXRlbSlcbiAgcmV0dXJuIHN0YXJ0Q29weShkZXN0U3RhdCwgc3JjSXRlbSwgZGVzdEl0ZW0sIG9wdHMpXG59XG5cbmZ1bmN0aW9uIG9uTGluayAoZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cykge1xuICBsZXQgcmVzb2x2ZWRTcmMgPSBmcy5yZWFkbGlua1N5bmMoc3JjKVxuXG4gIGlmIChvcHRzLmRlcmVmZXJlbmNlKSB7XG4gICAgcmVzb2x2ZWRTcmMgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgcmVzb2x2ZWRTcmMpXG4gIH1cblxuICBpZiAoZGVzdFN0YXQgPT09IG5vdEV4aXN0KSB7XG4gICAgcmV0dXJuIGZzLnN5bWxpbmtTeW5jKHJlc29sdmVkU3JjLCBkZXN0KVxuICB9IGVsc2Uge1xuICAgIGxldCByZXNvbHZlZERlc3RcbiAgICB0cnkge1xuICAgICAgcmVzb2x2ZWREZXN0ID0gZnMucmVhZGxpbmtTeW5jKGRlc3QpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBkZXN0IGV4aXN0cyBhbmQgaXMgYSByZWd1bGFyIGZpbGUgb3IgZGlyZWN0b3J5LFxuICAgICAgLy8gV2luZG93cyBtYXkgdGhyb3cgVU5LTk9XTiBlcnJvci4gSWYgZGVzdCBhbHJlYWR5IGV4aXN0cyxcbiAgICAgIC8vIGZzIHRocm93cyBlcnJvciBhbnl3YXksIHNvIG5vIG5lZWQgdG8gZ3VhcmQgYWdhaW5zdCBpdCBoZXJlLlxuICAgICAgaWYgKGVyci5jb2RlID09PSAnRUlOVkFMJyB8fCBlcnIuY29kZSA9PT0gJ1VOS05PV04nKSByZXR1cm4gZnMuc3ltbGlua1N5bmMocmVzb2x2ZWRTcmMsIGRlc3QpXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gICAgaWYgKG9wdHMuZGVyZWZlcmVuY2UpIHtcbiAgICAgIHJlc29sdmVkRGVzdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCByZXNvbHZlZERlc3QpXG4gICAgfVxuICAgIGlmIChpc1NyY1N1YmRpcihyZXNvbHZlZFNyYywgcmVzb2x2ZWREZXN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY29weSAnJHtyZXNvbHZlZFNyY30nIHRvIGEgc3ViZGlyZWN0b3J5IG9mIGl0c2VsZiwgJyR7cmVzb2x2ZWREZXN0fScuYClcbiAgICB9XG5cbiAgICAvLyBwcmV2ZW50IGNvcHkgaWYgc3JjIGlzIGEgc3ViZGlyIG9mIGRlc3Qgc2luY2UgdW5saW5raW5nXG4gICAgLy8gZGVzdCBpbiB0aGlzIGNhc2Ugd291bGQgcmVzdWx0IGluIHJlbW92aW5nIHNyYyBjb250ZW50c1xuICAgIC8vIGFuZCB0aGVyZWZvcmUgYSBicm9rZW4gc3ltbGluayB3b3VsZCBiZSBjcmVhdGVkLlxuICAgIGlmIChmcy5zdGF0U3luYyhkZXN0KS5pc0RpcmVjdG9yeSgpICYmIGlzU3JjU3ViZGlyKHJlc29sdmVkRGVzdCwgcmVzb2x2ZWRTcmMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBvdmVyd3JpdGUgJyR7cmVzb2x2ZWREZXN0fScgd2l0aCAnJHtyZXNvbHZlZFNyY30nLmApXG4gICAgfVxuICAgIHJldHVybiBjb3B5TGluayhyZXNvbHZlZFNyYywgZGVzdClcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5TGluayAocmVzb2x2ZWRTcmMsIGRlc3QpIHtcbiAgZnMudW5saW5rU3luYyhkZXN0KVxuICByZXR1cm4gZnMuc3ltbGlua1N5bmMocmVzb2x2ZWRTcmMsIGRlc3QpXG59XG5cbi8vIHJldHVybiB0cnVlIGlmIGRlc3QgaXMgYSBzdWJkaXIgb2Ygc3JjLCBvdGhlcndpc2UgZmFsc2UuXG5mdW5jdGlvbiBpc1NyY1N1YmRpciAoc3JjLCBkZXN0KSB7XG4gIGNvbnN0IHNyY0FycmF5ID0gcGF0aC5yZXNvbHZlKHNyYykuc3BsaXQocGF0aC5zZXApXG4gIGNvbnN0IGRlc3RBcnJheSA9IHBhdGgucmVzb2x2ZShkZXN0KS5zcGxpdChwYXRoLnNlcClcbiAgcmV0dXJuIHNyY0FycmF5LnJlZHVjZSgoYWNjLCBjdXJyZW50LCBpKSA9PiBhY2MgJiYgZGVzdEFycmF5W2ldID09PSBjdXJyZW50LCB0cnVlKVxufVxuXG5mdW5jdGlvbiBjaGVja1N0YXRzIChzcmMsIGRlc3QpIHtcbiAgY29uc3Qgc3JjU3RhdCA9IGZzLnN0YXRTeW5jKHNyYylcbiAgbGV0IGRlc3RTdGF0XG4gIHRyeSB7XG4gICAgZGVzdFN0YXQgPSBmcy5zdGF0U3luYyhkZXN0KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnKSByZXR1cm4ge3NyY1N0YXQsIGRlc3RTdGF0OiBub3RFeGlzdH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuICByZXR1cm4ge3NyY1N0YXQsIGRlc3RTdGF0fVxufVxuXG5mdW5jdGlvbiBjaGVja1BhdGhzIChzcmMsIGRlc3QpIHtcbiAgY29uc3Qge3NyY1N0YXQsIGRlc3RTdGF0fSA9IGNoZWNrU3RhdHMoc3JjLCBkZXN0KVxuICBpZiAoZGVzdFN0YXQuaW5vICYmIGRlc3RTdGF0LmlubyA9PT0gc3JjU3RhdC5pbm8pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvdXJjZSBhbmQgZGVzdGluYXRpb24gbXVzdCBub3QgYmUgdGhlIHNhbWUuJylcbiAgfVxuICBpZiAoc3JjU3RhdC5pc0RpcmVjdG9yeSgpICYmIGlzU3JjU3ViZGlyKHNyYywgZGVzdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb3B5ICcke3NyY30nIHRvIGEgc3ViZGlyZWN0b3J5IG9mIGl0c2VsZiwgJyR7ZGVzdH0nLmApXG4gIH1cbiAgcmV0dXJuIGRlc3RTdGF0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bmNcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29weVN5bmM6IHJlcXVpcmUoJy4vY29weS1zeW5jJylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IG1rZGlycCA9IHJlcXVpcmUoJy4uL21rZGlycycpLm1rZGlyc1xuY29uc3QgcGF0aEV4aXN0cyA9IHJlcXVpcmUoJy4uL3BhdGgtZXhpc3RzJykucGF0aEV4aXN0c1xuY29uc3QgdXRpbWVzID0gcmVxdWlyZSgnLi4vdXRpbC91dGltZXMnKS51dGltZXNNaWxsaXNcblxuY29uc3Qgbm90RXhpc3QgPSBTeW1ib2woJ25vdEV4aXN0JylcblxuZnVuY3Rpb24gY29weSAoc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicgJiYgIWNiKSB7XG4gICAgY2IgPSBvcHRzXG4gICAgb3B0cyA9IHt9XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRzID0ge2ZpbHRlcjogb3B0c31cbiAgfVxuXG4gIGNiID0gY2IgfHwgZnVuY3Rpb24gKCkge31cbiAgb3B0cyA9IG9wdHMgfHwge31cblxuICBvcHRzLmNsb2JiZXIgPSAnY2xvYmJlcicgaW4gb3B0cyA/ICEhb3B0cy5jbG9iYmVyIDogdHJ1ZSAvLyBkZWZhdWx0IHRvIHRydWUgZm9yIG5vd1xuICBvcHRzLm92ZXJ3cml0ZSA9ICdvdmVyd3JpdGUnIGluIG9wdHMgPyAhIW9wdHMub3ZlcndyaXRlIDogb3B0cy5jbG9iYmVyIC8vIG92ZXJ3cml0ZSBmYWxscyBiYWNrIHRvIGNsb2JiZXJcblxuICAvLyBXYXJuIGFib3V0IHVzaW5nIHByZXNlcnZlVGltZXN0YW1wcyBvbiAzMi1iaXQgbm9kZVxuICBpZiAob3B0cy5wcmVzZXJ2ZVRpbWVzdGFtcHMgJiYgcHJvY2Vzcy5hcmNoID09PSAnaWEzMicpIHtcbiAgICBjb25zb2xlLndhcm4oYGZzLWV4dHJhOiBVc2luZyB0aGUgcHJlc2VydmVUaW1lc3RhbXBzIG9wdGlvbiBpbiAzMi1iaXQgbm9kZSBpcyBub3QgcmVjb21tZW5kZWQ7XFxuXG4gICAgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcHJpY2hhcmRzb24vbm9kZS1mcy1leHRyYS9pc3N1ZXMvMjY5YClcbiAgfVxuXG4gIGNoZWNrUGF0aHMoc3JjLCBkZXN0LCAoZXJyLCBkZXN0U3RhdCkgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgaWYgKG9wdHMuZmlsdGVyKSByZXR1cm4gaGFuZGxlRmlsdGVyKGNoZWNrUGFyZW50RGlyLCBkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYilcbiAgICByZXR1cm4gY2hlY2tQYXJlbnREaXIoZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNoZWNrUGFyZW50RGlyIChkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBjb25zdCBkZXN0UGFyZW50ID0gcGF0aC5kaXJuYW1lKGRlc3QpXG4gIHBhdGhFeGlzdHMoZGVzdFBhcmVudCwgKGVyciwgZGlyRXhpc3RzKSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBpZiAoZGlyRXhpc3RzKSByZXR1cm4gc3RhcnRDb3B5KGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxuICAgIG1rZGlycChkZXN0UGFyZW50LCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgIHJldHVybiBzdGFydENvcHkoZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlRmlsdGVyIChvbkluY2x1ZGUsIGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIFByb21pc2UucmVzb2x2ZShvcHRzLmZpbHRlcihzcmMsIGRlc3QpKS50aGVuKGluY2x1ZGUgPT4ge1xuICAgIGlmIChpbmNsdWRlKSB7XG4gICAgICBpZiAoZGVzdFN0YXQpIHJldHVybiBvbkluY2x1ZGUoZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpXG4gICAgICByZXR1cm4gb25JbmNsdWRlKHNyYywgZGVzdCwgb3B0cywgY2IpXG4gICAgfVxuICAgIHJldHVybiBjYigpXG4gIH0sIGVycm9yID0+IGNiKGVycm9yKSlcbn1cblxuZnVuY3Rpb24gc3RhcnRDb3B5IChkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBpZiAob3B0cy5maWx0ZXIpIHJldHVybiBoYW5kbGVGaWx0ZXIoZ2V0U3RhdHMsIGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxuICByZXR1cm4gZ2V0U3RhdHMoZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpXG59XG5cbmZ1bmN0aW9uIGdldFN0YXRzIChkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBjb25zdCBzdGF0ID0gb3B0cy5kZXJlZmVyZW5jZSA/IGZzLnN0YXQgOiBmcy5sc3RhdFxuICBzdGF0KHNyYywgKGVyciwgc3JjU3RhdCkgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG5cbiAgICBpZiAoc3JjU3RhdC5pc0RpcmVjdG9yeSgpKSByZXR1cm4gb25EaXIoc3JjU3RhdCwgZGVzdFN0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpXG4gICAgZWxzZSBpZiAoc3JjU3RhdC5pc0ZpbGUoKSB8fFxuICAgICAgICAgICAgIHNyY1N0YXQuaXNDaGFyYWN0ZXJEZXZpY2UoKSB8fFxuICAgICAgICAgICAgIHNyY1N0YXQuaXNCbG9ja0RldmljZSgpKSByZXR1cm4gb25GaWxlKHNyY1N0YXQsIGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxuICAgIGVsc2UgaWYgKHNyY1N0YXQuaXNTeW1ib2xpY0xpbmsoKSkgcmV0dXJuIG9uTGluayhkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYilcbiAgfSlcbn1cblxuZnVuY3Rpb24gb25GaWxlIChzcmNTdGF0LCBkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBpZiAoZGVzdFN0YXQgPT09IG5vdEV4aXN0KSByZXR1cm4gY29weUZpbGUoc3JjU3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYilcbiAgcmV0dXJuIG1heUNvcHlGaWxlKHNyY1N0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpXG59XG5cbmZ1bmN0aW9uIG1heUNvcHlGaWxlIChzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGlmIChvcHRzLm92ZXJ3cml0ZSkge1xuICAgIGZzLnVubGluayhkZXN0LCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgIHJldHVybiBjb3B5RmlsZShzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAob3B0cy5lcnJvck9uRXhpc3QpIHtcbiAgICByZXR1cm4gY2IobmV3IEVycm9yKGAnJHtkZXN0fScgYWxyZWFkeSBleGlzdHNgKSlcbiAgfSBlbHNlIHJldHVybiBjYigpXG59XG5cbmZ1bmN0aW9uIGNvcHlGaWxlIChzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGlmICh0eXBlb2YgZnMuY29weUZpbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnMuY29weUZpbGUoc3JjLCBkZXN0LCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgIHJldHVybiBzZXREZXN0TW9kZUFuZFRpbWVzdGFtcHMoc3JjU3RhdCwgZGVzdCwgb3B0cywgY2IpXG4gICAgfSlcbiAgfVxuICByZXR1cm4gY29weUZpbGVGYWxsYmFjayhzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKVxufVxuXG5mdW5jdGlvbiBjb3B5RmlsZUZhbGxiYWNrIChzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGNvbnN0IHJzID0gZnMuY3JlYXRlUmVhZFN0cmVhbShzcmMpXG4gIHJzLm9uKCdlcnJvcicsIGVyciA9PiBjYihlcnIpKS5vbmNlKCdvcGVuJywgKCkgPT4ge1xuICAgIGNvbnN0IHdzID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oZGVzdCwgeyBtb2RlOiBzcmNTdGF0Lm1vZGUgfSlcbiAgICB3cy5vbignZXJyb3InLCBlcnIgPT4gY2IoZXJyKSlcbiAgICAgIC5vbignb3BlbicsICgpID0+IHJzLnBpcGUod3MpKVxuICAgICAgLm9uY2UoJ2Nsb3NlJywgKCkgPT4gc2V0RGVzdE1vZGVBbmRUaW1lc3RhbXBzKHNyY1N0YXQsIGRlc3QsIG9wdHMsIGNiKSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gc2V0RGVzdE1vZGVBbmRUaW1lc3RhbXBzIChzcmNTdGF0LCBkZXN0LCBvcHRzLCBjYikge1xuICBmcy5jaG1vZChkZXN0LCBzcmNTdGF0Lm1vZGUsIGVyciA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBpZiAob3B0cy5wcmVzZXJ2ZVRpbWVzdGFtcHMpIHtcbiAgICAgIHJldHVybiB1dGltZXMoZGVzdCwgc3JjU3RhdC5hdGltZSwgc3JjU3RhdC5tdGltZSwgY2IpXG4gICAgfVxuICAgIHJldHVybiBjYigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG9uRGlyIChzcmNTdGF0LCBkZXN0U3RhdCwgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBpZiAoZGVzdFN0YXQgPT09IG5vdEV4aXN0KSByZXR1cm4gbWtEaXJBbmRDb3B5KHNyY1N0YXQsIHNyYywgZGVzdCwgb3B0cywgY2IpXG4gIGlmIChkZXN0U3RhdCAmJiAhZGVzdFN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgIHJldHVybiBjYihuZXcgRXJyb3IoYENhbm5vdCBvdmVyd3JpdGUgbm9uLWRpcmVjdG9yeSAnJHtkZXN0fScgd2l0aCBkaXJlY3RvcnkgJyR7c3JjfScuYCkpXG4gIH1cbiAgcmV0dXJuIGNvcHlEaXIoc3JjLCBkZXN0LCBvcHRzLCBjYilcbn1cblxuZnVuY3Rpb24gbWtEaXJBbmRDb3B5IChzcmNTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGZzLm1rZGlyKGRlc3QsIGVyciA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBjb3B5RGlyKHNyYywgZGVzdCwgb3B0cywgZXJyID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgICByZXR1cm4gZnMuY2htb2QoZGVzdCwgc3JjU3RhdC5tb2RlLCBjYilcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBjb3B5RGlyIChzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGZzLnJlYWRkaXIoc3JjLCAoZXJyLCBpdGVtcykgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgcmV0dXJuIGNvcHlEaXJJdGVtcyhpdGVtcywgc3JjLCBkZXN0LCBvcHRzLCBjYilcbiAgfSlcbn1cblxuZnVuY3Rpb24gY29weURpckl0ZW1zIChpdGVtcywgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBjb25zdCBpdGVtID0gaXRlbXMucG9wKClcbiAgaWYgKCFpdGVtKSByZXR1cm4gY2IoKVxuICByZXR1cm4gY29weURpckl0ZW0oaXRlbXMsIGl0ZW0sIHNyYywgZGVzdCwgb3B0cywgY2IpXG59XG5cbmZ1bmN0aW9uIGNvcHlEaXJJdGVtIChpdGVtcywgaXRlbSwgc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBjb25zdCBzcmNJdGVtID0gcGF0aC5qb2luKHNyYywgaXRlbSlcbiAgY29uc3QgZGVzdEl0ZW0gPSBwYXRoLmpvaW4oZGVzdCwgaXRlbSlcbiAgY2hlY2tQYXRocyhzcmNJdGVtLCBkZXN0SXRlbSwgKGVyciwgZGVzdFN0YXQpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIHN0YXJ0Q29weShkZXN0U3RhdCwgc3JjSXRlbSwgZGVzdEl0ZW0sIG9wdHMsIGVyciA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgICAgcmV0dXJuIGNvcHlEaXJJdGVtcyhpdGVtcywgc3JjLCBkZXN0LCBvcHRzLCBjYilcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBvbkxpbmsgKGRlc3RTdGF0LCBzcmMsIGRlc3QsIG9wdHMsIGNiKSB7XG4gIGZzLnJlYWRsaW5rKHNyYywgKGVyciwgcmVzb2x2ZWRTcmMpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuXG4gICAgaWYgKG9wdHMuZGVyZWZlcmVuY2UpIHtcbiAgICAgIHJlc29sdmVkU3JjID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIHJlc29sdmVkU3JjKVxuICAgIH1cblxuICAgIGlmIChkZXN0U3RhdCA9PT0gbm90RXhpc3QpIHtcbiAgICAgIHJldHVybiBmcy5zeW1saW5rKHJlc29sdmVkU3JjLCBkZXN0LCBjYilcbiAgICB9IGVsc2Uge1xuICAgICAgZnMucmVhZGxpbmsoZGVzdCwgKGVyciwgcmVzb2x2ZWREZXN0KSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAvLyBkZXN0IGV4aXN0cyBhbmQgaXMgYSByZWd1bGFyIGZpbGUgb3IgZGlyZWN0b3J5LFxuICAgICAgICAgIC8vIFdpbmRvd3MgbWF5IHRocm93IFVOS05PV04gZXJyb3IuIElmIGRlc3QgYWxyZWFkeSBleGlzdHMsXG4gICAgICAgICAgLy8gZnMgdGhyb3dzIGVycm9yIGFueXdheSwgc28gbm8gbmVlZCB0byBndWFyZCBhZ2FpbnN0IGl0IGhlcmUuXG4gICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRUlOVkFMJyB8fCBlcnIuY29kZSA9PT0gJ1VOS05PV04nKSByZXR1cm4gZnMuc3ltbGluayhyZXNvbHZlZFNyYywgZGVzdCwgY2IpXG4gICAgICAgICAgcmV0dXJuIGNiKGVycilcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5kZXJlZmVyZW5jZSkge1xuICAgICAgICAgIHJlc29sdmVkRGVzdCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCByZXNvbHZlZERlc3QpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3JjU3ViZGlyKHJlc29sdmVkU3JjLCByZXNvbHZlZERlc3QpKSB7XG4gICAgICAgICAgcmV0dXJuIGNiKG5ldyBFcnJvcihgQ2Fubm90IGNvcHkgJyR7cmVzb2x2ZWRTcmN9JyB0byBhIHN1YmRpcmVjdG9yeSBvZiBpdHNlbGYsICcke3Jlc29sdmVkRGVzdH0nLmApKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG8gbm90IGNvcHkgaWYgc3JjIGlzIGEgc3ViZGlyIG9mIGRlc3Qgc2luY2UgdW5saW5raW5nXG4gICAgICAgIC8vIGRlc3QgaW4gdGhpcyBjYXNlIHdvdWxkIHJlc3VsdCBpbiByZW1vdmluZyBzcmMgY29udGVudHNcbiAgICAgICAgLy8gYW5kIHRoZXJlZm9yZSBhIGJyb2tlbiBzeW1saW5rIHdvdWxkIGJlIGNyZWF0ZWQuXG4gICAgICAgIGlmIChkZXN0U3RhdC5pc0RpcmVjdG9yeSgpICYmIGlzU3JjU3ViZGlyKHJlc29sdmVkRGVzdCwgcmVzb2x2ZWRTcmMpKSB7XG4gICAgICAgICAgcmV0dXJuIGNiKG5ldyBFcnJvcihgQ2Fubm90IG92ZXJ3cml0ZSAnJHtyZXNvbHZlZERlc3R9JyB3aXRoICcke3Jlc29sdmVkU3JjfScuYCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcHlMaW5rKHJlc29sdmVkU3JjLCBkZXN0LCBjYilcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjb3B5TGluayAocmVzb2x2ZWRTcmMsIGRlc3QsIGNiKSB7XG4gIGZzLnVubGluayhkZXN0LCBlcnIgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgcmV0dXJuIGZzLnN5bWxpbmsocmVzb2x2ZWRTcmMsIGRlc3QsIGNiKVxuICB9KVxufVxuXG4vLyByZXR1cm4gdHJ1ZSBpZiBkZXN0IGlzIGEgc3ViZGlyIG9mIHNyYywgb3RoZXJ3aXNlIGZhbHNlLlxuZnVuY3Rpb24gaXNTcmNTdWJkaXIgKHNyYywgZGVzdCkge1xuICBjb25zdCBzcmNBcnJheSA9IHBhdGgucmVzb2x2ZShzcmMpLnNwbGl0KHBhdGguc2VwKVxuICBjb25zdCBkZXN0QXJyYXkgPSBwYXRoLnJlc29sdmUoZGVzdCkuc3BsaXQocGF0aC5zZXApXG4gIHJldHVybiBzcmNBcnJheS5yZWR1Y2UoKGFjYywgY3VycmVudCwgaSkgPT4gYWNjICYmIGRlc3RBcnJheVtpXSA9PT0gY3VycmVudCwgdHJ1ZSlcbn1cblxuZnVuY3Rpb24gY2hlY2tTdGF0cyAoc3JjLCBkZXN0LCBjYikge1xuICBmcy5zdGF0KHNyYywgKGVyciwgc3JjU3RhdCkgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgZnMuc3RhdChkZXN0LCAoZXJyLCBkZXN0U3RhdCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnKSByZXR1cm4gY2IobnVsbCwge3NyY1N0YXQsIGRlc3RTdGF0OiBub3RFeGlzdH0pXG4gICAgICAgIHJldHVybiBjYihlcnIpXG4gICAgICB9XG4gICAgICByZXR1cm4gY2IobnVsbCwge3NyY1N0YXQsIGRlc3RTdGF0fSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBjaGVja1BhdGhzIChzcmMsIGRlc3QsIGNiKSB7XG4gIGNoZWNrU3RhdHMoc3JjLCBkZXN0LCAoZXJyLCBzdGF0cykgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgY29uc3Qge3NyY1N0YXQsIGRlc3RTdGF0fSA9IHN0YXRzXG4gICAgaWYgKGRlc3RTdGF0LmlubyAmJiBkZXN0U3RhdC5pbm8gPT09IHNyY1N0YXQuaW5vKSB7XG4gICAgICByZXR1cm4gY2IobmV3IEVycm9yKCdTb3VyY2UgYW5kIGRlc3RpbmF0aW9uIG11c3Qgbm90IGJlIHRoZSBzYW1lLicpKVxuICAgIH1cbiAgICBpZiAoc3JjU3RhdC5pc0RpcmVjdG9yeSgpICYmIGlzU3JjU3ViZGlyKHNyYywgZGVzdCkpIHtcbiAgICAgIHJldHVybiBjYihuZXcgRXJyb3IoYENhbm5vdCBjb3B5ICcke3NyY30nIHRvIGEgc3ViZGlyZWN0b3J5IG9mIGl0c2VsZiwgJyR7ZGVzdH0nLmApKVxuICAgIH1cbiAgICByZXR1cm4gY2IobnVsbCwgZGVzdFN0YXQpXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb3B5OiB1KHJlcXVpcmUoJy4vY29weScpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgbWtkaXIgPSByZXF1aXJlKCcuLi9ta2RpcnMnKVxuY29uc3QgcmVtb3ZlID0gcmVxdWlyZSgnLi4vcmVtb3ZlJylcblxuY29uc3QgZW1wdHlEaXIgPSB1KGZ1bmN0aW9uIGVtcHR5RGlyIChkaXIsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge31cbiAgZnMucmVhZGRpcihkaXIsIChlcnIsIGl0ZW1zKSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIG1rZGlyLm1rZGlycyhkaXIsIGNhbGxiYWNrKVxuXG4gICAgaXRlbXMgPSBpdGVtcy5tYXAoaXRlbSA9PiBwYXRoLmpvaW4oZGlyLCBpdGVtKSlcblxuICAgIGRlbGV0ZUl0ZW0oKVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlSXRlbSAoKSB7XG4gICAgICBjb25zdCBpdGVtID0gaXRlbXMucG9wKClcbiAgICAgIGlmICghaXRlbSkgcmV0dXJuIGNhbGxiYWNrKClcbiAgICAgIHJlbW92ZS5yZW1vdmUoaXRlbSwgZXJyID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgICAgZGVsZXRlSXRlbSgpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGVtcHR5RGlyU3luYyAoZGlyKSB7XG4gIGxldCBpdGVtc1xuICB0cnkge1xuICAgIGl0ZW1zID0gZnMucmVhZGRpclN5bmMoZGlyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbWtkaXIubWtkaXJzU3luYyhkaXIpXG4gIH1cblxuICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0gPSBwYXRoLmpvaW4oZGlyLCBpdGVtKVxuICAgIHJlbW92ZS5yZW1vdmVTeW5jKGl0ZW0pXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbXB0eURpclN5bmMsXG4gIGVtcHR5ZGlyU3luYzogZW1wdHlEaXJTeW5jLFxuICBlbXB0eURpcixcbiAgZW1wdHlkaXI6IGVtcHR5RGlyXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgdSA9IHJlcXVpcmUoJ3VuaXZlcnNhbGlmeScpLmZyb21DYWxsYmFja1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgZnMgPSByZXF1aXJlKCdncmFjZWZ1bC1mcycpXG5jb25zdCBta2RpciA9IHJlcXVpcmUoJy4uL21rZGlycycpXG5jb25zdCBwYXRoRXhpc3RzID0gcmVxdWlyZSgnLi4vcGF0aC1leGlzdHMnKS5wYXRoRXhpc3RzXG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbGUgKGZpbGUsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIG1ha2VGaWxlICgpIHtcbiAgICBmcy53cml0ZUZpbGUoZmlsZSwgJycsIGVyciA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgY2FsbGJhY2soKVxuICAgIH0pXG4gIH1cblxuICBmcy5zdGF0KGZpbGUsIChlcnIsIHN0YXRzKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaGFuZGxlLWNhbGxiYWNrLWVyclxuICAgIGlmICghZXJyICYmIHN0YXRzLmlzRmlsZSgpKSByZXR1cm4gY2FsbGJhY2soKVxuICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShmaWxlKVxuICAgIHBhdGhFeGlzdHMoZGlyLCAoZXJyLCBkaXJFeGlzdHMpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICBpZiAoZGlyRXhpc3RzKSByZXR1cm4gbWFrZUZpbGUoKVxuICAgICAgbWtkaXIubWtkaXJzKGRpciwgZXJyID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgICAgbWFrZUZpbGUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGaWxlU3luYyAoZmlsZSkge1xuICBsZXQgc3RhdHNcbiAgdHJ5IHtcbiAgICBzdGF0cyA9IGZzLnN0YXRTeW5jKGZpbGUpXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIGlmIChzdGF0cyAmJiBzdGF0cy5pc0ZpbGUoKSkgcmV0dXJuXG5cbiAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGZpbGUpXG4gIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSB7XG4gICAgbWtkaXIubWtkaXJzU3luYyhkaXIpXG4gIH1cblxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsICcnKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRmlsZTogdShjcmVhdGVGaWxlKSxcbiAgY3JlYXRlRmlsZVN5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmaWxlID0gcmVxdWlyZSgnLi9maWxlJylcbmNvbnN0IGxpbmsgPSByZXF1aXJlKCcuL2xpbmsnKVxuY29uc3Qgc3ltbGluayA9IHJlcXVpcmUoJy4vc3ltbGluaycpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBmaWxlXG4gIGNyZWF0ZUZpbGU6IGZpbGUuY3JlYXRlRmlsZSxcbiAgY3JlYXRlRmlsZVN5bmM6IGZpbGUuY3JlYXRlRmlsZVN5bmMsXG4gIGVuc3VyZUZpbGU6IGZpbGUuY3JlYXRlRmlsZSxcbiAgZW5zdXJlRmlsZVN5bmM6IGZpbGUuY3JlYXRlRmlsZVN5bmMsXG4gIC8vIGxpbmtcbiAgY3JlYXRlTGluazogbGluay5jcmVhdGVMaW5rLFxuICBjcmVhdGVMaW5rU3luYzogbGluay5jcmVhdGVMaW5rU3luYyxcbiAgZW5zdXJlTGluazogbGluay5jcmVhdGVMaW5rLFxuICBlbnN1cmVMaW5rU3luYzogbGluay5jcmVhdGVMaW5rU3luYyxcbiAgLy8gc3ltbGlua1xuICBjcmVhdGVTeW1saW5rOiBzeW1saW5rLmNyZWF0ZVN5bWxpbmssXG4gIGNyZWF0ZVN5bWxpbmtTeW5jOiBzeW1saW5rLmNyZWF0ZVN5bWxpbmtTeW5jLFxuICBlbnN1cmVTeW1saW5rOiBzeW1saW5rLmNyZWF0ZVN5bWxpbmssXG4gIGVuc3VyZVN5bWxpbmtTeW5jOiBzeW1saW5rLmNyZWF0ZVN5bWxpbmtTeW5jXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgdSA9IHJlcXVpcmUoJ3VuaXZlcnNhbGlmeScpLmZyb21DYWxsYmFja1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgZnMgPSByZXF1aXJlKCdncmFjZWZ1bC1mcycpXG5jb25zdCBta2RpciA9IHJlcXVpcmUoJy4uL21rZGlycycpXG5jb25zdCBwYXRoRXhpc3RzID0gcmVxdWlyZSgnLi4vcGF0aC1leGlzdHMnKS5wYXRoRXhpc3RzXG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmsgKHNyY3BhdGgsIGRzdHBhdGgsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIG1ha2VMaW5rIChzcmNwYXRoLCBkc3RwYXRoKSB7XG4gICAgZnMubGluayhzcmNwYXRoLCBkc3RwYXRoLCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgIGNhbGxiYWNrKG51bGwpXG4gICAgfSlcbiAgfVxuXG4gIHBhdGhFeGlzdHMoZHN0cGF0aCwgKGVyciwgZGVzdGluYXRpb25FeGlzdHMpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIGlmIChkZXN0aW5hdGlvbkV4aXN0cykgcmV0dXJuIGNhbGxiYWNrKG51bGwpXG4gICAgZnMubHN0YXQoc3JjcGF0aCwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBlcnIubWVzc2FnZSA9IGVyci5tZXNzYWdlLnJlcGxhY2UoJ2xzdGF0JywgJ2Vuc3VyZUxpbmsnKVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoZHN0cGF0aClcbiAgICAgIHBhdGhFeGlzdHMoZGlyLCAoZXJyLCBkaXJFeGlzdHMpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgICAgaWYgKGRpckV4aXN0cykgcmV0dXJuIG1ha2VMaW5rKHNyY3BhdGgsIGRzdHBhdGgpXG4gICAgICAgIG1rZGlyLm1rZGlycyhkaXIsIGVyciA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgICAgICBtYWtlTGluayhzcmNwYXRoLCBkc3RwYXRoKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rU3luYyAoc3JjcGF0aCwgZHN0cGF0aCkge1xuICBjb25zdCBkZXN0aW5hdGlvbkV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZHN0cGF0aClcbiAgaWYgKGRlc3RpbmF0aW9uRXhpc3RzKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgdHJ5IHtcbiAgICBmcy5sc3RhdFN5bmMoc3JjcGF0aClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXJyLm1lc3NhZ2UgPSBlcnIubWVzc2FnZS5yZXBsYWNlKCdsc3RhdCcsICdlbnN1cmVMaW5rJylcbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShkc3RwYXRoKVxuICBjb25zdCBkaXJFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGRpcilcbiAgaWYgKGRpckV4aXN0cykgcmV0dXJuIGZzLmxpbmtTeW5jKHNyY3BhdGgsIGRzdHBhdGgpXG4gIG1rZGlyLm1rZGlyc1N5bmMoZGlyKVxuXG4gIHJldHVybiBmcy5saW5rU3luYyhzcmNwYXRoLCBkc3RwYXRoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlTGluazogdShjcmVhdGVMaW5rKSxcbiAgY3JlYXRlTGlua1N5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IHBhdGhFeGlzdHMgPSByZXF1aXJlKCcuLi9wYXRoLWV4aXN0cycpLnBhdGhFeGlzdHNcblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdHdvIHR5cGVzIG9mIHBhdGhzLCBvbmUgcmVsYXRpdmUgdG8gc3ltbGluaywgYW5kIG9uZVxuICogcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkuIENoZWNrcyBpZiBwYXRoIGlzIGFic29sdXRlIG9yXG4gKiByZWxhdGl2ZS4gSWYgdGhlIHBhdGggaXMgcmVsYXRpdmUsIHRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIHRoZSBwYXRoIGlzXG4gKiByZWxhdGl2ZSB0byBzeW1saW5rIG9yIHJlbGF0aXZlIHRvIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkuIFRoaXMgaXMgYW5cbiAqIGluaXRpYXRpdmUgdG8gZmluZCBhIHNtYXJ0ZXIgYHNyY3BhdGhgIHRvIHN1cHBseSB3aGVuIGJ1aWxkaW5nIHN5bWxpbmtzLlxuICogVGhpcyBhbGxvd3MgeW91IHRvIGRldGVybWluZSB3aGljaCBwYXRoIHRvIHVzZSBvdXQgb2Ygb25lIG9mIHRocmVlIHBvc3NpYmxlXG4gKiB0eXBlcyBvZiBzb3VyY2UgcGF0aHMuIFRoZSBmaXJzdCBpcyBhbiBhYnNvbHV0ZSBwYXRoLiBUaGlzIGlzIGRldGVjdGVkIGJ5XG4gKiBgcGF0aC5pc0Fic29sdXRlKClgLiBXaGVuIGFuIGFic29sdXRlIHBhdGggaXMgcHJvdmlkZWQsIGl0IGlzIGNoZWNrZWQgdG9cbiAqIHNlZSBpZiBpdCBleGlzdHMuIElmIGl0IGRvZXMgaXQncyB1c2VkLCBpZiBub3QgYW4gZXJyb3IgaXMgcmV0dXJuZWRcbiAqIChjYWxsYmFjaykvIHRocm93biAoc3luYykuIFRoZSBvdGhlciB0d28gb3B0aW9ucyBmb3IgYHNyY3BhdGhgIGFyZSBhXG4gKiByZWxhdGl2ZSB1cmwuIEJ5IGRlZmF1bHQgTm9kZSdzIGBmcy5zeW1saW5rYCB3b3JrcyBieSBjcmVhdGluZyBhIHN5bWxpbmtcbiAqIHVzaW5nIGBkc3RwYXRoYCBhbmQgZXhwZWN0cyB0aGUgYHNyY3BhdGhgIHRvIGJlIHJlbGF0aXZlIHRvIHRoZSBuZXdseVxuICogY3JlYXRlZCBzeW1saW5rLiBJZiB5b3UgcHJvdmlkZSBhIGBzcmNwYXRoYCB0aGF0IGRvZXMgbm90IGV4aXN0IG9uIHRoZSBmaWxlXG4gKiBzeXN0ZW0gaXQgcmVzdWx0cyBpbiBhIGJyb2tlbiBzeW1saW5rLiBUbyBtaW5pbWl6ZSB0aGlzLCB0aGUgZnVuY3Rpb25cbiAqIGNoZWNrcyB0byBzZWUgaWYgdGhlICdyZWxhdGl2ZSB0byBzeW1saW5rJyBzb3VyY2UgZmlsZSBleGlzdHMsIGFuZCBpZiBpdFxuICogZG9lcyBpdCB3aWxsIHVzZSBpdC4gSWYgaXQgZG9lcyBub3QsIGl0IGNoZWNrcyBpZiB0aGVyZSdzIGEgZmlsZSB0aGF0XG4gKiBleGlzdHMgdGhhdCBpcyByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSwgaWYgZG9lcyBpdHMgdXNlZC5cbiAqIFRoaXMgcHJlc2VydmVzIHRoZSBleHBlY3RhdGlvbnMgb2YgdGhlIG9yaWdpbmFsIGZzLnN5bWxpbmsgc3BlYyBhbmQgYWRkc1xuICogdGhlIGFiaWxpdHkgdG8gcGFzcyBpbiBgcmVsYXRpdmUgdG8gY3VycmVudCB3b3JraW5nIGRpcmVjb3RyeWAgcGF0aHMuXG4gKi9cblxuZnVuY3Rpb24gc3ltbGlua1BhdGhzIChzcmNwYXRoLCBkc3RwYXRoLCBjYWxsYmFjaykge1xuICBpZiAocGF0aC5pc0Fic29sdXRlKHNyY3BhdGgpKSB7XG4gICAgcmV0dXJuIGZzLmxzdGF0KHNyY3BhdGgsIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSBlcnIubWVzc2FnZS5yZXBsYWNlKCdsc3RhdCcsICdlbnN1cmVTeW1saW5rJylcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7XG4gICAgICAgICd0b0N3ZCc6IHNyY3BhdGgsXG4gICAgICAgICd0b0RzdCc6IHNyY3BhdGhcbiAgICAgIH0pXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkc3RkaXIgPSBwYXRoLmRpcm5hbWUoZHN0cGF0aClcbiAgICBjb25zdCByZWxhdGl2ZVRvRHN0ID0gcGF0aC5qb2luKGRzdGRpciwgc3JjcGF0aClcbiAgICByZXR1cm4gcGF0aEV4aXN0cyhyZWxhdGl2ZVRvRHN0LCAoZXJyLCBleGlzdHMpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7XG4gICAgICAgICAgJ3RvQ3dkJzogcmVsYXRpdmVUb0RzdCxcbiAgICAgICAgICAndG9Ec3QnOiBzcmNwYXRoXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnMubHN0YXQoc3JjcGF0aCwgKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGVyci5tZXNzYWdlID0gZXJyLm1lc3NhZ2UucmVwbGFjZSgnbHN0YXQnLCAnZW5zdXJlU3ltbGluaycpXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwge1xuICAgICAgICAgICAgJ3RvQ3dkJzogc3JjcGF0aCxcbiAgICAgICAgICAgICd0b0RzdCc6IHBhdGgucmVsYXRpdmUoZHN0ZGlyLCBzcmNwYXRoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzeW1saW5rUGF0aHNTeW5jIChzcmNwYXRoLCBkc3RwYXRoKSB7XG4gIGxldCBleGlzdHNcbiAgaWYgKHBhdGguaXNBYnNvbHV0ZShzcmNwYXRoKSkge1xuICAgIGV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoc3JjcGF0aClcbiAgICBpZiAoIWV4aXN0cykgdGhyb3cgbmV3IEVycm9yKCdhYnNvbHV0ZSBzcmNwYXRoIGRvZXMgbm90IGV4aXN0JylcbiAgICByZXR1cm4ge1xuICAgICAgJ3RvQ3dkJzogc3JjcGF0aCxcbiAgICAgICd0b0RzdCc6IHNyY3BhdGhcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZHN0ZGlyID0gcGF0aC5kaXJuYW1lKGRzdHBhdGgpXG4gICAgY29uc3QgcmVsYXRpdmVUb0RzdCA9IHBhdGguam9pbihkc3RkaXIsIHNyY3BhdGgpXG4gICAgZXhpc3RzID0gZnMuZXhpc3RzU3luYyhyZWxhdGl2ZVRvRHN0KVxuICAgIGlmIChleGlzdHMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd0b0N3ZCc6IHJlbGF0aXZlVG9Ec3QsXG4gICAgICAgICd0b0RzdCc6IHNyY3BhdGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RzID0gZnMuZXhpc3RzU3luYyhzcmNwYXRoKVxuICAgICAgaWYgKCFleGlzdHMpIHRocm93IG5ldyBFcnJvcigncmVsYXRpdmUgc3JjcGF0aCBkb2VzIG5vdCBleGlzdCcpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAndG9Dd2QnOiBzcmNwYXRoLFxuICAgICAgICAndG9Ec3QnOiBwYXRoLnJlbGF0aXZlKGRzdGRpciwgc3JjcGF0aClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN5bWxpbmtQYXRocyxcbiAgc3ltbGlua1BhdGhzU3luY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuXG5mdW5jdGlvbiBzeW1saW5rVHlwZSAoc3JjcGF0aCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpID8gdHlwZSA6IGNhbGxiYWNrXG4gIHR5cGUgPSAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpID8gZmFsc2UgOiB0eXBlXG4gIGlmICh0eXBlKSByZXR1cm4gY2FsbGJhY2sobnVsbCwgdHlwZSlcbiAgZnMubHN0YXQoc3JjcGF0aCwgKGVyciwgc3RhdHMpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2sobnVsbCwgJ2ZpbGUnKVxuICAgIHR5cGUgPSAoc3RhdHMgJiYgc3RhdHMuaXNEaXJlY3RvcnkoKSkgPyAnZGlyJyA6ICdmaWxlJ1xuICAgIGNhbGxiYWNrKG51bGwsIHR5cGUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHN5bWxpbmtUeXBlU3luYyAoc3JjcGF0aCwgdHlwZSkge1xuICBsZXQgc3RhdHNcblxuICBpZiAodHlwZSkgcmV0dXJuIHR5cGVcbiAgdHJ5IHtcbiAgICBzdGF0cyA9IGZzLmxzdGF0U3luYyhzcmNwYXRoKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuICdmaWxlJ1xuICB9XG4gIHJldHVybiAoc3RhdHMgJiYgc3RhdHMuaXNEaXJlY3RvcnkoKSkgPyAnZGlyJyA6ICdmaWxlJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3ltbGlua1R5cGUsXG4gIHN5bWxpbmtUeXBlU3luY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuY29uc3QgX21rZGlycyA9IHJlcXVpcmUoJy4uL21rZGlycycpXG5jb25zdCBta2RpcnMgPSBfbWtkaXJzLm1rZGlyc1xuY29uc3QgbWtkaXJzU3luYyA9IF9ta2RpcnMubWtkaXJzU3luY1xuXG5jb25zdCBfc3ltbGlua1BhdGhzID0gcmVxdWlyZSgnLi9zeW1saW5rLXBhdGhzJylcbmNvbnN0IHN5bWxpbmtQYXRocyA9IF9zeW1saW5rUGF0aHMuc3ltbGlua1BhdGhzXG5jb25zdCBzeW1saW5rUGF0aHNTeW5jID0gX3N5bWxpbmtQYXRocy5zeW1saW5rUGF0aHNTeW5jXG5cbmNvbnN0IF9zeW1saW5rVHlwZSA9IHJlcXVpcmUoJy4vc3ltbGluay10eXBlJylcbmNvbnN0IHN5bWxpbmtUeXBlID0gX3N5bWxpbmtUeXBlLnN5bWxpbmtUeXBlXG5jb25zdCBzeW1saW5rVHlwZVN5bmMgPSBfc3ltbGlua1R5cGUuc3ltbGlua1R5cGVTeW5jXG5cbmNvbnN0IHBhdGhFeGlzdHMgPSByZXF1aXJlKCcuLi9wYXRoLWV4aXN0cycpLnBhdGhFeGlzdHNcblxuZnVuY3Rpb24gY3JlYXRlU3ltbGluayAoc3JjcGF0aCwgZHN0cGF0aCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpID8gdHlwZSA6IGNhbGxiYWNrXG4gIHR5cGUgPSAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpID8gZmFsc2UgOiB0eXBlXG5cbiAgcGF0aEV4aXN0cyhkc3RwYXRoLCAoZXJyLCBkZXN0aW5hdGlvbkV4aXN0cykgPT4ge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgaWYgKGRlc3RpbmF0aW9uRXhpc3RzKSByZXR1cm4gY2FsbGJhY2sobnVsbClcbiAgICBzeW1saW5rUGF0aHMoc3JjcGF0aCwgZHN0cGF0aCwgKGVyciwgcmVsYXRpdmUpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICBzcmNwYXRoID0gcmVsYXRpdmUudG9Ec3RcbiAgICAgIHN5bWxpbmtUeXBlKHJlbGF0aXZlLnRvQ3dkLCB0eXBlLCAoZXJyLCB0eXBlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShkc3RwYXRoKVxuICAgICAgICBwYXRoRXhpc3RzKGRpciwgKGVyciwgZGlyRXhpc3RzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgICAgICBpZiAoZGlyRXhpc3RzKSByZXR1cm4gZnMuc3ltbGluayhzcmNwYXRoLCBkc3RwYXRoLCB0eXBlLCBjYWxsYmFjaylcbiAgICAgICAgICBta2RpcnMoZGlyLCBlcnIgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgICAgICAgIGZzLnN5bWxpbmsoc3JjcGF0aCwgZHN0cGF0aCwgdHlwZSwgY2FsbGJhY2spXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3ltbGlua1N5bmMgKHNyY3BhdGgsIGRzdHBhdGgsIHR5cGUpIHtcbiAgY29uc3QgZGVzdGluYXRpb25FeGlzdHMgPSBmcy5leGlzdHNTeW5jKGRzdHBhdGgpXG4gIGlmIChkZXN0aW5hdGlvbkV4aXN0cykgcmV0dXJuIHVuZGVmaW5lZFxuXG4gIGNvbnN0IHJlbGF0aXZlID0gc3ltbGlua1BhdGhzU3luYyhzcmNwYXRoLCBkc3RwYXRoKVxuICBzcmNwYXRoID0gcmVsYXRpdmUudG9Ec3RcbiAgdHlwZSA9IHN5bWxpbmtUeXBlU3luYyhyZWxhdGl2ZS50b0N3ZCwgdHlwZSlcbiAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGRzdHBhdGgpXG4gIGNvbnN0IGV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZGlyKVxuICBpZiAoZXhpc3RzKSByZXR1cm4gZnMuc3ltbGlua1N5bmMoc3JjcGF0aCwgZHN0cGF0aCwgdHlwZSlcbiAgbWtkaXJzU3luYyhkaXIpXG4gIHJldHVybiBmcy5zeW1saW5rU3luYyhzcmNwYXRoLCBkc3RwYXRoLCB0eXBlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlU3ltbGluazogdShjcmVhdGVTeW1saW5rKSxcbiAgY3JlYXRlU3ltbGlua1N5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuLy8gVGhpcyBpcyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL25vcm1hbGl6ZS9telxuLy8gQ29weXJpZ2h0IChjKSAyMDE0LTIwMTYgSm9uYXRoYW4gT25nIG1lQGpvbmdsZWJlcnJ5LmNvbSBhbmQgQ29udHJpYnV0b3JzXG5jb25zdCB1ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JykuZnJvbUNhbGxiYWNrXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcblxuY29uc3QgYXBpID0gW1xuICAnYWNjZXNzJyxcbiAgJ2FwcGVuZEZpbGUnLFxuICAnY2htb2QnLFxuICAnY2hvd24nLFxuICAnY2xvc2UnLFxuICAnY29weUZpbGUnLFxuICAnZmNobW9kJyxcbiAgJ2ZjaG93bicsXG4gICdmZGF0YXN5bmMnLFxuICAnZnN0YXQnLFxuICAnZnN5bmMnLFxuICAnZnRydW5jYXRlJyxcbiAgJ2Z1dGltZXMnLFxuICAnbGNob3duJyxcbiAgJ2xjaG1vZCcsXG4gICdsaW5rJyxcbiAgJ2xzdGF0JyxcbiAgJ21rZGlyJyxcbiAgJ21rZHRlbXAnLFxuICAnb3BlbicsXG4gICdyZWFkRmlsZScsXG4gICdyZWFkZGlyJyxcbiAgJ3JlYWRsaW5rJyxcbiAgJ3JlYWxwYXRoJyxcbiAgJ3JlbmFtZScsXG4gICdybWRpcicsXG4gICdzdGF0JyxcbiAgJ3N5bWxpbmsnLFxuICAndHJ1bmNhdGUnLFxuICAndW5saW5rJyxcbiAgJ3V0aW1lcycsXG4gICd3cml0ZUZpbGUnXG5dLmZpbHRlcihrZXkgPT4ge1xuICAvLyBTb21lIGNvbW1hbmRzIGFyZSBub3QgYXZhaWxhYmxlIG9uIHNvbWUgc3lzdGVtcy4gRXg6XG4gIC8vIGZzLmNvcHlGaWxlIHdhcyBhZGRlZCBpbiBOb2RlLmpzIHY4LjUuMFxuICAvLyBmcy5ta2R0ZW1wIHdhcyBhZGRlZCBpbiBOb2RlLmpzIHY1LjEwLjBcbiAgLy8gZnMubGNob3duIGlzIG5vdCBhdmFpbGFibGUgb24gYXQgbGVhc3Qgc29tZSBMaW51eFxuICByZXR1cm4gdHlwZW9mIGZzW2tleV0gPT09ICdmdW5jdGlvbidcbn0pXG5cbi8vIEV4cG9ydCBhbGwga2V5czpcbk9iamVjdC5rZXlzKGZzKS5mb3JFYWNoKGtleSA9PiB7XG4gIGlmIChrZXkgPT09ICdwcm9taXNlcycpIHtcbiAgICAvLyBmcy5wcm9taXNlcyBpcyBhIGdldHRlciBwcm9wZXJ0eSB0aGF0IHRyaWdnZXJzIEV4cGVyaW1lbnRhbFdhcm5pbmdcbiAgICAvLyBEb24ndCByZS1leHBvcnQgaXQgaGVyZSwgdGhlIGdldHRlciBpcyBkZWZpbmVkIGluIFwibGliL2luZGV4LmpzXCJcbiAgICByZXR1cm5cbiAgfVxuICBleHBvcnRzW2tleV0gPSBmc1trZXldXG59KVxuXG4vLyBVbml2ZXJzYWxpZnkgYXN5bmMgbWV0aG9kczpcbmFwaS5mb3JFYWNoKG1ldGhvZCA9PiB7XG4gIGV4cG9ydHNbbWV0aG9kXSA9IHUoZnNbbWV0aG9kXSlcbn0pXG5cbi8vIFdlIGRpZmZlciBmcm9tIG16L2ZzIGluIHRoYXQgd2Ugc3RpbGwgc2hpcCB0aGUgb2xkLCBicm9rZW4sIGZzLmV4aXN0cygpXG4vLyBzaW5jZSB3ZSBhcmUgYSBkcm9wLWluIHJlcGxhY2VtZW50IGZvciB0aGUgbmF0aXZlIG1vZHVsZVxuZXhwb3J0cy5leGlzdHMgPSBmdW5jdGlvbiAoZmlsZW5hbWUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnMuZXhpc3RzKGZpbGVuYW1lLCBjYWxsYmFjaylcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgcmV0dXJuIGZzLmV4aXN0cyhmaWxlbmFtZSwgcmVzb2x2ZSlcbiAgfSlcbn1cblxuLy8gZnMucmVhZCgpICYgZnMud3JpdGUgbmVlZCBzcGVjaWFsIHRyZWF0bWVudCBkdWUgdG8gbXVsdGlwbGUgY2FsbGJhY2sgYXJnc1xuXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZzLnJlYWQoZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uLCBjYWxsYmFjaylcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZzLnJlYWQoZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uLCAoZXJyLCBieXRlc1JlYWQsIGJ1ZmZlcikgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICByZXNvbHZlKHsgYnl0ZXNSZWFkLCBidWZmZXIgfSlcbiAgICB9KVxuICB9KVxufVxuXG4vLyBGdW5jdGlvbiBzaWduYXR1cmUgY2FuIGJlXG4vLyBmcy53cml0ZShmZCwgYnVmZmVyWywgb2Zmc2V0WywgbGVuZ3RoWywgcG9zaXRpb25dXV0sIGNhbGxiYWNrKVxuLy8gT1Jcbi8vIGZzLndyaXRlKGZkLCBzdHJpbmdbLCBwb3NpdGlvblssIGVuY29kaW5nXV0sIGNhbGxiYWNrKVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgc28gd2UgdXNlIC4uLmFyZ3NcbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoZmQsIGJ1ZmZlciwgLi4uYXJncykge1xuICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmcy53cml0ZShmZCwgYnVmZmVyLCAuLi5hcmdzKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmcy53cml0ZShmZCwgYnVmZmVyLCAuLi5hcmdzLCAoZXJyLCBieXRlc1dyaXR0ZW4sIGJ1ZmZlcikgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICByZXNvbHZlKHsgYnl0ZXNXcml0dGVuLCBidWZmZXIgfSlcbiAgICB9KVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbihcbiAge30sXG4gIC8vIEV4cG9ydCBwcm9taXNlaWZpZWQgZ3JhY2VmdWwtZnM6XG4gIHJlcXVpcmUoJy4vZnMnKSxcbiAgLy8gRXhwb3J0IGV4dHJhIG1ldGhvZHM6XG4gIHJlcXVpcmUoJy4vY29weS1zeW5jJyksXG4gIHJlcXVpcmUoJy4vY29weScpLFxuICByZXF1aXJlKCcuL2VtcHR5JyksXG4gIHJlcXVpcmUoJy4vZW5zdXJlJyksXG4gIHJlcXVpcmUoJy4vanNvbicpLFxuICByZXF1aXJlKCcuL21rZGlycycpLFxuICByZXF1aXJlKCcuL21vdmUtc3luYycpLFxuICByZXF1aXJlKCcuL21vdmUnKSxcbiAgcmVxdWlyZSgnLi9vdXRwdXQnKSxcbiAgcmVxdWlyZSgnLi9wYXRoLWV4aXN0cycpLFxuICByZXF1aXJlKCcuL3JlbW92ZScpXG4pXG5cbi8vIEV4cG9ydCBmcy5wcm9taXNlcyBhcyBhIGdldHRlciBwcm9wZXJ0eSBzbyB0aGF0IHdlIGRvbid0IHRyaWdnZXJcbi8vIEV4cGVyaW1lbnRhbFdhcm5pbmcgYmVmb3JlIGZzLnByb21pc2VzIGlzIGFjdHVhbGx5IGFjY2Vzc2VkLlxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5pZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihmcywgJ3Byb21pc2VzJykpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCAncHJvbWlzZXMnLCB7XG4gICAgZ2V0ICgpIHsgcmV0dXJuIGZzLnByb21pc2VzIH1cbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB1ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JykuZnJvbUNhbGxiYWNrXG5jb25zdCBqc29uRmlsZSA9IHJlcXVpcmUoJy4vanNvbmZpbGUnKVxuXG5qc29uRmlsZS5vdXRwdXRKc29uID0gdShyZXF1aXJlKCcuL291dHB1dC1qc29uJykpXG5qc29uRmlsZS5vdXRwdXRKc29uU3luYyA9IHJlcXVpcmUoJy4vb3V0cHV0LWpzb24tc3luYycpXG4vLyBhbGlhc2VzXG5qc29uRmlsZS5vdXRwdXRKU09OID0ganNvbkZpbGUub3V0cHV0SnNvblxuanNvbkZpbGUub3V0cHV0SlNPTlN5bmMgPSBqc29uRmlsZS5vdXRwdXRKc29uU3luY1xuanNvbkZpbGUud3JpdGVKU09OID0ganNvbkZpbGUud3JpdGVKc29uXG5qc29uRmlsZS53cml0ZUpTT05TeW5jID0ganNvbkZpbGUud3JpdGVKc29uU3luY1xuanNvbkZpbGUucmVhZEpTT04gPSBqc29uRmlsZS5yZWFkSnNvblxuanNvbkZpbGUucmVhZEpTT05TeW5jID0ganNvbkZpbGUucmVhZEpzb25TeW5jXG5cbm1vZHVsZS5leHBvcnRzID0ganNvbkZpbGVcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB1ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JykuZnJvbUNhbGxiYWNrXG5jb25zdCBqc29uRmlsZSA9IHJlcXVpcmUoJ2pzb25maWxlJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGpzb25maWxlIGV4cG9ydHNcbiAgcmVhZEpzb246IHUoanNvbkZpbGUucmVhZEZpbGUpLFxuICByZWFkSnNvblN5bmM6IGpzb25GaWxlLnJlYWRGaWxlU3luYyxcbiAgd3JpdGVKc29uOiB1KGpzb25GaWxlLndyaXRlRmlsZSksXG4gIHdyaXRlSnNvblN5bmM6IGpzb25GaWxlLndyaXRlRmlsZVN5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IG1rZGlyID0gcmVxdWlyZSgnLi4vbWtkaXJzJylcbmNvbnN0IGpzb25GaWxlID0gcmVxdWlyZSgnLi9qc29uZmlsZScpXG5cbmZ1bmN0aW9uIG91dHB1dEpzb25TeW5jIChmaWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShmaWxlKVxuXG4gIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSB7XG4gICAgbWtkaXIubWtkaXJzU3luYyhkaXIpXG4gIH1cblxuICBqc29uRmlsZS53cml0ZUpzb25TeW5jKGZpbGUsIGRhdGEsIG9wdGlvbnMpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3V0cHV0SnNvblN5bmNcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBta2RpciA9IHJlcXVpcmUoJy4uL21rZGlycycpXG5jb25zdCBwYXRoRXhpc3RzID0gcmVxdWlyZSgnLi4vcGF0aC1leGlzdHMnKS5wYXRoRXhpc3RzXG5jb25zdCBqc29uRmlsZSA9IHJlcXVpcmUoJy4vanNvbmZpbGUnKVxuXG5mdW5jdGlvbiBvdXRwdXRKc29uIChmaWxlLCBkYXRhLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIGNvbnN0IGRpciA9IHBhdGguZGlybmFtZShmaWxlKVxuXG4gIHBhdGhFeGlzdHMoZGlyLCAoZXJyLCBpdERvZXMpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIGlmIChpdERvZXMpIHJldHVybiBqc29uRmlsZS53cml0ZUpzb24oZmlsZSwgZGF0YSwgb3B0aW9ucywgY2FsbGJhY2spXG5cbiAgICBta2Rpci5ta2RpcnMoZGlyLCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICAgIGpzb25GaWxlLndyaXRlSnNvbihmaWxlLCBkYXRhLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICB9KVxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG91dHB1dEpzb25cbiIsIid1c2Ugc3RyaWN0J1xuY29uc3QgdSA9IHJlcXVpcmUoJ3VuaXZlcnNhbGlmeScpLmZyb21DYWxsYmFja1xuY29uc3QgbWtkaXJzID0gdShyZXF1aXJlKCcuL21rZGlycycpKVxuY29uc3QgbWtkaXJzU3luYyA9IHJlcXVpcmUoJy4vbWtkaXJzLXN5bmMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWtkaXJzLFxuICBta2RpcnNTeW5jLFxuICAvLyBhbGlhc1xuICBta2RpcnA6IG1rZGlycyxcbiAgbWtkaXJwU3luYzogbWtkaXJzU3luYyxcbiAgZW5zdXJlRGlyOiBta2RpcnMsXG4gIGVuc3VyZURpclN5bmM6IG1rZGlyc1N5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IGludmFsaWRXaW4zMlBhdGggPSByZXF1aXJlKCcuL3dpbjMyJykuaW52YWxpZFdpbjMyUGF0aFxuXG5jb25zdCBvNzc3ID0gcGFyc2VJbnQoJzA3NzcnLCA4KVxuXG5mdW5jdGlvbiBta2RpcnNTeW5jIChwLCBvcHRzLCBtYWRlKSB7XG4gIGlmICghb3B0cyB8fCB0eXBlb2Ygb3B0cyAhPT0gJ29iamVjdCcpIHtcbiAgICBvcHRzID0geyBtb2RlOiBvcHRzIH1cbiAgfVxuXG4gIGxldCBtb2RlID0gb3B0cy5tb2RlXG4gIGNvbnN0IHhmcyA9IG9wdHMuZnMgfHwgZnNcblxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyAmJiBpbnZhbGlkV2luMzJQYXRoKHApKSB7XG4gICAgY29uc3QgZXJySW52YWwgPSBuZXcgRXJyb3IocCArICcgY29udGFpbnMgaW52YWxpZCBXSU4zMiBwYXRoIGNoYXJhY3RlcnMuJylcbiAgICBlcnJJbnZhbC5jb2RlID0gJ0VJTlZBTCdcbiAgICB0aHJvdyBlcnJJbnZhbFxuICB9XG5cbiAgaWYgKG1vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIG1vZGUgPSBvNzc3ICYgKH5wcm9jZXNzLnVtYXNrKCkpXG4gIH1cbiAgaWYgKCFtYWRlKSBtYWRlID0gbnVsbFxuXG4gIHAgPSBwYXRoLnJlc29sdmUocClcblxuICB0cnkge1xuICAgIHhmcy5ta2RpclN5bmMocCwgbW9kZSlcbiAgICBtYWRlID0gbWFkZSB8fCBwXG4gIH0gY2F0Y2ggKGVycjApIHtcbiAgICBpZiAoZXJyMC5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgaWYgKHBhdGguZGlybmFtZShwKSA9PT0gcCkgdGhyb3cgZXJyMFxuICAgICAgbWFkZSA9IG1rZGlyc1N5bmMocGF0aC5kaXJuYW1lKHApLCBvcHRzLCBtYWRlKVxuICAgICAgbWtkaXJzU3luYyhwLCBvcHRzLCBtYWRlKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJbiB0aGUgY2FzZSBvZiBhbnkgb3RoZXIgZXJyb3IsIGp1c3Qgc2VlIGlmIHRoZXJlJ3MgYSBkaXIgdGhlcmVcbiAgICAgIC8vIGFscmVhZHkuIElmIHNvLCB0aGVuIGhvb3JheSEgIElmIG5vdCwgdGhlbiBzb21ldGhpbmcgaXMgYm9ya2VkLlxuICAgICAgbGV0IHN0YXRcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXQgPSB4ZnMuc3RhdFN5bmMocClcbiAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgdGhyb3cgZXJyMFxuICAgICAgfVxuICAgICAgaWYgKCFzdGF0LmlzRGlyZWN0b3J5KCkpIHRocm93IGVycjBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFkZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1rZGlyc1N5bmNcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IGludmFsaWRXaW4zMlBhdGggPSByZXF1aXJlKCcuL3dpbjMyJykuaW52YWxpZFdpbjMyUGF0aFxuXG5jb25zdCBvNzc3ID0gcGFyc2VJbnQoJzA3NzcnLCA4KVxuXG5mdW5jdGlvbiBta2RpcnMgKHAsIG9wdHMsIGNhbGxiYWNrLCBtYWRlKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gb3B0c1xuICAgIG9wdHMgPSB7fVxuICB9IGVsc2UgaWYgKCFvcHRzIHx8IHR5cGVvZiBvcHRzICE9PSAnb2JqZWN0Jykge1xuICAgIG9wdHMgPSB7IG1vZGU6IG9wdHMgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgJiYgaW52YWxpZFdpbjMyUGF0aChwKSkge1xuICAgIGNvbnN0IGVyckludmFsID0gbmV3IEVycm9yKHAgKyAnIGNvbnRhaW5zIGludmFsaWQgV0lOMzIgcGF0aCBjaGFyYWN0ZXJzLicpXG4gICAgZXJySW52YWwuY29kZSA9ICdFSU5WQUwnXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVyckludmFsKVxuICB9XG5cbiAgbGV0IG1vZGUgPSBvcHRzLm1vZGVcbiAgY29uc3QgeGZzID0gb3B0cy5mcyB8fCBmc1xuXG4gIGlmIChtb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICBtb2RlID0gbzc3NyAmICh+cHJvY2Vzcy51bWFzaygpKVxuICB9XG4gIGlmICghbWFkZSkgbWFkZSA9IG51bGxcblxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9XG4gIHAgPSBwYXRoLnJlc29sdmUocClcblxuICB4ZnMubWtkaXIocCwgbW9kZSwgZXIgPT4ge1xuICAgIGlmICghZXIpIHtcbiAgICAgIG1hZGUgPSBtYWRlIHx8IHBcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBtYWRlKVxuICAgIH1cbiAgICBzd2l0Y2ggKGVyLmNvZGUpIHtcbiAgICAgIGNhc2UgJ0VOT0VOVCc6XG4gICAgICAgIGlmIChwYXRoLmRpcm5hbWUocCkgPT09IHApIHJldHVybiBjYWxsYmFjayhlcilcbiAgICAgICAgbWtkaXJzKHBhdGguZGlybmFtZShwKSwgb3B0cywgKGVyLCBtYWRlKSA9PiB7XG4gICAgICAgICAgaWYgKGVyKSBjYWxsYmFjayhlciwgbWFkZSlcbiAgICAgICAgICBlbHNlIG1rZGlycyhwLCBvcHRzLCBjYWxsYmFjaywgbWFkZSlcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcblxuICAgICAgLy8gSW4gdGhlIGNhc2Ugb2YgYW55IG90aGVyIGVycm9yLCBqdXN0IHNlZSBpZiB0aGVyZSdzIGEgZGlyXG4gICAgICAvLyB0aGVyZSBhbHJlYWR5LiAgSWYgc28sIHRoZW4gaG9vcmF5ISAgSWYgbm90LCB0aGVuIHNvbWV0aGluZ1xuICAgICAgLy8gaXMgYm9ya2VkLlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgeGZzLnN0YXQocCwgKGVyMiwgc3RhdCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHRoZSBzdGF0IGZhaWxzLCB0aGVuIHRoYXQncyBzdXBlciB3ZWlyZC5cbiAgICAgICAgICAvLyBsZXQgdGhlIG9yaWdpbmFsIGVycm9yIGJlIHRoZSBmYWlsdXJlIHJlYXNvbi5cbiAgICAgICAgICBpZiAoZXIyIHx8ICFzdGF0LmlzRGlyZWN0b3J5KCkpIGNhbGxiYWNrKGVyLCBtYWRlKVxuICAgICAgICAgIGVsc2UgY2FsbGJhY2sobnVsbCwgbWFkZSlcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWtkaXJzXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG4vLyBnZXQgZHJpdmUgb24gd2luZG93c1xuZnVuY3Rpb24gZ2V0Um9vdFBhdGggKHApIHtcbiAgcCA9IHBhdGgubm9ybWFsaXplKHBhdGgucmVzb2x2ZShwKSkuc3BsaXQocGF0aC5zZXApXG4gIGlmIChwLmxlbmd0aCA+IDApIHJldHVybiBwWzBdXG4gIHJldHVybiBudWxsXG59XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzYyODg4LzEwMzMzIGNvbnRhaW5zIG1vcmUgYWNjdXJhdGVcbi8vIFRPRE86IGV4cGFuZCB0byBpbmNsdWRlIHRoZSByZXN0XG5jb25zdCBJTlZBTElEX1BBVEhfQ0hBUlMgPSAvWzw+OlwifD8qXS9cblxuZnVuY3Rpb24gaW52YWxpZFdpbjMyUGF0aCAocCkge1xuICBjb25zdCBycCA9IGdldFJvb3RQYXRoKHApXG4gIHAgPSBwLnJlcGxhY2UocnAsICcnKVxuICByZXR1cm4gSU5WQUxJRF9QQVRIX0NIQVJTLnRlc3QocClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldFJvb3RQYXRoLFxuICBpbnZhbGlkV2luMzJQYXRoXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgZnMgPSByZXF1aXJlKCdncmFjZWZ1bC1mcycpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBjb3B5U3luYyA9IHJlcXVpcmUoJy4uL2NvcHktc3luYycpLmNvcHlTeW5jXG5jb25zdCByZW1vdmVTeW5jID0gcmVxdWlyZSgnLi4vcmVtb3ZlJykucmVtb3ZlU3luY1xuY29uc3QgbWtkaXJwU3luYyA9IHJlcXVpcmUoJy4uL21rZGlycycpLm1rZGlyc1N5bmNcbmNvbnN0IGJ1ZmZlciA9IHJlcXVpcmUoJy4uL3V0aWwvYnVmZmVyJylcblxuZnVuY3Rpb24gbW92ZVN5bmMgKHNyYywgZGVzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICBjb25zdCBvdmVyd3JpdGUgPSBvcHRpb25zLm92ZXJ3cml0ZSB8fCBvcHRpb25zLmNsb2JiZXIgfHwgZmFsc2VcblxuICBzcmMgPSBwYXRoLnJlc29sdmUoc3JjKVxuICBkZXN0ID0gcGF0aC5yZXNvbHZlKGRlc3QpXG5cbiAgaWYgKHNyYyA9PT0gZGVzdCkgcmV0dXJuIGZzLmFjY2Vzc1N5bmMoc3JjKVxuXG4gIGlmIChpc1NyY1N1YmRpcihzcmMsIGRlc3QpKSB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBtb3ZlICcke3NyY30nIGludG8gaXRzZWxmICcke2Rlc3R9Jy5gKVxuXG4gIG1rZGlycFN5bmMocGF0aC5kaXJuYW1lKGRlc3QpKVxuICB0cnlSZW5hbWVTeW5jKClcblxuICBmdW5jdGlvbiB0cnlSZW5hbWVTeW5jICgpIHtcbiAgICBpZiAob3ZlcndyaXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZnMucmVuYW1lU3luYyhzcmMsIGRlc3QpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PVEVNUFRZJyB8fCBlcnIuY29kZSA9PT0gJ0VFWElTVCcgfHwgZXJyLmNvZGUgPT09ICdFUEVSTScpIHtcbiAgICAgICAgICByZW1vdmVTeW5jKGRlc3QpXG4gICAgICAgICAgb3B0aW9ucy5vdmVyd3JpdGUgPSBmYWxzZSAvLyBqdXN0IG92ZXJ3cml0ZWVkIGl0LCBubyBuZWVkIHRvIGRvIGl0IGFnYWluXG4gICAgICAgICAgcmV0dXJuIG1vdmVTeW5jKHNyYywgZGVzdCwgb3B0aW9ucylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY29kZSAhPT0gJ0VYREVWJykgdGhyb3cgZXJyXG4gICAgICAgIHJldHVybiBtb3ZlU3luY0Fjcm9zc0RldmljZShzcmMsIGRlc3QsIG92ZXJ3cml0ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZnMubGlua1N5bmMoc3JjLCBkZXN0KVxuICAgICAgICByZXR1cm4gZnMudW5saW5rU3luYyhzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRVhERVYnIHx8IGVyci5jb2RlID09PSAnRUlTRElSJyB8fCBlcnIuY29kZSA9PT0gJ0VQRVJNJyB8fCBlcnIuY29kZSA9PT0gJ0VOT1RTVVAnKSB7XG4gICAgICAgICAgcmV0dXJuIG1vdmVTeW5jQWNyb3NzRGV2aWNlKHNyYywgZGVzdCwgb3ZlcndyaXRlKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlU3luY0Fjcm9zc0RldmljZSAoc3JjLCBkZXN0LCBvdmVyd3JpdGUpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKHNyYylcblxuICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgcmV0dXJuIG1vdmVEaXJTeW5jQWNyb3NzRGV2aWNlKHNyYywgZGVzdCwgb3ZlcndyaXRlKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBtb3ZlRmlsZVN5bmNBY3Jvc3NEZXZpY2Uoc3JjLCBkZXN0LCBvdmVyd3JpdGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUZpbGVTeW5jQWNyb3NzRGV2aWNlIChzcmMsIGRlc3QsIG92ZXJ3cml0ZSkge1xuICBjb25zdCBCVUZfTEVOR1RIID0gNjQgKiAxMDI0XG4gIGNvbnN0IF9idWZmID0gYnVmZmVyKEJVRl9MRU5HVEgpXG5cbiAgY29uc3QgZmxhZ3MgPSBvdmVyd3JpdGUgPyAndycgOiAnd3gnXG5cbiAgY29uc3QgZmRyID0gZnMub3BlblN5bmMoc3JjLCAncicpXG4gIGNvbnN0IHN0YXQgPSBmcy5mc3RhdFN5bmMoZmRyKVxuICBjb25zdCBmZHcgPSBmcy5vcGVuU3luYyhkZXN0LCBmbGFncywgc3RhdC5tb2RlKVxuICBsZXQgcG9zID0gMFxuXG4gIHdoaWxlIChwb3MgPCBzdGF0LnNpemUpIHtcbiAgICBjb25zdCBieXRlc1JlYWQgPSBmcy5yZWFkU3luYyhmZHIsIF9idWZmLCAwLCBCVUZfTEVOR1RILCBwb3MpXG4gICAgZnMud3JpdGVTeW5jKGZkdywgX2J1ZmYsIDAsIGJ5dGVzUmVhZClcbiAgICBwb3MgKz0gYnl0ZXNSZWFkXG4gIH1cblxuICBmcy5jbG9zZVN5bmMoZmRyKVxuICBmcy5jbG9zZVN5bmMoZmR3KVxuICByZXR1cm4gZnMudW5saW5rU3luYyhzcmMpXG59XG5cbmZ1bmN0aW9uIG1vdmVEaXJTeW5jQWNyb3NzRGV2aWNlIChzcmMsIGRlc3QsIG92ZXJ3cml0ZSkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG92ZXJ3cml0ZTogZmFsc2VcbiAgfVxuXG4gIGlmIChvdmVyd3JpdGUpIHtcbiAgICByZW1vdmVTeW5jKGRlc3QpXG4gICAgdHJ5Q29weVN5bmMoKVxuICB9IGVsc2Uge1xuICAgIHRyeUNvcHlTeW5jKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeUNvcHlTeW5jICgpIHtcbiAgICBjb3B5U3luYyhzcmMsIGRlc3QsIG9wdGlvbnMpXG4gICAgcmV0dXJuIHJlbW92ZVN5bmMoc3JjKVxuICB9XG59XG5cbi8vIHJldHVybiB0cnVlIGlmIGRlc3QgaXMgYSBzdWJkaXIgb2Ygc3JjLCBvdGhlcndpc2UgZmFsc2UuXG4vLyBleHRyYWN0IGRlc3QgYmFzZSBkaXIgYW5kIGNoZWNrIGlmIHRoYXQgaXMgdGhlIHNhbWUgYXMgc3JjIGJhc2VuYW1lXG5mdW5jdGlvbiBpc1NyY1N1YmRpciAoc3JjLCBkZXN0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZzLnN0YXRTeW5jKHNyYykuaXNEaXJlY3RvcnkoKSAmJlxuICAgICAgICAgICBzcmMgIT09IGRlc3QgJiZcbiAgICAgICAgICAgZGVzdC5pbmRleE9mKHNyYykgPiAtMSAmJlxuICAgICAgICAgICBkZXN0LnNwbGl0KHBhdGguZGlybmFtZShzcmMpICsgcGF0aC5zZXApWzFdLnNwbGl0KHBhdGguc2VwKVswXSA9PT0gcGF0aC5iYXNlbmFtZShzcmMpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbW92ZVN5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB1ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JykuZnJvbUNhbGxiYWNrXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2dyYWNlZnVsLWZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IGNvcHkgPSByZXF1aXJlKCcuLi9jb3B5JykuY29weVxuY29uc3QgcmVtb3ZlID0gcmVxdWlyZSgnLi4vcmVtb3ZlJykucmVtb3ZlXG5jb25zdCBta2RpcnAgPSByZXF1aXJlKCcuLi9ta2RpcnMnKS5ta2RpcnBcbmNvbnN0IHBhdGhFeGlzdHMgPSByZXF1aXJlKCcuLi9wYXRoLWV4aXN0cycpLnBhdGhFeGlzdHNcblxuZnVuY3Rpb24gbW92ZSAoc3JjLCBkZXN0LCBvcHRzLCBjYikge1xuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IG9wdHNcbiAgICBvcHRzID0ge31cbiAgfVxuXG4gIGNvbnN0IG92ZXJ3cml0ZSA9IG9wdHMub3ZlcndyaXRlIHx8IG9wdHMuY2xvYmJlciB8fCBmYWxzZVxuXG4gIHNyYyA9IHBhdGgucmVzb2x2ZShzcmMpXG4gIGRlc3QgPSBwYXRoLnJlc29sdmUoZGVzdClcblxuICBpZiAoc3JjID09PSBkZXN0KSByZXR1cm4gZnMuYWNjZXNzKHNyYywgY2IpXG5cbiAgZnMuc3RhdChzcmMsIChlcnIsIHN0KSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcblxuICAgIGlmIChzdC5pc0RpcmVjdG9yeSgpICYmIGlzU3JjU3ViZGlyKHNyYywgZGVzdCkpIHtcbiAgICAgIHJldHVybiBjYihuZXcgRXJyb3IoYENhbm5vdCBtb3ZlICcke3NyY30nIHRvIGEgc3ViZGlyZWN0b3J5IG9mIGl0c2VsZiwgJyR7ZGVzdH0nLmApKVxuICAgIH1cbiAgICBta2RpcnAocGF0aC5kaXJuYW1lKGRlc3QpLCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgIHJldHVybiBkb1JlbmFtZShzcmMsIGRlc3QsIG92ZXJ3cml0ZSwgY2IpXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZG9SZW5hbWUgKHNyYywgZGVzdCwgb3ZlcndyaXRlLCBjYikge1xuICBpZiAob3ZlcndyaXRlKSB7XG4gICAgcmV0dXJuIHJlbW92ZShkZXN0LCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICAgIHJldHVybiByZW5hbWUoc3JjLCBkZXN0LCBvdmVyd3JpdGUsIGNiKVxuICAgIH0pXG4gIH1cbiAgcGF0aEV4aXN0cyhkZXN0LCAoZXJyLCBkZXN0RXhpc3RzKSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVycilcbiAgICBpZiAoZGVzdEV4aXN0cykgcmV0dXJuIGNiKG5ldyBFcnJvcignZGVzdCBhbHJlYWR5IGV4aXN0cy4nKSlcbiAgICByZXR1cm4gcmVuYW1lKHNyYywgZGVzdCwgb3ZlcndyaXRlLCBjYilcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVuYW1lIChzcmMsIGRlc3QsIG92ZXJ3cml0ZSwgY2IpIHtcbiAgZnMucmVuYW1lKHNyYywgZGVzdCwgZXJyID0+IHtcbiAgICBpZiAoIWVycikgcmV0dXJuIGNiKClcbiAgICBpZiAoZXJyLmNvZGUgIT09ICdFWERFVicpIHJldHVybiBjYihlcnIpXG4gICAgcmV0dXJuIG1vdmVBY3Jvc3NEZXZpY2Uoc3JjLCBkZXN0LCBvdmVyd3JpdGUsIGNiKVxuICB9KVxufVxuXG5mdW5jdGlvbiBtb3ZlQWNyb3NzRGV2aWNlIChzcmMsIGRlc3QsIG92ZXJ3cml0ZSwgY2IpIHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBvdmVyd3JpdGUsXG4gICAgZXJyb3JPbkV4aXN0OiB0cnVlXG4gIH1cblxuICBjb3B5KHNyYywgZGVzdCwgb3B0cywgZXJyID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2IoZXJyKVxuICAgIHJldHVybiByZW1vdmUoc3JjLCBjYilcbiAgfSlcbn1cblxuZnVuY3Rpb24gaXNTcmNTdWJkaXIgKHNyYywgZGVzdCkge1xuICBjb25zdCBzcmNBcnJheSA9IHNyYy5zcGxpdChwYXRoLnNlcClcbiAgY29uc3QgZGVzdEFycmF5ID0gZGVzdC5zcGxpdChwYXRoLnNlcClcblxuICByZXR1cm4gc3JjQXJyYXkucmVkdWNlKChhY2MsIGN1cnJlbnQsIGkpID0+IHtcbiAgICByZXR1cm4gYWNjICYmIGRlc3RBcnJheVtpXSA9PT0gY3VycmVudFxuICB9LCB0cnVlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbW92ZTogdShtb3ZlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHUgPSByZXF1aXJlKCd1bml2ZXJzYWxpZnknKS5mcm9tQ2FsbGJhY2tcbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgbWtkaXIgPSByZXF1aXJlKCcuLi9ta2RpcnMnKVxuY29uc3QgcGF0aEV4aXN0cyA9IHJlcXVpcmUoJy4uL3BhdGgtZXhpc3RzJykucGF0aEV4aXN0c1xuXG5mdW5jdGlvbiBvdXRwdXRGaWxlIChmaWxlLCBkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGZpbGUpXG4gIHBhdGhFeGlzdHMoZGlyLCAoZXJyLCBpdERvZXMpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIGlmIChpdERvZXMpIHJldHVybiBmcy53cml0ZUZpbGUoZmlsZSwgZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKVxuXG4gICAgbWtkaXIubWtkaXJzKGRpciwgZXJyID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG5cbiAgICAgIGZzLndyaXRlRmlsZShmaWxlLCBkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gb3V0cHV0RmlsZVN5bmMgKGZpbGUsIC4uLmFyZ3MpIHtcbiAgY29uc3QgZGlyID0gcGF0aC5kaXJuYW1lKGZpbGUpXG4gIGlmIChmcy5leGlzdHNTeW5jKGRpcikpIHtcbiAgICByZXR1cm4gZnMud3JpdGVGaWxlU3luYyhmaWxlLCAuLi5hcmdzKVxuICB9XG4gIG1rZGlyLm1rZGlyc1N5bmMoZGlyKVxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGUsIC4uLmFyZ3MpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvdXRwdXRGaWxlOiB1KG91dHB1dEZpbGUpLFxuICBvdXRwdXRGaWxlU3luY1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5jb25zdCB1ID0gcmVxdWlyZSgndW5pdmVyc2FsaWZ5JykuZnJvbVByb21pc2VcbmNvbnN0IGZzID0gcmVxdWlyZSgnLi4vZnMnKVxuXG5mdW5jdGlvbiBwYXRoRXhpc3RzIChwYXRoKSB7XG4gIHJldHVybiBmcy5hY2Nlc3MocGF0aCkudGhlbigoKSA9PiB0cnVlKS5jYXRjaCgoKSA9PiBmYWxzZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGhFeGlzdHM6IHUocGF0aEV4aXN0cyksXG4gIHBhdGhFeGlzdHNTeW5jOiBmcy5leGlzdHNTeW5jXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgdSA9IHJlcXVpcmUoJ3VuaXZlcnNhbGlmeScpLmZyb21DYWxsYmFja1xuY29uc3QgcmltcmFmID0gcmVxdWlyZSgnLi9yaW1yYWYnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVtb3ZlOiB1KHJpbXJhZiksXG4gIHJlbW92ZVN5bmM6IHJpbXJhZi5zeW5jXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgZnMgPSByZXF1aXJlKCdncmFjZWZ1bC1mcycpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5jb25zdCBpc1dpbmRvd3MgPSAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJylcblxuZnVuY3Rpb24gZGVmYXVsdHMgKG9wdGlvbnMpIHtcbiAgY29uc3QgbWV0aG9kcyA9IFtcbiAgICAndW5saW5rJyxcbiAgICAnY2htb2QnLFxuICAgICdzdGF0JyxcbiAgICAnbHN0YXQnLFxuICAgICdybWRpcicsXG4gICAgJ3JlYWRkaXInXG4gIF1cbiAgbWV0aG9kcy5mb3JFYWNoKG0gPT4ge1xuICAgIG9wdGlvbnNbbV0gPSBvcHRpb25zW21dIHx8IGZzW21dXG4gICAgbSA9IG0gKyAnU3luYydcbiAgICBvcHRpb25zW21dID0gb3B0aW9uc1ttXSB8fCBmc1ttXVxuICB9KVxuXG4gIG9wdGlvbnMubWF4QnVzeVRyaWVzID0gb3B0aW9ucy5tYXhCdXN5VHJpZXMgfHwgM1xufVxuXG5mdW5jdGlvbiByaW1yYWYgKHAsIG9wdGlvbnMsIGNiKSB7XG4gIGxldCBidXN5VHJpZXMgPSAwXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBvcHRpb25zXG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICBhc3NlcnQocCwgJ3JpbXJhZjogbWlzc2luZyBwYXRoJylcbiAgYXNzZXJ0LnN0cmljdEVxdWFsKHR5cGVvZiBwLCAnc3RyaW5nJywgJ3JpbXJhZjogcGF0aCBzaG91bGQgYmUgYSBzdHJpbmcnKVxuICBhc3NlcnQuc3RyaWN0RXF1YWwodHlwZW9mIGNiLCAnZnVuY3Rpb24nLCAncmltcmFmOiBjYWxsYmFjayBmdW5jdGlvbiByZXF1aXJlZCcpXG4gIGFzc2VydChvcHRpb25zLCAncmltcmFmOiBpbnZhbGlkIG9wdGlvbnMgYXJndW1lbnQgcHJvdmlkZWQnKVxuICBhc3NlcnQuc3RyaWN0RXF1YWwodHlwZW9mIG9wdGlvbnMsICdvYmplY3QnLCAncmltcmFmOiBvcHRpb25zIHNob3VsZCBiZSBvYmplY3QnKVxuXG4gIGRlZmF1bHRzKG9wdGlvbnMpXG5cbiAgcmltcmFmXyhwLCBvcHRpb25zLCBmdW5jdGlvbiBDQiAoZXIpIHtcbiAgICBpZiAoZXIpIHtcbiAgICAgIGlmICgoZXIuY29kZSA9PT0gJ0VCVVNZJyB8fCBlci5jb2RlID09PSAnRU5PVEVNUFRZJyB8fCBlci5jb2RlID09PSAnRVBFUk0nKSAmJlxuICAgICAgICAgIGJ1c3lUcmllcyA8IG9wdGlvbnMubWF4QnVzeVRyaWVzKSB7XG4gICAgICAgIGJ1c3lUcmllcysrXG4gICAgICAgIGNvbnN0IHRpbWUgPSBidXN5VHJpZXMgKiAxMDBcbiAgICAgICAgLy8gdHJ5IGFnYWluLCB3aXRoIHRoZSBzYW1lIGV4YWN0IGNhbGxiYWNrIGFzIHRoaXMgb25lLlxuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiByaW1yYWZfKHAsIG9wdGlvbnMsIENCKSwgdGltZSlcbiAgICAgIH1cblxuICAgICAgLy8gYWxyZWFkeSBnb25lXG4gICAgICBpZiAoZXIuY29kZSA9PT0gJ0VOT0VOVCcpIGVyID0gbnVsbFxuICAgIH1cblxuICAgIGNiKGVyKVxuICB9KVxufVxuXG4vLyBUd28gcG9zc2libGUgc3RyYXRlZ2llcy5cbi8vIDEuIEFzc3VtZSBpdCdzIGEgZmlsZS4gIHVubGluayBpdCwgdGhlbiBkbyB0aGUgZGlyIHN0dWZmIG9uIEVQRVJNIG9yIEVJU0RJUlxuLy8gMi4gQXNzdW1lIGl0J3MgYSBkaXJlY3RvcnkuICByZWFkZGlyLCB0aGVuIGRvIHRoZSBmaWxlIHN0dWZmIG9uIEVOT1RESVJcbi8vXG4vLyBCb3RoIHJlc3VsdCBpbiBhbiBleHRyYSBzeXNjYWxsIHdoZW4geW91IGd1ZXNzIHdyb25nLiAgSG93ZXZlciwgdGhlcmVcbi8vIGFyZSBsaWtlbHkgZmFyIG1vcmUgbm9ybWFsIGZpbGVzIGluIHRoZSB3b3JsZCB0aGFuIGRpcmVjdG9yaWVzLiAgVGhpc1xuLy8gaXMgYmFzZWQgb24gdGhlIGFzc3VtcHRpb24gdGhhdCBhIHRoZSBhdmVyYWdlIG51bWJlciBvZiBmaWxlcyBwZXJcbi8vIGRpcmVjdG9yeSBpcyA+PSAxLlxuLy9cbi8vIElmIGFueW9uZSBldmVyIGNvbXBsYWlucyBhYm91dCB0aGlzLCB0aGVuIEkgZ3Vlc3MgdGhlIHN0cmF0ZWd5IGNvdWxkXG4vLyBiZSBtYWRlIGNvbmZpZ3VyYWJsZSBzb21laG93LiAgQnV0IHVudGlsIHRoZW4sIFlBR05JLlxuZnVuY3Rpb24gcmltcmFmXyAocCwgb3B0aW9ucywgY2IpIHtcbiAgYXNzZXJ0KHApXG4gIGFzc2VydChvcHRpb25zKVxuICBhc3NlcnQodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKVxuXG4gIC8vIHN1bm9zIGxldHMgdGhlIHJvb3QgdXNlciB1bmxpbmsgZGlyZWN0b3JpZXMsIHdoaWNoIGlzLi4uIHdlaXJkLlxuICAvLyBzbyB3ZSBoYXZlIHRvIGxzdGF0IGhlcmUgYW5kIG1ha2Ugc3VyZSBpdCdzIG5vdCBhIGRpci5cbiAgb3B0aW9ucy5sc3RhdChwLCAoZXIsIHN0KSA9PiB7XG4gICAgaWYgKGVyICYmIGVyLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICByZXR1cm4gY2IobnVsbClcbiAgICB9XG5cbiAgICAvLyBXaW5kb3dzIGNhbiBFUEVSTSBvbiBzdGF0LiAgTGlmZSBpcyBzdWZmZXJpbmcuXG4gICAgaWYgKGVyICYmIGVyLmNvZGUgPT09ICdFUEVSTScgJiYgaXNXaW5kb3dzKSB7XG4gICAgICByZXR1cm4gZml4V2luRVBFUk0ocCwgb3B0aW9ucywgZXIsIGNiKVxuICAgIH1cblxuICAgIGlmIChzdCAmJiBzdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICByZXR1cm4gcm1kaXIocCwgb3B0aW9ucywgZXIsIGNiKVxuICAgIH1cblxuICAgIG9wdGlvbnMudW5saW5rKHAsIGVyID0+IHtcbiAgICAgIGlmIChlcikge1xuICAgICAgICBpZiAoZXIuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgICAgICByZXR1cm4gY2IobnVsbClcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXIuY29kZSA9PT0gJ0VQRVJNJykge1xuICAgICAgICAgIHJldHVybiAoaXNXaW5kb3dzKVxuICAgICAgICAgICAgPyBmaXhXaW5FUEVSTShwLCBvcHRpb25zLCBlciwgY2IpXG4gICAgICAgICAgICA6IHJtZGlyKHAsIG9wdGlvbnMsIGVyLCBjYilcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXIuY29kZSA9PT0gJ0VJU0RJUicpIHtcbiAgICAgICAgICByZXR1cm4gcm1kaXIocCwgb3B0aW9ucywgZXIsIGNiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2IoZXIpXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZml4V2luRVBFUk0gKHAsIG9wdGlvbnMsIGVyLCBjYikge1xuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG4gIGFzc2VydCh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gIGlmIChlcikge1xuICAgIGFzc2VydChlciBpbnN0YW5jZW9mIEVycm9yKVxuICB9XG5cbiAgb3B0aW9ucy5jaG1vZChwLCAwbzY2NiwgZXIyID0+IHtcbiAgICBpZiAoZXIyKSB7XG4gICAgICBjYihlcjIuY29kZSA9PT0gJ0VOT0VOVCcgPyBudWxsIDogZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMuc3RhdChwLCAoZXIzLCBzdGF0cykgPT4ge1xuICAgICAgICBpZiAoZXIzKSB7XG4gICAgICAgICAgY2IoZXIzLmNvZGUgPT09ICdFTk9FTlQnID8gbnVsbCA6IGVyKVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICBybWRpcihwLCBvcHRpb25zLCBlciwgY2IpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucy51bmxpbmsocCwgY2IpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBmaXhXaW5FUEVSTVN5bmMgKHAsIG9wdGlvbnMsIGVyKSB7XG4gIGxldCBzdGF0c1xuXG4gIGFzc2VydChwKVxuICBhc3NlcnQob3B0aW9ucylcbiAgaWYgKGVyKSB7XG4gICAgYXNzZXJ0KGVyIGluc3RhbmNlb2YgRXJyb3IpXG4gIH1cblxuICB0cnkge1xuICAgIG9wdGlvbnMuY2htb2RTeW5jKHAsIDBvNjY2KVxuICB9IGNhdGNoIChlcjIpIHtcbiAgICBpZiAoZXIyLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIHN0YXRzID0gb3B0aW9ucy5zdGF0U3luYyhwKVxuICB9IGNhdGNoIChlcjMpIHtcbiAgICBpZiAoZXIzLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgIHJtZGlyU3luYyhwLCBvcHRpb25zLCBlcilcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLnVubGlua1N5bmMocClcbiAgfVxufVxuXG5mdW5jdGlvbiBybWRpciAocCwgb3B0aW9ucywgb3JpZ2luYWxFciwgY2IpIHtcbiAgYXNzZXJ0KHApXG4gIGFzc2VydChvcHRpb25zKVxuICBpZiAob3JpZ2luYWxFcikge1xuICAgIGFzc2VydChvcmlnaW5hbEVyIGluc3RhbmNlb2YgRXJyb3IpXG4gIH1cbiAgYXNzZXJ0KHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcblxuICAvLyB0cnkgdG8gcm1kaXIgZmlyc3QsIGFuZCBvbmx5IHJlYWRkaXIgb24gRU5PVEVNUFRZIG9yIEVFWElTVCAoU3VuT1MpXG4gIC8vIGlmIHdlIGd1ZXNzZWQgd3JvbmcsIGFuZCBpdCdzIG5vdCBhIGRpcmVjdG9yeSwgdGhlblxuICAvLyByYWlzZSB0aGUgb3JpZ2luYWwgZXJyb3IuXG4gIG9wdGlvbnMucm1kaXIocCwgZXIgPT4ge1xuICAgIGlmIChlciAmJiAoZXIuY29kZSA9PT0gJ0VOT1RFTVBUWScgfHwgZXIuY29kZSA9PT0gJ0VFWElTVCcgfHwgZXIuY29kZSA9PT0gJ0VQRVJNJykpIHtcbiAgICAgIHJta2lkcyhwLCBvcHRpb25zLCBjYilcbiAgICB9IGVsc2UgaWYgKGVyICYmIGVyLmNvZGUgPT09ICdFTk9URElSJykge1xuICAgICAgY2Iob3JpZ2luYWxFcilcbiAgICB9IGVsc2Uge1xuICAgICAgY2IoZXIpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBybWtpZHMgKHAsIG9wdGlvbnMsIGNiKSB7XG4gIGFzc2VydChwKVxuICBhc3NlcnQob3B0aW9ucylcbiAgYXNzZXJ0KHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcblxuICBvcHRpb25zLnJlYWRkaXIocCwgKGVyLCBmaWxlcykgPT4ge1xuICAgIGlmIChlcikgcmV0dXJuIGNiKGVyKVxuXG4gICAgbGV0IG4gPSBmaWxlcy5sZW5ndGhcbiAgICBsZXQgZXJyU3RhdGVcblxuICAgIGlmIChuID09PSAwKSByZXR1cm4gb3B0aW9ucy5ybWRpcihwLCBjYilcblxuICAgIGZpbGVzLmZvckVhY2goZiA9PiB7XG4gICAgICByaW1yYWYocGF0aC5qb2luKHAsIGYpLCBvcHRpb25zLCBlciA9PiB7XG4gICAgICAgIGlmIChlcnJTdGF0ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChlcikgcmV0dXJuIGNiKGVyclN0YXRlID0gZXIpXG4gICAgICAgIGlmICgtLW4gPT09IDApIHtcbiAgICAgICAgICBvcHRpb25zLnJtZGlyKHAsIGNiKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIHRoaXMgbG9va3Mgc2ltcGxlciwgYW5kIGlzIHN0cmljdGx5ICpmYXN0ZXIqLCBidXQgd2lsbFxuLy8gdGllIHVwIHRoZSBKYXZhU2NyaXB0IHRocmVhZCBhbmQgZmFpbCBvbiBleGNlc3NpdmVseVxuLy8gZGVlcCBkaXJlY3RvcnkgdHJlZXMuXG5mdW5jdGlvbiByaW1yYWZTeW5jIChwLCBvcHRpb25zKSB7XG4gIGxldCBzdFxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIGRlZmF1bHRzKG9wdGlvbnMpXG5cbiAgYXNzZXJ0KHAsICdyaW1yYWY6IG1pc3NpbmcgcGF0aCcpXG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2YgcCwgJ3N0cmluZycsICdyaW1yYWY6IHBhdGggc2hvdWxkIGJlIGEgc3RyaW5nJylcbiAgYXNzZXJ0KG9wdGlvbnMsICdyaW1yYWY6IG1pc3Npbmcgb3B0aW9ucycpXG4gIGFzc2VydC5zdHJpY3RFcXVhbCh0eXBlb2Ygb3B0aW9ucywgJ29iamVjdCcsICdyaW1yYWY6IG9wdGlvbnMgc2hvdWxkIGJlIG9iamVjdCcpXG5cbiAgdHJ5IHtcbiAgICBzdCA9IG9wdGlvbnMubHN0YXRTeW5jKHApXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgaWYgKGVyLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBXaW5kb3dzIGNhbiBFUEVSTSBvbiBzdGF0LiAgTGlmZSBpcyBzdWZmZXJpbmcuXG4gICAgaWYgKGVyLmNvZGUgPT09ICdFUEVSTScgJiYgaXNXaW5kb3dzKSB7XG4gICAgICBmaXhXaW5FUEVSTVN5bmMocCwgb3B0aW9ucywgZXIpXG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBzdW5vcyBsZXRzIHRoZSByb290IHVzZXIgdW5saW5rIGRpcmVjdG9yaWVzLCB3aGljaCBpcy4uLiB3ZWlyZC5cbiAgICBpZiAoc3QgJiYgc3QuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgcm1kaXJTeW5jKHAsIG9wdGlvbnMsIG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMudW5saW5rU3luYyhwKVxuICAgIH1cbiAgfSBjYXRjaCAoZXIpIHtcbiAgICBpZiAoZXIuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAoZXIuY29kZSA9PT0gJ0VQRVJNJykge1xuICAgICAgcmV0dXJuIGlzV2luZG93cyA/IGZpeFdpbkVQRVJNU3luYyhwLCBvcHRpb25zLCBlcikgOiBybWRpclN5bmMocCwgb3B0aW9ucywgZXIpXG4gICAgfSBlbHNlIGlmIChlci5jb2RlICE9PSAnRUlTRElSJykge1xuICAgICAgdGhyb3cgZXJcbiAgICB9XG4gICAgcm1kaXJTeW5jKHAsIG9wdGlvbnMsIGVyKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJtZGlyU3luYyAocCwgb3B0aW9ucywgb3JpZ2luYWxFcikge1xuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG4gIGlmIChvcmlnaW5hbEVyKSB7XG4gICAgYXNzZXJ0KG9yaWdpbmFsRXIgaW5zdGFuY2VvZiBFcnJvcilcbiAgfVxuXG4gIHRyeSB7XG4gICAgb3B0aW9ucy5ybWRpclN5bmMocClcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICBpZiAoZXIuY29kZSA9PT0gJ0VOT1RESVInKSB7XG4gICAgICB0aHJvdyBvcmlnaW5hbEVyXG4gICAgfSBlbHNlIGlmIChlci5jb2RlID09PSAnRU5PVEVNUFRZJyB8fCBlci5jb2RlID09PSAnRUVYSVNUJyB8fCBlci5jb2RlID09PSAnRVBFUk0nKSB7XG4gICAgICBybWtpZHNTeW5jKHAsIG9wdGlvbnMpXG4gICAgfSBlbHNlIGlmIChlci5jb2RlICE9PSAnRU5PRU5UJykge1xuICAgICAgdGhyb3cgZXJcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcm1raWRzU3luYyAocCwgb3B0aW9ucykge1xuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG4gIG9wdGlvbnMucmVhZGRpclN5bmMocCkuZm9yRWFjaChmID0+IHJpbXJhZlN5bmMocGF0aC5qb2luKHAsIGYpLCBvcHRpb25zKSlcblxuICBpZiAoaXNXaW5kb3dzKSB7XG4gICAgLy8gV2Ugb25seSBlbmQgdXAgaGVyZSBvbmNlIHdlIGdvdCBFTk9URU1QVFkgYXQgbGVhc3Qgb25jZSwgYW5kXG4gICAgLy8gYXQgdGhpcyBwb2ludCwgd2UgYXJlIGd1YXJhbnRlZWQgdG8gaGF2ZSByZW1vdmVkIGFsbCB0aGUga2lkcy5cbiAgICAvLyBTbywgd2Uga25vdyB0aGF0IGl0IHdvbid0IGJlIEVOT0VOVCBvciBFTk9URElSIG9yIGFueXRoaW5nIGVsc2UuXG4gICAgLy8gdHJ5IHJlYWxseSBoYXJkIHRvIGRlbGV0ZSBzdHVmZiBvbiB3aW5kb3dzLCBiZWNhdXNlIGl0IGhhcyBhXG4gICAgLy8gUFJPRk9VTkRMWSBhbm5veWluZyBoYWJpdCBvZiBub3QgY2xvc2luZyBoYW5kbGVzIHByb21wdGx5IHdoZW5cbiAgICAvLyBmaWxlcyBhcmUgZGVsZXRlZCwgcmVzdWx0aW5nIGluIHNwdXJpb3VzIEVOT1RFTVBUWSBlcnJvcnMuXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuICAgIGRvIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldCA9IG9wdGlvbnMucm1kaXJTeW5jKHAsIG9wdGlvbnMpXG4gICAgICAgIHJldHVybiByZXRcbiAgICAgIH0gY2F0Y2ggKGVyKSB7IH1cbiAgICB9IHdoaWxlIChEYXRlLm5vdygpIC0gc3RhcnRUaW1lIDwgNTAwKSAvLyBnaXZlIHVwIGFmdGVyIDUwMG1zXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmV0ID0gb3B0aW9ucy5ybWRpclN5bmMocCwgb3B0aW9ucylcbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByaW1yYWZcbnJpbXJhZi5zeW5jID0gcmltcmFmU3luY1xuIiwiJ3VzZSBzdHJpY3QnXG4vKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2YgQnVmZmVyLmFsbG9jVW5zYWZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBCdWZmZXIuYWxsb2NVbnNhZmUoc2l6ZSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV3IEJ1ZmZlcihzaXplKVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IEJ1ZmZlcihzaXplKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbi8vIEhGUywgZXh0ezIsM30sIEZBVCBkbyBub3QsIE5vZGUuanMgdjAuMTAgZG9lcyBub3RcbmZ1bmN0aW9uIGhhc01pbGxpc1Jlc1N5bmMgKCkge1xuICBsZXQgdG1wZmlsZSA9IHBhdGguam9pbignbWlsbGlzLXRlc3Qtc3luYycgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMikpXG4gIHRtcGZpbGUgPSBwYXRoLmpvaW4ob3MudG1wZGlyKCksIHRtcGZpbGUpXG5cbiAgLy8gNTUwIG1pbGxpcyBwYXN0IFVOSVggZXBvY2hcbiAgY29uc3QgZCA9IG5ldyBEYXRlKDE0MzU0MTAyNDM4NjIpXG4gIGZzLndyaXRlRmlsZVN5bmModG1wZmlsZSwgJ2h0dHBzOi8vZ2l0aHViLmNvbS9qcHJpY2hhcmRzb24vbm9kZS1mcy1leHRyYS9wdWxsLzE0MScpXG4gIGNvbnN0IGZkID0gZnMub3BlblN5bmModG1wZmlsZSwgJ3IrJylcbiAgZnMuZnV0aW1lc1N5bmMoZmQsIGQsIGQpXG4gIGZzLmNsb3NlU3luYyhmZClcbiAgcmV0dXJuIGZzLnN0YXRTeW5jKHRtcGZpbGUpLm10aW1lID4gMTQzNTQxMDI0MzAwMFxufVxuXG5mdW5jdGlvbiBoYXNNaWxsaXNSZXMgKGNhbGxiYWNrKSB7XG4gIGxldCB0bXBmaWxlID0gcGF0aC5qb2luKCdtaWxsaXMtdGVzdCcgKyBEYXRlLm5vdygpLnRvU3RyaW5nKCkgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMikpXG4gIHRtcGZpbGUgPSBwYXRoLmpvaW4ob3MudG1wZGlyKCksIHRtcGZpbGUpXG5cbiAgLy8gNTUwIG1pbGxpcyBwYXN0IFVOSVggZXBvY2hcbiAgY29uc3QgZCA9IG5ldyBEYXRlKDE0MzU0MTAyNDM4NjIpXG4gIGZzLndyaXRlRmlsZSh0bXBmaWxlLCAnaHR0cHM6Ly9naXRodWIuY29tL2pwcmljaGFyZHNvbi9ub2RlLWZzLWV4dHJhL3B1bGwvMTQxJywgZXJyID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIGZzLm9wZW4odG1wZmlsZSwgJ3IrJywgKGVyciwgZmQpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICBmcy5mdXRpbWVzKGZkLCBkLCBkLCBlcnIgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgICBmcy5jbG9zZShmZCwgZXJyID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgICAgICAgIGZzLnN0YXQodG1wZmlsZSwgKGVyciwgc3RhdHMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBzdGF0cy5tdGltZSA+IDE0MzU0MTAyNDMwMDApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gdGltZVJlbW92ZU1pbGxpcyAodGltZXN0YW1wKSB7XG4gIGlmICh0eXBlb2YgdGltZXN0YW1wID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRpbWVzdGFtcCAvIDEwMDApICogMTAwMFxuICB9IGVsc2UgaWYgKHRpbWVzdGFtcCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTWF0aC5mbG9vcih0aW1lc3RhbXAuZ2V0VGltZSgpIC8gMTAwMCkgKiAxMDAwKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignZnMtZXh0cmE6IHRpbWVSZW1vdmVNaWxsaXMoKSB1bmtub3duIHBhcmFtZXRlciB0eXBlJylcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGltZXNNaWxsaXMgKHBhdGgsIGF0aW1lLCBtdGltZSwgY2FsbGJhY2spIHtcbiAgLy8gaWYgKCFIQVNfTUlMTElTX1JFUykgcmV0dXJuIGZzLnV0aW1lcyhwYXRoLCBhdGltZSwgbXRpbWUsIGNhbGxiYWNrKVxuICBmcy5vcGVuKHBhdGgsICdyKycsIChlcnIsIGZkKSA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICBmcy5mdXRpbWVzKGZkLCBhdGltZSwgbXRpbWUsIGZ1dGltZXNFcnIgPT4ge1xuICAgICAgZnMuY2xvc2UoZmQsIGNsb3NlRXJyID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhmdXRpbWVzRXJyIHx8IGNsb3NlRXJyKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiB1dGltZXNNaWxsaXNTeW5jIChwYXRoLCBhdGltZSwgbXRpbWUpIHtcbiAgY29uc3QgZmQgPSBmcy5vcGVuU3luYyhwYXRoLCAncisnKVxuICBmcy5mdXRpbWVzU3luYyhmZCwgYXRpbWUsIG10aW1lKVxuICByZXR1cm4gZnMuY2xvc2VTeW5jKGZkKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaGFzTWlsbGlzUmVzLFxuICBoYXNNaWxsaXNSZXNTeW5jLFxuICB0aW1lUmVtb3ZlTWlsbGlzLFxuICB1dGltZXNNaWxsaXMsXG4gIHV0aW1lc01pbGxpc1N5bmNcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmUoZnMpXG5cbmZ1bmN0aW9uIGNsb25lIChvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JylcbiAgICByZXR1cm4gb2JqXG5cbiAgaWYgKG9iaiBpbnN0YW5jZW9mIE9iamVjdClcbiAgICB2YXIgY29weSA9IHsgX19wcm90b19fOiBvYmouX19wcm90b19fIH1cbiAgZWxzZVxuICAgIHZhciBjb3B5ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvcHksIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkpXG4gIH0pXG5cbiAgcmV0dXJuIGNvcHlcbn1cbiIsInZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcbnZhciBwb2x5ZmlsbHMgPSByZXF1aXJlKCcuL3BvbHlmaWxscy5qcycpXG52YXIgbGVnYWN5ID0gcmVxdWlyZSgnLi9sZWdhY3ktc3RyZWFtcy5qcycpXG52YXIgcXVldWUgPSBbXVxuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKVxuXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbnZhciBkZWJ1ZyA9IG5vb3BcbmlmICh1dGlsLmRlYnVnbG9nKVxuICBkZWJ1ZyA9IHV0aWwuZGVidWdsb2coJ2dmczQnKVxuZWxzZSBpZiAoL1xcYmdmczRcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJycpKVxuICBkZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBtID0gdXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKVxuICAgIG0gPSAnR0ZTNDogJyArIG0uc3BsaXQoL1xcbi8pLmpvaW4oJ1xcbkdGUzQ6ICcpXG4gICAgY29uc29sZS5lcnJvcihtKVxuICB9XG5cbmlmICgvXFxiZ2ZzNFxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJykpIHtcbiAgcHJvY2Vzcy5vbignZXhpdCcsIGZ1bmN0aW9uKCkge1xuICAgIGRlYnVnKHF1ZXVlKVxuICAgIHJlcXVpcmUoJ2Fzc2VydCcpLmVxdWFsKHF1ZXVlLmxlbmd0aCwgMClcbiAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaChyZXF1aXJlKCcuL2ZzLmpzJykpXG5pZiAocHJvY2Vzcy5lbnYuVEVTVF9HUkFDRUZVTF9GU19HTE9CQUxfUEFUQ0gpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBwYXRjaChmcylcbn1cblxuLy8gQWx3YXlzIHBhdGNoIGZzLmNsb3NlL2Nsb3NlU3luYywgYmVjYXVzZSB3ZSB3YW50IHRvXG4vLyByZXRyeSgpIHdoZW5ldmVyIGEgY2xvc2UgaGFwcGVucyAqYW55d2hlcmUqIGluIHRoZSBwcm9ncmFtLlxuLy8gVGhpcyBpcyBlc3NlbnRpYWwgd2hlbiBtdWx0aXBsZSBncmFjZWZ1bC1mcyBpbnN0YW5jZXMgYXJlXG4vLyBpbiBwbGF5IGF0IHRoZSBzYW1lIHRpbWUuXG5tb2R1bGUuZXhwb3J0cy5jbG9zZSA9XG5mcy5jbG9zZSA9IChmdW5jdGlvbiAoZnMkY2xvc2UpIHsgcmV0dXJuIGZ1bmN0aW9uIChmZCwgY2IpIHtcbiAgcmV0dXJuIGZzJGNsb3NlLmNhbGwoZnMsIGZkLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKCFlcnIpXG4gICAgICByZXRyeSgpXG5cbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKVxuICAgICAgY2IuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9KVxufX0pKGZzLmNsb3NlKVxuXG5tb2R1bGUuZXhwb3J0cy5jbG9zZVN5bmMgPVxuZnMuY2xvc2VTeW5jID0gKGZ1bmN0aW9uIChmcyRjbG9zZVN5bmMpIHsgcmV0dXJuIGZ1bmN0aW9uIChmZCkge1xuICAvLyBOb3RlIHRoYXQgZ3JhY2VmdWwtZnMgYWxzbyByZXRyaWVzIHdoZW4gZnMuY2xvc2VTeW5jKCkgZmFpbHMuXG4gIC8vIExvb2tzIGxpa2UgYSBidWcgdG8gbWUsIGFsdGhvdWdoIGl0J3MgcHJvYmFibHkgYSBoYXJtbGVzcyBvbmUuXG4gIHZhciBydmFsID0gZnMkY2xvc2VTeW5jLmFwcGx5KGZzLCBhcmd1bWVudHMpXG4gIHJldHJ5KClcbiAgcmV0dXJuIHJ2YWxcbn19KShmcy5jbG9zZVN5bmMpXG5cbmZ1bmN0aW9uIHBhdGNoIChmcykge1xuICAvLyBFdmVyeXRoaW5nIHRoYXQgcmVmZXJlbmNlcyB0aGUgb3BlbigpIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGluIGhlcmVcbiAgcG9seWZpbGxzKGZzKVxuICBmcy5ncmFjZWZ1bGlmeSA9IHBhdGNoXG4gIGZzLkZpbGVSZWFkU3RyZWFtID0gUmVhZFN0cmVhbTsgIC8vIExlZ2FjeSBuYW1lLlxuICBmcy5GaWxlV3JpdGVTdHJlYW0gPSBXcml0ZVN0cmVhbTsgIC8vIExlZ2FjeSBuYW1lLlxuICBmcy5jcmVhdGVSZWFkU3RyZWFtID0gY3JlYXRlUmVhZFN0cmVhbVxuICBmcy5jcmVhdGVXcml0ZVN0cmVhbSA9IGNyZWF0ZVdyaXRlU3RyZWFtXG4gIHZhciBmcyRyZWFkRmlsZSA9IGZzLnJlYWRGaWxlXG4gIGZzLnJlYWRGaWxlID0gcmVhZEZpbGVcbiAgZnVuY3Rpb24gcmVhZEZpbGUgKHBhdGgsIG9wdGlvbnMsIGNiKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKVxuICAgICAgY2IgPSBvcHRpb25zLCBvcHRpb25zID0gbnVsbFxuXG4gICAgcmV0dXJuIGdvJHJlYWRGaWxlKHBhdGgsIG9wdGlvbnMsIGNiKVxuXG4gICAgZnVuY3Rpb24gZ28kcmVhZEZpbGUgKHBhdGgsIG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gZnMkcmVhZEZpbGUocGF0aCwgb3B0aW9ucywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyICYmIChlcnIuY29kZSA9PT0gJ0VNRklMRScgfHwgZXJyLmNvZGUgPT09ICdFTkZJTEUnKSlcbiAgICAgICAgICBlbnF1ZXVlKFtnbyRyZWFkRmlsZSwgW3BhdGgsIG9wdGlvbnMsIGNiXV0pXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcmV0cnkoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHZhciBmcyR3cml0ZUZpbGUgPSBmcy53cml0ZUZpbGVcbiAgZnMud3JpdGVGaWxlID0gd3JpdGVGaWxlXG4gIGZ1bmN0aW9uIHdyaXRlRmlsZSAocGF0aCwgZGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpXG4gICAgICBjYiA9IG9wdGlvbnMsIG9wdGlvbnMgPSBudWxsXG5cbiAgICByZXR1cm4gZ28kd3JpdGVGaWxlKHBhdGgsIGRhdGEsIG9wdGlvbnMsIGNiKVxuXG4gICAgZnVuY3Rpb24gZ28kd3JpdGVGaWxlIChwYXRoLCBkYXRhLCBvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIGZzJHdyaXRlRmlsZShwYXRoLCBkYXRhLCBvcHRpb25zLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgJiYgKGVyci5jb2RlID09PSAnRU1GSUxFJyB8fCBlcnIuY29kZSA9PT0gJ0VORklMRScpKVxuICAgICAgICAgIGVucXVldWUoW2dvJHdyaXRlRmlsZSwgW3BhdGgsIGRhdGEsIG9wdGlvbnMsIGNiXV0pXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcmV0cnkoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHZhciBmcyRhcHBlbmRGaWxlID0gZnMuYXBwZW5kRmlsZVxuICBpZiAoZnMkYXBwZW5kRmlsZSlcbiAgICBmcy5hcHBlbmRGaWxlID0gYXBwZW5kRmlsZVxuICBmdW5jdGlvbiBhcHBlbmRGaWxlIChwYXRoLCBkYXRhLCBvcHRpb25zLCBjYikge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIGNiID0gb3B0aW9ucywgb3B0aW9ucyA9IG51bGxcblxuICAgIHJldHVybiBnbyRhcHBlbmRGaWxlKHBhdGgsIGRhdGEsIG9wdGlvbnMsIGNiKVxuXG4gICAgZnVuY3Rpb24gZ28kYXBwZW5kRmlsZSAocGF0aCwgZGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiBmcyRhcHBlbmRGaWxlKHBhdGgsIGRhdGEsIG9wdGlvbnMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGVyciAmJiAoZXJyLmNvZGUgPT09ICdFTUZJTEUnIHx8IGVyci5jb2RlID09PSAnRU5GSUxFJykpXG4gICAgICAgICAgZW5xdWV1ZShbZ28kYXBwZW5kRmlsZSwgW3BhdGgsIGRhdGEsIG9wdGlvbnMsIGNiXV0pXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcmV0cnkoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHZhciBmcyRyZWFkZGlyID0gZnMucmVhZGRpclxuICBmcy5yZWFkZGlyID0gcmVhZGRpclxuICBmdW5jdGlvbiByZWFkZGlyIChwYXRoLCBvcHRpb25zLCBjYikge1xuICAgIHZhciBhcmdzID0gW3BhdGhdXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnB1c2gob3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgY2IgPSBvcHRpb25zXG4gICAgfVxuICAgIGFyZ3MucHVzaChnbyRyZWFkZGlyJGNiKVxuXG4gICAgcmV0dXJuIGdvJHJlYWRkaXIoYXJncylcblxuICAgIGZ1bmN0aW9uIGdvJHJlYWRkaXIkY2IgKGVyciwgZmlsZXMpIHtcbiAgICAgIGlmIChmaWxlcyAmJiBmaWxlcy5zb3J0KVxuICAgICAgICBmaWxlcy5zb3J0KClcblxuICAgICAgaWYgKGVyciAmJiAoZXJyLmNvZGUgPT09ICdFTUZJTEUnIHx8IGVyci5jb2RlID09PSAnRU5GSUxFJykpXG4gICAgICAgIGVucXVldWUoW2dvJHJlYWRkaXIsIFthcmdzXV0pXG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgIHJldHJ5KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnbyRyZWFkZGlyIChhcmdzKSB7XG4gICAgcmV0dXJuIGZzJHJlYWRkaXIuYXBwbHkoZnMsIGFyZ3MpXG4gIH1cblxuICBpZiAocHJvY2Vzcy52ZXJzaW9uLnN1YnN0cigwLCA0KSA9PT0gJ3YwLjgnKSB7XG4gICAgdmFyIGxlZ1N0cmVhbXMgPSBsZWdhY3koZnMpXG4gICAgUmVhZFN0cmVhbSA9IGxlZ1N0cmVhbXMuUmVhZFN0cmVhbVxuICAgIFdyaXRlU3RyZWFtID0gbGVnU3RyZWFtcy5Xcml0ZVN0cmVhbVxuICB9XG5cbiAgdmFyIGZzJFJlYWRTdHJlYW0gPSBmcy5SZWFkU3RyZWFtXG4gIFJlYWRTdHJlYW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShmcyRSZWFkU3RyZWFtLnByb3RvdHlwZSlcbiAgUmVhZFN0cmVhbS5wcm90b3R5cGUub3BlbiA9IFJlYWRTdHJlYW0kb3BlblxuXG4gIHZhciBmcyRXcml0ZVN0cmVhbSA9IGZzLldyaXRlU3RyZWFtXG4gIFdyaXRlU3RyZWFtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZnMkV3JpdGVTdHJlYW0ucHJvdG90eXBlKVxuICBXcml0ZVN0cmVhbS5wcm90b3R5cGUub3BlbiA9IFdyaXRlU3RyZWFtJG9wZW5cblxuICBmcy5SZWFkU3RyZWFtID0gUmVhZFN0cmVhbVxuICBmcy5Xcml0ZVN0cmVhbSA9IFdyaXRlU3RyZWFtXG5cbiAgZnVuY3Rpb24gUmVhZFN0cmVhbSAocGF0aCwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgUmVhZFN0cmVhbSlcbiAgICAgIHJldHVybiBmcyRSZWFkU3RyZWFtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRoaXNcbiAgICBlbHNlXG4gICAgICByZXR1cm4gUmVhZFN0cmVhbS5hcHBseShPYmplY3QuY3JlYXRlKFJlYWRTdHJlYW0ucHJvdG90eXBlKSwgYXJndW1lbnRzKVxuICB9XG5cbiAgZnVuY3Rpb24gUmVhZFN0cmVhbSRvcGVuICgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICBvcGVuKHRoYXQucGF0aCwgdGhhdC5mbGFncywgdGhhdC5tb2RlLCBmdW5jdGlvbiAoZXJyLCBmZCkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBpZiAodGhhdC5hdXRvQ2xvc2UpXG4gICAgICAgICAgdGhhdC5kZXN0cm95KClcblxuICAgICAgICB0aGF0LmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhhdC5mZCA9IGZkXG4gICAgICAgIHRoYXQuZW1pdCgnb3BlbicsIGZkKVxuICAgICAgICB0aGF0LnJlYWQoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBXcml0ZVN0cmVhbSAocGF0aCwgb3B0aW9ucykge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgV3JpdGVTdHJlYW0pXG4gICAgICByZXR1cm4gZnMkV3JpdGVTdHJlYW0uYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdGhpc1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBXcml0ZVN0cmVhbS5hcHBseShPYmplY3QuY3JlYXRlKFdyaXRlU3RyZWFtLnByb3RvdHlwZSksIGFyZ3VtZW50cylcbiAgfVxuXG4gIGZ1bmN0aW9uIFdyaXRlU3RyZWFtJG9wZW4gKCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIG9wZW4odGhhdC5wYXRoLCB0aGF0LmZsYWdzLCB0aGF0Lm1vZGUsIGZ1bmN0aW9uIChlcnIsIGZkKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoYXQuZGVzdHJveSgpXG4gICAgICAgIHRoYXQuZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGF0LmZkID0gZmRcbiAgICAgICAgdGhhdC5lbWl0KCdvcGVuJywgZmQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVJlYWRTdHJlYW0gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFJlYWRTdHJlYW0ocGF0aCwgb3B0aW9ucylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVdyaXRlU3RyZWFtIChwYXRoLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBXcml0ZVN0cmVhbShwYXRoLCBvcHRpb25zKVxuICB9XG5cbiAgdmFyIGZzJG9wZW4gPSBmcy5vcGVuXG4gIGZzLm9wZW4gPSBvcGVuXG4gIGZ1bmN0aW9uIG9wZW4gKHBhdGgsIGZsYWdzLCBtb2RlLCBjYikge1xuICAgIGlmICh0eXBlb2YgbW9kZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIGNiID0gbW9kZSwgbW9kZSA9IG51bGxcblxuICAgIHJldHVybiBnbyRvcGVuKHBhdGgsIGZsYWdzLCBtb2RlLCBjYilcblxuICAgIGZ1bmN0aW9uIGdvJG9wZW4gKHBhdGgsIGZsYWdzLCBtb2RlLCBjYikge1xuICAgICAgcmV0dXJuIGZzJG9wZW4ocGF0aCwgZmxhZ3MsIG1vZGUsIGZ1bmN0aW9uIChlcnIsIGZkKSB7XG4gICAgICAgIGlmIChlcnIgJiYgKGVyci5jb2RlID09PSAnRU1GSUxFJyB8fCBlcnIuY29kZSA9PT0gJ0VORklMRScpKVxuICAgICAgICAgIGVucXVldWUoW2dvJG9wZW4sIFtwYXRoLCBmbGFncywgbW9kZSwgY2JdXSlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICByZXRyeSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZzXG59XG5cbmZ1bmN0aW9uIGVucXVldWUgKGVsZW0pIHtcbiAgZGVidWcoJ0VOUVVFVUUnLCBlbGVtWzBdLm5hbWUsIGVsZW1bMV0pXG4gIHF1ZXVlLnB1c2goZWxlbSlcbn1cblxuZnVuY3Rpb24gcmV0cnkgKCkge1xuICB2YXIgZWxlbSA9IHF1ZXVlLnNoaWZ0KClcbiAgaWYgKGVsZW0pIHtcbiAgICBkZWJ1ZygnUkVUUlknLCBlbGVtWzBdLm5hbWUsIGVsZW1bMV0pXG4gICAgZWxlbVswXS5hcHBseShudWxsLCBlbGVtWzFdKVxuICB9XG59XG4iLCJ2YXIgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJykuU3RyZWFtXG5cbm1vZHVsZS5leHBvcnRzID0gbGVnYWN5XG5cbmZ1bmN0aW9uIGxlZ2FjeSAoZnMpIHtcbiAgcmV0dXJuIHtcbiAgICBSZWFkU3RyZWFtOiBSZWFkU3RyZWFtLFxuICAgIFdyaXRlU3RyZWFtOiBXcml0ZVN0cmVhbVxuICB9XG5cbiAgZnVuY3Rpb24gUmVhZFN0cmVhbSAocGF0aCwgb3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZWFkU3RyZWFtKSkgcmV0dXJuIG5ldyBSZWFkU3RyZWFtKHBhdGgsIG9wdGlvbnMpO1xuXG4gICAgU3RyZWFtLmNhbGwodGhpcyk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMuZmQgPSBudWxsO1xuICAgIHRoaXMucmVhZGFibGUgPSB0cnVlO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmZsYWdzID0gJ3InO1xuICAgIHRoaXMubW9kZSA9IDQzODsgLyo9MDY2NiovXG4gICAgdGhpcy5idWZmZXJTaXplID0gNjQgKiAxMDI0O1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBNaXhpbiBvcHRpb25zIGludG8gdGhpc1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgIHRoaXNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbmNvZGluZykgdGhpcy5zZXRFbmNvZGluZyh0aGlzLmVuY29kaW5nKTtcblxuICAgIGlmICh0aGlzLnN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIHRoaXMuc3RhcnQpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdzdGFydCBtdXN0IGJlIGEgTnVtYmVyJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5lbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmVuZCA9IEluZmluaXR5O1xuICAgICAgfSBlbHNlIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIHRoaXMuZW5kKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignZW5kIG11c3QgYmUgYSBOdW1iZXInKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RhcnQgPiB0aGlzLmVuZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0YXJ0IG11c3QgYmUgPD0gZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucG9zID0gdGhpcy5zdGFydDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mZCAhPT0gbnVsbCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5fcmVhZCgpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnMub3Blbih0aGlzLnBhdGgsIHRoaXMuZmxhZ3MsIHRoaXMubW9kZSwgZnVuY3Rpb24gKGVyciwgZmQpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgc2VsZi5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICAgIHNlbGYucmVhZGFibGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmZkID0gZmQ7XG4gICAgICBzZWxmLmVtaXQoJ29wZW4nLCBmZCk7XG4gICAgICBzZWxmLl9yZWFkKCk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIFdyaXRlU3RyZWFtIChwYXRoLCBvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFdyaXRlU3RyZWFtKSkgcmV0dXJuIG5ldyBXcml0ZVN0cmVhbShwYXRoLCBvcHRpb25zKTtcblxuICAgIFN0cmVhbS5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLmZkID0gbnVsbDtcbiAgICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgIHRoaXMuZmxhZ3MgPSAndyc7XG4gICAgdGhpcy5lbmNvZGluZyA9ICdiaW5hcnknO1xuICAgIHRoaXMubW9kZSA9IDQzODsgLyo9MDY2NiovXG4gICAgdGhpcy5ieXRlc1dyaXR0ZW4gPSAwO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBNaXhpbiBvcHRpb25zIGludG8gdGhpc1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgIHRoaXNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiB0aGlzLnN0YXJ0KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignc3RhcnQgbXVzdCBiZSBhIE51bWJlcicpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhcnQgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc3RhcnQgbXVzdCBiZSA+PSB6ZXJvJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucG9zID0gdGhpcy5zdGFydDtcbiAgICB9XG5cbiAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuXG4gICAgaWYgKHRoaXMuZmQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX29wZW4gPSBmcy5vcGVuO1xuICAgICAgdGhpcy5fcXVldWUucHVzaChbdGhpcy5fb3BlbiwgdGhpcy5wYXRoLCB0aGlzLmZsYWdzLCB0aGlzLm1vZGUsIHVuZGVmaW5lZF0pO1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgIH1cbiAgfVxufVxuIiwidmFyIGZzID0gcmVxdWlyZSgnLi9mcy5qcycpXG52YXIgY29uc3RhbnRzID0gcmVxdWlyZSgnY29uc3RhbnRzJylcblxudmFyIG9yaWdDd2QgPSBwcm9jZXNzLmN3ZFxudmFyIGN3ZCA9IG51bGxcblxudmFyIHBsYXRmb3JtID0gcHJvY2Vzcy5lbnYuR1JBQ0VGVUxfRlNfUExBVEZPUk0gfHwgcHJvY2Vzcy5wbGF0Zm9ybVxuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIWN3ZClcbiAgICBjd2QgPSBvcmlnQ3dkLmNhbGwocHJvY2VzcylcbiAgcmV0dXJuIGN3ZFxufVxudHJ5IHtcbiAgcHJvY2Vzcy5jd2QoKVxufSBjYXRjaCAoZXIpIHt9XG5cbnZhciBjaGRpciA9IHByb2Nlc3MuY2hkaXJcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbihkKSB7XG4gIGN3ZCA9IG51bGxcbiAgY2hkaXIuY2FsbChwcm9jZXNzLCBkKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoXG5cbmZ1bmN0aW9uIHBhdGNoIChmcykge1xuICAvLyAocmUtKWltcGxlbWVudCBzb21lIHRoaW5ncyB0aGF0IGFyZSBrbm93biBidXN0ZWQgb3IgbWlzc2luZy5cblxuICAvLyBsY2htb2QsIGJyb2tlbiBwcmlvciB0byAwLjYuMlxuICAvLyBiYWNrLXBvcnQgdGhlIGZpeCBoZXJlLlxuICBpZiAoY29uc3RhbnRzLmhhc093blByb3BlcnR5KCdPX1NZTUxJTksnKSAmJlxuICAgICAgcHJvY2Vzcy52ZXJzaW9uLm1hdGNoKC9edjBcXC42XFwuWzAtMl18XnYwXFwuNVxcLi8pKSB7XG4gICAgcGF0Y2hMY2htb2QoZnMpXG4gIH1cblxuICAvLyBsdXRpbWVzIGltcGxlbWVudGF0aW9uLCBvciBuby1vcFxuICBpZiAoIWZzLmx1dGltZXMpIHtcbiAgICBwYXRjaEx1dGltZXMoZnMpXG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vaXNhYWNzL25vZGUtZ3JhY2VmdWwtZnMvaXNzdWVzLzRcbiAgLy8gQ2hvd24gc2hvdWxkIG5vdCBmYWlsIG9uIGVpbnZhbCBvciBlcGVybSBpZiBub24tcm9vdC5cbiAgLy8gSXQgc2hvdWxkIG5vdCBmYWlsIG9uIGVub3N5cyBldmVyLCBhcyB0aGlzIGp1c3QgaW5kaWNhdGVzXG4gIC8vIHRoYXQgYSBmcyBkb2Vzbid0IHN1cHBvcnQgdGhlIGludGVuZGVkIG9wZXJhdGlvbi5cblxuICBmcy5jaG93biA9IGNob3duRml4KGZzLmNob3duKVxuICBmcy5mY2hvd24gPSBjaG93bkZpeChmcy5mY2hvd24pXG4gIGZzLmxjaG93biA9IGNob3duRml4KGZzLmxjaG93bilcblxuICBmcy5jaG1vZCA9IGNobW9kRml4KGZzLmNobW9kKVxuICBmcy5mY2htb2QgPSBjaG1vZEZpeChmcy5mY2htb2QpXG4gIGZzLmxjaG1vZCA9IGNobW9kRml4KGZzLmxjaG1vZClcblxuICBmcy5jaG93blN5bmMgPSBjaG93bkZpeFN5bmMoZnMuY2hvd25TeW5jKVxuICBmcy5mY2hvd25TeW5jID0gY2hvd25GaXhTeW5jKGZzLmZjaG93blN5bmMpXG4gIGZzLmxjaG93blN5bmMgPSBjaG93bkZpeFN5bmMoZnMubGNob3duU3luYylcblxuICBmcy5jaG1vZFN5bmMgPSBjaG1vZEZpeFN5bmMoZnMuY2htb2RTeW5jKVxuICBmcy5mY2htb2RTeW5jID0gY2htb2RGaXhTeW5jKGZzLmZjaG1vZFN5bmMpXG4gIGZzLmxjaG1vZFN5bmMgPSBjaG1vZEZpeFN5bmMoZnMubGNobW9kU3luYylcblxuICBmcy5zdGF0ID0gc3RhdEZpeChmcy5zdGF0KVxuICBmcy5mc3RhdCA9IHN0YXRGaXgoZnMuZnN0YXQpXG4gIGZzLmxzdGF0ID0gc3RhdEZpeChmcy5sc3RhdClcblxuICBmcy5zdGF0U3luYyA9IHN0YXRGaXhTeW5jKGZzLnN0YXRTeW5jKVxuICBmcy5mc3RhdFN5bmMgPSBzdGF0Rml4U3luYyhmcy5mc3RhdFN5bmMpXG4gIGZzLmxzdGF0U3luYyA9IHN0YXRGaXhTeW5jKGZzLmxzdGF0U3luYylcblxuICAvLyBpZiBsY2htb2QvbGNob3duIGRvIG5vdCBleGlzdCwgdGhlbiBtYWtlIHRoZW0gbm8tb3BzXG4gIGlmICghZnMubGNobW9kKSB7XG4gICAgZnMubGNobW9kID0gZnVuY3Rpb24gKHBhdGgsIG1vZGUsIGNiKSB7XG4gICAgICBpZiAoY2IpIHByb2Nlc3MubmV4dFRpY2soY2IpXG4gICAgfVxuICAgIGZzLmxjaG1vZFN5bmMgPSBmdW5jdGlvbiAoKSB7fVxuICB9XG4gIGlmICghZnMubGNob3duKSB7XG4gICAgZnMubGNob3duID0gZnVuY3Rpb24gKHBhdGgsIHVpZCwgZ2lkLCBjYikge1xuICAgICAgaWYgKGNiKSBwcm9jZXNzLm5leHRUaWNrKGNiKVxuICAgIH1cbiAgICBmcy5sY2hvd25TeW5jID0gZnVuY3Rpb24gKCkge31cbiAgfVxuXG4gIC8vIG9uIFdpbmRvd3MsIEEvViBzb2Z0d2FyZSBjYW4gbG9jayB0aGUgZGlyZWN0b3J5LCBjYXVzaW5nIHRoaXNcbiAgLy8gdG8gZmFpbCB3aXRoIGFuIEVBQ0NFUyBvciBFUEVSTSBpZiB0aGUgZGlyZWN0b3J5IGNvbnRhaW5zIG5ld2x5XG4gIC8vIGNyZWF0ZWQgZmlsZXMuICBUcnkgYWdhaW4gb24gZmFpbHVyZSwgZm9yIHVwIHRvIDYwIHNlY29uZHMuXG5cbiAgLy8gU2V0IHRoZSB0aW1lb3V0IHRoaXMgbG9uZyBiZWNhdXNlIHNvbWUgV2luZG93cyBBbnRpLVZpcnVzLCBzdWNoIGFzIFBhcml0eVxuICAvLyBiaXQ5LCBtYXkgbG9jayBmaWxlcyBmb3IgdXAgdG8gYSBtaW51dGUsIGNhdXNpbmcgbnBtIHBhY2thZ2UgaW5zdGFsbFxuICAvLyBmYWlsdXJlcy4gQWxzbywgdGFrZSBjYXJlIHRvIHlpZWxkIHRoZSBzY2hlZHVsZXIuIFdpbmRvd3Mgc2NoZWR1bGluZyBnaXZlc1xuICAvLyBDUFUgdG8gYSBidXN5IGxvb3BpbmcgcHJvY2Vzcywgd2hpY2ggY2FuIGNhdXNlIHRoZSBwcm9ncmFtIGNhdXNpbmcgdGhlIGxvY2tcbiAgLy8gY29udGVudGlvbiB0byBiZSBzdGFydmVkIG9mIENQVSBieSBub2RlLCBzbyB0aGUgY29udGVudGlvbiBkb2Vzbid0IHJlc29sdmUuXG4gIGlmIChwbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiKSB7XG4gICAgZnMucmVuYW1lID0gKGZ1bmN0aW9uIChmcyRyZW5hbWUpIHsgcmV0dXJuIGZ1bmN0aW9uIChmcm9tLCB0bywgY2IpIHtcbiAgICAgIHZhciBzdGFydCA9IERhdGUubm93KClcbiAgICAgIHZhciBiYWNrb2ZmID0gMDtcbiAgICAgIGZzJHJlbmFtZShmcm9tLCB0bywgZnVuY3Rpb24gQ0IgKGVyKSB7XG4gICAgICAgIGlmIChlclxuICAgICAgICAgICAgJiYgKGVyLmNvZGUgPT09IFwiRUFDQ0VTXCIgfHwgZXIuY29kZSA9PT0gXCJFUEVSTVwiKVxuICAgICAgICAgICAgJiYgRGF0ZS5ub3coKSAtIHN0YXJ0IDwgNjAwMDApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnMuc3RhdCh0bywgZnVuY3Rpb24gKHN0YXRlciwgc3QpIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlciAmJiBzdGF0ZXIuY29kZSA9PT0gXCJFTk9FTlRcIilcbiAgICAgICAgICAgICAgICBmcyRyZW5hbWUoZnJvbSwgdG8sIENCKTtcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNiKGVyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCBiYWNrb2ZmKVxuICAgICAgICAgIGlmIChiYWNrb2ZmIDwgMTAwKVxuICAgICAgICAgICAgYmFja29mZiArPSAxMDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNiKSBjYihlcilcbiAgICAgIH0pXG4gICAgfX0pKGZzLnJlbmFtZSlcbiAgfVxuXG4gIC8vIGlmIHJlYWQoKSByZXR1cm5zIEVBR0FJTiwgdGhlbiBqdXN0IHRyeSBpdCBhZ2Fpbi5cbiAgZnMucmVhZCA9IChmdW5jdGlvbiAoZnMkcmVhZCkgeyByZXR1cm4gZnVuY3Rpb24gKGZkLCBidWZmZXIsIG9mZnNldCwgbGVuZ3RoLCBwb3NpdGlvbiwgY2FsbGJhY2tfKSB7XG4gICAgdmFyIGNhbGxiYWNrXG4gICAgaWYgKGNhbGxiYWNrXyAmJiB0eXBlb2YgY2FsbGJhY2tfID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgZWFnQ291bnRlciA9IDBcbiAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKGVyLCBfLCBfXykge1xuICAgICAgICBpZiAoZXIgJiYgZXIuY29kZSA9PT0gJ0VBR0FJTicgJiYgZWFnQ291bnRlciA8IDEwKSB7XG4gICAgICAgICAgZWFnQ291bnRlciArK1xuICAgICAgICAgIHJldHVybiBmcyRyZWFkLmNhbGwoZnMsIGZkLCBidWZmZXIsIG9mZnNldCwgbGVuZ3RoLCBwb3NpdGlvbiwgY2FsbGJhY2spXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2tfLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZzJHJlYWQuY2FsbChmcywgZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uLCBjYWxsYmFjaylcbiAgfX0pKGZzLnJlYWQpXG5cbiAgZnMucmVhZFN5bmMgPSAoZnVuY3Rpb24gKGZzJHJlYWRTeW5jKSB7IHJldHVybiBmdW5jdGlvbiAoZmQsIGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgsIHBvc2l0aW9uKSB7XG4gICAgdmFyIGVhZ0NvdW50ZXIgPSAwXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmcyRyZWFkU3luYy5jYWxsKGZzLCBmZCwgYnVmZmVyLCBvZmZzZXQsIGxlbmd0aCwgcG9zaXRpb24pXG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICBpZiAoZXIuY29kZSA9PT0gJ0VBR0FJTicgJiYgZWFnQ291bnRlciA8IDEwKSB7XG4gICAgICAgICAgZWFnQ291bnRlciArK1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJcbiAgICAgIH1cbiAgICB9XG4gIH19KShmcy5yZWFkU3luYylcbn1cblxuZnVuY3Rpb24gcGF0Y2hMY2htb2QgKGZzKSB7XG4gIGZzLmxjaG1vZCA9IGZ1bmN0aW9uIChwYXRoLCBtb2RlLCBjYWxsYmFjaykge1xuICAgIGZzLm9wZW4oIHBhdGhcbiAgICAgICAgICAgLCBjb25zdGFudHMuT19XUk9OTFkgfCBjb25zdGFudHMuT19TWU1MSU5LXG4gICAgICAgICAgICwgbW9kZVxuICAgICAgICAgICAsIGZ1bmN0aW9uIChlcnIsIGZkKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8vIHByZWZlciB0byByZXR1cm4gdGhlIGNobW9kIGVycm9yLCBpZiBvbmUgb2NjdXJzLFxuICAgICAgLy8gYnV0IHN0aWxsIHRyeSB0byBjbG9zZSwgYW5kIHJlcG9ydCBjbG9zaW5nIGVycm9ycyBpZiB0aGV5IG9jY3VyLlxuICAgICAgZnMuZmNobW9kKGZkLCBtb2RlLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGZzLmNsb3NlKGZkLCBmdW5jdGlvbihlcnIyKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIgfHwgZXJyMilcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZzLmxjaG1vZFN5bmMgPSBmdW5jdGlvbiAocGF0aCwgbW9kZSkge1xuICAgIHZhciBmZCA9IGZzLm9wZW5TeW5jKHBhdGgsIGNvbnN0YW50cy5PX1dST05MWSB8IGNvbnN0YW50cy5PX1NZTUxJTkssIG1vZGUpXG5cbiAgICAvLyBwcmVmZXIgdG8gcmV0dXJuIHRoZSBjaG1vZCBlcnJvciwgaWYgb25lIG9jY3VycyxcbiAgICAvLyBidXQgc3RpbGwgdHJ5IHRvIGNsb3NlLCBhbmQgcmVwb3J0IGNsb3NpbmcgZXJyb3JzIGlmIHRoZXkgb2NjdXIuXG4gICAgdmFyIHRocmV3ID0gdHJ1ZVxuICAgIHZhciByZXRcbiAgICB0cnkge1xuICAgICAgcmV0ID0gZnMuZmNobW9kU3luYyhmZCwgbW9kZSlcbiAgICAgIHRocmV3ID0gZmFsc2VcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKHRocmV3KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZnMuY2xvc2VTeW5jKGZkKVxuICAgICAgICB9IGNhdGNoIChlcikge31cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZzLmNsb3NlU3luYyhmZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhdGNoTHV0aW1lcyAoZnMpIHtcbiAgaWYgKGNvbnN0YW50cy5oYXNPd25Qcm9wZXJ0eShcIk9fU1lNTElOS1wiKSkge1xuICAgIGZzLmx1dGltZXMgPSBmdW5jdGlvbiAocGF0aCwgYXQsIG10LCBjYikge1xuICAgICAgZnMub3BlbihwYXRoLCBjb25zdGFudHMuT19TWU1MSU5LLCBmdW5jdGlvbiAoZXIsIGZkKSB7XG4gICAgICAgIGlmIChlcikge1xuICAgICAgICAgIGlmIChjYikgY2IoZXIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZnMuZnV0aW1lcyhmZCwgYXQsIG10LCBmdW5jdGlvbiAoZXIpIHtcbiAgICAgICAgICBmcy5jbG9zZShmZCwgZnVuY3Rpb24gKGVyMikge1xuICAgICAgICAgICAgaWYgKGNiKSBjYihlciB8fCBlcjIpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnMubHV0aW1lc1N5bmMgPSBmdW5jdGlvbiAocGF0aCwgYXQsIG10KSB7XG4gICAgICB2YXIgZmQgPSBmcy5vcGVuU3luYyhwYXRoLCBjb25zdGFudHMuT19TWU1MSU5LKVxuICAgICAgdmFyIHJldFxuICAgICAgdmFyIHRocmV3ID0gdHJ1ZVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0ID0gZnMuZnV0aW1lc1N5bmMoZmQsIGF0LCBtdClcbiAgICAgICAgdGhyZXcgPSBmYWxzZVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHRocmV3KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZzLmNsb3NlU3luYyhmZClcbiAgICAgICAgICB9IGNhdGNoIChlcikge31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcy5jbG9zZVN5bmMoZmQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICBmcy5sdXRpbWVzID0gZnVuY3Rpb24gKF9hLCBfYiwgX2MsIGNiKSB7IGlmIChjYikgcHJvY2Vzcy5uZXh0VGljayhjYikgfVxuICAgIGZzLmx1dGltZXNTeW5jID0gZnVuY3Rpb24gKCkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBjaG1vZEZpeCAob3JpZykge1xuICBpZiAoIW9yaWcpIHJldHVybiBvcmlnXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBtb2RlLCBjYikge1xuICAgIHJldHVybiBvcmlnLmNhbGwoZnMsIHRhcmdldCwgbW9kZSwgZnVuY3Rpb24gKGVyKSB7XG4gICAgICBpZiAoY2hvd25Fck9rKGVyKSkgZXIgPSBudWxsXG4gICAgICBpZiAoY2IpIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGNobW9kRml4U3luYyAob3JpZykge1xuICBpZiAoIW9yaWcpIHJldHVybiBvcmlnXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBtb2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBvcmlnLmNhbGwoZnMsIHRhcmdldCwgbW9kZSlcbiAgICB9IGNhdGNoIChlcikge1xuICAgICAgaWYgKCFjaG93bkVyT2soZXIpKSB0aHJvdyBlclxuICAgIH1cbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNob3duRml4IChvcmlnKSB7XG4gIGlmICghb3JpZykgcmV0dXJuIG9yaWdcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHVpZCwgZ2lkLCBjYikge1xuICAgIHJldHVybiBvcmlnLmNhbGwoZnMsIHRhcmdldCwgdWlkLCBnaWQsIGZ1bmN0aW9uIChlcikge1xuICAgICAgaWYgKGNob3duRXJPayhlcikpIGVyID0gbnVsbFxuICAgICAgaWYgKGNiKSBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaG93bkZpeFN5bmMgKG9yaWcpIHtcbiAgaWYgKCFvcmlnKSByZXR1cm4gb3JpZ1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgdWlkLCBnaWQpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG9yaWcuY2FsbChmcywgdGFyZ2V0LCB1aWQsIGdpZClcbiAgICB9IGNhdGNoIChlcikge1xuICAgICAgaWYgKCFjaG93bkVyT2soZXIpKSB0aHJvdyBlclxuICAgIH1cbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0YXRGaXggKG9yaWcpIHtcbiAgaWYgKCFvcmlnKSByZXR1cm4gb3JpZ1xuICAvLyBPbGRlciB2ZXJzaW9ucyBvZiBOb2RlIGVycm9uZW91c2x5IHJldHVybmVkIHNpZ25lZCBpbnRlZ2VycyBmb3JcbiAgLy8gdWlkICsgZ2lkLlxuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgY2IpIHtcbiAgICByZXR1cm4gb3JpZy5jYWxsKGZzLCB0YXJnZXQsIGZ1bmN0aW9uIChlciwgc3RhdHMpIHtcbiAgICAgIGlmICghc3RhdHMpIHJldHVybiBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICBpZiAoc3RhdHMudWlkIDwgMCkgc3RhdHMudWlkICs9IDB4MTAwMDAwMDAwXG4gICAgICBpZiAoc3RhdHMuZ2lkIDwgMCkgc3RhdHMuZ2lkICs9IDB4MTAwMDAwMDAwXG4gICAgICBpZiAoY2IpIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXRGaXhTeW5jIChvcmlnKSB7XG4gIGlmICghb3JpZykgcmV0dXJuIG9yaWdcbiAgLy8gT2xkZXIgdmVyc2lvbnMgb2YgTm9kZSBlcnJvbmVvdXNseSByZXR1cm5lZCBzaWduZWQgaW50ZWdlcnMgZm9yXG4gIC8vIHVpZCArIGdpZC5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB2YXIgc3RhdHMgPSBvcmlnLmNhbGwoZnMsIHRhcmdldClcbiAgICBpZiAoc3RhdHMudWlkIDwgMCkgc3RhdHMudWlkICs9IDB4MTAwMDAwMDAwXG4gICAgaWYgKHN0YXRzLmdpZCA8IDApIHN0YXRzLmdpZCArPSAweDEwMDAwMDAwMFxuICAgIHJldHVybiBzdGF0cztcbiAgfVxufVxuXG4vLyBFTk9TWVMgbWVhbnMgdGhhdCB0aGUgZnMgZG9lc24ndCBzdXBwb3J0IHRoZSBvcC4gSnVzdCBpZ25vcmVcbi8vIHRoYXQsIGJlY2F1c2UgaXQgZG9lc24ndCBtYXR0ZXIuXG4vL1xuLy8gaWYgdGhlcmUncyBubyBnZXR1aWQsIG9yIGlmIGdldHVpZCgpIGlzIHNvbWV0aGluZyBvdGhlclxuLy8gdGhhbiAwLCBhbmQgdGhlIGVycm9yIGlzIEVJTlZBTCBvciBFUEVSTSwgdGhlbiBqdXN0IGlnbm9yZVxuLy8gaXQuXG4vL1xuLy8gVGhpcyBzcGVjaWZpYyBjYXNlIGlzIGEgc2lsZW50IGZhaWx1cmUgaW4gY3AsIGluc3RhbGwsIHRhcixcbi8vIGFuZCBtb3N0IG90aGVyIHVuaXggdG9vbHMgdGhhdCBtYW5hZ2UgcGVybWlzc2lvbnMuXG4vL1xuLy8gV2hlbiBydW5uaW5nIGFzIHJvb3QsIG9yIGlmIG90aGVyIHR5cGVzIG9mIGVycm9ycyBhcmVcbi8vIGVuY291bnRlcmVkLCB0aGVuIGl0J3Mgc3RyaWN0LlxuZnVuY3Rpb24gY2hvd25Fck9rIChlcikge1xuICBpZiAoIWVyKVxuICAgIHJldHVybiB0cnVlXG5cbiAgaWYgKGVyLmNvZGUgPT09IFwiRU5PU1lTXCIpXG4gICAgcmV0dXJuIHRydWVcblxuICB2YXIgbm9ucm9vdCA9ICFwcm9jZXNzLmdldHVpZCB8fCBwcm9jZXNzLmdldHVpZCgpICE9PSAwXG4gIGlmIChub25yb290KSB7XG4gICAgaWYgKGVyLmNvZGUgPT09IFwiRUlOVkFMXCIgfHwgZXIuY29kZSA9PT0gXCJFUEVSTVwiKVxuICAgICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuIiwidmFyIF9mc1xudHJ5IHtcbiAgX2ZzID0gcmVxdWlyZSgnZ3JhY2VmdWwtZnMnKVxufSBjYXRjaCAoXykge1xuICBfZnMgPSByZXF1aXJlKCdmcycpXG59XG5cbmZ1bmN0aW9uIHJlYWRGaWxlIChmaWxlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT0gbnVsbCkge1xuICAgIGNhbGxiYWNrID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSB7ZW5jb2Rpbmc6IG9wdGlvbnN9XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgZnMgPSBvcHRpb25zLmZzIHx8IF9mc1xuXG4gIHZhciBzaG91bGRUaHJvdyA9IHRydWVcbiAgaWYgKCd0aHJvd3MnIGluIG9wdGlvbnMpIHtcbiAgICBzaG91bGRUaHJvdyA9IG9wdGlvbnMudGhyb3dzXG4gIH1cblxuICBmcy5yZWFkRmlsZShmaWxlLCBvcHRpb25zLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcblxuICAgIGRhdGEgPSBzdHJpcEJvbShkYXRhKVxuXG4gICAgdmFyIG9ialxuICAgIHRyeSB7XG4gICAgICBvYmogPSBKU09OLnBhcnNlKGRhdGEsIG9wdGlvbnMgPyBvcHRpb25zLnJldml2ZXIgOiBudWxsKVxuICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgIGlmIChzaG91bGRUaHJvdykge1xuICAgICAgICBlcnIyLm1lc3NhZ2UgPSBmaWxlICsgJzogJyArIGVycjIubWVzc2FnZVxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyMilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBudWxsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxiYWNrKG51bGwsIG9iailcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVhZEZpbGVTeW5jIChmaWxlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0ge2VuY29kaW5nOiBvcHRpb25zfVxuICB9XG5cbiAgdmFyIGZzID0gb3B0aW9ucy5mcyB8fCBfZnNcblxuICB2YXIgc2hvdWxkVGhyb3cgPSB0cnVlXG4gIGlmICgndGhyb3dzJyBpbiBvcHRpb25zKSB7XG4gICAgc2hvdWxkVGhyb3cgPSBvcHRpb25zLnRocm93c1xuICB9XG5cbiAgdHJ5IHtcbiAgICB2YXIgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLCBvcHRpb25zKVxuICAgIGNvbnRlbnQgPSBzdHJpcEJvbShjb250ZW50KVxuICAgIHJldHVybiBKU09OLnBhcnNlKGNvbnRlbnQsIG9wdGlvbnMucmV2aXZlcilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHNob3VsZFRocm93KSB7XG4gICAgICBlcnIubWVzc2FnZSA9IGZpbGUgKyAnOiAnICsgZXJyLm1lc3NhZ2VcbiAgICAgIHRocm93IGVyclxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkgKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3BhY2VzXG4gIHZhciBFT0wgPSAnXFxuJ1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMgIT09IG51bGwpIHtcbiAgICBpZiAob3B0aW9ucy5zcGFjZXMpIHtcbiAgICAgIHNwYWNlcyA9IG9wdGlvbnMuc3BhY2VzXG4gICAgfVxuICAgIGlmIChvcHRpb25zLkVPTCkge1xuICAgICAgRU9MID0gb3B0aW9ucy5FT0xcbiAgICB9XG4gIH1cblxuICB2YXIgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqLCBvcHRpb25zID8gb3B0aW9ucy5yZXBsYWNlciA6IG51bGwsIHNwYWNlcylcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcbi9nLCBFT0wpICsgRU9MXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmlsZSAoZmlsZSwgb2JqLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT0gbnVsbCkge1xuICAgIGNhbGxiYWNrID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBmcyA9IG9wdGlvbnMuZnMgfHwgX2ZzXG5cbiAgdmFyIHN0ciA9ICcnXG4gIHRyeSB7XG4gICAgc3RyID0gc3RyaW5naWZ5KG9iaiwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gTmVlZCB0byByZXR1cm4gd2hldGhlciBhIGNhbGxiYWNrIHdhcyBwYXNzZWQgb3Igbm90XG4gICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIsIG51bGwpXG4gICAgcmV0dXJuXG4gIH1cblxuICBmcy53cml0ZUZpbGUoZmlsZSwgc3RyLCBvcHRpb25zLCBjYWxsYmFjaylcbn1cblxuZnVuY3Rpb24gd3JpdGVGaWxlU3luYyAoZmlsZSwgb2JqLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBmcyA9IG9wdGlvbnMuZnMgfHwgX2ZzXG5cbiAgdmFyIHN0ciA9IHN0cmluZ2lmeShvYmosIG9wdGlvbnMpXG4gIC8vIG5vdCBzdXJlIGlmIGZzLndyaXRlRmlsZVN5bmMgcmV0dXJucyBhbnl0aGluZywgYnV0IGp1c3QgaW4gY2FzZVxuICByZXR1cm4gZnMud3JpdGVGaWxlU3luYyhmaWxlLCBzdHIsIG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIHN0cmlwQm9tIChjb250ZW50KSB7XG4gIC8vIHdlIGRvIHRoaXMgYmVjYXVzZSBKU09OLnBhcnNlIHdvdWxkIGNvbnZlcnQgaXQgdG8gYSB1dGY4IHN0cmluZyBpZiBlbmNvZGluZyB3YXNuJ3Qgc3BlY2lmaWVkXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoY29udGVudCkpIGNvbnRlbnQgPSBjb250ZW50LnRvU3RyaW5nKCd1dGY4JylcbiAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvXlxcdUZFRkYvLCAnJylcbiAgcmV0dXJuIGNvbnRlbnRcbn1cblxudmFyIGpzb25maWxlID0ge1xuICByZWFkRmlsZTogcmVhZEZpbGUsXG4gIHJlYWRGaWxlU3luYzogcmVhZEZpbGVTeW5jLFxuICB3cml0ZUZpbGU6IHdyaXRlRmlsZSxcbiAgd3JpdGVGaWxlU3luYzogd3JpdGVGaWxlU3luY1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGpzb25maWxlXG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBoYXNOYXRpdmVNYXAgPSB0eXBlb2YgTWFwICE9PSBcInVuZGVmaW5lZFwiO1xuXG4vKipcbiAqIEEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggaXMgYSBjb21iaW5hdGlvbiBvZiBhbiBhcnJheSBhbmQgYSBzZXQuIEFkZGluZyBhIG5ld1xuICogbWVtYmVyIGlzIE8oMSksIHRlc3RpbmcgZm9yIG1lbWJlcnNoaXAgaXMgTygxKSwgYW5kIGZpbmRpbmcgdGhlIGluZGV4IG9mIGFuXG4gKiBlbGVtZW50IGlzIE8oMSkuIFJlbW92aW5nIGVsZW1lbnRzIGZyb20gdGhlIHNldCBpcyBub3Qgc3VwcG9ydGVkLiBPbmx5XG4gKiBzdHJpbmdzIGFyZSBzdXBwb3J0ZWQgZm9yIG1lbWJlcnNoaXAuXG4gKi9cbmZ1bmN0aW9uIEFycmF5U2V0KCkge1xuICB0aGlzLl9hcnJheSA9IFtdO1xuICB0aGlzLl9zZXQgPSBoYXNOYXRpdmVNYXAgPyBuZXcgTWFwKCkgOiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG4vKipcbiAqIFN0YXRpYyBtZXRob2QgZm9yIGNyZWF0aW5nIEFycmF5U2V0IGluc3RhbmNlcyBmcm9tIGFuIGV4aXN0aW5nIGFycmF5LlxuICovXG5BcnJheVNldC5mcm9tQXJyYXkgPSBmdW5jdGlvbiBBcnJheVNldF9mcm9tQXJyYXkoYUFycmF5LCBhQWxsb3dEdXBsaWNhdGVzKSB7XG4gIHZhciBzZXQgPSBuZXcgQXJyYXlTZXQoKTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFBcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHNldC5hZGQoYUFycmF5W2ldLCBhQWxsb3dEdXBsaWNhdGVzKTtcbiAgfVxuICByZXR1cm4gc2V0O1xufTtcblxuLyoqXG4gKiBSZXR1cm4gaG93IG1hbnkgdW5pcXVlIGl0ZW1zIGFyZSBpbiB0aGlzIEFycmF5U2V0LiBJZiBkdXBsaWNhdGVzIGhhdmUgYmVlblxuICogYWRkZWQsIHRoYW4gdGhvc2UgZG8gbm90IGNvdW50IHRvd2FyZHMgdGhlIHNpemUuXG4gKlxuICogQHJldHVybnMgTnVtYmVyXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gQXJyYXlTZXRfc2l6ZSgpIHtcbiAgcmV0dXJuIGhhc05hdGl2ZU1hcCA/IHRoaXMuX3NldC5zaXplIDogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fc2V0KS5sZW5ndGg7XG59O1xuXG4vKipcbiAqIEFkZCB0aGUgZ2l2ZW4gc3RyaW5nIHRvIHRoaXMgc2V0LlxuICpcbiAqIEBwYXJhbSBTdHJpbmcgYVN0clxuICovXG5BcnJheVNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gQXJyYXlTZXRfYWRkKGFTdHIsIGFBbGxvd0R1cGxpY2F0ZXMpIHtcbiAgdmFyIHNTdHIgPSBoYXNOYXRpdmVNYXAgPyBhU3RyIDogdXRpbC50b1NldFN0cmluZyhhU3RyKTtcbiAgdmFyIGlzRHVwbGljYXRlID0gaGFzTmF0aXZlTWFwID8gdGhpcy5oYXMoYVN0cikgOiBoYXMuY2FsbCh0aGlzLl9zZXQsIHNTdHIpO1xuICB2YXIgaWR4ID0gdGhpcy5fYXJyYXkubGVuZ3RoO1xuICBpZiAoIWlzRHVwbGljYXRlIHx8IGFBbGxvd0R1cGxpY2F0ZXMpIHtcbiAgICB0aGlzLl9hcnJheS5wdXNoKGFTdHIpO1xuICB9XG4gIGlmICghaXNEdXBsaWNhdGUpIHtcbiAgICBpZiAoaGFzTmF0aXZlTWFwKSB7XG4gICAgICB0aGlzLl9zZXQuc2V0KGFTdHIsIGlkeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFtzU3RyXSA9IGlkeDtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogSXMgdGhlIGdpdmVuIHN0cmluZyBhIG1lbWJlciBvZiB0aGlzIHNldD9cbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIEFycmF5U2V0X2hhcyhhU3RyKSB7XG4gIGlmIChoYXNOYXRpdmVNYXApIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0LmhhcyhhU3RyKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc1N0ciA9IHV0aWwudG9TZXRTdHJpbmcoYVN0cik7XG4gICAgcmV0dXJuIGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cik7XG4gIH1cbn07XG5cbi8qKlxuICogV2hhdCBpcyB0aGUgaW5kZXggb2YgdGhlIGdpdmVuIHN0cmluZyBpbiB0aGUgYXJyYXk/XG4gKlxuICogQHBhcmFtIFN0cmluZyBhU3RyXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gQXJyYXlTZXRfaW5kZXhPZihhU3RyKSB7XG4gIGlmIChoYXNOYXRpdmVNYXApIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fc2V0LmdldChhU3RyKTtcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNTdHIgPSB1dGlsLnRvU2V0U3RyaW5nKGFTdHIpO1xuICAgIGlmIChoYXMuY2FsbCh0aGlzLl9zZXQsIHNTdHIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2V0W3NTdHJdO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignXCInICsgYVN0ciArICdcIiBpcyBub3QgaW4gdGhlIHNldC4nKTtcbn07XG5cbi8qKlxuICogV2hhdCBpcyB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXg/XG4gKlxuICogQHBhcmFtIE51bWJlciBhSWR4XG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIEFycmF5U2V0X2F0KGFJZHgpIHtcbiAgaWYgKGFJZHggPj0gMCAmJiBhSWR4IDwgdGhpcy5fYXJyYXkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FycmF5W2FJZHhdO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBpbmRleGVkIGJ5ICcgKyBhSWR4KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBzZXQgKHdoaWNoIGhhcyB0aGUgcHJvcGVyIGluZGljZXNcbiAqIGluZGljYXRlZCBieSBpbmRleE9mKS4gTm90ZSB0aGF0IHRoaXMgaXMgYSBjb3B5IG9mIHRoZSBpbnRlcm5hbCBhcnJheSB1c2VkXG4gKiBmb3Igc3RvcmluZyB0aGUgbWVtYmVycyBzbyB0aGF0IG5vIG9uZSBjYW4gbWVzcyB3aXRoIGludGVybmFsIHN0YXRlLlxuICovXG5BcnJheVNldC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIEFycmF5U2V0X3RvQXJyYXkoKSB7XG4gIHJldHVybiB0aGlzLl9hcnJheS5zbGljZSgpO1xufTtcblxuZXhwb3J0cy5BcnJheVNldCA9IEFycmF5U2V0O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqXG4gKiBCYXNlZCBvbiB0aGUgQmFzZSA2NCBWTFEgaW1wbGVtZW50YXRpb24gaW4gQ2xvc3VyZSBDb21waWxlcjpcbiAqIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2xvc3VyZS1jb21waWxlci9zb3VyY2UvYnJvd3NlL3RydW5rL3NyYy9jb20vZ29vZ2xlL2RlYnVnZ2luZy9zb3VyY2VtYXAvQmFzZTY0VkxRLmphdmFcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSBUaGUgQ2xvc3VyZSBDb21waWxlciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4gKiBtZXQ6XG4gKlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAqICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbiAqICAgIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4gKiAgICBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWRcbiAqICAgIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICAgIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZFxuICogICAgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbiAqIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1RcbiAqIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuICogQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbiAqIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuICogU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbiAqIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAqIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuICogT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnLi9iYXNlNjQnKTtcblxuLy8gQSBzaW5nbGUgYmFzZSA2NCBkaWdpdCBjYW4gY29udGFpbiA2IGJpdHMgb2YgZGF0YS4gRm9yIHRoZSBiYXNlIDY0IHZhcmlhYmxlXG4vLyBsZW5ndGggcXVhbnRpdGllcyB3ZSB1c2UgaW4gdGhlIHNvdXJjZSBtYXAgc3BlYywgdGhlIGZpcnN0IGJpdCBpcyB0aGUgc2lnbixcbi8vIHRoZSBuZXh0IGZvdXIgYml0cyBhcmUgdGhlIGFjdHVhbCB2YWx1ZSwgYW5kIHRoZSA2dGggYml0IGlzIHRoZVxuLy8gY29udGludWF0aW9uIGJpdC4gVGhlIGNvbnRpbnVhdGlvbiBiaXQgdGVsbHMgdXMgd2hldGhlciB0aGVyZSBhcmUgbW9yZVxuLy8gZGlnaXRzIGluIHRoaXMgdmFsdWUgZm9sbG93aW5nIHRoaXMgZGlnaXQuXG4vL1xuLy8gICBDb250aW51YXRpb25cbi8vICAgfCAgICBTaWduXG4vLyAgIHwgICAgfFxuLy8gICBWICAgIFZcbi8vICAgMTAxMDExXG5cbnZhciBWTFFfQkFTRV9TSElGVCA9IDU7XG5cbi8vIGJpbmFyeTogMTAwMDAwXG52YXIgVkxRX0JBU0UgPSAxIDw8IFZMUV9CQVNFX1NISUZUO1xuXG4vLyBiaW5hcnk6IDAxMTExMVxudmFyIFZMUV9CQVNFX01BU0sgPSBWTFFfQkFTRSAtIDE7XG5cbi8vIGJpbmFyeTogMTAwMDAwXG52YXIgVkxRX0NPTlRJTlVBVElPTl9CSVQgPSBWTFFfQkFTRTtcblxuLyoqXG4gKiBDb252ZXJ0cyBmcm9tIGEgdHdvLWNvbXBsZW1lbnQgdmFsdWUgdG8gYSB2YWx1ZSB3aGVyZSB0aGUgc2lnbiBiaXQgaXNcbiAqIHBsYWNlZCBpbiB0aGUgbGVhc3Qgc2lnbmlmaWNhbnQgYml0LiAgRm9yIGV4YW1wbGUsIGFzIGRlY2ltYWxzOlxuICogICAxIGJlY29tZXMgMiAoMTAgYmluYXJ5KSwgLTEgYmVjb21lcyAzICgxMSBiaW5hcnkpXG4gKiAgIDIgYmVjb21lcyA0ICgxMDAgYmluYXJ5KSwgLTIgYmVjb21lcyA1ICgxMDEgYmluYXJ5KVxuICovXG5mdW5jdGlvbiB0b1ZMUVNpZ25lZChhVmFsdWUpIHtcbiAgcmV0dXJuIGFWYWx1ZSA8IDBcbiAgICA/ICgoLWFWYWx1ZSkgPDwgMSkgKyAxXG4gICAgOiAoYVZhbHVlIDw8IDEpICsgMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0byBhIHR3by1jb21wbGVtZW50IHZhbHVlIGZyb20gYSB2YWx1ZSB3aGVyZSB0aGUgc2lnbiBiaXQgaXNcbiAqIHBsYWNlZCBpbiB0aGUgbGVhc3Qgc2lnbmlmaWNhbnQgYml0LiAgRm9yIGV4YW1wbGUsIGFzIGRlY2ltYWxzOlxuICogICAyICgxMCBiaW5hcnkpIGJlY29tZXMgMSwgMyAoMTEgYmluYXJ5KSBiZWNvbWVzIC0xXG4gKiAgIDQgKDEwMCBiaW5hcnkpIGJlY29tZXMgMiwgNSAoMTAxIGJpbmFyeSkgYmVjb21lcyAtMlxuICovXG5mdW5jdGlvbiBmcm9tVkxRU2lnbmVkKGFWYWx1ZSkge1xuICB2YXIgaXNOZWdhdGl2ZSA9IChhVmFsdWUgJiAxKSA9PT0gMTtcbiAgdmFyIHNoaWZ0ZWQgPSBhVmFsdWUgPj4gMTtcbiAgcmV0dXJuIGlzTmVnYXRpdmVcbiAgICA/IC1zaGlmdGVkXG4gICAgOiBzaGlmdGVkO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGJhc2UgNjQgVkxRIGVuY29kZWQgdmFsdWUuXG4gKi9cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gYmFzZTY0VkxRX2VuY29kZShhVmFsdWUpIHtcbiAgdmFyIGVuY29kZWQgPSBcIlwiO1xuICB2YXIgZGlnaXQ7XG5cbiAgdmFyIHZscSA9IHRvVkxRU2lnbmVkKGFWYWx1ZSk7XG5cbiAgZG8ge1xuICAgIGRpZ2l0ID0gdmxxICYgVkxRX0JBU0VfTUFTSztcbiAgICB2bHEgPj4+PSBWTFFfQkFTRV9TSElGVDtcbiAgICBpZiAodmxxID4gMCkge1xuICAgICAgLy8gVGhlcmUgYXJlIHN0aWxsIG1vcmUgZGlnaXRzIGluIHRoaXMgdmFsdWUsIHNvIHdlIG11c3QgbWFrZSBzdXJlIHRoZVxuICAgICAgLy8gY29udGludWF0aW9uIGJpdCBpcyBtYXJrZWQuXG4gICAgICBkaWdpdCB8PSBWTFFfQ09OVElOVUFUSU9OX0JJVDtcbiAgICB9XG4gICAgZW5jb2RlZCArPSBiYXNlNjQuZW5jb2RlKGRpZ2l0KTtcbiAgfSB3aGlsZSAodmxxID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59O1xuXG4vKipcbiAqIERlY29kZXMgdGhlIG5leHQgYmFzZSA2NCBWTFEgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIGFuZCByZXR1cm5zIHRoZVxuICogdmFsdWUgYW5kIHRoZSByZXN0IG9mIHRoZSBzdHJpbmcgdmlhIHRoZSBvdXQgcGFyYW1ldGVyLlxuICovXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uIGJhc2U2NFZMUV9kZWNvZGUoYVN0ciwgYUluZGV4LCBhT3V0UGFyYW0pIHtcbiAgdmFyIHN0ckxlbiA9IGFTdHIubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gMDtcbiAgdmFyIHNoaWZ0ID0gMDtcbiAgdmFyIGNvbnRpbnVhdGlvbiwgZGlnaXQ7XG5cbiAgZG8ge1xuICAgIGlmIChhSW5kZXggPj0gc3RyTGVuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBtb3JlIGRpZ2l0cyBpbiBiYXNlIDY0IFZMUSB2YWx1ZS5cIik7XG4gICAgfVxuXG4gICAgZGlnaXQgPSBiYXNlNjQuZGVjb2RlKGFTdHIuY2hhckNvZGVBdChhSW5kZXgrKykpO1xuICAgIGlmIChkaWdpdCA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGRpZ2l0OiBcIiArIGFTdHIuY2hhckF0KGFJbmRleCAtIDEpKTtcbiAgICB9XG5cbiAgICBjb250aW51YXRpb24gPSAhIShkaWdpdCAmIFZMUV9DT05USU5VQVRJT05fQklUKTtcbiAgICBkaWdpdCAmPSBWTFFfQkFTRV9NQVNLO1xuICAgIHJlc3VsdCA9IHJlc3VsdCArIChkaWdpdCA8PCBzaGlmdCk7XG4gICAgc2hpZnQgKz0gVkxRX0JBU0VfU0hJRlQ7XG4gIH0gd2hpbGUgKGNvbnRpbnVhdGlvbik7XG5cbiAgYU91dFBhcmFtLnZhbHVlID0gZnJvbVZMUVNpZ25lZChyZXN1bHQpO1xuICBhT3V0UGFyYW0ucmVzdCA9IGFJbmRleDtcbn07XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciBpbnRUb0NoYXJNYXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLycuc3BsaXQoJycpO1xuXG4vKipcbiAqIEVuY29kZSBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZSBvZiAwIHRvIDYzIHRvIGEgc2luZ2xlIGJhc2UgNjQgZGlnaXQuXG4gKi9cbmV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24gKG51bWJlcikge1xuICBpZiAoMCA8PSBudW1iZXIgJiYgbnVtYmVyIDwgaW50VG9DaGFyTWFwLmxlbmd0aCkge1xuICAgIHJldHVybiBpbnRUb0NoYXJNYXBbbnVtYmVyXTtcbiAgfVxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYzOiBcIiArIG51bWJlcik7XG59O1xuXG4vKipcbiAqIERlY29kZSBhIHNpbmdsZSBiYXNlIDY0IGNoYXJhY3RlciBjb2RlIGRpZ2l0IHRvIGFuIGludGVnZXIuIFJldHVybnMgLTEgb25cbiAqIGZhaWx1cmUuXG4gKi9cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gKGNoYXJDb2RlKSB7XG4gIHZhciBiaWdBID0gNjU7ICAgICAvLyAnQSdcbiAgdmFyIGJpZ1ogPSA5MDsgICAgIC8vICdaJ1xuXG4gIHZhciBsaXR0bGVBID0gOTc7ICAvLyAnYSdcbiAgdmFyIGxpdHRsZVogPSAxMjI7IC8vICd6J1xuXG4gIHZhciB6ZXJvID0gNDg7ICAgICAvLyAnMCdcbiAgdmFyIG5pbmUgPSA1NzsgICAgIC8vICc5J1xuXG4gIHZhciBwbHVzID0gNDM7ICAgICAvLyAnKydcbiAgdmFyIHNsYXNoID0gNDc7ICAgIC8vICcvJ1xuXG4gIHZhciBsaXR0bGVPZmZzZXQgPSAyNjtcbiAgdmFyIG51bWJlck9mZnNldCA9IDUyO1xuXG4gIC8vIDAgLSAyNTogQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcbiAgaWYgKGJpZ0EgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gYmlnWikge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSBiaWdBKTtcbiAgfVxuXG4gIC8vIDI2IC0gNTE6IGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XG4gIGlmIChsaXR0bGVBIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IGxpdHRsZVopIHtcbiAgICByZXR1cm4gKGNoYXJDb2RlIC0gbGl0dGxlQSArIGxpdHRsZU9mZnNldCk7XG4gIH1cblxuICAvLyA1MiAtIDYxOiAwMTIzNDU2Nzg5XG4gIGlmICh6ZXJvIDw9IGNoYXJDb2RlICYmIGNoYXJDb2RlIDw9IG5pbmUpIHtcbiAgICByZXR1cm4gKGNoYXJDb2RlIC0gemVybyArIG51bWJlck9mZnNldCk7XG4gIH1cblxuICAvLyA2MjogK1xuICBpZiAoY2hhckNvZGUgPT0gcGx1cykge1xuICAgIHJldHVybiA2MjtcbiAgfVxuXG4gIC8vIDYzOiAvXG4gIGlmIChjaGFyQ29kZSA9PSBzbGFzaCkge1xuICAgIHJldHVybiA2MztcbiAgfVxuXG4gIC8vIEludmFsaWQgYmFzZTY0IGRpZ2l0LlxuICByZXR1cm4gLTE7XG59O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG5leHBvcnRzLkdSRUFURVNUX0xPV0VSX0JPVU5EID0gMTtcbmV4cG9ydHMuTEVBU1RfVVBQRVJfQk9VTkQgPSAyO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZSBpbXBsZW1lbnRhdGlvbiBvZiBiaW5hcnkgc2VhcmNoLlxuICpcbiAqIEBwYXJhbSBhTG93IEluZGljZXMgaGVyZSBhbmQgbG93ZXIgZG8gbm90IGNvbnRhaW4gdGhlIG5lZWRsZS5cbiAqIEBwYXJhbSBhSGlnaCBJbmRpY2VzIGhlcmUgYW5kIGhpZ2hlciBkbyBub3QgY29udGFpbiB0aGUgbmVlZGxlLlxuICogQHBhcmFtIGFOZWVkbGUgVGhlIGVsZW1lbnQgYmVpbmcgc2VhcmNoZWQgZm9yLlxuICogQHBhcmFtIGFIYXlzdGFjayBUaGUgbm9uLWVtcHR5IGFycmF5IGJlaW5nIHNlYXJjaGVkLlxuICogQHBhcmFtIGFDb21wYXJlIEZ1bmN0aW9uIHdoaWNoIHRha2VzIHR3byBlbGVtZW50cyBhbmQgcmV0dXJucyAtMSwgMCwgb3IgMS5cbiAqIEBwYXJhbSBhQmlhcyBFaXRoZXIgJ2JpbmFyeVNlYXJjaC5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnYmluYXJ5U2VhcmNoLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcbiAqICAgICBzZWFyY2hpbmcgZm9yLCByZXNwZWN0aXZlbHksIGlmIHRoZSBleGFjdCBlbGVtZW50IGNhbm5vdCBiZSBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gcmVjdXJzaXZlU2VhcmNoKGFMb3csIGFIaWdoLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcykge1xuICAvLyBUaGlzIGZ1bmN0aW9uIHRlcm1pbmF0ZXMgd2hlbiBvbmUgb2YgdGhlIGZvbGxvd2luZyBpcyB0cnVlOlxuICAvL1xuICAvLyAgIDEuIFdlIGZpbmQgdGhlIGV4YWN0IGVsZW1lbnQgd2UgYXJlIGxvb2tpbmcgZm9yLlxuICAvL1xuICAvLyAgIDIuIFdlIGRpZCBub3QgZmluZCB0aGUgZXhhY3QgZWxlbWVudCwgYnV0IHdlIGNhbiByZXR1cm4gdGhlIGluZGV4IG9mXG4gIC8vICAgICAgdGhlIG5leHQtY2xvc2VzdCBlbGVtZW50LlxuICAvL1xuICAvLyAgIDMuIFdlIGRpZCBub3QgZmluZCB0aGUgZXhhY3QgZWxlbWVudCwgYW5kIHRoZXJlIGlzIG5vIG5leHQtY2xvc2VzdFxuICAvLyAgICAgIGVsZW1lbnQgdGhhbiB0aGUgb25lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLCBzbyB3ZSByZXR1cm4gLTEuXG4gIHZhciBtaWQgPSBNYXRoLmZsb29yKChhSGlnaCAtIGFMb3cpIC8gMikgKyBhTG93O1xuICB2YXIgY21wID0gYUNvbXBhcmUoYU5lZWRsZSwgYUhheXN0YWNrW21pZF0sIHRydWUpO1xuICBpZiAoY21wID09PSAwKSB7XG4gICAgLy8gRm91bmQgdGhlIGVsZW1lbnQgd2UgYXJlIGxvb2tpbmcgZm9yLlxuICAgIHJldHVybiBtaWQ7XG4gIH1cbiAgZWxzZSBpZiAoY21wID4gMCkge1xuICAgIC8vIE91ciBuZWVkbGUgaXMgZ3JlYXRlciB0aGFuIGFIYXlzdGFja1ttaWRdLlxuICAgIGlmIChhSGlnaCAtIG1pZCA+IDEpIHtcbiAgICAgIC8vIFRoZSBlbGVtZW50IGlzIGluIHRoZSB1cHBlciBoYWxmLlxuICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVNlYXJjaChtaWQsIGFIaWdoLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcyk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGV4YWN0IG5lZWRsZSBlbGVtZW50IHdhcyBub3QgZm91bmQgaW4gdGhpcyBoYXlzdGFjay4gRGV0ZXJtaW5lIGlmXG4gICAgLy8gd2UgYXJlIGluIHRlcm1pbmF0aW9uIGNhc2UgKDMpIG9yICgyKSBhbmQgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB0aGluZy5cbiAgICBpZiAoYUJpYXMgPT0gZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCkge1xuICAgICAgcmV0dXJuIGFIaWdoIDwgYUhheXN0YWNrLmxlbmd0aCA/IGFIaWdoIDogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIE91ciBuZWVkbGUgaXMgbGVzcyB0aGFuIGFIYXlzdGFja1ttaWRdLlxuICAgIGlmIChtaWQgLSBhTG93ID4gMSkge1xuICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgaW4gdGhlIGxvd2VyIGhhbGYuXG4gICAgICByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKGFMb3csIG1pZCwgYU5lZWRsZSwgYUhheXN0YWNrLCBhQ29tcGFyZSwgYUJpYXMpO1xuICAgIH1cblxuICAgIC8vIHdlIGFyZSBpbiB0ZXJtaW5hdGlvbiBjYXNlICgzKSBvciAoMikgYW5kIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgdGhpbmcuXG4gICAgaWYgKGFCaWFzID09IGV4cG9ydHMuTEVBU1RfVVBQRVJfQk9VTkQpIHtcbiAgICAgIHJldHVybiBtaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhTG93IDwgMCA/IC0xIDogYUxvdztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGJpbmFyeSBzZWFyY2ggd2hpY2ggd2lsbCBhbHdheXMgdHJ5IGFuZCByZXR1cm5cbiAqIHRoZSBpbmRleCBvZiB0aGUgY2xvc2VzdCBlbGVtZW50IGlmIHRoZXJlIGlzIG5vIGV4YWN0IGhpdC4gVGhpcyBpcyBiZWNhdXNlXG4gKiBtYXBwaW5ncyBiZXR3ZWVuIG9yaWdpbmFsIGFuZCBnZW5lcmF0ZWQgbGluZS9jb2wgcGFpcnMgYXJlIHNpbmdsZSBwb2ludHMsXG4gKiBhbmQgdGhlcmUgaXMgYW4gaW1wbGljaXQgcmVnaW9uIGJldHdlZW4gZWFjaCBvZiB0aGVtLCBzbyBhIG1pc3MganVzdCBtZWFuc1xuICogdGhhdCB5b3UgYXJlbid0IG9uIHRoZSB2ZXJ5IHN0YXJ0IG9mIGEgcmVnaW9uLlxuICpcbiAqIEBwYXJhbSBhTmVlZGxlIFRoZSBlbGVtZW50IHlvdSBhcmUgbG9va2luZyBmb3IuXG4gKiBAcGFyYW0gYUhheXN0YWNrIFRoZSBhcnJheSB0aGF0IGlzIGJlaW5nIHNlYXJjaGVkLlxuICogQHBhcmFtIGFDb21wYXJlIEEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhlIG5lZWRsZSBhbmQgYW4gZWxlbWVudCBpbiB0aGVcbiAqICAgICBhcnJheSBhbmQgcmV0dXJucyAtMSwgMCwgb3IgMSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbmVlZGxlIGlzIGxlc3NcbiAqICAgICB0aGFuLCBlcXVhbCB0bywgb3IgZ3JlYXRlciB0aGFuIHRoZSBlbGVtZW50LCByZXNwZWN0aXZlbHkuXG4gKiBAcGFyYW0gYUJpYXMgRWl0aGVyICdiaW5hcnlTZWFyY2guR1JFQVRFU1RfTE9XRVJfQk9VTkQnIG9yXG4gKiAgICAgJ2JpbmFyeVNlYXJjaC5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcbiAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG4gKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG4gKiAgICAgRGVmYXVsdHMgdG8gJ2JpbmFyeVNlYXJjaC5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG4gKi9cbmV4cG9ydHMuc2VhcmNoID0gZnVuY3Rpb24gc2VhcmNoKGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKSB7XG4gIGlmIChhSGF5c3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgdmFyIGluZGV4ID0gcmVjdXJzaXZlU2VhcmNoKC0xLCBhSGF5c3RhY2subGVuZ3RoLCBhTmVlZGxlLCBhSGF5c3RhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhQ29tcGFyZSwgYUJpYXMgfHwgZXhwb3J0cy5HUkVBVEVTVF9MT1dFUl9CT1VORCk7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvLyBXZSBoYXZlIGZvdW5kIGVpdGhlciB0aGUgZXhhY3QgZWxlbWVudCwgb3IgdGhlIG5leHQtY2xvc2VzdCBlbGVtZW50IHRoYW5cbiAgLy8gdGhlIG9uZSB3ZSBhcmUgc2VhcmNoaW5nIGZvci4gSG93ZXZlciwgdGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUgc3VjaFxuICAvLyBlbGVtZW50LiBNYWtlIHN1cmUgd2UgYWx3YXlzIHJldHVybiB0aGUgc21hbGxlc3Qgb2YgdGhlc2UuXG4gIHdoaWxlIChpbmRleCAtIDEgPj0gMCkge1xuICAgIGlmIChhQ29tcGFyZShhSGF5c3RhY2tbaW5kZXhdLCBhSGF5c3RhY2tbaW5kZXggLSAxXSwgdHJ1ZSkgIT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAtLWluZGV4O1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxNCBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBtYXBwaW5nQiBpcyBhZnRlciBtYXBwaW5nQSB3aXRoIHJlc3BlY3QgdG8gZ2VuZXJhdGVkXG4gKiBwb3NpdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVkUG9zaXRpb25BZnRlcihtYXBwaW5nQSwgbWFwcGluZ0IpIHtcbiAgLy8gT3B0aW1pemVkIGZvciBtb3N0IGNvbW1vbiBjYXNlXG4gIHZhciBsaW5lQSA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmU7XG4gIHZhciBsaW5lQiA9IG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG4gIHZhciBjb2x1bW5BID0gbWFwcGluZ0EuZ2VuZXJhdGVkQ29sdW1uO1xuICB2YXIgY29sdW1uQiA9IG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgcmV0dXJuIGxpbmVCID4gbGluZUEgfHwgbGluZUIgPT0gbGluZUEgJiYgY29sdW1uQiA+PSBjb2x1bW5BIHx8XG4gICAgICAgICB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkKG1hcHBpbmdBLCBtYXBwaW5nQikgPD0gMDtcbn1cblxuLyoqXG4gKiBBIGRhdGEgc3RydWN0dXJlIHRvIHByb3ZpZGUgYSBzb3J0ZWQgdmlldyBvZiBhY2N1bXVsYXRlZCBtYXBwaW5ncyBpbiBhXG4gKiBwZXJmb3JtYW5jZSBjb25zY2lvdXMgbWFubmVyLiBJdCB0cmFkZXMgYSBuZWdsaWJhYmxlIG92ZXJoZWFkIGluIGdlbmVyYWxcbiAqIGNhc2UgZm9yIGEgbGFyZ2Ugc3BlZWR1cCBpbiBjYXNlIG9mIG1hcHBpbmdzIGJlaW5nIGFkZGVkIGluIG9yZGVyLlxuICovXG5mdW5jdGlvbiBNYXBwaW5nTGlzdCgpIHtcbiAgdGhpcy5fYXJyYXkgPSBbXTtcbiAgdGhpcy5fc29ydGVkID0gdHJ1ZTtcbiAgLy8gU2VydmVzIGFzIGluZmltdW1cbiAgdGhpcy5fbGFzdCA9IHtnZW5lcmF0ZWRMaW5lOiAtMSwgZ2VuZXJhdGVkQ29sdW1uOiAwfTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIHRocm91Z2ggaW50ZXJuYWwgaXRlbXMuIFRoaXMgbWV0aG9kIHRha2VzIHRoZSBzYW1lIGFyZ3VtZW50cyB0aGF0XG4gKiBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIHRha2VzLlxuICpcbiAqIE5PVEU6IFRoZSBvcmRlciBvZiB0aGUgbWFwcGluZ3MgaXMgTk9UIGd1YXJhbnRlZWQuXG4gKi9cbk1hcHBpbmdMaXN0LnByb3RvdHlwZS51bnNvcnRlZEZvckVhY2ggPVxuICBmdW5jdGlvbiBNYXBwaW5nTGlzdF9mb3JFYWNoKGFDYWxsYmFjaywgYVRoaXNBcmcpIHtcbiAgICB0aGlzLl9hcnJheS5mb3JFYWNoKGFDYWxsYmFjaywgYVRoaXNBcmcpO1xuICB9O1xuXG4vKipcbiAqIEFkZCB0aGUgZ2l2ZW4gc291cmNlIG1hcHBpbmcuXG4gKlxuICogQHBhcmFtIE9iamVjdCBhTWFwcGluZ1xuICovXG5NYXBwaW5nTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gTWFwcGluZ0xpc3RfYWRkKGFNYXBwaW5nKSB7XG4gIGlmIChnZW5lcmF0ZWRQb3NpdGlvbkFmdGVyKHRoaXMuX2xhc3QsIGFNYXBwaW5nKSkge1xuICAgIHRoaXMuX2xhc3QgPSBhTWFwcGluZztcbiAgICB0aGlzLl9hcnJheS5wdXNoKGFNYXBwaW5nKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9zb3J0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9hcnJheS5wdXNoKGFNYXBwaW5nKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmbGF0LCBzb3J0ZWQgYXJyYXkgb2YgbWFwcGluZ3MuIFRoZSBtYXBwaW5ncyBhcmUgc29ydGVkIGJ5XG4gKiBnZW5lcmF0ZWQgcG9zaXRpb24uXG4gKlxuICogV0FSTklORzogVGhpcyBtZXRob2QgcmV0dXJucyBpbnRlcm5hbCBkYXRhIHdpdGhvdXQgY29weWluZywgZm9yXG4gKiBwZXJmb3JtYW5jZS4gVGhlIHJldHVybiB2YWx1ZSBtdXN0IE5PVCBiZSBtdXRhdGVkLCBhbmQgc2hvdWxkIGJlIHRyZWF0ZWQgYXNcbiAqIGFuIGltbXV0YWJsZSBib3Jyb3cuIElmIHlvdSB3YW50IHRvIHRha2Ugb3duZXJzaGlwLCB5b3UgbXVzdCBtYWtlIHlvdXIgb3duXG4gKiBjb3B5LlxuICovXG5NYXBwaW5nTGlzdC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIE1hcHBpbmdMaXN0X3RvQXJyYXkoKSB7XG4gIGlmICghdGhpcy5fc29ydGVkKSB7XG4gICAgdGhpcy5fYXJyYXkuc29ydCh1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkKTtcbiAgICB0aGlzLl9zb3J0ZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiB0aGlzLl9hcnJheTtcbn07XG5cbmV4cG9ydHMuTWFwcGluZ0xpc3QgPSBNYXBwaW5nTGlzdDtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxuLy8gSXQgdHVybnMgb3V0IHRoYXQgc29tZSAobW9zdD8pIEphdmFTY3JpcHQgZW5naW5lcyBkb24ndCBzZWxmLWhvc3Rcbi8vIGBBcnJheS5wcm90b3R5cGUuc29ydGAuIFRoaXMgbWFrZXMgc2Vuc2UgYmVjYXVzZSBDKysgd2lsbCBsaWtlbHkgcmVtYWluXG4vLyBmYXN0ZXIgdGhhbiBKUyB3aGVuIGRvaW5nIHJhdyBDUFUtaW50ZW5zaXZlIHNvcnRpbmcuIEhvd2V2ZXIsIHdoZW4gdXNpbmcgYVxuLy8gY3VzdG9tIGNvbXBhcmF0b3IgZnVuY3Rpb24sIGNhbGxpbmcgYmFjayBhbmQgZm9ydGggYmV0d2VlbiB0aGUgVk0ncyBDKysgYW5kXG4vLyBKSVQnZCBKUyBpcyByYXRoZXIgc2xvdyAqYW5kKiBsb3NlcyBKSVQgdHlwZSBpbmZvcm1hdGlvbiwgcmVzdWx0aW5nIGluXG4vLyB3b3JzZSBnZW5lcmF0ZWQgY29kZSBmb3IgdGhlIGNvbXBhcmF0b3IgZnVuY3Rpb24gdGhhbiB3b3VsZCBiZSBvcHRpbWFsLiBJblxuLy8gZmFjdCwgd2hlbiBzb3J0aW5nIHdpdGggYSBjb21wYXJhdG9yLCB0aGVzZSBjb3N0cyBvdXR3ZWlnaCB0aGUgYmVuZWZpdHMgb2Zcbi8vIHNvcnRpbmcgaW4gQysrLiBCeSB1c2luZyBvdXIgb3duIEpTLWltcGxlbWVudGVkIFF1aWNrIFNvcnQgKGJlbG93KSwgd2UgZ2V0XG4vLyBhIH4zNTAwbXMgbWVhbiBzcGVlZC11cCBpbiBgYmVuY2gvYmVuY2guaHRtbGAuXG5cbi8qKlxuICogU3dhcCB0aGUgZWxlbWVudHMgaW5kZXhlZCBieSBgeGAgYW5kIGB5YCBpbiB0aGUgYXJyYXkgYGFyeWAuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJ5XG4gKiAgICAgICAgVGhlIGFycmF5LlxuICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAqICAgICAgICBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0uXG4gKiBAcGFyYW0ge051bWJlcn0geVxuICogICAgICAgIFRoZSBpbmRleCBvZiB0aGUgc2Vjb25kIGl0ZW0uXG4gKi9cbmZ1bmN0aW9uIHN3YXAoYXJ5LCB4LCB5KSB7XG4gIHZhciB0ZW1wID0gYXJ5W3hdO1xuICBhcnlbeF0gPSBhcnlbeV07XG4gIGFyeVt5XSA9IHRlbXA7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UgYGxvdyAuLiBoaWdoYCBpbmNsdXNpdmUuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGxvd1xuICogICAgICAgIFRoZSBsb3dlciBib3VuZCBvbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge051bWJlcn0gaGlnaFxuICogICAgICAgIFRoZSB1cHBlciBib3VuZCBvbiB0aGUgcmFuZ2UuXG4gKi9cbmZ1bmN0aW9uIHJhbmRvbUludEluUmFuZ2UobG93LCBoaWdoKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKGxvdyArIChNYXRoLnJhbmRvbSgpICogKGhpZ2ggLSBsb3cpKSk7XG59XG5cbi8qKlxuICogVGhlIFF1aWNrIFNvcnQgYWxnb3JpdGhtLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyeVxuICogICAgICAgIEFuIGFycmF5IHRvIHNvcnQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb21wYXJhdG9yXG4gKiAgICAgICAgRnVuY3Rpb24gdG8gdXNlIHRvIGNvbXBhcmUgdHdvIGl0ZW1zLlxuICogQHBhcmFtIHtOdW1iZXJ9IHBcbiAqICAgICAgICBTdGFydCBpbmRleCBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSByXG4gKiAgICAgICAgRW5kIGluZGV4IG9mIHRoZSBhcnJheVxuICovXG5mdW5jdGlvbiBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHAsIHIpIHtcbiAgLy8gSWYgb3VyIGxvd2VyIGJvdW5kIGlzIGxlc3MgdGhhbiBvdXIgdXBwZXIgYm91bmQsIHdlICgxKSBwYXJ0aXRpb24gdGhlXG4gIC8vIGFycmF5IGludG8gdHdvIHBpZWNlcyBhbmQgKDIpIHJlY3Vyc2Ugb24gZWFjaCBoYWxmLiBJZiBpdCBpcyBub3QsIHRoaXMgaXNcbiAgLy8gdGhlIGVtcHR5IGFycmF5IGFuZCBvdXIgYmFzZSBjYXNlLlxuXG4gIGlmIChwIDwgcikge1xuICAgIC8vICgxKSBQYXJ0aXRpb25pbmcuXG4gICAgLy9cbiAgICAvLyBUaGUgcGFydGl0aW9uaW5nIGNob29zZXMgYSBwaXZvdCBiZXR3ZWVuIGBwYCBhbmQgYHJgIGFuZCBtb3ZlcyBhbGxcbiAgICAvLyBlbGVtZW50cyB0aGF0IGFyZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHBpdm90IHRvIHRoZSBiZWZvcmUgaXQsIGFuZFxuICAgIC8vIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBhcmUgZ3JlYXRlciB0aGFuIGl0IGFmdGVyIGl0LiBUaGUgZWZmZWN0IGlzIHRoYXRcbiAgICAvLyBvbmNlIHBhcnRpdGlvbiBpcyBkb25lLCB0aGUgcGl2b3QgaXMgaW4gdGhlIGV4YWN0IHBsYWNlIGl0IHdpbGwgYmUgd2hlblxuICAgIC8vIHRoZSBhcnJheSBpcyBwdXQgaW4gc29ydGVkIG9yZGVyLCBhbmQgaXQgd2lsbCBub3QgbmVlZCB0byBiZSBtb3ZlZFxuICAgIC8vIGFnYWluLiBUaGlzIHJ1bnMgaW4gTyhuKSB0aW1lLlxuXG4gICAgLy8gQWx3YXlzIGNob29zZSBhIHJhbmRvbSBwaXZvdCBzbyB0aGF0IGFuIGlucHV0IGFycmF5IHdoaWNoIGlzIHJldmVyc2VcbiAgICAvLyBzb3J0ZWQgZG9lcyBub3QgY2F1c2UgTyhuXjIpIHJ1bm5pbmcgdGltZS5cbiAgICB2YXIgcGl2b3RJbmRleCA9IHJhbmRvbUludEluUmFuZ2UocCwgcik7XG4gICAgdmFyIGkgPSBwIC0gMTtcblxuICAgIHN3YXAoYXJ5LCBwaXZvdEluZGV4LCByKTtcbiAgICB2YXIgcGl2b3QgPSBhcnlbcl07XG5cbiAgICAvLyBJbW1lZGlhdGVseSBhZnRlciBgamAgaXMgaW5jcmVtZW50ZWQgaW4gdGhpcyBsb29wLCB0aGUgZm9sbG93aW5nIGhvbGRcbiAgICAvLyB0cnVlOlxuICAgIC8vXG4gICAgLy8gICAqIEV2ZXJ5IGVsZW1lbnQgaW4gYGFyeVtwIC4uIGldYCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHBpdm90LlxuICAgIC8vXG4gICAgLy8gICAqIEV2ZXJ5IGVsZW1lbnQgaW4gYGFyeVtpKzEgLi4gai0xXWAgaXMgZ3JlYXRlciB0aGFuIHRoZSBwaXZvdC5cbiAgICBmb3IgKHZhciBqID0gcDsgaiA8IHI7IGorKykge1xuICAgICAgaWYgKGNvbXBhcmF0b3IoYXJ5W2pdLCBwaXZvdCkgPD0gMCkge1xuICAgICAgICBpICs9IDE7XG4gICAgICAgIHN3YXAoYXJ5LCBpLCBqKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2FwKGFyeSwgaSArIDEsIGopO1xuICAgIHZhciBxID0gaSArIDE7XG5cbiAgICAvLyAoMikgUmVjdXJzZSBvbiBlYWNoIGhhbGYuXG5cbiAgICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHAsIHEgLSAxKTtcbiAgICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIHEgKyAxLCByKTtcbiAgfVxufVxuXG4vKipcbiAqIFNvcnQgdGhlIGdpdmVuIGFycmF5IGluLXBsYWNlIHdpdGggdGhlIGdpdmVuIGNvbXBhcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJ5XG4gKiAgICAgICAgQW4gYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmF0b3JcbiAqICAgICAgICBGdW5jdGlvbiB0byB1c2UgdG8gY29tcGFyZSB0d28gaXRlbXMuXG4gKi9cbmV4cG9ydHMucXVpY2tTb3J0ID0gZnVuY3Rpb24gKGFyeSwgY29tcGFyYXRvcikge1xuICBkb1F1aWNrU29ydChhcnksIGNvbXBhcmF0b3IsIDAsIGFyeS5sZW5ndGggLSAxKTtcbn07XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgYmluYXJ5U2VhcmNoID0gcmVxdWlyZSgnLi9iaW5hcnktc2VhcmNoJyk7XG52YXIgQXJyYXlTZXQgPSByZXF1aXJlKCcuL2FycmF5LXNldCcpLkFycmF5U2V0O1xudmFyIGJhc2U2NFZMUSA9IHJlcXVpcmUoJy4vYmFzZTY0LXZscScpO1xudmFyIHF1aWNrU29ydCA9IHJlcXVpcmUoJy4vcXVpY2stc29ydCcpLnF1aWNrU29ydDtcblxuZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXIoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICB2YXIgc291cmNlTWFwID0gYVNvdXJjZU1hcDtcbiAgaWYgKHR5cGVvZiBhU291cmNlTWFwID09PSAnc3RyaW5nJykge1xuICAgIHNvdXJjZU1hcCA9IHV0aWwucGFyc2VTb3VyY2VNYXBJbnB1dChhU291cmNlTWFwKTtcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VNYXAuc2VjdGlvbnMgIT0gbnVsbFxuICAgID8gbmV3IEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcihzb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpXG4gICAgOiBuZXcgQmFzaWNTb3VyY2VNYXBDb25zdW1lcihzb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpO1xufVxuXG5Tb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwID0gZnVuY3Rpb24oYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICByZXR1cm4gQmFzaWNTb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpO1xufVxuXG4vKipcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuLy8gYF9fZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZCBgX19vcmlnaW5hbE1hcHBpbmdzYCBhcmUgYXJyYXlzIHRoYXQgaG9sZCB0aGVcbi8vIHBhcnNlZCBtYXBwaW5nIGNvb3JkaW5hdGVzIGZyb20gdGhlIHNvdXJjZSBtYXAncyBcIm1hcHBpbmdzXCIgYXR0cmlidXRlLiBUaGV5XG4vLyBhcmUgbGF6aWx5IGluc3RhbnRpYXRlZCwgYWNjZXNzZWQgdmlhIHRoZSBgX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbi8vIGBfb3JpZ2luYWxNYXBwaW5nc2AgZ2V0dGVycyByZXNwZWN0aXZlbHksIGFuZCB3ZSBvbmx5IHBhcnNlIHRoZSBtYXBwaW5nc1xuLy8gYW5kIGNyZWF0ZSB0aGVzZSBhcnJheXMgb25jZSBxdWVyaWVkIGZvciBhIHNvdXJjZSBsb2NhdGlvbi4gV2UganVtcCB0aHJvdWdoXG4vLyB0aGVzZSBob29wcyBiZWNhdXNlIHRoZXJlIGNhbiBiZSBtYW55IHRob3VzYW5kcyBvZiBtYXBwaW5ncywgYW5kIHBhcnNpbmdcbi8vIHRoZW0gaXMgZXhwZW5zaXZlLCBzbyB3ZSBvbmx5IHdhbnQgdG8gZG8gaXQgaWYgd2UgbXVzdC5cbi8vXG4vLyBFYWNoIG9iamVjdCBpbiB0aGUgYXJyYXlzIGlzIG9mIHRoZSBmb3JtOlxuLy9cbi8vICAgICB7XG4vLyAgICAgICBnZW5lcmF0ZWRMaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBzb3VyY2U6IFRoZSBwYXRoIHRvIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZSB0aGF0IGdlbmVyYXRlZCB0aGlzXG4vLyAgICAgICAgICAgICAgIGNodW5rIG9mIGNvZGUsXG4vLyAgICAgICBvcmlnaW5hbExpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlIHRoYXRcbi8vICAgICAgICAgICAgICAgICAgICAgY29ycmVzcG9uZHMgdG8gdGhpcyBjaHVuayBvZiBnZW5lcmF0ZWQgY29kZSxcbi8vICAgICAgIG9yaWdpbmFsQ29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlIHRoYXRcbi8vICAgICAgICAgICAgICAgICAgICAgICBjb3JyZXNwb25kcyB0byB0aGlzIGNodW5rIG9mIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgbmFtZTogVGhlIG5hbWUgb2YgdGhlIG9yaWdpbmFsIHN5bWJvbCB3aGljaCBnZW5lcmF0ZWQgdGhpcyBjaHVuayBvZlxuLy8gICAgICAgICAgICAgY29kZS5cbi8vICAgICB9XG4vL1xuLy8gQWxsIHByb3BlcnRpZXMgZXhjZXB0IGZvciBgZ2VuZXJhdGVkTGluZWAgYW5kIGBnZW5lcmF0ZWRDb2x1bW5gIGNhbiBiZVxuLy8gYG51bGxgLlxuLy9cbi8vIGBfZ2VuZXJhdGVkTWFwcGluZ3NgIGlzIG9yZGVyZWQgYnkgdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMuXG4vL1xuLy8gYF9vcmlnaW5hbE1hcHBpbmdzYCBpcyBvcmRlcmVkIGJ5IHRoZSBvcmlnaW5hbCBwb3NpdGlvbnMuXG5cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fX2dlbmVyYXRlZE1hcHBpbmdzID0gbnVsbDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUsICdfZ2VuZXJhdGVkTWFwcGluZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MpIHtcbiAgICAgIHRoaXMuX3BhcnNlTWFwcGluZ3ModGhpcy5fbWFwcGluZ3MsIHRoaXMuc291cmNlUm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncztcbiAgfVxufSk7XG5cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fX29yaWdpbmFsTWFwcGluZ3MgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ19vcmlnaW5hbE1hcHBpbmdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MpIHtcbiAgICAgIHRoaXMuX3BhcnNlTWFwcGluZ3ModGhpcy5fbWFwcGluZ3MsIHRoaXMuc291cmNlUm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzO1xuICB9XG59KTtcblxuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9jaGFySXNNYXBwaW5nU2VwYXJhdG9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfY2hhcklzTWFwcGluZ1NlcGFyYXRvcihhU3RyLCBpbmRleCkge1xuICAgIHZhciBjID0gYVN0ci5jaGFyQXQoaW5kZXgpO1xuICAgIHJldHVybiBjID09PSBcIjtcIiB8fCBjID09PSBcIixcIjtcbiAgfTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fcGFyc2VNYXBwaW5ncyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MoYVN0ciwgYVNvdXJjZVJvb3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWJjbGFzc2VzIG11c3QgaW1wbGVtZW50IF9wYXJzZU1hcHBpbmdzXCIpO1xuICB9O1xuXG5Tb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVIgPSAxO1xuU291cmNlTWFwQ29uc3VtZXIuT1JJR0lOQUxfT1JERVIgPSAyO1xuXG5Tb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCA9IDE7XG5Tb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCA9IDI7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGVhY2ggbWFwcGluZyBiZXR3ZWVuIGFuIG9yaWdpbmFsIHNvdXJjZS9saW5lL2NvbHVtbiBhbmQgYVxuICogZ2VuZXJhdGVkIGxpbmUvY29sdW1uIGluIHRoaXMgc291cmNlIG1hcC5cbiAqXG4gKiBAcGFyYW0gRnVuY3Rpb24gYUNhbGxiYWNrXG4gKiAgICAgICAgVGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdpdGggZWFjaCBtYXBwaW5nLlxuICogQHBhcmFtIE9iamVjdCBhQ29udGV4dFxuICogICAgICAgIE9wdGlvbmFsLiBJZiBzcGVjaWZpZWQsIHRoaXMgb2JqZWN0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIGB0aGlzYCBldmVyeVxuICogICAgICAgIHRpbWUgdGhhdCBgYUNhbGxiYWNrYCBpcyBjYWxsZWQuXG4gKiBAcGFyYW0gYU9yZGVyXG4gKiAgICAgICAgRWl0aGVyIGBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVJgIG9yXG4gKiAgICAgICAgYFNvdXJjZU1hcENvbnN1bWVyLk9SSUdJTkFMX09SREVSYC4gU3BlY2lmaWVzIHdoZXRoZXIgeW91IHdhbnQgdG9cbiAqICAgICAgICBpdGVyYXRlIG92ZXIgdGhlIG1hcHBpbmdzIHNvcnRlZCBieSB0aGUgZ2VuZXJhdGVkIGZpbGUncyBsaW5lL2NvbHVtblxuICogICAgICAgIG9yZGVyIG9yIHRoZSBvcmlnaW5hbCdzIHNvdXJjZS9saW5lL2NvbHVtbiBvcmRlciwgcmVzcGVjdGl2ZWx5LiBEZWZhdWx0cyB0b1xuICogICAgICAgIGBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVJgLlxuICovXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZWFjaE1hcHBpbmcgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9lYWNoTWFwcGluZyhhQ2FsbGJhY2ssIGFDb250ZXh0LCBhT3JkZXIpIHtcbiAgICB2YXIgY29udGV4dCA9IGFDb250ZXh0IHx8IG51bGw7XG4gICAgdmFyIG9yZGVyID0gYU9yZGVyIHx8IFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUjtcblxuICAgIHZhciBtYXBwaW5ncztcbiAgICBzd2l0Y2ggKG9yZGVyKSB7XG4gICAgY2FzZSBTb3VyY2VNYXBDb25zdW1lci5HRU5FUkFURURfT1JERVI6XG4gICAgICBtYXBwaW5ncyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTb3VyY2VNYXBDb25zdW1lci5PUklHSU5BTF9PUkRFUjpcbiAgICAgIG1hcHBpbmdzID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5ncztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIG9yZGVyIG9mIGl0ZXJhdGlvbi5cIik7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZVJvb3QgPSB0aGlzLnNvdXJjZVJvb3Q7XG4gICAgbWFwcGluZ3MubWFwKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICB2YXIgc291cmNlID0gbWFwcGluZy5zb3VyY2UgPT09IG51bGwgPyBudWxsIDogdGhpcy5fc291cmNlcy5hdChtYXBwaW5nLnNvdXJjZSk7XG4gICAgICBzb3VyY2UgPSB1dGlsLmNvbXB1dGVTb3VyY2VVUkwoc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIGdlbmVyYXRlZExpbmU6IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSxcbiAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbixcbiAgICAgICAgb3JpZ2luYWxMaW5lOiBtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgb3JpZ2luYWxDb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG4gICAgICAgIG5hbWU6IG1hcHBpbmcubmFtZSA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9uYW1lcy5hdChtYXBwaW5nLm5hbWUpXG4gICAgICB9O1xuICAgIH0sIHRoaXMpLmZvckVhY2goYUNhbGxiYWNrLCBjb250ZXh0KTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIGFsbCBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwcm92aWRlZC4gSWYgbm8gY29sdW1uIGlzIHByb3ZpZGVkLCByZXR1cm5zIGFsbCBtYXBwaW5nc1xuICogY29ycmVzcG9uZGluZyB0byBhIGVpdGhlciB0aGUgbGluZSB3ZSBhcmUgc2VhcmNoaW5nIGZvciBvciB0aGUgbmV4dFxuICogY2xvc2VzdCBsaW5lIHRoYXQgaGFzIGFueSBtYXBwaW5ncy4gT3RoZXJ3aXNlLCByZXR1cm5zIGFsbCBtYXBwaW5nc1xuICogY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gbGluZSBhbmQgZWl0aGVyIHRoZSBjb2x1bW4gd2UgYXJlIHNlYXJjaGluZyBmb3JcbiAqIG9yIHRoZSBuZXh0IGNsb3Nlc3QgY29sdW1uIHRoYXQgaGFzIGFueSBvZmZzZXRzLlxuICpcbiAqIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgZmlsZW5hbWUgb2YgdGhlIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogT3B0aW9uYWwuIHRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgICBUaGUgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICpcbiAqIGFuZCBhbiBhcnJheSBvZiBvYmplY3RzIGlzIHJldHVybmVkLCBlYWNoIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cbiAqICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5hbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9hbGxHZW5lcmF0ZWRQb3NpdGlvbnNGb3IoYUFyZ3MpIHtcbiAgICB2YXIgbGluZSA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpO1xuXG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBleGFjdCBtYXRjaCwgQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRNYXBwaW5nXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGNsb3Nlc3QgbWFwcGluZyBsZXNzIHRoYW4gdGhlIG5lZWRsZS4gQnlcbiAgICAvLyBzZXR0aW5nIG5lZWRsZS5vcmlnaW5hbENvbHVtbiB0byAwLCB3ZSB0aHVzIGZpbmQgdGhlIGxhc3QgbWFwcGluZyBmb3JcbiAgICAvLyB0aGUgZ2l2ZW4gbGluZSwgcHJvdmlkZWQgc3VjaCBhIG1hcHBpbmcgZXhpc3RzLlxuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBzb3VyY2U6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJyksXG4gICAgICBvcmlnaW5hbExpbmU6IGxpbmUsXG4gICAgICBvcmlnaW5hbENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nLCAwKVxuICAgIH07XG5cbiAgICBuZWVkbGUuc291cmNlID0gdGhpcy5fZmluZFNvdXJjZUluZGV4KG5lZWRsZS5zb3VyY2UpO1xuICAgIGlmIChuZWVkbGUuc291cmNlIDwgMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBtYXBwaW5ncyA9IFtdO1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZE1hcHBpbmcobmVlZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsTWFwcGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmlnaW5hbExpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbmFsQ29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5hcnlTZWFyY2guTEVBU1RfVVBQRVJfQk9VTkQpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICBpZiAoYUFyZ3MuY29sdW1uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgZWl0aGVyIHdlIHJ1biBvdXQgb2YgbWFwcGluZ3MsIG9yIHdlIHJ1biBpbnRvXG4gICAgICAgIC8vIGEgbWFwcGluZyBmb3IgYSBkaWZmZXJlbnQgbGluZSB0aGFuIHRoZSBvbmUgd2UgZm91bmQuIFNpbmNlXG4gICAgICAgIC8vIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHRoaXMgaXMgZ3VhcmFudGVlZCB0byBmaW5kIGFsbCBtYXBwaW5ncyBmb3JcbiAgICAgICAgLy8gdGhlIGxpbmUgd2UgZm91bmQuXG4gICAgICAgIHdoaWxlIChtYXBwaW5nICYmIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSBvcmlnaW5hbExpbmUpIHtcbiAgICAgICAgICBtYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG4gICAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzWysraW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb3JpZ2luYWxDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgZWl0aGVyIHdlIHJ1biBvdXQgb2YgbWFwcGluZ3MsIG9yIHdlIHJ1biBpbnRvXG4gICAgICAgIC8vIGEgbWFwcGluZyBmb3IgYSBkaWZmZXJlbnQgbGluZSB0aGFuIHRoZSBvbmUgd2Ugd2VyZSBzZWFyY2hpbmcgZm9yLlxuICAgICAgICAvLyBTaW5jZSBtYXBwaW5ncyBhcmUgc29ydGVkLCB0aGlzIGlzIGd1YXJhbnRlZWQgdG8gZmluZCBhbGwgbWFwcGluZ3MgZm9yXG4gICAgICAgIC8vIHRoZSBsaW5lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLlxuICAgICAgICB3aGlsZSAobWFwcGluZyAmJlxuICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09IGxpbmUgJiZcbiAgICAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPT0gb3JpZ2luYWxDb2x1bW4pIHtcbiAgICAgICAgICBtYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIGxpbmU6IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRMaW5lJywgbnVsbCksXG4gICAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzWysraW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcHBpbmdzO1xuICB9O1xuXG5leHBvcnRzLlNvdXJjZU1hcENvbnN1bWVyID0gU291cmNlTWFwQ29uc3VtZXI7XG5cbi8qKlxuICogQSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyIGluc3RhbmNlIHJlcHJlc2VudHMgYSBwYXJzZWQgc291cmNlIG1hcCB3aGljaCB3ZSBjYW5cbiAqIHF1ZXJ5IGZvciBpbmZvcm1hdGlvbiBhYm91dCB0aGUgb3JpZ2luYWwgZmlsZSBwb3NpdGlvbnMgYnkgZ2l2aW5nIGl0IGEgZmlsZVxuICogcG9zaXRpb24gaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuXG4gKlxuICogVGhlIGZpcnN0IHBhcmFtZXRlciBpcyB0aGUgcmF3IHNvdXJjZSBtYXAgKGVpdGhlciBhcyBhIEpTT04gc3RyaW5nLCBvclxuICogYWxyZWFkeSBwYXJzZWQgdG8gYW4gb2JqZWN0KS4gQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzb3VyY2UgbWFwcyBoYXZlIHRoZVxuICogZm9sbG93aW5nIGF0dHJpYnV0ZXM6XG4gKlxuICogICAtIHZlcnNpb246IFdoaWNoIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXAgc3BlYyB0aGlzIG1hcCBpcyBmb2xsb3dpbmcuXG4gKiAgIC0gc291cmNlczogQW4gYXJyYXkgb2YgVVJMcyB0byB0aGUgb3JpZ2luYWwgc291cmNlIGZpbGVzLlxuICogICAtIG5hbWVzOiBBbiBhcnJheSBvZiBpZGVudGlmaWVycyB3aGljaCBjYW4gYmUgcmVmZXJyZW5jZWQgYnkgaW5kaXZpZHVhbCBtYXBwaW5ncy5cbiAqICAgLSBzb3VyY2VSb290OiBPcHRpb25hbC4gVGhlIFVSTCByb290IGZyb20gd2hpY2ggYWxsIHNvdXJjZXMgYXJlIHJlbGF0aXZlLlxuICogICAtIHNvdXJjZXNDb250ZW50OiBPcHRpb25hbC4gQW4gYXJyYXkgb2YgY29udGVudHMgb2YgdGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlcy5cbiAqICAgLSBtYXBwaW5nczogQSBzdHJpbmcgb2YgYmFzZTY0IFZMUXMgd2hpY2ggY29udGFpbiB0aGUgYWN0dWFsIG1hcHBpbmdzLlxuICogICAtIGZpbGU6IE9wdGlvbmFsLiBUaGUgZ2VuZXJhdGVkIGZpbGUgdGhpcyBzb3VyY2UgbWFwIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAqXG4gKiBIZXJlIGlzIGFuIGV4YW1wbGUgc291cmNlIG1hcCwgdGFrZW4gZnJvbSB0aGUgc291cmNlIG1hcCBzcGVjWzBdOlxuICpcbiAqICAgICB7XG4gKiAgICAgICB2ZXJzaW9uIDogMyxcbiAqICAgICAgIGZpbGU6IFwib3V0LmpzXCIsXG4gKiAgICAgICBzb3VyY2VSb290IDogXCJcIixcbiAqICAgICAgIHNvdXJjZXM6IFtcImZvby5qc1wiLCBcImJhci5qc1wiXSxcbiAqICAgICAgIG5hbWVzOiBbXCJzcmNcIiwgXCJtYXBzXCIsIFwiYXJlXCIsIFwiZnVuXCJdLFxuICogICAgICAgbWFwcGluZ3M6IFwiQUEsQUI7O0FCQ0RFO1wiXG4gKiAgICAgfVxuICpcbiAqIFRoZSBzZWNvbmQgcGFyYW1ldGVyLCBpZiBnaXZlbiwgaXMgYSBzdHJpbmcgd2hvc2UgdmFsdWUgaXMgdGhlIFVSTFxuICogYXQgd2hpY2ggdGhlIHNvdXJjZSBtYXAgd2FzIGZvdW5kLiAgVGhpcyBVUkwgaXMgdXNlZCB0byBjb21wdXRlIHRoZVxuICogc291cmNlcyBhcnJheS5cbiAqXG4gKiBbMF06IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVUxUkdBZWhRd1J5cFVUb3ZGMUtSbHBpT0Z6ZTBiLV8yZ2M2ZkFIMEtZMGsvZWRpdD9wbGk9MSNcbiAqL1xuZnVuY3Rpb24gQmFzaWNTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgc291cmNlTWFwID0gdXRpbC5wYXJzZVNvdXJjZU1hcElucHV0KGFTb3VyY2VNYXApO1xuICB9XG5cbiAgdmFyIHZlcnNpb24gPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICd2ZXJzaW9uJyk7XG4gIHZhciBzb3VyY2VzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlcycpO1xuICAvLyBTYXNzIDMuMyBsZWF2ZXMgb3V0IHRoZSAnbmFtZXMnIGFycmF5LCBzbyB3ZSBkZXZpYXRlIGZyb20gdGhlIHNwZWMgKHdoaWNoXG4gIC8vIHJlcXVpcmVzIHRoZSBhcnJheSkgdG8gcGxheSBuaWNlIGhlcmUuXG4gIHZhciBuYW1lcyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ25hbWVzJywgW10pO1xuICB2YXIgc291cmNlUm9vdCA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NvdXJjZVJvb3QnLCBudWxsKTtcbiAgdmFyIHNvdXJjZXNDb250ZW50ID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlc0NvbnRlbnQnLCBudWxsKTtcbiAgdmFyIG1hcHBpbmdzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnbWFwcGluZ3MnKTtcbiAgdmFyIGZpbGUgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdmaWxlJywgbnVsbCk7XG5cbiAgLy8gT25jZSBhZ2FpbiwgU2FzcyBkZXZpYXRlcyBmcm9tIHRoZSBzcGVjIGFuZCBzdXBwbGllcyB0aGUgdmVyc2lvbiBhcyBhXG4gIC8vIHN0cmluZyByYXRoZXIgdGhhbiBhIG51bWJlciwgc28gd2UgdXNlIGxvb3NlIGVxdWFsaXR5IGNoZWNraW5nIGhlcmUuXG4gIGlmICh2ZXJzaW9uICE9IHRoaXMuX3ZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VSb290KSB7XG4gICAgc291cmNlUm9vdCA9IHV0aWwubm9ybWFsaXplKHNvdXJjZVJvb3QpO1xuICB9XG5cbiAgc291cmNlcyA9IHNvdXJjZXNcbiAgICAubWFwKFN0cmluZylcbiAgICAvLyBTb21lIHNvdXJjZSBtYXBzIHByb2R1Y2UgcmVsYXRpdmUgc291cmNlIHBhdGhzIGxpa2UgXCIuL2Zvby5qc1wiIGluc3RlYWQgb2ZcbiAgICAvLyBcImZvby5qc1wiLiAgTm9ybWFsaXplIHRoZXNlIGZpcnN0IHNvIHRoYXQgZnV0dXJlIGNvbXBhcmlzb25zIHdpbGwgc3VjY2VlZC5cbiAgICAvLyBTZWUgYnVnemlsLmxhLzEwOTA3NjguXG4gICAgLm1hcCh1dGlsLm5vcm1hbGl6ZSlcbiAgICAvLyBBbHdheXMgZW5zdXJlIHRoYXQgYWJzb2x1dGUgc291cmNlcyBhcmUgaW50ZXJuYWxseSBzdG9yZWQgcmVsYXRpdmUgdG9cbiAgICAvLyB0aGUgc291cmNlIHJvb3QsIGlmIHRoZSBzb3VyY2Ugcm9vdCBpcyBhYnNvbHV0ZS4gTm90IGRvaW5nIHRoaXMgd291bGRcbiAgICAvLyBiZSBwYXJ0aWN1bGFybHkgcHJvYmxlbWF0aWMgd2hlbiB0aGUgc291cmNlIHJvb3QgaXMgYSBwcmVmaXggb2YgdGhlXG4gICAgLy8gc291cmNlICh2YWxpZCwgYnV0IHdoeT8/KS4gU2VlIGdpdGh1YiBpc3N1ZSAjMTk5IGFuZCBidWd6aWwubGEvMTE4ODk4Mi5cbiAgICAubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBzb3VyY2VSb290ICYmIHV0aWwuaXNBYnNvbHV0ZShzb3VyY2VSb290KSAmJiB1dGlsLmlzQWJzb2x1dGUoc291cmNlKVxuICAgICAgICA/IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgc291cmNlKVxuICAgICAgICA6IHNvdXJjZTtcbiAgICB9KTtcblxuICAvLyBQYXNzIGB0cnVlYCBiZWxvdyB0byBhbGxvdyBkdXBsaWNhdGUgbmFtZXMgYW5kIHNvdXJjZXMuIFdoaWxlIHNvdXJjZSBtYXBzXG4gIC8vIGFyZSBpbnRlbmRlZCB0byBiZSBjb21wcmVzc2VkIGFuZCBkZWR1cGxpY2F0ZWQsIHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyXG4gIC8vIHNvbWV0aW1lcyBnZW5lcmF0ZXMgc291cmNlIG1hcHMgd2l0aCBkdXBsaWNhdGVzIGluIHRoZW0uIFNlZSBHaXRodWIgaXNzdWVcbiAgLy8gIzcyIGFuZCBidWd6aWwubGEvODg5NDkyLlxuICB0aGlzLl9uYW1lcyA9IEFycmF5U2V0LmZyb21BcnJheShuYW1lcy5tYXAoU3RyaW5nKSwgdHJ1ZSk7XG4gIHRoaXMuX3NvdXJjZXMgPSBBcnJheVNldC5mcm9tQXJyYXkoc291cmNlcywgdHJ1ZSk7XG5cbiAgdGhpcy5fYWJzb2x1dGVTb3VyY2VzID0gdGhpcy5fc291cmNlcy50b0FycmF5KCkubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzb3VyY2VSb290LCBzLCBhU291cmNlTWFwVVJMKTtcbiAgfSk7XG5cbiAgdGhpcy5zb3VyY2VSb290ID0gc291cmNlUm9vdDtcbiAgdGhpcy5zb3VyY2VzQ29udGVudCA9IHNvdXJjZXNDb250ZW50O1xuICB0aGlzLl9tYXBwaW5ncyA9IG1hcHBpbmdzO1xuICB0aGlzLl9zb3VyY2VNYXBVUkwgPSBhU291cmNlTWFwVVJMO1xuICB0aGlzLmZpbGUgPSBmaWxlO1xufVxuXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmNvbnN1bWVyID0gU291cmNlTWFwQ29uc3VtZXI7XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiB0byBmaW5kIHRoZSBpbmRleCBvZiBhIHNvdXJjZS4gIFJldHVybnMgLTEgaWYgbm90XG4gKiBmb3VuZC5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRTb3VyY2VJbmRleCA9IGZ1bmN0aW9uKGFTb3VyY2UpIHtcbiAgdmFyIHJlbGF0aXZlU291cmNlID0gYVNvdXJjZTtcbiAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgcmVsYXRpdmVTb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuc291cmNlUm9vdCwgcmVsYXRpdmVTb3VyY2UpO1xuICB9XG5cbiAgaWYgKHRoaXMuX3NvdXJjZXMuaGFzKHJlbGF0aXZlU291cmNlKSkge1xuICAgIHJldHVybiB0aGlzLl9zb3VyY2VzLmluZGV4T2YocmVsYXRpdmVTb3VyY2UpO1xuICB9XG5cbiAgLy8gTWF5YmUgYVNvdXJjZSBpcyBhbiBhYnNvbHV0ZSBVUkwgYXMgcmV0dXJuZWQgYnkgfHNvdXJjZXN8LiAgSW5cbiAgLy8gdGhpcyBjYXNlIHdlIGNhbid0IHNpbXBseSB1bmRvIHRoZSB0cmFuc2Zvcm0uXG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYWJzb2x1dGVTb3VyY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHRoaXMuX2Fic29sdXRlU291cmNlc1tpXSA9PSBhU291cmNlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgZnJvbSBhIFNvdXJjZU1hcEdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0gU291cmNlTWFwR2VuZXJhdG9yIGFTb3VyY2VNYXBcbiAqICAgICAgICBUaGUgc291cmNlIG1hcCB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG4gKiBAcGFyYW0gU3RyaW5nIGFTb3VyY2VNYXBVUkxcbiAqICAgICAgICBUaGUgVVJMIGF0IHdoaWNoIHRoZSBzb3VyY2UgbWFwIGNhbiBiZSBmb3VuZCAob3B0aW9uYWwpXG4gKiBAcmV0dXJucyBCYXNpY1NvdXJjZU1hcENvbnN1bWVyXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIuZnJvbVNvdXJjZU1hcCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2Zyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICAgIHZhciBzbWMgPSBPYmplY3QuY3JlYXRlKEJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcblxuICAgIHZhciBuYW1lcyA9IHNtYy5fbmFtZXMgPSBBcnJheVNldC5mcm9tQXJyYXkoYVNvdXJjZU1hcC5fbmFtZXMudG9BcnJheSgpLCB0cnVlKTtcbiAgICB2YXIgc291cmNlcyA9IHNtYy5fc291cmNlcyA9IEFycmF5U2V0LmZyb21BcnJheShhU291cmNlTWFwLl9zb3VyY2VzLnRvQXJyYXkoKSwgdHJ1ZSk7XG4gICAgc21jLnNvdXJjZVJvb3QgPSBhU291cmNlTWFwLl9zb3VyY2VSb290O1xuICAgIHNtYy5zb3VyY2VzQ29udGVudCA9IGFTb3VyY2VNYXAuX2dlbmVyYXRlU291cmNlc0NvbnRlbnQoc21jLl9zb3VyY2VzLnRvQXJyYXkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYy5zb3VyY2VSb290KTtcbiAgICBzbWMuZmlsZSA9IGFTb3VyY2VNYXAuX2ZpbGU7XG4gICAgc21jLl9zb3VyY2VNYXBVUkwgPSBhU291cmNlTWFwVVJMO1xuICAgIHNtYy5fYWJzb2x1dGVTb3VyY2VzID0gc21jLl9zb3VyY2VzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiB1dGlsLmNvbXB1dGVTb3VyY2VVUkwoc21jLnNvdXJjZVJvb3QsIHMsIGFTb3VyY2VNYXBVUkwpO1xuICAgIH0pO1xuXG4gICAgLy8gQmVjYXVzZSB3ZSBhcmUgbW9kaWZ5aW5nIHRoZSBlbnRyaWVzIChieSBjb252ZXJ0aW5nIHN0cmluZyBzb3VyY2VzIGFuZFxuICAgIC8vIG5hbWVzIHRvIGluZGljZXMgaW50byB0aGUgc291cmNlcyBhbmQgbmFtZXMgQXJyYXlTZXRzKSwgd2UgaGF2ZSB0byBtYWtlXG4gICAgLy8gYSBjb3B5IG9mIHRoZSBlbnRyeSBvciBlbHNlIGJhZCB0aGluZ3MgaGFwcGVuLiBTaGFyZWQgbXV0YWJsZSBzdGF0ZVxuICAgIC8vIHN0cmlrZXMgYWdhaW4hIFNlZSBnaXRodWIgaXNzdWUgIzE5MS5cblxuICAgIHZhciBnZW5lcmF0ZWRNYXBwaW5ncyA9IGFTb3VyY2VNYXAuX21hcHBpbmdzLnRvQXJyYXkoKS5zbGljZSgpO1xuICAgIHZhciBkZXN0R2VuZXJhdGVkTWFwcGluZ3MgPSBzbWMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBkZXN0T3JpZ2luYWxNYXBwaW5ncyA9IHNtYy5fX29yaWdpbmFsTWFwcGluZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBnZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNyY01hcHBpbmcgPSBnZW5lcmF0ZWRNYXBwaW5nc1tpXTtcbiAgICAgIHZhciBkZXN0TWFwcGluZyA9IG5ldyBNYXBwaW5nO1xuICAgICAgZGVzdE1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9IHNyY01hcHBpbmcuZ2VuZXJhdGVkTGluZTtcbiAgICAgIGRlc3RNYXBwaW5nLmdlbmVyYXRlZENvbHVtbiA9IHNyY01hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuXG4gICAgICBpZiAoc3JjTWFwcGluZy5zb3VyY2UpIHtcbiAgICAgICAgZGVzdE1hcHBpbmcuc291cmNlID0gc291cmNlcy5pbmRleE9mKHNyY01hcHBpbmcuc291cmNlKTtcbiAgICAgICAgZGVzdE1hcHBpbmcub3JpZ2luYWxMaW5lID0gc3JjTWFwcGluZy5vcmlnaW5hbExpbmU7XG4gICAgICAgIGRlc3RNYXBwaW5nLm9yaWdpbmFsQ29sdW1uID0gc3JjTWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuICAgICAgICBpZiAoc3JjTWFwcGluZy5uYW1lKSB7XG4gICAgICAgICAgZGVzdE1hcHBpbmcubmFtZSA9IG5hbWVzLmluZGV4T2Yoc3JjTWFwcGluZy5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc3RPcmlnaW5hbE1hcHBpbmdzLnB1c2goZGVzdE1hcHBpbmcpO1xuICAgICAgfVxuXG4gICAgICBkZXN0R2VuZXJhdGVkTWFwcGluZ3MucHVzaChkZXN0TWFwcGluZyk7XG4gICAgfVxuXG4gICAgcXVpY2tTb3J0KHNtYy5fX29yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuXG4gICAgcmV0dXJuIHNtYztcbiAgfTtcblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcHBpbmcgc3BlYyB0aGF0IHdlIGFyZSBjb25zdW1pbmcuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiBvcmlnaW5hbCBzb3VyY2VzLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUsICdzb3VyY2VzJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWJzb2x1dGVTb3VyY2VzLnNsaWNlKCk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIFByb3ZpZGUgdGhlIEpJVCB3aXRoIGEgbmljZSBzaGFwZSAvIGhpZGRlbiBjbGFzcy5cbiAqL1xuZnVuY3Rpb24gTWFwcGluZygpIHtcbiAgdGhpcy5nZW5lcmF0ZWRMaW5lID0gMDtcbiAgdGhpcy5nZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gIHRoaXMub3JpZ2luYWxMaW5lID0gbnVsbDtcbiAgdGhpcy5vcmlnaW5hbENvbHVtbiA9IG51bGw7XG4gIHRoaXMubmFtZSA9IG51bGw7XG59XG5cbi8qKlxuICogUGFyc2UgdGhlIG1hcHBpbmdzIGluIGEgc3RyaW5nIGluIHRvIGEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggd2UgY2FuIGVhc2lseVxuICogcXVlcnkgKHRoZSBvcmRlcmVkIGFycmF5cyBpbiB0aGUgYHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kXG4gKiBgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3NgIHByb3BlcnRpZXMpLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fcGFyc2VNYXBwaW5ncyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MoYVN0ciwgYVNvdXJjZVJvb3QpIHtcbiAgICB2YXIgZ2VuZXJhdGVkTGluZSA9IDE7XG4gICAgdmFyIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICB2YXIgcHJldmlvdXNPcmlnaW5hbExpbmUgPSAwO1xuICAgIHZhciBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gMDtcbiAgICB2YXIgcHJldmlvdXNTb3VyY2UgPSAwO1xuICAgIHZhciBwcmV2aW91c05hbWUgPSAwO1xuICAgIHZhciBsZW5ndGggPSBhU3RyLmxlbmd0aDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjYWNoZWRTZWdtZW50cyA9IHt9O1xuICAgIHZhciB0ZW1wID0ge307XG4gICAgdmFyIG9yaWdpbmFsTWFwcGluZ3MgPSBbXTtcbiAgICB2YXIgZ2VuZXJhdGVkTWFwcGluZ3MgPSBbXTtcbiAgICB2YXIgbWFwcGluZywgc3RyLCBzZWdtZW50LCBlbmQsIHZhbHVlO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoYVN0ci5jaGFyQXQoaW5kZXgpID09PSAnOycpIHtcbiAgICAgICAgZ2VuZXJhdGVkTGluZSsrO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhU3RyLmNoYXJBdChpbmRleCkgPT09ICcsJykge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG1hcHBpbmcgPSBuZXcgTWFwcGluZygpO1xuICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZExpbmUgPSBnZW5lcmF0ZWRMaW5lO1xuXG4gICAgICAgIC8vIEJlY2F1c2UgZWFjaCBvZmZzZXQgaXMgZW5jb2RlZCByZWxhdGl2ZSB0byB0aGUgcHJldmlvdXMgb25lLFxuICAgICAgICAvLyBtYW55IHNlZ21lbnRzIG9mdGVuIGhhdmUgdGhlIHNhbWUgZW5jb2RpbmcuIFdlIGNhbiBleHBsb2l0IHRoaXNcbiAgICAgICAgLy8gZmFjdCBieSBjYWNoaW5nIHRoZSBwYXJzZWQgdmFyaWFibGUgbGVuZ3RoIGZpZWxkcyBvZiBlYWNoIHNlZ21lbnQsXG4gICAgICAgIC8vIGFsbG93aW5nIHVzIHRvIGF2b2lkIGEgc2Vjb25kIHBhcnNlIGlmIHdlIGVuY291bnRlciB0aGUgc2FtZVxuICAgICAgICAvLyBzZWdtZW50IGFnYWluLlxuICAgICAgICBmb3IgKGVuZCA9IGluZGV4OyBlbmQgPCBsZW5ndGg7IGVuZCsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IoYVN0ciwgZW5kKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0ciA9IGFTdHIuc2xpY2UoaW5kZXgsIGVuZCk7XG5cbiAgICAgICAgc2VnbWVudCA9IGNhY2hlZFNlZ21lbnRzW3N0cl07XG4gICAgICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgICAgaW5kZXggKz0gc3RyLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWdtZW50ID0gW107XG4gICAgICAgICAgd2hpbGUgKGluZGV4IDwgZW5kKSB7XG4gICAgICAgICAgICBiYXNlNjRWTFEuZGVjb2RlKGFTdHIsIGluZGV4LCB0ZW1wKTtcbiAgICAgICAgICAgIHZhbHVlID0gdGVtcC52YWx1ZTtcbiAgICAgICAgICAgIGluZGV4ID0gdGVtcC5yZXN0O1xuICAgICAgICAgICAgc2VnbWVudC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VnbWVudC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgYSBzb3VyY2UsIGJ1dCBubyBsaW5lIGFuZCBjb2x1bW4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VnbWVudC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgYSBzb3VyY2UgYW5kIGxpbmUsIGJ1dCBubyBjb2x1bW4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZWRTZWdtZW50c1tzdHJdID0gc2VnbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdlbmVyYXRlZCBjb2x1bW4uXG4gICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uID0gcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gKyBzZWdtZW50WzBdO1xuICAgICAgICBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuXG4gICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAvLyBPcmlnaW5hbCBzb3VyY2UuXG4gICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBwcmV2aW91c1NvdXJjZSArIHNlZ21lbnRbMV07XG4gICAgICAgICAgcHJldmlvdXNTb3VyY2UgKz0gc2VnbWVudFsxXTtcblxuICAgICAgICAgIC8vIE9yaWdpbmFsIGxpbmUuXG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPSBwcmV2aW91c09yaWdpbmFsTGluZSArIHNlZ21lbnRbMl07XG4gICAgICAgICAgcHJldmlvdXNPcmlnaW5hbExpbmUgPSBtYXBwaW5nLm9yaWdpbmFsTGluZTtcbiAgICAgICAgICAvLyBMaW5lcyBhcmUgc3RvcmVkIDAtYmFzZWRcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSArPSAxO1xuXG4gICAgICAgICAgLy8gT3JpZ2luYWwgY29sdW1uLlxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPSBwcmV2aW91c09yaWdpbmFsQ29sdW1uICsgc2VnbWVudFszXTtcbiAgICAgICAgICBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gbWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIG5hbWUuXG4gICAgICAgICAgICBtYXBwaW5nLm5hbWUgPSBwcmV2aW91c05hbWUgKyBzZWdtZW50WzRdO1xuICAgICAgICAgICAgcHJldmlvdXNOYW1lICs9IHNlZ21lbnRbNF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2VuZXJhdGVkTWFwcGluZ3MucHVzaChtYXBwaW5nKTtcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvcmlnaW5hbE1hcHBpbmdzLnB1c2gobWFwcGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWlja1NvcnQoZ2VuZXJhdGVkTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQpO1xuICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IGdlbmVyYXRlZE1hcHBpbmdzO1xuXG4gICAgcXVpY2tTb3J0KG9yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuICAgIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzID0gb3JpZ2luYWxNYXBwaW5ncztcbiAgfTtcblxuLyoqXG4gKiBGaW5kIHRoZSBtYXBwaW5nIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBoeXBvdGhldGljYWwgXCJuZWVkbGVcIiBtYXBwaW5nIHRoYXRcbiAqIHdlIGFyZSBzZWFyY2hpbmcgZm9yIGluIHRoZSBnaXZlbiBcImhheXN0YWNrXCIgb2YgbWFwcGluZ3MuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9maW5kTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2ZpbmRNYXBwaW5nKGFOZWVkbGUsIGFNYXBwaW5ncywgYUxpbmVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhQ29sdW1uTmFtZSwgYUNvbXBhcmF0b3IsIGFCaWFzKSB7XG4gICAgLy8gVG8gcmV0dXJuIHRoZSBwb3NpdGlvbiB3ZSBhcmUgc2VhcmNoaW5nIGZvciwgd2UgbXVzdCBmaXJzdCBmaW5kIHRoZVxuICAgIC8vIG1hcHBpbmcgZm9yIHRoZSBnaXZlbiBwb3NpdGlvbiBhbmQgdGhlbiByZXR1cm4gdGhlIG9wcG9zaXRlIHBvc2l0aW9uIGl0XG4gICAgLy8gcG9pbnRzIHRvLiBCZWNhdXNlIHRoZSBtYXBwaW5ncyBhcmUgc29ydGVkLCB3ZSBjYW4gdXNlIGJpbmFyeSBzZWFyY2ggdG9cbiAgICAvLyBmaW5kIHRoZSBiZXN0IG1hcHBpbmcuXG5cbiAgICBpZiAoYU5lZWRsZVthTGluZU5hbWVdIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0xpbmUgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMSwgZ290ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBhTmVlZGxlW2FMaW5lTmFtZV0pO1xuICAgIH1cbiAgICBpZiAoYU5lZWRsZVthQ29sdW1uTmFtZV0gPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb2x1bW4gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gMCwgZ290ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBhTmVlZGxlW2FDb2x1bW5OYW1lXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaC5zZWFyY2goYU5lZWRsZSwgYU1hcHBpbmdzLCBhQ29tcGFyYXRvciwgYUJpYXMpO1xuICB9O1xuXG4vKipcbiAqIENvbXB1dGUgdGhlIGxhc3QgY29sdW1uIGZvciBlYWNoIGdlbmVyYXRlZCBtYXBwaW5nLiBUaGUgbGFzdCBjb2x1bW4gaXNcbiAqIGluY2x1c2l2ZS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29tcHV0ZUNvbHVtblNwYW5zID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfY29tcHV0ZUNvbHVtblNwYW5zKCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICAvLyBNYXBwaW5ncyBkbyBub3QgY29udGFpbiBhIGZpZWxkIGZvciB0aGUgbGFzdCBnZW5lcmF0ZWQgY29sdW1udC4gV2VcbiAgICAgIC8vIGNhbiBjb21lIHVwIHdpdGggYW4gb3B0aW1pc3RpYyBlc3RpbWF0ZSwgaG93ZXZlciwgYnkgYXNzdW1pbmcgdGhhdFxuICAgICAgLy8gbWFwcGluZ3MgYXJlIGNvbnRpZ3VvdXMgKGkuZS4gZ2l2ZW4gdHdvIGNvbnNlY3V0aXZlIG1hcHBpbmdzLCB0aGVcbiAgICAgIC8vIGZpcnN0IG1hcHBpbmcgZW5kcyB3aGVyZSB0aGUgc2Vjb25kIG9uZSBzdGFydHMpLlxuICAgICAgaWYgKGluZGV4ICsgMSA8IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aCkge1xuICAgICAgICB2YXIgbmV4dE1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleCArIDFdO1xuXG4gICAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgPT09IG5leHRNYXBwaW5nLmdlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgICBtYXBwaW5nLmxhc3RHZW5lcmF0ZWRDb2x1bW4gPSBuZXh0TWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gLSAxO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBsYXN0IG1hcHBpbmcgZm9yIGVhY2ggbGluZSBzcGFucyB0aGUgZW50aXJlIGxpbmUuXG4gICAgICBtYXBwaW5nLmxhc3RHZW5lcmF0ZWRDb2x1bW4gPSBJbmZpbml0eTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlLCBsaW5lLCBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgZ2VuZXJhdGVkXG4gKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3RcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKiAgIC0gYmlhczogRWl0aGVyICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnU291cmNlTWFwQ29uc3VtZXIuTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICogICAgIERlZmF1bHRzIHRvICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUsIG9yIG51bGwuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBuYW1lOiBUaGUgb3JpZ2luYWwgaWRlbnRpZmllciwgb3IgbnVsbC5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUub3JpZ2luYWxQb3NpdGlvbkZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgbmVlZGxlID0ge1xuICAgICAgZ2VuZXJhdGVkTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcbiAgICB9O1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZE1hcHBpbmcoXG4gICAgICBuZWVkbGUsXG4gICAgICB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5ncyxcbiAgICAgIFwiZ2VuZXJhdGVkTGluZVwiLFxuICAgICAgXCJnZW5lcmF0ZWRDb2x1bW5cIixcbiAgICAgIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQsXG4gICAgICB1dGlsLmdldEFyZyhhQXJncywgJ2JpYXMnLCBTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORClcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICBpZiAobWFwcGluZy5nZW5lcmF0ZWRMaW5lID09PSBuZWVkbGUuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICB2YXIgc291cmNlID0gdXRpbC5nZXRBcmcobWFwcGluZywgJ3NvdXJjZScsIG51bGwpO1xuICAgICAgICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgICAgICAgc291cmNlID0gdGhpcy5fc291cmNlcy5hdChzb3VyY2UpO1xuICAgICAgICAgIHNvdXJjZSA9IHV0aWwuY29tcHV0ZVNvdXJjZVVSTCh0aGlzLnNvdXJjZVJvb3QsIHNvdXJjZSwgdGhpcy5fc291cmNlTWFwVVJMKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZSA9IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICduYW1lJywgbnVsbCk7XG4gICAgICAgIGlmIChuYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVzLmF0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ29yaWdpbmFsTGluZScsIG51bGwpLFxuICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ29yaWdpbmFsQ29sdW1uJywgbnVsbCksXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzb3VyY2U6IG51bGwsXG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgbmFtZTogbnVsbFxuICAgIH07XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgd2UgaGF2ZSB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGV2ZXJ5IHNvdXJjZSBpbiB0aGUgc291cmNlXG4gKiBtYXAsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuaGFzQ29udGVudHNPZkFsbFNvdXJjZXMgPVxuICBmdW5jdGlvbiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyX2hhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCkge1xuICAgIGlmICghdGhpcy5zb3VyY2VzQ29udGVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudC5sZW5ndGggPj0gdGhpcy5fc291cmNlcy5zaXplKCkgJiZcbiAgICAgICF0aGlzLnNvdXJjZXNDb250ZW50LnNvbWUoZnVuY3Rpb24gKHNjKSB7IHJldHVybiBzYyA9PSBudWxsOyB9KTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29udGVudC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgdGhlIHVybCBvZiB0aGVcbiAqIG9yaWdpbmFsIHNvdXJjZSBmaWxlLiBSZXR1cm5zIG51bGwgaWYgbm8gb3JpZ2luYWwgc291cmNlIGNvbnRlbnQgaXNcbiAqIGF2YWlsYWJsZS5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX3NvdXJjZUNvbnRlbnRGb3IoYVNvdXJjZSwgbnVsbE9uTWlzc2luZykge1xuICAgIGlmICghdGhpcy5zb3VyY2VzQ29udGVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZFNvdXJjZUluZGV4KGFTb3VyY2UpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFtpbmRleF07XG4gICAgfVxuXG4gICAgdmFyIHJlbGF0aXZlU291cmNlID0gYVNvdXJjZTtcbiAgICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgIHJlbGF0aXZlU291cmNlID0gdXRpbC5yZWxhdGl2ZSh0aGlzLnNvdXJjZVJvb3QsIHJlbGF0aXZlU291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgdXJsO1xuICAgIGlmICh0aGlzLnNvdXJjZVJvb3QgIT0gbnVsbFxuICAgICAgICAmJiAodXJsID0gdXRpbC51cmxQYXJzZSh0aGlzLnNvdXJjZVJvb3QpKSkge1xuICAgICAgLy8gWFhYOiBmaWxlOi8vIFVSSXMgYW5kIGFic29sdXRlIHBhdGhzIGxlYWQgdG8gdW5leHBlY3RlZCBiZWhhdmlvciBmb3JcbiAgICAgIC8vIG1hbnkgdXNlcnMuIFdlIGNhbiBoZWxwIHRoZW0gb3V0IHdoZW4gdGhleSBleHBlY3QgZmlsZTovLyBVUklzIHRvXG4gICAgICAvLyBiZWhhdmUgbGlrZSBpdCB3b3VsZCBpZiB0aGV5IHdlcmUgcnVubmluZyBhIGxvY2FsIEhUVFAgc2VydmVyLiBTZWVcbiAgICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4NTU5Ny5cbiAgICAgIHZhciBmaWxlVXJpQWJzUGF0aCA9IHJlbGF0aXZlU291cmNlLnJlcGxhY2UoL15maWxlOlxcL1xcLy8sIFwiXCIpO1xuICAgICAgaWYgKHVybC5zY2hlbWUgPT0gXCJmaWxlXCJcbiAgICAgICAgICAmJiB0aGlzLl9zb3VyY2VzLmhhcyhmaWxlVXJpQWJzUGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnRbdGhpcy5fc291cmNlcy5pbmRleE9mKGZpbGVVcmlBYnNQYXRoKV1cbiAgICAgIH1cblxuICAgICAgaWYgKCghdXJsLnBhdGggfHwgdXJsLnBhdGggPT0gXCIvXCIpXG4gICAgICAgICAgJiYgdGhpcy5fc291cmNlcy5oYXMoXCIvXCIgKyByZWxhdGl2ZVNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlc0NvbnRlbnRbdGhpcy5fc291cmNlcy5pbmRleE9mKFwiL1wiICsgcmVsYXRpdmVTb3VyY2UpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgcmVjdXJzaXZlbHkgZnJvbVxuICAgIC8vIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvci4gSW4gdGhhdCBjYXNlLCB3ZVxuICAgIC8vIGRvbid0IHdhbnQgdG8gdGhyb3cgaWYgd2UgY2FuJ3QgZmluZCB0aGUgc291cmNlIC0gd2UganVzdCB3YW50IHRvXG4gICAgLy8gcmV0dXJuIG51bGwsIHNvIHdlIHByb3ZpZGUgYSBmbGFnIHRvIGV4aXQgZ3JhY2VmdWxseS5cbiAgICBpZiAobnVsbE9uTWlzc2luZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyByZWxhdGl2ZVNvdXJjZSArICdcIiBpcyBub3QgaW4gdGhlIFNvdXJjZU1hcC4nKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHNvdXJjZSxcbiAqIGxpbmUsIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Qgd2l0aFxuICogdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyXG4gKiAgICAgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKiAgIC0gYmlhczogRWl0aGVyICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnU291cmNlTWFwQ29uc3VtZXIuTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICogICAgIERlZmF1bHRzIHRvICdTb3VyY2VNYXBDb25zdW1lci5HUkVBVEVTVF9MT1dFUl9CT1VORCcuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmdlbmVyYXRlZFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgc291cmNlID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnKTtcbiAgICBzb3VyY2UgPSB0aGlzLl9maW5kU291cmNlSW5kZXgoc291cmNlKTtcbiAgICBpZiAoc291cmNlIDwgMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgICBsYXN0Q29sdW1uOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIG9yaWdpbmFsTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBvcmlnaW5hbENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuICAgIH07XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhcbiAgICAgIG5lZWRsZSxcbiAgICAgIHRoaXMuX29yaWdpbmFsTWFwcGluZ3MsXG4gICAgICBcIm9yaWdpbmFsTGluZVwiLFxuICAgICAgXCJvcmlnaW5hbENvbHVtblwiLFxuICAgICAgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyxcbiAgICAgIHV0aWwuZ2V0QXJnKGFBcmdzLCAnYmlhcycsIFNvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EKVxuICAgICk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzW2luZGV4XTtcblxuICAgICAgaWYgKG1hcHBpbmcuc291cmNlID09PSBuZWVkbGUuc291cmNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcbiAgICAgICAgICBjb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdnZW5lcmF0ZWRDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICBsYXN0Q29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnbGFzdEdlbmVyYXRlZENvbHVtbicsIG51bGwpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBjb2x1bW46IG51bGwsXG4gICAgICBsYXN0Q29sdW1uOiBudWxsXG4gICAgfTtcbiAgfTtcblxuZXhwb3J0cy5CYXNpY1NvdXJjZU1hcENvbnN1bWVyID0gQmFzaWNTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBBbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXIgaW5zdGFuY2UgcmVwcmVzZW50cyBhIHBhcnNlZCBzb3VyY2UgbWFwIHdoaWNoXG4gKiB3ZSBjYW4gcXVlcnkgZm9yIGluZm9ybWF0aW9uLiBJdCBkaWZmZXJzIGZyb20gQmFzaWNTb3VyY2VNYXBDb25zdW1lciBpblxuICogdGhhdCBpdCB0YWtlcyBcImluZGV4ZWRcIiBzb3VyY2UgbWFwcyAoaS5lLiBvbmVzIHdpdGggYSBcInNlY3Rpb25zXCIgZmllbGQpIGFzXG4gKiBpbnB1dC5cbiAqXG4gKiBUaGUgZmlyc3QgcGFyYW1ldGVyIGlzIGEgcmF3IHNvdXJjZSBtYXAgKGVpdGhlciBhcyBhIEpTT04gc3RyaW5nLCBvciBhbHJlYWR5XG4gKiBwYXJzZWQgdG8gYW4gb2JqZWN0KS4gQWNjb3JkaW5nIHRvIHRoZSBzcGVjIGZvciBpbmRleGVkIHNvdXJjZSBtYXBzLCB0aGV5XG4gKiBoYXZlIHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqXG4gKiAgIC0gdmVyc2lvbjogV2hpY2ggdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcCBzcGVjIHRoaXMgbWFwIGlzIGZvbGxvd2luZy5cbiAqICAgLSBmaWxlOiBPcHRpb25hbC4gVGhlIGdlbmVyYXRlZCBmaWxlIHRoaXMgc291cmNlIG1hcCBpcyBhc3NvY2lhdGVkIHdpdGguXG4gKiAgIC0gc2VjdGlvbnM6IEEgbGlzdCBvZiBzZWN0aW9uIGRlZmluaXRpb25zLlxuICpcbiAqIEVhY2ggdmFsdWUgdW5kZXIgdGhlIFwic2VjdGlvbnNcIiBmaWVsZCBoYXMgdHdvIGZpZWxkczpcbiAqICAgLSBvZmZzZXQ6IFRoZSBvZmZzZXQgaW50byB0aGUgb3JpZ2luYWwgc3BlY2lmaWVkIGF0IHdoaWNoIHRoaXMgc2VjdGlvblxuICogICAgICAgYmVnaW5zIHRvIGFwcGx5LCBkZWZpbmVkIGFzIGFuIG9iamVjdCB3aXRoIGEgXCJsaW5lXCIgYW5kIFwiY29sdW1uXCJcbiAqICAgICAgIGZpZWxkLlxuICogICAtIG1hcDogQSBzb3VyY2UgbWFwIGRlZmluaXRpb24uIFRoaXMgc291cmNlIG1hcCBjb3VsZCBhbHNvIGJlIGluZGV4ZWQsXG4gKiAgICAgICBidXQgZG9lc24ndCBoYXZlIHRvIGJlLlxuICpcbiAqIEluc3RlYWQgb2YgdGhlIFwibWFwXCIgZmllbGQsIGl0J3MgYWxzbyBwb3NzaWJsZSB0byBoYXZlIGEgXCJ1cmxcIiBmaWVsZFxuICogc3BlY2lmeWluZyBhIFVSTCB0byByZXRyaWV2ZSBhIHNvdXJjZSBtYXAgZnJvbSwgYnV0IHRoYXQncyBjdXJyZW50bHlcbiAqIHVuc3VwcG9ydGVkLlxuICpcbiAqIEhlcmUncyBhbiBleGFtcGxlIHNvdXJjZSBtYXAsIHRha2VuIGZyb20gdGhlIHNvdXJjZSBtYXAgc3BlY1swXSwgYnV0XG4gKiBtb2RpZmllZCB0byBvbWl0IGEgc2VjdGlvbiB3aGljaCB1c2VzIHRoZSBcInVybFwiIGZpZWxkLlxuICpcbiAqICB7XG4gKiAgICB2ZXJzaW9uIDogMyxcbiAqICAgIGZpbGU6IFwiYXBwLmpzXCIsXG4gKiAgICBzZWN0aW9uczogW3tcbiAqICAgICAgb2Zmc2V0OiB7bGluZToxMDAsIGNvbHVtbjoxMH0sXG4gKiAgICAgIG1hcDoge1xuICogICAgICAgIHZlcnNpb24gOiAzLFxuICogICAgICAgIGZpbGU6IFwic2VjdGlvbi5qc1wiLFxuICogICAgICAgIHNvdXJjZXM6IFtcImZvby5qc1wiLCBcImJhci5qc1wiXSxcbiAqICAgICAgICBuYW1lczogW1wic3JjXCIsIFwibWFwc1wiLCBcImFyZVwiLCBcImZ1blwiXSxcbiAqICAgICAgICBtYXBwaW5nczogXCJBQUFBLEU7O0FCQ0RFO1wiXG4gKiAgICAgIH1cbiAqICAgIH1dLFxuICogIH1cbiAqXG4gKiBUaGUgc2Vjb25kIHBhcmFtZXRlciwgaWYgZ2l2ZW4sIGlzIGEgc3RyaW5nIHdob3NlIHZhbHVlIGlzIHRoZSBVUkxcbiAqIGF0IHdoaWNoIHRoZSBzb3VyY2UgbWFwIHdhcyBmb3VuZC4gIFRoaXMgVVJMIGlzIHVzZWQgdG8gY29tcHV0ZSB0aGVcbiAqIHNvdXJjZXMgYXJyYXkuXG4gKlxuICogWzBdOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFVMVJHQWVoUXdSeXBVVG92RjFLUmxwaU9GemUwYi1fMmdjNmZBSDBLWTBrL2VkaXQjaGVhZGluZz1oLjUzNWVzM3hlcHJndFxuICovXG5mdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXIoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCkge1xuICB2YXIgc291cmNlTWFwID0gYVNvdXJjZU1hcDtcbiAgaWYgKHR5cGVvZiBhU291cmNlTWFwID09PSAnc3RyaW5nJykge1xuICAgIHNvdXJjZU1hcCA9IHV0aWwucGFyc2VTb3VyY2VNYXBJbnB1dChhU291cmNlTWFwKTtcbiAgfVxuXG4gIHZhciB2ZXJzaW9uID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAndmVyc2lvbicpO1xuICB2YXIgc2VjdGlvbnMgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzZWN0aW9ucycpO1xuXG4gIGlmICh2ZXJzaW9uICE9IHRoaXMuX3ZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIHRoaXMuX3NvdXJjZXMgPSBuZXcgQXJyYXlTZXQoKTtcbiAgdGhpcy5fbmFtZXMgPSBuZXcgQXJyYXlTZXQoKTtcblxuICB2YXIgbGFzdE9mZnNldCA9IHtcbiAgICBsaW5lOiAtMSxcbiAgICBjb2x1bW46IDBcbiAgfTtcbiAgdGhpcy5fc2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICBpZiAocy51cmwpIHtcbiAgICAgIC8vIFRoZSB1cmwgZmllbGQgd2lsbCByZXF1aXJlIHN1cHBvcnQgZm9yIGFzeW5jaHJvbmljaXR5LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3NvdXJjZS1tYXAvaXNzdWVzLzE2XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1cHBvcnQgZm9yIHVybCBmaWVsZCBpbiBzZWN0aW9ucyBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIHZhciBvZmZzZXQgPSB1dGlsLmdldEFyZyhzLCAnb2Zmc2V0Jyk7XG4gICAgdmFyIG9mZnNldExpbmUgPSB1dGlsLmdldEFyZyhvZmZzZXQsICdsaW5lJyk7XG4gICAgdmFyIG9mZnNldENvbHVtbiA9IHV0aWwuZ2V0QXJnKG9mZnNldCwgJ2NvbHVtbicpO1xuXG4gICAgaWYgKG9mZnNldExpbmUgPCBsYXN0T2Zmc2V0LmxpbmUgfHxcbiAgICAgICAgKG9mZnNldExpbmUgPT09IGxhc3RPZmZzZXQubGluZSAmJiBvZmZzZXRDb2x1bW4gPCBsYXN0T2Zmc2V0LmNvbHVtbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2VjdGlvbiBvZmZzZXRzIG11c3QgYmUgb3JkZXJlZCBhbmQgbm9uLW92ZXJsYXBwaW5nLicpO1xuICAgIH1cbiAgICBsYXN0T2Zmc2V0ID0gb2Zmc2V0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdlbmVyYXRlZE9mZnNldDoge1xuICAgICAgICAvLyBUaGUgb2Zmc2V0IGZpZWxkcyBhcmUgMC1iYXNlZCwgYnV0IHdlIHVzZSAxLWJhc2VkIGluZGljZXMgd2hlblxuICAgICAgICAvLyBlbmNvZGluZy9kZWNvZGluZyBmcm9tIFZMUS5cbiAgICAgICAgZ2VuZXJhdGVkTGluZTogb2Zmc2V0TGluZSArIDEsXG4gICAgICAgIGdlbmVyYXRlZENvbHVtbjogb2Zmc2V0Q29sdW1uICsgMVxuICAgICAgfSxcbiAgICAgIGNvbnN1bWVyOiBuZXcgU291cmNlTWFwQ29uc3VtZXIodXRpbC5nZXRBcmcocywgJ21hcCcpLCBhU291cmNlTWFwVVJMKVxuICAgIH1cbiAgfSk7XG59XG5cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSk7XG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU291cmNlTWFwQ29uc3VtZXI7XG5cbi8qKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXBwaW5nIHNwZWMgdGhhdCB3ZSBhcmUgY29uc3VtaW5nLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiBvcmlnaW5hbCBzb3VyY2VzLlxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ3NvdXJjZXMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2VzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLl9zZWN0aW9uc1tpXS5jb25zdW1lci5zb3VyY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHNvdXJjZXMucHVzaCh0aGlzLl9zZWN0aW9uc1tpXS5jb25zdW1lci5zb3VyY2VzW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZXM7XG4gIH1cbn0pO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSwgbGluZSwgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIGdlbmVyYXRlZFxuICogc291cmNlJ3MgbGluZSBhbmQgY29sdW1uIHBvc2l0aW9ucyBwcm92aWRlZC4gVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0XG4gKiB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyXG4gKiAgICAgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLiAgVGhlIGNvbHVtblxuICogICAgIG51bWJlciBpcyAwLWJhc2VkLlxuICpcbiAqIGFuZCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlLCBvciBudWxsLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKiAgIC0gbmFtZTogVGhlIG9yaWdpbmFsIGlkZW50aWZpZXIsIG9yIG51bGwuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUub3JpZ2luYWxQb3NpdGlvbkZvciA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9vcmlnaW5hbFBvc2l0aW9uRm9yKGFBcmdzKSB7XG4gICAgdmFyIG5lZWRsZSA9IHtcbiAgICAgIGdlbmVyYXRlZExpbmU6IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbGluZScpLFxuICAgICAgZ2VuZXJhdGVkQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicpXG4gICAgfTtcblxuICAgIC8vIEZpbmQgdGhlIHNlY3Rpb24gY29udGFpbmluZyB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9uIHdlJ3JlIHRyeWluZyB0byBtYXBcbiAgICAvLyB0byBhbiBvcmlnaW5hbCBwb3NpdGlvbi5cbiAgICB2YXIgc2VjdGlvbkluZGV4ID0gYmluYXJ5U2VhcmNoLnNlYXJjaChuZWVkbGUsIHRoaXMuX3NlY3Rpb25zLFxuICAgICAgZnVuY3Rpb24obmVlZGxlLCBzZWN0aW9uKSB7XG4gICAgICAgIHZhciBjbXAgPSBuZWVkbGUuZ2VuZXJhdGVkTGluZSAtIHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmU7XG4gICAgICAgIGlmIChjbXApIHtcbiAgICAgICAgICByZXR1cm4gY21wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChuZWVkbGUuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgICAgICAgICBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgfSk7XG4gICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tzZWN0aW9uSW5kZXhdO1xuXG4gICAgaWYgKCFzZWN0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzb3VyY2U6IG51bGwsXG4gICAgICAgIGxpbmU6IG51bGwsXG4gICAgICAgIGNvbHVtbjogbnVsbCxcbiAgICAgICAgbmFtZTogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbi5jb25zdW1lci5vcmlnaW5hbFBvc2l0aW9uRm9yKHtcbiAgICAgIGxpbmU6IG5lZWRsZS5nZW5lcmF0ZWRMaW5lIC1cbiAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgLSAxKSxcbiAgICAgIGNvbHVtbjogbmVlZGxlLmdlbmVyYXRlZENvbHVtbiAtXG4gICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBuZWVkbGUuZ2VuZXJhdGVkTGluZVxuICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICA6IDApLFxuICAgICAgYmlhczogYUFyZ3MuYmlhc1xuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIFJldHVybiB0cnVlIGlmIHdlIGhhdmUgdGhlIHNvdXJjZSBjb250ZW50IGZvciBldmVyeSBzb3VyY2UgaW4gdGhlIHNvdXJjZVxuICogbWFwLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuaGFzQ29udGVudHNPZkFsbFNvdXJjZXMgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfaGFzQ29udGVudHNPZkFsbFNvdXJjZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlY3Rpb25zLmV2ZXJ5KGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gcy5jb25zdW1lci5oYXNDb250ZW50c09mQWxsU291cmNlcygpO1xuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50LiBUaGUgb25seSBhcmd1bWVudCBpcyB0aGUgdXJsIG9mIHRoZVxuICogb3JpZ2luYWwgc291cmNlIGZpbGUuIFJldHVybnMgbnVsbCBpZiBubyBvcmlnaW5hbCBzb3VyY2UgY29udGVudCBpc1xuICogYXZhaWxhYmxlLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLnNvdXJjZUNvbnRlbnRGb3IgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfc291cmNlQ29udGVudEZvcihhU291cmNlLCBudWxsT25NaXNzaW5nKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcblxuICAgICAgdmFyIGNvbnRlbnQgPSBzZWN0aW9uLmNvbnN1bWVyLnNvdXJjZUNvbnRlbnRGb3IoYVNvdXJjZSwgdHJ1ZSk7XG4gICAgICBpZiAoY29udGVudCkge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG51bGxPbk1pc3NpbmcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCInICsgYVNvdXJjZSArICdcIiBpcyBub3QgaW4gdGhlIFNvdXJjZU1hcC4nKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmZvcm1hdGlvbiBmb3IgdGhlIG9yaWdpbmFsIHNvdXJjZSxcbiAqIGxpbmUsIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3Qgd2l0aFxuICogdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyXG4gKiAgICAgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC4gXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC5cbiAqICAgICBUaGUgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmdlbmVyYXRlZFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX2dlbmVyYXRlZFBvc2l0aW9uRm9yKGFBcmdzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcblxuICAgICAgLy8gT25seSBjb25zaWRlciB0aGlzIHNlY3Rpb24gaWYgdGhlIHJlcXVlc3RlZCBzb3VyY2UgaXMgaW4gdGhlIGxpc3Qgb2ZcbiAgICAgIC8vIHNvdXJjZXMgb2YgdGhlIGNvbnN1bWVyLlxuICAgICAgaWYgKHNlY3Rpb24uY29uc3VtZXIuX2ZpbmRTb3VyY2VJbmRleCh1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScpKSA9PT0gLTEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB2YXIgZ2VuZXJhdGVkUG9zaXRpb24gPSBzZWN0aW9uLmNvbnN1bWVyLmdlbmVyYXRlZFBvc2l0aW9uRm9yKGFBcmdzKTtcbiAgICAgIGlmIChnZW5lcmF0ZWRQb3NpdGlvbikge1xuICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZFBvc2l0aW9uLmxpbmUgK1xuICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgLSAxKSxcbiAgICAgICAgICBjb2x1bW46IGdlbmVyYXRlZFBvc2l0aW9uLmNvbHVtbiArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSA9PT0gZ2VuZXJhdGVkUG9zaXRpb24ubGluZVxuICAgICAgICAgICAgID8gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkQ29sdW1uIC0gMVxuICAgICAgICAgICAgIDogMClcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGNvbHVtbjogbnVsbFxuICAgIH07XG4gIH07XG5cbi8qKlxuICogUGFyc2UgdGhlIG1hcHBpbmdzIGluIGEgc3RyaW5nIGluIHRvIGEgZGF0YSBzdHJ1Y3R1cmUgd2hpY2ggd2UgY2FuIGVhc2lseVxuICogcXVlcnkgKHRoZSBvcmRlcmVkIGFycmF5cyBpbiB0aGUgYHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kXG4gKiBgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3NgIHByb3BlcnRpZXMpLlxuICovXG5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX3BhcnNlTWFwcGluZ3MoYVN0ciwgYVNvdXJjZVJvb3QpIHtcbiAgICB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBbXTtcbiAgICB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzZWN0aW9uID0gdGhpcy5fc2VjdGlvbnNbaV07XG4gICAgICB2YXIgc2VjdGlvbk1hcHBpbmdzID0gc2VjdGlvbi5jb25zdW1lci5fZ2VuZXJhdGVkTWFwcGluZ3M7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlY3Rpb25NYXBwaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbWFwcGluZyA9IHNlY3Rpb25NYXBwaW5nc1tqXTtcblxuICAgICAgICB2YXIgc291cmNlID0gc2VjdGlvbi5jb25zdW1lci5fc291cmNlcy5hdChtYXBwaW5nLnNvdXJjZSk7XG4gICAgICAgIHNvdXJjZSA9IHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzZWN0aW9uLmNvbnN1bWVyLnNvdXJjZVJvb3QsIHNvdXJjZSwgdGhpcy5fc291cmNlTWFwVVJMKTtcbiAgICAgICAgdGhpcy5fc291cmNlcy5hZGQoc291cmNlKTtcbiAgICAgICAgc291cmNlID0gdGhpcy5fc291cmNlcy5pbmRleE9mKHNvdXJjZSk7XG5cbiAgICAgICAgdmFyIG5hbWUgPSBudWxsO1xuICAgICAgICBpZiAobWFwcGluZy5uYW1lKSB7XG4gICAgICAgICAgbmFtZSA9IHNlY3Rpb24uY29uc3VtZXIuX25hbWVzLmF0KG1hcHBpbmcubmFtZSk7XG4gICAgICAgICAgdGhpcy5fbmFtZXMuYWRkKG5hbWUpO1xuICAgICAgICAgIG5hbWUgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIG1hcHBpbmdzIGNvbWluZyBmcm9tIHRoZSBjb25zdW1lciBmb3IgdGhlIHNlY3Rpb24gaGF2ZVxuICAgICAgICAvLyBnZW5lcmF0ZWQgcG9zaXRpb25zIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgc2VjdGlvbiwgc28gd2VcbiAgICAgICAgLy8gbmVlZCB0byBvZmZzZXQgdGhlbSB0byBiZSByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgdGhlIGNvbmNhdGVuYXRlZFxuICAgICAgICAvLyBnZW5lcmF0ZWQgZmlsZS5cbiAgICAgICAgdmFyIGFkanVzdGVkTWFwcGluZyA9IHtcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBnZW5lcmF0ZWRMaW5lOiBtYXBwaW5nLmdlbmVyYXRlZExpbmUgK1xuICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgLSAxKSxcbiAgICAgICAgICBnZW5lcmF0ZWRDb2x1bW46IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uICtcbiAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBtYXBwaW5nLmdlbmVyYXRlZExpbmVcbiAgICAgICAgICAgID8gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkQ29sdW1uIC0gMVxuICAgICAgICAgICAgOiAwKSxcbiAgICAgICAgICBvcmlnaW5hbExpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICAgIG9yaWdpbmFsQ29sdW1uOiBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uLFxuICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3MucHVzaChhZGp1c3RlZE1hcHBpbmcpO1xuICAgICAgICBpZiAodHlwZW9mIGFkanVzdGVkTWFwcGluZy5vcmlnaW5hbExpbmUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MucHVzaChhZGp1c3RlZE1hcHBpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcXVpY2tTb3J0KHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCk7XG4gICAgcXVpY2tTb3J0KHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKTtcbiAgfTtcblxuZXhwb3J0cy5JbmRleGVkU291cmNlTWFwQ29uc3VtZXIgPSBJbmRleGVkU291cmNlTWFwQ29uc3VtZXI7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciBiYXNlNjRWTFEgPSByZXF1aXJlKCcuL2Jhc2U2NC12bHEnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgQXJyYXlTZXQgPSByZXF1aXJlKCcuL2FycmF5LXNldCcpLkFycmF5U2V0O1xudmFyIE1hcHBpbmdMaXN0ID0gcmVxdWlyZSgnLi9tYXBwaW5nLWxpc3QnKS5NYXBwaW5nTGlzdDtcblxuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGUgU291cmNlTWFwR2VuZXJhdG9yIHJlcHJlc2VudHMgYSBzb3VyY2UgbWFwIHdoaWNoIGlzXG4gKiBiZWluZyBidWlsdCBpbmNyZW1lbnRhbGx5LiBZb3UgbWF5IHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZ1xuICogcHJvcGVydGllczpcbiAqXG4gKiAgIC0gZmlsZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBnZW5lcmF0ZWQgc291cmNlLlxuICogICAtIHNvdXJjZVJvb3Q6IEEgcm9vdCBmb3IgYWxsIHJlbGF0aXZlIFVSTHMgaW4gdGhpcyBzb3VyY2UgbWFwLlxuICovXG5mdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3IoYUFyZ3MpIHtcbiAgaWYgKCFhQXJncykge1xuICAgIGFBcmdzID0ge307XG4gIH1cbiAgdGhpcy5fZmlsZSA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnZmlsZScsIG51bGwpO1xuICB0aGlzLl9zb3VyY2VSb290ID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2VSb290JywgbnVsbCk7XG4gIHRoaXMuX3NraXBWYWxpZGF0aW9uID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdza2lwVmFsaWRhdGlvbicsIGZhbHNlKTtcbiAgdGhpcy5fc291cmNlcyA9IG5ldyBBcnJheVNldCgpO1xuICB0aGlzLl9uYW1lcyA9IG5ldyBBcnJheVNldCgpO1xuICB0aGlzLl9tYXBwaW5ncyA9IG5ldyBNYXBwaW5nTGlzdCgpO1xuICB0aGlzLl9zb3VyY2VzQ29udGVudHMgPSBudWxsO1xufVxuXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLl92ZXJzaW9uID0gMztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFNvdXJjZU1hcEdlbmVyYXRvciBiYXNlZCBvbiBhIFNvdXJjZU1hcENvbnN1bWVyXG4gKlxuICogQHBhcmFtIGFTb3VyY2VNYXBDb25zdW1lciBUaGUgU291cmNlTWFwLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IuZnJvbVNvdXJjZU1hcCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9mcm9tU291cmNlTWFwKGFTb3VyY2VNYXBDb25zdW1lcikge1xuICAgIHZhciBzb3VyY2VSb290ID0gYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZVJvb3Q7XG4gICAgdmFyIGdlbmVyYXRvciA9IG5ldyBTb3VyY2VNYXBHZW5lcmF0b3Ioe1xuICAgICAgZmlsZTogYVNvdXJjZU1hcENvbnN1bWVyLmZpbGUsXG4gICAgICBzb3VyY2VSb290OiBzb3VyY2VSb290XG4gICAgfSk7XG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLmVhY2hNYXBwaW5nKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICB2YXIgbmV3TWFwcGluZyA9IHtcbiAgICAgICAgZ2VuZXJhdGVkOiB7XG4gICAgICAgICAgbGluZTogbWFwcGluZy5nZW5lcmF0ZWRMaW5lLFxuICAgICAgICAgIGNvbHVtbjogbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW5cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKG1hcHBpbmcuc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgbmV3TWFwcGluZy5zb3VyY2UgPSBtYXBwaW5nLnNvdXJjZTtcbiAgICAgICAgaWYgKHNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgICAgIG5ld01hcHBpbmcuc291cmNlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBuZXdNYXBwaW5nLnNvdXJjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdNYXBwaW5nLm9yaWdpbmFsID0ge1xuICAgICAgICAgIGxpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICAgIGNvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtblxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtYXBwaW5nLm5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgIG5ld01hcHBpbmcubmFtZSA9IG1hcHBpbmcubmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBnZW5lcmF0b3IuYWRkTWFwcGluZyhuZXdNYXBwaW5nKTtcbiAgICB9KTtcbiAgICBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VGaWxlKSB7XG4gICAgICB2YXIgc291cmNlUmVsYXRpdmUgPSBzb3VyY2VGaWxlO1xuICAgICAgaWYgKHNvdXJjZVJvb3QgIT09IG51bGwpIHtcbiAgICAgICAgc291cmNlUmVsYXRpdmUgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIHNvdXJjZUZpbGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWdlbmVyYXRvci5fc291cmNlcy5oYXMoc291cmNlUmVsYXRpdmUpKSB7XG4gICAgICAgIGdlbmVyYXRvci5fc291cmNlcy5hZGQoc291cmNlUmVsYXRpdmUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGVudCA9IGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKHNvdXJjZUZpbGUpO1xuICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICBnZW5lcmF0b3Iuc2V0U291cmNlQ29udGVudChzb3VyY2VGaWxlLCBjb250ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9O1xuXG4vKipcbiAqIEFkZCBhIHNpbmdsZSBtYXBwaW5nIGZyb20gb3JpZ2luYWwgc291cmNlIGxpbmUgYW5kIGNvbHVtbiB0byB0aGUgZ2VuZXJhdGVkXG4gKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gZm9yIHRoaXMgc291cmNlIG1hcCBiZWluZyBjcmVhdGVkLiBUaGUgbWFwcGluZ1xuICogb2JqZWN0IHNob3VsZCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gZ2VuZXJhdGVkOiBBbiBvYmplY3Qgd2l0aCB0aGUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMuXG4gKiAgIC0gb3JpZ2luYWw6IEFuIG9iamVjdCB3aXRoIHRoZSBvcmlnaW5hbCBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zLlxuICogICAtIHNvdXJjZTogVGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlIChyZWxhdGl2ZSB0byB0aGUgc291cmNlUm9vdCkuXG4gKiAgIC0gbmFtZTogQW4gb3B0aW9uYWwgb3JpZ2luYWwgdG9rZW4gbmFtZSBmb3IgdGhpcyBtYXBwaW5nLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLmFkZE1hcHBpbmcgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfYWRkTWFwcGluZyhhQXJncykge1xuICAgIHZhciBnZW5lcmF0ZWQgPSB1dGlsLmdldEFyZyhhQXJncywgJ2dlbmVyYXRlZCcpO1xuICAgIHZhciBvcmlnaW5hbCA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnb3JpZ2luYWwnLCBudWxsKTtcbiAgICB2YXIgc291cmNlID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnLCBudWxsKTtcbiAgICB2YXIgbmFtZSA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnbmFtZScsIG51bGwpO1xuXG4gICAgaWYgKCF0aGlzLl9za2lwVmFsaWRhdGlvbikge1xuICAgICAgdGhpcy5fdmFsaWRhdGVNYXBwaW5nKGdlbmVyYXRlZCwgb3JpZ2luYWwsIHNvdXJjZSwgbmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICBzb3VyY2UgPSBTdHJpbmcoc291cmNlKTtcbiAgICAgIGlmICghdGhpcy5fc291cmNlcy5oYXMoc291cmNlKSkge1xuICAgICAgICB0aGlzLl9zb3VyY2VzLmFkZChzb3VyY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgICBpZiAoIXRoaXMuX25hbWVzLmhhcyhuYW1lKSkge1xuICAgICAgICB0aGlzLl9uYW1lcy5hZGQobmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwcGluZ3MuYWRkKHtcbiAgICAgIGdlbmVyYXRlZExpbmU6IGdlbmVyYXRlZC5saW5lLFxuICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBnZW5lcmF0ZWQuY29sdW1uLFxuICAgICAgb3JpZ2luYWxMaW5lOiBvcmlnaW5hbCAhPSBudWxsICYmIG9yaWdpbmFsLmxpbmUsXG4gICAgICBvcmlnaW5hbENvbHVtbjogb3JpZ2luYWwgIT0gbnVsbCAmJiBvcmlnaW5hbC5jb2x1bW4sXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9KTtcbiAgfTtcblxuLyoqXG4gKiBTZXQgdGhlIHNvdXJjZSBjb250ZW50IGZvciBhIHNvdXJjZSBmaWxlLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLnNldFNvdXJjZUNvbnRlbnQgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3Jfc2V0U291cmNlQ29udGVudChhU291cmNlRmlsZSwgYVNvdXJjZUNvbnRlbnQpIHtcbiAgICB2YXIgc291cmNlID0gYVNvdXJjZUZpbGU7XG4gICAgaWYgKHRoaXMuX3NvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgc291cmNlID0gdXRpbC5yZWxhdGl2ZSh0aGlzLl9zb3VyY2VSb290LCBzb3VyY2UpO1xuICAgIH1cblxuICAgIGlmIChhU291cmNlQ29udGVudCAhPSBudWxsKSB7XG4gICAgICAvLyBBZGQgdGhlIHNvdXJjZSBjb250ZW50IHRvIHRoZSBfc291cmNlc0NvbnRlbnRzIG1hcC5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBfc291cmNlc0NvbnRlbnRzIG1hcCBpZiB0aGUgcHJvcGVydHkgaXMgbnVsbC5cbiAgICAgIGlmICghdGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICAgIHRoaXMuX3NvdXJjZXNDb250ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zb3VyY2VzQ29udGVudHNbdXRpbC50b1NldFN0cmluZyhzb3VyY2UpXSA9IGFTb3VyY2VDb250ZW50O1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIHNvdXJjZSBmaWxlIGZyb20gdGhlIF9zb3VyY2VzQ29udGVudHMgbWFwLlxuICAgICAgLy8gSWYgdGhlIF9zb3VyY2VzQ29udGVudHMgbWFwIGlzIGVtcHR5LCBzZXQgdGhlIHByb3BlcnR5IHRvIG51bGwuXG4gICAgICBkZWxldGUgdGhpcy5fc291cmNlc0NvbnRlbnRzW3V0aWwudG9TZXRTdHJpbmcoc291cmNlKV07XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fc291cmNlc0NvbnRlbnRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fc291cmNlc0NvbnRlbnRzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbi8qKlxuICogQXBwbGllcyB0aGUgbWFwcGluZ3Mgb2YgYSBzdWItc291cmNlLW1hcCBmb3IgYSBzcGVjaWZpYyBzb3VyY2UgZmlsZSB0byB0aGVcbiAqIHNvdXJjZSBtYXAgYmVpbmcgZ2VuZXJhdGVkLiBFYWNoIG1hcHBpbmcgdG8gdGhlIHN1cHBsaWVkIHNvdXJjZSBmaWxlIGlzXG4gKiByZXdyaXR0ZW4gdXNpbmcgdGhlIHN1cHBsaWVkIHNvdXJjZSBtYXAuIE5vdGU6IFRoZSByZXNvbHV0aW9uIGZvciB0aGVcbiAqIHJlc3VsdGluZyBtYXBwaW5ncyBpcyB0aGUgbWluaW1pdW0gb2YgdGhpcyBtYXAgYW5kIHRoZSBzdXBwbGllZCBtYXAuXG4gKlxuICogQHBhcmFtIGFTb3VyY2VNYXBDb25zdW1lciBUaGUgc291cmNlIG1hcCB0byBiZSBhcHBsaWVkLlxuICogQHBhcmFtIGFTb3VyY2VGaWxlIE9wdGlvbmFsLiBUaGUgZmlsZW5hbWUgb2YgdGhlIHNvdXJjZSBmaWxlLlxuICogICAgICAgIElmIG9taXR0ZWQsIFNvdXJjZU1hcENvbnN1bWVyJ3MgZmlsZSBwcm9wZXJ0eSB3aWxsIGJlIHVzZWQuXG4gKiBAcGFyYW0gYVNvdXJjZU1hcFBhdGggT3B0aW9uYWwuIFRoZSBkaXJuYW1lIG9mIHRoZSBwYXRoIHRvIHRoZSBzb3VyY2UgbWFwXG4gKiAgICAgICAgdG8gYmUgYXBwbGllZC4gSWYgcmVsYXRpdmUsIGl0IGlzIHJlbGF0aXZlIHRvIHRoZSBTb3VyY2VNYXBDb25zdW1lci5cbiAqICAgICAgICBUaGlzIHBhcmFtZXRlciBpcyBuZWVkZWQgd2hlbiB0aGUgdHdvIHNvdXJjZSBtYXBzIGFyZW4ndCBpbiB0aGUgc2FtZVxuICogICAgICAgIGRpcmVjdG9yeSwgYW5kIHRoZSBzb3VyY2UgbWFwIHRvIGJlIGFwcGxpZWQgY29udGFpbnMgcmVsYXRpdmUgc291cmNlXG4gKiAgICAgICAgcGF0aHMuIElmIHNvLCB0aG9zZSByZWxhdGl2ZSBzb3VyY2UgcGF0aHMgbmVlZCB0byBiZSByZXdyaXR0ZW5cbiAqICAgICAgICByZWxhdGl2ZSB0byB0aGUgU291cmNlTWFwR2VuZXJhdG9yLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLmFwcGx5U291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX2FwcGx5U291cmNlTWFwKGFTb3VyY2VNYXBDb25zdW1lciwgYVNvdXJjZUZpbGUsIGFTb3VyY2VNYXBQYXRoKSB7XG4gICAgdmFyIHNvdXJjZUZpbGUgPSBhU291cmNlRmlsZTtcbiAgICAvLyBJZiBhU291cmNlRmlsZSBpcyBvbWl0dGVkLCB3ZSB3aWxsIHVzZSB0aGUgZmlsZSBwcm9wZXJ0eSBvZiB0aGUgU291cmNlTWFwXG4gICAgaWYgKGFTb3VyY2VGaWxlID09IG51bGwpIHtcbiAgICAgIGlmIChhU291cmNlTWFwQ29uc3VtZXIuZmlsZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5hcHBseVNvdXJjZU1hcCByZXF1aXJlcyBlaXRoZXIgYW4gZXhwbGljaXQgc291cmNlIGZpbGUsICcgK1xuICAgICAgICAgICdvciB0aGUgc291cmNlIG1hcFxcJ3MgXCJmaWxlXCIgcHJvcGVydHkuIEJvdGggd2VyZSBvbWl0dGVkLidcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHNvdXJjZUZpbGUgPSBhU291cmNlTWFwQ29uc3VtZXIuZmlsZTtcbiAgICB9XG4gICAgdmFyIHNvdXJjZVJvb3QgPSB0aGlzLl9zb3VyY2VSb290O1xuICAgIC8vIE1ha2UgXCJzb3VyY2VGaWxlXCIgcmVsYXRpdmUgaWYgYW4gYWJzb2x1dGUgVXJsIGlzIHBhc3NlZC5cbiAgICBpZiAoc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICBzb3VyY2VGaWxlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2VGaWxlKTtcbiAgICB9XG4gICAgLy8gQXBwbHlpbmcgdGhlIFNvdXJjZU1hcCBjYW4gYWRkIGFuZCByZW1vdmUgaXRlbXMgZnJvbSB0aGUgc291cmNlcyBhbmRcbiAgICAvLyB0aGUgbmFtZXMgYXJyYXkuXG4gICAgdmFyIG5ld1NvdXJjZXMgPSBuZXcgQXJyYXlTZXQoKTtcbiAgICB2YXIgbmV3TmFtZXMgPSBuZXcgQXJyYXlTZXQoKTtcblxuICAgIC8vIEZpbmQgbWFwcGluZ3MgZm9yIHRoZSBcInNvdXJjZUZpbGVcIlxuICAgIHRoaXMuX21hcHBpbmdzLnVuc29ydGVkRm9yRWFjaChmdW5jdGlvbiAobWFwcGluZykge1xuICAgICAgaWYgKG1hcHBpbmcuc291cmNlID09PSBzb3VyY2VGaWxlICYmIG1hcHBpbmcub3JpZ2luYWxMaW5lICE9IG51bGwpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgY2FuIGJlIG1hcHBlZCBieSB0aGUgc291cmNlIG1hcCwgdGhlbiB1cGRhdGUgdGhlIG1hcHBpbmcuXG4gICAgICAgIHZhciBvcmlnaW5hbCA9IGFTb3VyY2VNYXBDb25zdW1lci5vcmlnaW5hbFBvc2l0aW9uRm9yKHtcbiAgICAgICAgICBsaW5lOiBtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgICBjb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvcmlnaW5hbC5zb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIENvcHkgbWFwcGluZ1xuICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gb3JpZ2luYWwuc291cmNlO1xuICAgICAgICAgIGlmIChhU291cmNlTWFwUGF0aCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHV0aWwuam9pbihhU291cmNlTWFwUGF0aCwgbWFwcGluZy5zb3VyY2UpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBtYXBwaW5nLnNvdXJjZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxMaW5lID0gb3JpZ2luYWwubGluZTtcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uID0gb3JpZ2luYWwuY29sdW1uO1xuICAgICAgICAgIGlmIChvcmlnaW5hbC5uYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmcubmFtZSA9IG9yaWdpbmFsLm5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2UgPSBtYXBwaW5nLnNvdXJjZTtcbiAgICAgIGlmIChzb3VyY2UgIT0gbnVsbCAmJiAhbmV3U291cmNlcy5oYXMoc291cmNlKSkge1xuICAgICAgICBuZXdTb3VyY2VzLmFkZChzb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZSA9IG1hcHBpbmcubmFtZTtcbiAgICAgIGlmIChuYW1lICE9IG51bGwgJiYgIW5ld05hbWVzLmhhcyhuYW1lKSkge1xuICAgICAgICBuZXdOYW1lcy5hZGQobmFtZSk7XG4gICAgICB9XG5cbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLl9zb3VyY2VzID0gbmV3U291cmNlcztcbiAgICB0aGlzLl9uYW1lcyA9IG5ld05hbWVzO1xuXG4gICAgLy8gQ29weSBzb3VyY2VzQ29udGVudHMgb2YgYXBwbGllZCBtYXAuXG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlRmlsZSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlQ29udGVudEZvcihzb3VyY2VGaWxlKTtcbiAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGFTb3VyY2VNYXBQYXRoICE9IG51bGwpIHtcbiAgICAgICAgICBzb3VyY2VGaWxlID0gdXRpbC5qb2luKGFTb3VyY2VNYXBQYXRoLCBzb3VyY2VGaWxlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICAgICAgc291cmNlRmlsZSA9IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgc291cmNlRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTb3VyY2VDb250ZW50KHNvdXJjZUZpbGUsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9O1xuXG4vKipcbiAqIEEgbWFwcGluZyBjYW4gaGF2ZSBvbmUgb2YgdGhlIHRocmVlIGxldmVscyBvZiBkYXRhOlxuICpcbiAqICAgMS4gSnVzdCB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9uLlxuICogICAyLiBUaGUgR2VuZXJhdGVkIHBvc2l0aW9uLCBvcmlnaW5hbCBwb3NpdGlvbiwgYW5kIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgMy4gR2VuZXJhdGVkIGFuZCBvcmlnaW5hbCBwb3NpdGlvbiwgb3JpZ2luYWwgc291cmNlLCBhcyB3ZWxsIGFzIGEgbmFtZVxuICogICAgICB0b2tlbi5cbiAqXG4gKiBUbyBtYWludGFpbiBjb25zaXN0ZW5jeSwgd2UgdmFsaWRhdGUgdGhhdCBhbnkgbmV3IG1hcHBpbmcgYmVpbmcgYWRkZWQgZmFsbHNcbiAqIGluIHRvIG9uZSBvZiB0aGVzZSBjYXRlZ29yaWVzLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLl92YWxpZGF0ZU1hcHBpbmcgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfdmFsaWRhdGVNYXBwaW5nKGFHZW5lcmF0ZWQsIGFPcmlnaW5hbCwgYVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhTmFtZSkge1xuICAgIC8vIFdoZW4gYU9yaWdpbmFsIGlzIHRydXRoeSBidXQgaGFzIGVtcHR5IHZhbHVlcyBmb3IgLmxpbmUgYW5kIC5jb2x1bW4sXG4gICAgLy8gaXQgaXMgbW9zdCBsaWtlbHkgYSBwcm9ncmFtbWVyIGVycm9yLiBJbiB0aGlzIGNhc2Ugd2UgdGhyb3cgYSB2ZXJ5XG4gICAgLy8gc3BlY2lmaWMgZXJyb3IgbWVzc2FnZSB0byB0cnkgdG8gZ3VpZGUgdGhlbSB0aGUgcmlnaHQgd2F5LlxuICAgIC8vIEZvciBleGFtcGxlOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyLWJ1bmRsZXIvcHVsbC81MTlcbiAgICBpZiAoYU9yaWdpbmFsICYmIHR5cGVvZiBhT3JpZ2luYWwubGluZSAhPT0gJ251bWJlcicgJiYgdHlwZW9mIGFPcmlnaW5hbC5jb2x1bW4gIT09ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdvcmlnaW5hbC5saW5lIGFuZCBvcmlnaW5hbC5jb2x1bW4gYXJlIG5vdCBudW1iZXJzIC0tIHlvdSBwcm9iYWJseSBtZWFudCB0byBvbWl0ICcgK1xuICAgICAgICAgICAgJ3RoZSBvcmlnaW5hbCBtYXBwaW5nIGVudGlyZWx5IGFuZCBvbmx5IG1hcCB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9uLiBJZiBzbywgcGFzcyAnICtcbiAgICAgICAgICAgICdudWxsIGZvciB0aGUgb3JpZ2luYWwgbWFwcGluZyBpbnN0ZWFkIG9mIGFuIG9iamVjdCB3aXRoIGVtcHR5IG9yIG51bGwgdmFsdWVzLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoYUdlbmVyYXRlZCAmJiAnbGluZScgaW4gYUdlbmVyYXRlZCAmJiAnY29sdW1uJyBpbiBhR2VuZXJhdGVkXG4gICAgICAgICYmIGFHZW5lcmF0ZWQubGluZSA+IDAgJiYgYUdlbmVyYXRlZC5jb2x1bW4gPj0gMFxuICAgICAgICAmJiAhYU9yaWdpbmFsICYmICFhU291cmNlICYmICFhTmFtZSkge1xuICAgICAgLy8gQ2FzZSAxLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmIChhR2VuZXJhdGVkICYmICdsaW5lJyBpbiBhR2VuZXJhdGVkICYmICdjb2x1bW4nIGluIGFHZW5lcmF0ZWRcbiAgICAgICAgICAgICAmJiBhT3JpZ2luYWwgJiYgJ2xpbmUnIGluIGFPcmlnaW5hbCAmJiAnY29sdW1uJyBpbiBhT3JpZ2luYWxcbiAgICAgICAgICAgICAmJiBhR2VuZXJhdGVkLmxpbmUgPiAwICYmIGFHZW5lcmF0ZWQuY29sdW1uID49IDBcbiAgICAgICAgICAgICAmJiBhT3JpZ2luYWwubGluZSA+IDAgJiYgYU9yaWdpbmFsLmNvbHVtbiA+PSAwXG4gICAgICAgICAgICAgJiYgYVNvdXJjZSkge1xuICAgICAgLy8gQ2FzZXMgMiBhbmQgMy5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbWFwcGluZzogJyArIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZ2VuZXJhdGVkOiBhR2VuZXJhdGVkLFxuICAgICAgICBzb3VyY2U6IGFTb3VyY2UsXG4gICAgICAgIG9yaWdpbmFsOiBhT3JpZ2luYWwsXG4gICAgICAgIG5hbWU6IGFOYW1lXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgYWNjdW11bGF0ZWQgbWFwcGluZ3MgaW4gdG8gdGhlIHN0cmVhbSBvZiBiYXNlIDY0IFZMUXNcbiAqIHNwZWNpZmllZCBieSB0aGUgc291cmNlIG1hcCBmb3JtYXQuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX3NlcmlhbGl6ZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX3NlcmlhbGl6ZU1hcHBpbmdzKCkge1xuICAgIHZhciBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgdmFyIHByZXZpb3VzR2VuZXJhdGVkTGluZSA9IDE7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c09yaWdpbmFsTGluZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzTmFtZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzU291cmNlID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIG5leHQ7XG4gICAgdmFyIG1hcHBpbmc7XG4gICAgdmFyIG5hbWVJZHg7XG4gICAgdmFyIHNvdXJjZUlkeDtcblxuICAgIHZhciBtYXBwaW5ncyA9IHRoaXMuX21hcHBpbmdzLnRvQXJyYXkoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbWFwcGluZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG1hcHBpbmcgPSBtYXBwaW5nc1tpXTtcbiAgICAgIG5leHQgPSAnJ1xuXG4gICAgICBpZiAobWFwcGluZy5nZW5lcmF0ZWRMaW5lICE9PSBwcmV2aW91c0dlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgICAgICB3aGlsZSAobWFwcGluZy5nZW5lcmF0ZWRMaW5lICE9PSBwcmV2aW91c0dlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgICBuZXh0ICs9ICc7JztcbiAgICAgICAgICBwcmV2aW91c0dlbmVyYXRlZExpbmUrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIGlmICghdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZChtYXBwaW5nLCBtYXBwaW5nc1tpIC0gMV0pKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dCArPSAnLCc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cbiAgICAgIGlmIChtYXBwaW5nLnNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgIHNvdXJjZUlkeCA9IHRoaXMuX3NvdXJjZXMuaW5kZXhPZihtYXBwaW5nLnNvdXJjZSk7XG4gICAgICAgIG5leHQgKz0gYmFzZTY0VkxRLmVuY29kZShzb3VyY2VJZHggLSBwcmV2aW91c1NvdXJjZSk7XG4gICAgICAgIHByZXZpb3VzU291cmNlID0gc291cmNlSWR4O1xuXG4gICAgICAgIC8vIGxpbmVzIGFyZSBzdG9yZWQgMC1iYXNlZCBpbiBTb3VyY2VNYXAgc3BlYyB2ZXJzaW9uIDNcbiAgICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKG1hcHBpbmcub3JpZ2luYWxMaW5lIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHByZXZpb3VzT3JpZ2luYWxMaW5lKTtcbiAgICAgICAgcHJldmlvdXNPcmlnaW5hbExpbmUgPSBtYXBwaW5nLm9yaWdpbmFsTGluZSAtIDE7XG5cbiAgICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKG1hcHBpbmcub3JpZ2luYWxDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBwcmV2aW91c09yaWdpbmFsQ29sdW1uKTtcbiAgICAgICAgcHJldmlvdXNPcmlnaW5hbENvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cbiAgICAgICAgaWYgKG1hcHBpbmcubmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgbmFtZUlkeCA9IHRoaXMuX25hbWVzLmluZGV4T2YobWFwcGluZy5uYW1lKTtcbiAgICAgICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobmFtZUlkeCAtIHByZXZpb3VzTmFtZSk7XG4gICAgICAgICAgcHJldmlvdXNOYW1lID0gbmFtZUlkeDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQgKz0gbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLl9nZW5lcmF0ZVNvdXJjZXNDb250ZW50ID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX2dlbmVyYXRlU291cmNlc0NvbnRlbnQoYVNvdXJjZXMsIGFTb3VyY2VSb290KSB7XG4gICAgcmV0dXJuIGFTb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICBpZiAoIXRoaXMuX3NvdXJjZXNDb250ZW50cykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChhU291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICAgIHNvdXJjZSA9IHV0aWwucmVsYXRpdmUoYVNvdXJjZVJvb3QsIHNvdXJjZSk7XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0gdXRpbC50b1NldFN0cmluZyhzb3VyY2UpO1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLl9zb3VyY2VzQ29udGVudHMsIGtleSlcbiAgICAgICAgPyB0aGlzLl9zb3VyY2VzQ29udGVudHNba2V5XVxuICAgICAgICA6IG51bGw7XG4gICAgfSwgdGhpcyk7XG4gIH07XG5cbi8qKlxuICogRXh0ZXJuYWxpemUgdGhlIHNvdXJjZSBtYXAuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUudG9KU09OID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX3RvSlNPTigpIHtcbiAgICB2YXIgbWFwID0ge1xuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHNvdXJjZXM6IHRoaXMuX3NvdXJjZXMudG9BcnJheSgpLFxuICAgICAgbmFtZXM6IHRoaXMuX25hbWVzLnRvQXJyYXkoKSxcbiAgICAgIG1hcHBpbmdzOiB0aGlzLl9zZXJpYWxpemVNYXBwaW5ncygpXG4gICAgfTtcbiAgICBpZiAodGhpcy5fZmlsZSAhPSBudWxsKSB7XG4gICAgICBtYXAuZmlsZSA9IHRoaXMuX2ZpbGU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgIG1hcC5zb3VyY2VSb290ID0gdGhpcy5fc291cmNlUm9vdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZXNDb250ZW50cykge1xuICAgICAgbWFwLnNvdXJjZXNDb250ZW50ID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VzQ29udGVudChtYXAuc291cmNlcywgbWFwLnNvdXJjZVJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXA7XG4gIH07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBzb3VyY2UgbWFwIGJlaW5nIGdlbmVyYXRlZCB0byBhIHN0cmluZy5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl90b1N0cmluZygpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pTT04oKSk7XG4gIH07XG5cbmV4cG9ydHMuU291cmNlTWFwR2VuZXJhdG9yID0gU291cmNlTWFwR2VuZXJhdG9yO1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG52YXIgU291cmNlTWFwR2VuZXJhdG9yID0gcmVxdWlyZSgnLi9zb3VyY2UtbWFwLWdlbmVyYXRvcicpLlNvdXJjZU1hcEdlbmVyYXRvcjtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8vIE1hdGNoZXMgYSBXaW5kb3dzLXN0eWxlIGBcXHJcXG5gIG5ld2xpbmUgb3IgYSBgXFxuYCBuZXdsaW5lIHVzZWQgYnkgYWxsIG90aGVyXG4vLyBvcGVyYXRpbmcgc3lzdGVtcyB0aGVzZSBkYXlzIChjYXB0dXJpbmcgdGhlIHJlc3VsdCkuXG52YXIgUkVHRVhfTkVXTElORSA9IC8oXFxyP1xcbikvO1xuXG4vLyBOZXdsaW5lIGNoYXJhY3RlciBjb2RlIGZvciBjaGFyQ29kZUF0KCkgY29tcGFyaXNvbnNcbnZhciBORVdMSU5FX0NPREUgPSAxMDtcblxuLy8gUHJpdmF0ZSBzeW1ib2wgZm9yIGlkZW50aWZ5aW5nIGBTb3VyY2VOb2RlYHMgd2hlbiBtdWx0aXBsZSB2ZXJzaW9ucyBvZlxuLy8gdGhlIHNvdXJjZS1tYXAgbGlicmFyeSBhcmUgbG9hZGVkLiBUaGlzIE1VU1QgTk9UIENIQU5HRSBhY3Jvc3Ncbi8vIHZlcnNpb25zIVxudmFyIGlzU291cmNlTm9kZSA9IFwiJCQkaXNTb3VyY2VOb2RlJCQkXCI7XG5cbi8qKlxuICogU291cmNlTm9kZXMgcHJvdmlkZSBhIHdheSB0byBhYnN0cmFjdCBvdmVyIGludGVycG9sYXRpbmcvY29uY2F0ZW5hdGluZ1xuICogc25pcHBldHMgb2YgZ2VuZXJhdGVkIEphdmFTY3JpcHQgc291cmNlIGNvZGUgd2hpbGUgbWFpbnRhaW5pbmcgdGhlIGxpbmUgYW5kXG4gKiBjb2x1bW4gaW5mb3JtYXRpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBvcmlnaW5hbCBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcGFyYW0gYUxpbmUgVGhlIG9yaWdpbmFsIGxpbmUgbnVtYmVyLlxuICogQHBhcmFtIGFDb2x1bW4gVGhlIG9yaWdpbmFsIGNvbHVtbiBudW1iZXIuXG4gKiBAcGFyYW0gYVNvdXJjZSBUaGUgb3JpZ2luYWwgc291cmNlJ3MgZmlsZW5hbWUuXG4gKiBAcGFyYW0gYUNodW5rcyBPcHRpb25hbC4gQW4gYXJyYXkgb2Ygc3RyaW5ncyB3aGljaCBhcmUgc25pcHBldHMgb2ZcbiAqICAgICAgICBnZW5lcmF0ZWQgSlMsIG9yIG90aGVyIFNvdXJjZU5vZGVzLlxuICogQHBhcmFtIGFOYW1lIFRoZSBvcmlnaW5hbCBpZGVudGlmaWVyLlxuICovXG5mdW5jdGlvbiBTb3VyY2VOb2RlKGFMaW5lLCBhQ29sdW1uLCBhU291cmNlLCBhQ2h1bmtzLCBhTmFtZSkge1xuICB0aGlzLmNoaWxkcmVuID0gW107XG4gIHRoaXMuc291cmNlQ29udGVudHMgPSB7fTtcbiAgdGhpcy5saW5lID0gYUxpbmUgPT0gbnVsbCA/IG51bGwgOiBhTGluZTtcbiAgdGhpcy5jb2x1bW4gPSBhQ29sdW1uID09IG51bGwgPyBudWxsIDogYUNvbHVtbjtcbiAgdGhpcy5zb3VyY2UgPSBhU291cmNlID09IG51bGwgPyBudWxsIDogYVNvdXJjZTtcbiAgdGhpcy5uYW1lID0gYU5hbWUgPT0gbnVsbCA/IG51bGwgOiBhTmFtZTtcbiAgdGhpc1tpc1NvdXJjZU5vZGVdID0gdHJ1ZTtcbiAgaWYgKGFDaHVua3MgIT0gbnVsbCkgdGhpcy5hZGQoYUNodW5rcyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFNvdXJjZU5vZGUgZnJvbSBnZW5lcmF0ZWQgY29kZSBhbmQgYSBTb3VyY2VNYXBDb25zdW1lci5cbiAqXG4gKiBAcGFyYW0gYUdlbmVyYXRlZENvZGUgVGhlIGdlbmVyYXRlZCBjb2RlXG4gKiBAcGFyYW0gYVNvdXJjZU1hcENvbnN1bWVyIFRoZSBTb3VyY2VNYXAgZm9yIHRoZSBnZW5lcmF0ZWQgY29kZVxuICogQHBhcmFtIGFSZWxhdGl2ZVBhdGggT3B0aW9uYWwuIFRoZSBwYXRoIHRoYXQgcmVsYXRpdmUgc291cmNlcyBpbiB0aGVcbiAqICAgICAgICBTb3VyY2VNYXBDb25zdW1lciBzaG91bGQgYmUgcmVsYXRpdmUgdG8uXG4gKi9cblNvdXJjZU5vZGUuZnJvbVN0cmluZ1dpdGhTb3VyY2VNYXAgPVxuICBmdW5jdGlvbiBTb3VyY2VOb2RlX2Zyb21TdHJpbmdXaXRoU291cmNlTWFwKGFHZW5lcmF0ZWRDb2RlLCBhU291cmNlTWFwQ29uc3VtZXIsIGFSZWxhdGl2ZVBhdGgpIHtcbiAgICAvLyBUaGUgU291cmNlTm9kZSB3ZSB3YW50IHRvIGZpbGwgd2l0aCB0aGUgZ2VuZXJhdGVkIGNvZGVcbiAgICAvLyBhbmQgdGhlIFNvdXJjZU1hcFxuICAgIHZhciBub2RlID0gbmV3IFNvdXJjZU5vZGUoKTtcblxuICAgIC8vIEFsbCBldmVuIGluZGljZXMgb2YgdGhpcyBhcnJheSBhcmUgb25lIGxpbmUgb2YgdGhlIGdlbmVyYXRlZCBjb2RlLFxuICAgIC8vIHdoaWxlIGFsbCBvZGQgaW5kaWNlcyBhcmUgdGhlIG5ld2xpbmVzIGJldHdlZW4gdHdvIGFkamFjZW50IGxpbmVzXG4gICAgLy8gKHNpbmNlIGBSRUdFWF9ORVdMSU5FYCBjYXB0dXJlcyBpdHMgbWF0Y2gpLlxuICAgIC8vIFByb2Nlc3NlZCBmcmFnbWVudHMgYXJlIGFjY2Vzc2VkIGJ5IGNhbGxpbmcgYHNoaWZ0TmV4dExpbmVgLlxuICAgIHZhciByZW1haW5pbmdMaW5lcyA9IGFHZW5lcmF0ZWRDb2RlLnNwbGl0KFJFR0VYX05FV0xJTkUpO1xuICAgIHZhciByZW1haW5pbmdMaW5lc0luZGV4ID0gMDtcbiAgICB2YXIgc2hpZnROZXh0TGluZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxpbmVDb250ZW50cyA9IGdldE5leHRMaW5lKCk7XG4gICAgICAvLyBUaGUgbGFzdCBsaW5lIG9mIGEgZmlsZSBtaWdodCBub3QgaGF2ZSBhIG5ld2xpbmUuXG4gICAgICB2YXIgbmV3TGluZSA9IGdldE5leHRMaW5lKCkgfHwgXCJcIjtcbiAgICAgIHJldHVybiBsaW5lQ29udGVudHMgKyBuZXdMaW5lO1xuXG4gICAgICBmdW5jdGlvbiBnZXROZXh0TGluZSgpIHtcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZ0xpbmVzSW5kZXggPCByZW1haW5pbmdMaW5lcy5sZW5ndGggP1xuICAgICAgICAgICAgcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gV2UgbmVlZCB0byByZW1lbWJlciB0aGUgcG9zaXRpb24gb2YgXCJyZW1haW5pbmdMaW5lc1wiXG4gICAgdmFyIGxhc3RHZW5lcmF0ZWRMaW5lID0gMSwgbGFzdEdlbmVyYXRlZENvbHVtbiA9IDA7XG5cbiAgICAvLyBUaGUgZ2VuZXJhdGUgU291cmNlTm9kZXMgd2UgbmVlZCBhIGNvZGUgcmFuZ2UuXG4gICAgLy8gVG8gZXh0cmFjdCBpdCBjdXJyZW50IGFuZCBsYXN0IG1hcHBpbmcgaXMgdXNlZC5cbiAgICAvLyBIZXJlIHdlIHN0b3JlIHRoZSBsYXN0IG1hcHBpbmcuXG4gICAgdmFyIGxhc3RNYXBwaW5nID0gbnVsbDtcblxuICAgIGFTb3VyY2VNYXBDb25zdW1lci5lYWNoTWFwcGluZyhmdW5jdGlvbiAobWFwcGluZykge1xuICAgICAgaWYgKGxhc3RNYXBwaW5nICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFdlIGFkZCB0aGUgY29kZSBmcm9tIFwibGFzdE1hcHBpbmdcIiB0byBcIm1hcHBpbmdcIjpcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlcmUgaXMgYSBuZXcgbGluZSBpbiBiZXR3ZWVuLlxuICAgICAgICBpZiAobGFzdEdlbmVyYXRlZExpbmUgPCBtYXBwaW5nLmdlbmVyYXRlZExpbmUpIHtcbiAgICAgICAgICAvLyBBc3NvY2lhdGUgZmlyc3QgbGluZSB3aXRoIFwibGFzdE1hcHBpbmdcIlxuICAgICAgICAgIGFkZE1hcHBpbmdXaXRoQ29kZShsYXN0TWFwcGluZywgc2hpZnROZXh0TGluZSgpKTtcbiAgICAgICAgICBsYXN0R2VuZXJhdGVkTGluZSsrO1xuICAgICAgICAgIGxhc3RHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgICAgICAgIC8vIFRoZSByZW1haW5pbmcgY29kZSBpcyBhZGRlZCB3aXRob3V0IG1hcHBpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUaGVyZSBpcyBubyBuZXcgbGluZSBpbiBiZXR3ZWVuLlxuICAgICAgICAgIC8vIEFzc29jaWF0ZSB0aGUgY29kZSBiZXR3ZWVuIFwibGFzdEdlbmVyYXRlZENvbHVtblwiIGFuZFxuICAgICAgICAgIC8vIFwibWFwcGluZy5nZW5lcmF0ZWRDb2x1bW5cIiB3aXRoIFwibGFzdE1hcHBpbmdcIlxuICAgICAgICAgIHZhciBuZXh0TGluZSA9IHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdIHx8ICcnO1xuICAgICAgICAgIHZhciBjb2RlID0gbmV4dExpbmUuc3Vic3RyKDAsIG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgICAgICByZW1haW5pbmdMaW5lc1tyZW1haW5pbmdMaW5lc0luZGV4XSA9IG5leHRMaW5lLnN1YnN0cihtYXBwaW5nLmdlbmVyYXRlZENvbHVtbiAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbik7XG4gICAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuICAgICAgICAgIGFkZE1hcHBpbmdXaXRoQ29kZShsYXN0TWFwcGluZywgY29kZSk7XG4gICAgICAgICAgLy8gTm8gbW9yZSByZW1haW5pbmcgY29kZSwgY29udGludWVcbiAgICAgICAgICBsYXN0TWFwcGluZyA9IG1hcHBpbmc7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBXZSBhZGQgdGhlIGdlbmVyYXRlZCBjb2RlIHVudGlsIHRoZSBmaXJzdCBtYXBwaW5nXG4gICAgICAvLyB0byB0aGUgU291cmNlTm9kZSB3aXRob3V0IGFueSBtYXBwaW5nLlxuICAgICAgLy8gRWFjaCBsaW5lIGlzIGFkZGVkIGFzIHNlcGFyYXRlIHN0cmluZy5cbiAgICAgIHdoaWxlIChsYXN0R2VuZXJhdGVkTGluZSA8IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICBub2RlLmFkZChzaGlmdE5leHRMaW5lKCkpO1xuICAgICAgICBsYXN0R2VuZXJhdGVkTGluZSsrO1xuICAgICAgfVxuICAgICAgaWYgKGxhc3RHZW5lcmF0ZWRDb2x1bW4gPCBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbikge1xuICAgICAgICB2YXIgbmV4dExpbmUgPSByZW1haW5pbmdMaW5lc1tyZW1haW5pbmdMaW5lc0luZGV4XSB8fCAnJztcbiAgICAgICAgbm9kZS5hZGQobmV4dExpbmUuc3Vic3RyKDAsIG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uKSk7XG4gICAgICAgIHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdID0gbmV4dExpbmUuc3Vic3RyKG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbiA9IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uO1xuICAgICAgfVxuICAgICAgbGFzdE1hcHBpbmcgPSBtYXBwaW5nO1xuICAgIH0sIHRoaXMpO1xuICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBtYXBwaW5ncy5cbiAgICBpZiAocmVtYWluaW5nTGluZXNJbmRleCA8IHJlbWFpbmluZ0xpbmVzLmxlbmd0aCkge1xuICAgICAgaWYgKGxhc3RNYXBwaW5nKSB7XG4gICAgICAgIC8vIEFzc29jaWF0ZSB0aGUgcmVtYWluaW5nIGNvZGUgaW4gdGhlIGN1cnJlbnQgbGluZSB3aXRoIFwibGFzdE1hcHBpbmdcIlxuICAgICAgICBhZGRNYXBwaW5nV2l0aENvZGUobGFzdE1hcHBpbmcsIHNoaWZ0TmV4dExpbmUoKSk7XG4gICAgICB9XG4gICAgICAvLyBhbmQgYWRkIHRoZSByZW1haW5pbmcgbGluZXMgd2l0aG91dCBhbnkgbWFwcGluZ1xuICAgICAgbm9kZS5hZGQocmVtYWluaW5nTGluZXMuc3BsaWNlKHJlbWFpbmluZ0xpbmVzSW5kZXgpLmpvaW4oXCJcIikpO1xuICAgIH1cblxuICAgIC8vIENvcHkgc291cmNlc0NvbnRlbnQgaW50byBTb3VyY2VOb2RlXG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlRmlsZSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlQ29udGVudEZvcihzb3VyY2VGaWxlKTtcbiAgICAgIGlmIChjb250ZW50ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGFSZWxhdGl2ZVBhdGggIT0gbnVsbCkge1xuICAgICAgICAgIHNvdXJjZUZpbGUgPSB1dGlsLmpvaW4oYVJlbGF0aXZlUGF0aCwgc291cmNlRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRTb3VyY2VDb250ZW50KHNvdXJjZUZpbGUsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGU7XG5cbiAgICBmdW5jdGlvbiBhZGRNYXBwaW5nV2l0aENvZGUobWFwcGluZywgY29kZSkge1xuICAgICAgaWYgKG1hcHBpbmcgPT09IG51bGwgfHwgbWFwcGluZy5zb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLmFkZChjb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhUmVsYXRpdmVQYXRoXG4gICAgICAgICAgPyB1dGlsLmpvaW4oYVJlbGF0aXZlUGF0aCwgbWFwcGluZy5zb3VyY2UpXG4gICAgICAgICAgOiBtYXBwaW5nLnNvdXJjZTtcbiAgICAgICAgbm9kZS5hZGQobmV3IFNvdXJjZU5vZGUobWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZy5uYW1lKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIEFkZCBhIGNodW5rIG9mIGdlbmVyYXRlZCBKUyB0byB0aGlzIHNvdXJjZSBub2RlLlxuICpcbiAqIEBwYXJhbSBhQ2h1bmsgQSBzdHJpbmcgc25pcHBldCBvZiBnZW5lcmF0ZWQgSlMgY29kZSwgYW5vdGhlciBpbnN0YW5jZSBvZlxuICogICAgICAgIFNvdXJjZU5vZGUsIG9yIGFuIGFycmF5IHdoZXJlIGVhY2ggbWVtYmVyIGlzIG9uZSBvZiB0aG9zZSB0aGluZ3MuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfYWRkKGFDaHVuaykge1xuICBpZiAoQXJyYXkuaXNBcnJheShhQ2h1bmspKSB7XG4gICAgYUNodW5rLmZvckVhY2goZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICB0aGlzLmFkZChjaHVuayk7XG4gICAgfSwgdGhpcyk7XG4gIH1cbiAgZWxzZSBpZiAoYUNodW5rW2lzU291cmNlTm9kZV0gfHwgdHlwZW9mIGFDaHVuayA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmIChhQ2h1bmspIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChhQ2h1bmspO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgXCJFeHBlY3RlZCBhIFNvdXJjZU5vZGUsIHN0cmluZywgb3IgYW4gYXJyYXkgb2YgU291cmNlTm9kZXMgYW5kIHN0cmluZ3MuIEdvdCBcIiArIGFDaHVua1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZCBhIGNodW5rIG9mIGdlbmVyYXRlZCBKUyB0byB0aGUgYmVnaW5uaW5nIG9mIHRoaXMgc291cmNlIG5vZGUuXG4gKlxuICogQHBhcmFtIGFDaHVuayBBIHN0cmluZyBzbmlwcGV0IG9mIGdlbmVyYXRlZCBKUyBjb2RlLCBhbm90aGVyIGluc3RhbmNlIG9mXG4gKiAgICAgICAgU291cmNlTm9kZSwgb3IgYW4gYXJyYXkgd2hlcmUgZWFjaCBtZW1iZXIgaXMgb25lIG9mIHRob3NlIHRoaW5ncy5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfcHJlcGVuZChhQ2h1bmspIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYUNodW5rKSkge1xuICAgIGZvciAodmFyIGkgPSBhQ2h1bmsubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLnByZXBlbmQoYUNodW5rW2ldKTtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoYUNodW5rW2lzU291cmNlTm9kZV0gfHwgdHlwZW9mIGFDaHVuayA9PT0gXCJzdHJpbmdcIikge1xuICAgIHRoaXMuY2hpbGRyZW4udW5zaGlmdChhQ2h1bmspO1xuICB9XG4gIGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICBcIkV4cGVjdGVkIGEgU291cmNlTm9kZSwgc3RyaW5nLCBvciBhbiBhcnJheSBvZiBTb3VyY2VOb2RlcyBhbmQgc3RyaW5ncy4gR290IFwiICsgYUNodW5rXG4gICAgKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV2FsayBvdmVyIHRoZSB0cmVlIG9mIEpTIHNuaXBwZXRzIGluIHRoaXMgbm9kZSBhbmQgaXRzIGNoaWxkcmVuLiBUaGVcbiAqIHdhbGtpbmcgZnVuY3Rpb24gaXMgY2FsbGVkIG9uY2UgZm9yIGVhY2ggc25pcHBldCBvZiBKUyBhbmQgaXMgcGFzc2VkIHRoYXRcbiAqIHNuaXBwZXQgYW5kIHRoZSBpdHMgb3JpZ2luYWwgYXNzb2NpYXRlZCBzb3VyY2UncyBsaW5lL2NvbHVtbiBsb2NhdGlvbi5cbiAqXG4gKiBAcGFyYW0gYUZuIFRoZSB0cmF2ZXJzYWwgZnVuY3Rpb24uXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX3dhbGsoYUZuKSB7XG4gIHZhciBjaHVuaztcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjaHVuayA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgaWYgKGNodW5rW2lzU291cmNlTm9kZV0pIHtcbiAgICAgIGNodW5rLndhbGsoYUZuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoY2h1bmsgIT09ICcnKSB7XG4gICAgICAgIGFGbihjaHVuaywgeyBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgbGluZTogdGhpcy5saW5lLFxuICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiB0aGlzLmNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogTGlrZSBgU3RyaW5nLnByb3RvdHlwZS5qb2luYCBleGNlcHQgZm9yIFNvdXJjZU5vZGVzLiBJbnNlcnRzIGBhU3RyYCBiZXR3ZWVuXG4gKiBlYWNoIG9mIGB0aGlzLmNoaWxkcmVuYC5cbiAqXG4gKiBAcGFyYW0gYVNlcCBUaGUgc2VwYXJhdG9yLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24gU291cmNlTm9kZV9qb2luKGFTZXApIHtcbiAgdmFyIG5ld0NoaWxkcmVuO1xuICB2YXIgaTtcbiAgdmFyIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICBpZiAobGVuID4gMCkge1xuICAgIG5ld0NoaWxkcmVuID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbi0xOyBpKyspIHtcbiAgICAgIG5ld0NoaWxkcmVuLnB1c2godGhpcy5jaGlsZHJlbltpXSk7XG4gICAgICBuZXdDaGlsZHJlbi5wdXNoKGFTZXApO1xuICAgIH1cbiAgICBuZXdDaGlsZHJlbi5wdXNoKHRoaXMuY2hpbGRyZW5baV0pO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXdDaGlsZHJlbjtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsbCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Ugb24gdGhlIHZlcnkgcmlnaHQtbW9zdCBzb3VyY2Ugc25pcHBldC4gVXNlZnVsXG4gKiBmb3IgdHJpbW1pbmcgd2hpdGVzcGFjZSBmcm9tIHRoZSBlbmQgb2YgYSBzb3VyY2Ugbm9kZSwgZXRjLlxuICpcbiAqIEBwYXJhbSBhUGF0dGVybiBUaGUgcGF0dGVybiB0byByZXBsYWNlLlxuICogQHBhcmFtIGFSZXBsYWNlbWVudCBUaGUgdGhpbmcgdG8gcmVwbGFjZSB0aGUgcGF0dGVybiB3aXRoLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5yZXBsYWNlUmlnaHQgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX3JlcGxhY2VSaWdodChhUGF0dGVybiwgYVJlcGxhY2VtZW50KSB7XG4gIHZhciBsYXN0Q2hpbGQgPSB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gIGlmIChsYXN0Q2hpbGRbaXNTb3VyY2VOb2RlXSkge1xuICAgIGxhc3RDaGlsZC5yZXBsYWNlUmlnaHQoYVBhdHRlcm4sIGFSZXBsYWNlbWVudCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGxhc3RDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV0gPSBsYXN0Q2hpbGQucmVwbGFjZShhUGF0dGVybiwgYVJlcGxhY2VtZW50KTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goJycucmVwbGFjZShhUGF0dGVybiwgYVJlcGxhY2VtZW50KSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGEgc291cmNlIGZpbGUuIFRoaXMgd2lsbCBiZSBhZGRlZCB0byB0aGUgU291cmNlTWFwR2VuZXJhdG9yXG4gKiBpbiB0aGUgc291cmNlc0NvbnRlbnQgZmllbGQuXG4gKlxuICogQHBhcmFtIGFTb3VyY2VGaWxlIFRoZSBmaWxlbmFtZSBvZiB0aGUgc291cmNlIGZpbGVcbiAqIEBwYXJhbSBhU291cmNlQ29udGVudCBUaGUgY29udGVudCBvZiB0aGUgc291cmNlIGZpbGVcbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUuc2V0U291cmNlQ29udGVudCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU5vZGVfc2V0U291cmNlQ29udGVudChhU291cmNlRmlsZSwgYVNvdXJjZUNvbnRlbnQpIHtcbiAgICB0aGlzLnNvdXJjZUNvbnRlbnRzW3V0aWwudG9TZXRTdHJpbmcoYVNvdXJjZUZpbGUpXSA9IGFTb3VyY2VDb250ZW50O1xuICB9O1xuXG4vKipcbiAqIFdhbGsgb3ZlciB0aGUgdHJlZSBvZiBTb3VyY2VOb2Rlcy4gVGhlIHdhbGtpbmcgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciBlYWNoXG4gKiBzb3VyY2UgZmlsZSBjb250ZW50IGFuZCBpcyBwYXNzZWQgdGhlIGZpbGVuYW1lIGFuZCBzb3VyY2UgY29udGVudC5cbiAqXG4gKiBAcGFyYW0gYUZuIFRoZSB0cmF2ZXJzYWwgZnVuY3Rpb24uXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLndhbGtTb3VyY2VDb250ZW50cyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU5vZGVfd2Fsa1NvdXJjZUNvbnRlbnRzKGFGbikge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jaGlsZHJlbltpXVtpc1NvdXJjZU5vZGVdKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5baV0ud2Fsa1NvdXJjZUNvbnRlbnRzKGFGbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZXMgPSBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUNvbnRlbnRzKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYUZuKHV0aWwuZnJvbVNldFN0cmluZyhzb3VyY2VzW2ldKSwgdGhpcy5zb3VyY2VDb250ZW50c1tzb3VyY2VzW2ldXSk7XG4gICAgfVxuICB9O1xuXG4vKipcbiAqIFJldHVybiB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgc291cmNlIG5vZGUuIFdhbGtzIG92ZXIgdGhlIHRyZWVcbiAqIGFuZCBjb25jYXRlbmF0ZXMgYWxsIHRoZSB2YXJpb3VzIHNuaXBwZXRzIHRvZ2V0aGVyIHRvIG9uZSBzdHJpbmcuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gU291cmNlTm9kZV90b1N0cmluZygpIHtcbiAgdmFyIHN0ciA9IFwiXCI7XG4gIHRoaXMud2FsayhmdW5jdGlvbiAoY2h1bmspIHtcbiAgICBzdHIgKz0gY2h1bms7XG4gIH0pO1xuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBzb3VyY2Ugbm9kZSBhbG9uZyB3aXRoIGEgc291cmNlXG4gKiBtYXAuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLnRvU3RyaW5nV2l0aFNvdXJjZU1hcCA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfdG9TdHJpbmdXaXRoU291cmNlTWFwKGFBcmdzKSB7XG4gIHZhciBnZW5lcmF0ZWQgPSB7XG4gICAgY29kZTogXCJcIixcbiAgICBsaW5lOiAxLFxuICAgIGNvbHVtbjogMFxuICB9O1xuICB2YXIgbWFwID0gbmV3IFNvdXJjZU1hcEdlbmVyYXRvcihhQXJncyk7XG4gIHZhciBzb3VyY2VNYXBwaW5nQWN0aXZlID0gZmFsc2U7XG4gIHZhciBsYXN0T3JpZ2luYWxTb3VyY2UgPSBudWxsO1xuICB2YXIgbGFzdE9yaWdpbmFsTGluZSA9IG51bGw7XG4gIHZhciBsYXN0T3JpZ2luYWxDb2x1bW4gPSBudWxsO1xuICB2YXIgbGFzdE9yaWdpbmFsTmFtZSA9IG51bGw7XG4gIHRoaXMud2FsayhmdW5jdGlvbiAoY2h1bmssIG9yaWdpbmFsKSB7XG4gICAgZ2VuZXJhdGVkLmNvZGUgKz0gY2h1bms7XG4gICAgaWYgKG9yaWdpbmFsLnNvdXJjZSAhPT0gbnVsbFxuICAgICAgICAmJiBvcmlnaW5hbC5saW5lICE9PSBudWxsXG4gICAgICAgICYmIG9yaWdpbmFsLmNvbHVtbiAhPT0gbnVsbCkge1xuICAgICAgaWYobGFzdE9yaWdpbmFsU291cmNlICE9PSBvcmlnaW5hbC5zb3VyY2VcbiAgICAgICAgIHx8IGxhc3RPcmlnaW5hbExpbmUgIT09IG9yaWdpbmFsLmxpbmVcbiAgICAgICAgIHx8IGxhc3RPcmlnaW5hbENvbHVtbiAhPT0gb3JpZ2luYWwuY29sdW1uXG4gICAgICAgICB8fCBsYXN0T3JpZ2luYWxOYW1lICE9PSBvcmlnaW5hbC5uYW1lKSB7XG4gICAgICAgIG1hcC5hZGRNYXBwaW5nKHtcbiAgICAgICAgICBzb3VyY2U6IG9yaWdpbmFsLnNvdXJjZSxcbiAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgbGluZTogb3JpZ2luYWwubGluZSxcbiAgICAgICAgICAgIGNvbHVtbjogb3JpZ2luYWwuY29sdW1uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZW5lcmF0ZWQ6IHtcbiAgICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZC5saW5lLFxuICAgICAgICAgICAgY29sdW1uOiBnZW5lcmF0ZWQuY29sdW1uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBuYW1lOiBvcmlnaW5hbC5uYW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbGFzdE9yaWdpbmFsU291cmNlID0gb3JpZ2luYWwuc291cmNlO1xuICAgICAgbGFzdE9yaWdpbmFsTGluZSA9IG9yaWdpbmFsLmxpbmU7XG4gICAgICBsYXN0T3JpZ2luYWxDb2x1bW4gPSBvcmlnaW5hbC5jb2x1bW47XG4gICAgICBsYXN0T3JpZ2luYWxOYW1lID0gb3JpZ2luYWwubmFtZTtcbiAgICAgIHNvdXJjZU1hcHBpbmdBY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc291cmNlTWFwcGluZ0FjdGl2ZSkge1xuICAgICAgbWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICBnZW5lcmF0ZWQ6IHtcbiAgICAgICAgICBsaW5lOiBnZW5lcmF0ZWQubGluZSxcbiAgICAgICAgICBjb2x1bW46IGdlbmVyYXRlZC5jb2x1bW5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBsYXN0T3JpZ2luYWxTb3VyY2UgPSBudWxsO1xuICAgICAgc291cmNlTWFwcGluZ0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpZHggPSAwLCBsZW5ndGggPSBjaHVuay5sZW5ndGg7IGlkeCA8IGxlbmd0aDsgaWR4KyspIHtcbiAgICAgIGlmIChjaHVuay5jaGFyQ29kZUF0KGlkeCkgPT09IE5FV0xJTkVfQ09ERSkge1xuICAgICAgICBnZW5lcmF0ZWQubGluZSsrO1xuICAgICAgICBnZW5lcmF0ZWQuY29sdW1uID0gMDtcbiAgICAgICAgLy8gTWFwcGluZ3MgZW5kIGF0IGVvbFxuICAgICAgICBpZiAoaWR4ICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgbGFzdE9yaWdpbmFsU291cmNlID0gbnVsbDtcbiAgICAgICAgICBzb3VyY2VNYXBwaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlTWFwcGluZ0FjdGl2ZSkge1xuICAgICAgICAgIG1hcC5hZGRNYXBwaW5nKHtcbiAgICAgICAgICAgIHNvdXJjZTogb3JpZ2luYWwuc291cmNlLFxuICAgICAgICAgICAgb3JpZ2luYWw6IHtcbiAgICAgICAgICAgICAgbGluZTogb3JpZ2luYWwubGluZSxcbiAgICAgICAgICAgICAgY29sdW1uOiBvcmlnaW5hbC5jb2x1bW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZW5lcmF0ZWQ6IHtcbiAgICAgICAgICAgICAgbGluZTogZ2VuZXJhdGVkLmxpbmUsXG4gICAgICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkLmNvbHVtblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hbWU6IG9yaWdpbmFsLm5hbWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2VuZXJhdGVkLmNvbHVtbisrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHRoaXMud2Fsa1NvdXJjZUNvbnRlbnRzKGZ1bmN0aW9uIChzb3VyY2VGaWxlLCBzb3VyY2VDb250ZW50KSB7XG4gICAgbWFwLnNldFNvdXJjZUNvbnRlbnQoc291cmNlRmlsZSwgc291cmNlQ29udGVudCk7XG4gIH0pO1xuXG4gIHJldHVybiB7IGNvZGU6IGdlbmVyYXRlZC5jb2RlLCBtYXA6IG1hcCB9O1xufTtcblxuZXhwb3J0cy5Tb3VyY2VOb2RlID0gU291cmNlTm9kZTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxuLyoqXG4gKiBUaGlzIGlzIGEgaGVscGVyIGZ1bmN0aW9uIGZvciBnZXR0aW5nIHZhbHVlcyBmcm9tIHBhcmFtZXRlci9vcHRpb25zXG4gKiBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSBhcmdzIFRoZSBvYmplY3Qgd2UgYXJlIGV4dHJhY3RpbmcgdmFsdWVzIGZyb21cbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB3ZSBhcmUgZ2V0dGluZy5cbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgQW4gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGlmIHRoZSBwcm9wZXJ0eSBpcyBtaXNzaW5nXG4gKiBmcm9tIHRoZSBvYmplY3QuIElmIHRoaXMgaXMgbm90IHNwZWNpZmllZCBhbmQgdGhlIHByb3BlcnR5IGlzIG1pc3NpbmcsIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqL1xuZnVuY3Rpb24gZ2V0QXJnKGFBcmdzLCBhTmFtZSwgYURlZmF1bHRWYWx1ZSkge1xuICBpZiAoYU5hbWUgaW4gYUFyZ3MpIHtcbiAgICByZXR1cm4gYUFyZ3NbYU5hbWVdO1xuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICByZXR1cm4gYURlZmF1bHRWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGFOYW1lICsgJ1wiIGlzIGEgcmVxdWlyZWQgYXJndW1lbnQuJyk7XG4gIH1cbn1cbmV4cG9ydHMuZ2V0QXJnID0gZ2V0QXJnO1xuXG52YXIgdXJsUmVnZXhwID0gL14oPzooW1xcdytcXC0uXSspOik/XFwvXFwvKD86KFxcdys6XFx3KylAKT8oW1xcdy4tXSopKD86OihcXGQrKSk/KC4qKSQvO1xudmFyIGRhdGFVcmxSZWdleHAgPSAvXmRhdGE6LitcXCwuKyQvO1xuXG5mdW5jdGlvbiB1cmxQYXJzZShhVXJsKSB7XG4gIHZhciBtYXRjaCA9IGFVcmwubWF0Y2godXJsUmVnZXhwKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2NoZW1lOiBtYXRjaFsxXSxcbiAgICBhdXRoOiBtYXRjaFsyXSxcbiAgICBob3N0OiBtYXRjaFszXSxcbiAgICBwb3J0OiBtYXRjaFs0XSxcbiAgICBwYXRoOiBtYXRjaFs1XVxuICB9O1xufVxuZXhwb3J0cy51cmxQYXJzZSA9IHVybFBhcnNlO1xuXG5mdW5jdGlvbiB1cmxHZW5lcmF0ZShhUGFyc2VkVXJsKSB7XG4gIHZhciB1cmwgPSAnJztcbiAgaWYgKGFQYXJzZWRVcmwuc2NoZW1lKSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwuc2NoZW1lICsgJzonO1xuICB9XG4gIHVybCArPSAnLy8nO1xuICBpZiAoYVBhcnNlZFVybC5hdXRoKSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwuYXV0aCArICdAJztcbiAgfVxuICBpZiAoYVBhcnNlZFVybC5ob3N0KSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwuaG9zdDtcbiAgfVxuICBpZiAoYVBhcnNlZFVybC5wb3J0KSB7XG4gICAgdXJsICs9IFwiOlwiICsgYVBhcnNlZFVybC5wb3J0XG4gIH1cbiAgaWYgKGFQYXJzZWRVcmwucGF0aCkge1xuICAgIHVybCArPSBhUGFyc2VkVXJsLnBhdGg7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn1cbmV4cG9ydHMudXJsR2VuZXJhdGUgPSB1cmxHZW5lcmF0ZTtcblxuLyoqXG4gKiBOb3JtYWxpemVzIGEgcGF0aCwgb3IgdGhlIHBhdGggcG9ydGlvbiBvZiBhIFVSTDpcbiAqXG4gKiAtIFJlcGxhY2VzIGNvbnNlY3V0aXZlIHNsYXNoZXMgd2l0aCBvbmUgc2xhc2guXG4gKiAtIFJlbW92ZXMgdW5uZWNlc3NhcnkgJy4nIHBhcnRzLlxuICogLSBSZW1vdmVzIHVubmVjZXNzYXJ5ICc8ZGlyPi8uLicgcGFydHMuXG4gKlxuICogQmFzZWQgb24gY29kZSBpbiB0aGUgTm9kZS5qcyAncGF0aCcgY29yZSBtb2R1bGUuXG4gKlxuICogQHBhcmFtIGFQYXRoIFRoZSBwYXRoIG9yIHVybCB0byBub3JtYWxpemUuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShhUGF0aCkge1xuICB2YXIgcGF0aCA9IGFQYXRoO1xuICB2YXIgdXJsID0gdXJsUGFyc2UoYVBhdGgpO1xuICBpZiAodXJsKSB7XG4gICAgaWYgKCF1cmwucGF0aCkge1xuICAgICAgcmV0dXJuIGFQYXRoO1xuICAgIH1cbiAgICBwYXRoID0gdXJsLnBhdGg7XG4gIH1cbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCk7XG5cbiAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgvXFwvKy8pO1xuICBmb3IgKHZhciBwYXJ0LCB1cCA9IDAsIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXAgPiAwKSB7XG4gICAgICBpZiAocGFydCA9PT0gJycpIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHBhcnQgaXMgYmxhbmsgaWYgdGhlIHBhdGggaXMgYWJzb2x1dGUuIFRyeWluZyB0byBnb1xuICAgICAgICAvLyBhYm92ZSB0aGUgcm9vdCBpcyBhIG5vLW9wLiBUaGVyZWZvcmUgd2UgY2FuIHJlbW92ZSBhbGwgJy4uJyBwYXJ0c1xuICAgICAgICAvLyBkaXJlY3RseSBhZnRlciB0aGUgcm9vdC5cbiAgICAgICAgcGFydHMuc3BsaWNlKGkgKyAxLCB1cCk7XG4gICAgICAgIHVwID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnRzLnNwbGljZShpLCAyKTtcbiAgICAgICAgdXAtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGF0aCA9IHBhcnRzLmpvaW4oJy8nKTtcblxuICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICBwYXRoID0gaXNBYnNvbHV0ZSA/ICcvJyA6ICcuJztcbiAgfVxuXG4gIGlmICh1cmwpIHtcbiAgICB1cmwucGF0aCA9IHBhdGg7XG4gICAgcmV0dXJuIHVybEdlbmVyYXRlKHVybCk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5leHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTtcblxuLyoqXG4gKiBKb2lucyB0d28gcGF0aHMvVVJMcy5cbiAqXG4gKiBAcGFyYW0gYVJvb3QgVGhlIHJvb3QgcGF0aCBvciBVUkwuXG4gKiBAcGFyYW0gYVBhdGggVGhlIHBhdGggb3IgVVJMIHRvIGJlIGpvaW5lZCB3aXRoIHRoZSByb290LlxuICpcbiAqIC0gSWYgYVBhdGggaXMgYSBVUkwgb3IgYSBkYXRhIFVSSSwgYVBhdGggaXMgcmV0dXJuZWQsIHVubGVzcyBhUGF0aCBpcyBhXG4gKiAgIHNjaGVtZS1yZWxhdGl2ZSBVUkw6IFRoZW4gdGhlIHNjaGVtZSBvZiBhUm9vdCwgaWYgYW55LCBpcyBwcmVwZW5kZWRcbiAqICAgZmlyc3QuXG4gKiAtIE90aGVyd2lzZSBhUGF0aCBpcyBhIHBhdGguIElmIGFSb290IGlzIGEgVVJMLCB0aGVuIGl0cyBwYXRoIHBvcnRpb25cbiAqICAgaXMgdXBkYXRlZCB3aXRoIHRoZSByZXN1bHQgYW5kIGFSb290IGlzIHJldHVybmVkLiBPdGhlcndpc2UgdGhlIHJlc3VsdFxuICogICBpcyByZXR1cm5lZC5cbiAqICAgLSBJZiBhUGF0aCBpcyBhYnNvbHV0ZSwgdGhlIHJlc3VsdCBpcyBhUGF0aC5cbiAqICAgLSBPdGhlcndpc2UgdGhlIHR3byBwYXRocyBhcmUgam9pbmVkIHdpdGggYSBzbGFzaC5cbiAqIC0gSm9pbmluZyBmb3IgZXhhbXBsZSAnaHR0cDovLycgYW5kICd3d3cuZXhhbXBsZS5jb20nIGlzIGFsc28gc3VwcG9ydGVkLlxuICovXG5mdW5jdGlvbiBqb2luKGFSb290LCBhUGF0aCkge1xuICBpZiAoYVJvb3QgPT09IFwiXCIpIHtcbiAgICBhUm9vdCA9IFwiLlwiO1xuICB9XG4gIGlmIChhUGF0aCA9PT0gXCJcIikge1xuICAgIGFQYXRoID0gXCIuXCI7XG4gIH1cbiAgdmFyIGFQYXRoVXJsID0gdXJsUGFyc2UoYVBhdGgpO1xuICB2YXIgYVJvb3RVcmwgPSB1cmxQYXJzZShhUm9vdCk7XG4gIGlmIChhUm9vdFVybCkge1xuICAgIGFSb290ID0gYVJvb3RVcmwucGF0aCB8fCAnLyc7XG4gIH1cblxuICAvLyBgam9pbihmb28sICcvL3d3dy5leGFtcGxlLm9yZycpYFxuICBpZiAoYVBhdGhVcmwgJiYgIWFQYXRoVXJsLnNjaGVtZSkge1xuICAgIGlmIChhUm9vdFVybCkge1xuICAgICAgYVBhdGhVcmwuc2NoZW1lID0gYVJvb3RVcmwuc2NoZW1lO1xuICAgIH1cbiAgICByZXR1cm4gdXJsR2VuZXJhdGUoYVBhdGhVcmwpO1xuICB9XG5cbiAgaWYgKGFQYXRoVXJsIHx8IGFQYXRoLm1hdGNoKGRhdGFVcmxSZWdleHApKSB7XG4gICAgcmV0dXJuIGFQYXRoO1xuICB9XG5cbiAgLy8gYGpvaW4oJ2h0dHA6Ly8nLCAnd3d3LmV4YW1wbGUuY29tJylgXG4gIGlmIChhUm9vdFVybCAmJiAhYVJvb3RVcmwuaG9zdCAmJiAhYVJvb3RVcmwucGF0aCkge1xuICAgIGFSb290VXJsLmhvc3QgPSBhUGF0aDtcbiAgICByZXR1cm4gdXJsR2VuZXJhdGUoYVJvb3RVcmwpO1xuICB9XG5cbiAgdmFyIGpvaW5lZCA9IGFQYXRoLmNoYXJBdCgwKSA9PT0gJy8nXG4gICAgPyBhUGF0aFxuICAgIDogbm9ybWFsaXplKGFSb290LnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgYVBhdGgpO1xuXG4gIGlmIChhUm9vdFVybCkge1xuICAgIGFSb290VXJsLnBhdGggPSBqb2luZWQ7XG4gICAgcmV0dXJuIHVybEdlbmVyYXRlKGFSb290VXJsKTtcbiAgfVxuICByZXR1cm4gam9pbmVkO1xufVxuZXhwb3J0cy5qb2luID0gam9pbjtcblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24gKGFQYXRoKSB7XG4gIHJldHVybiBhUGF0aC5jaGFyQXQoMCkgPT09ICcvJyB8fCB1cmxSZWdleHAudGVzdChhUGF0aCk7XG59O1xuXG4vKipcbiAqIE1ha2UgYSBwYXRoIHJlbGF0aXZlIHRvIGEgVVJMIG9yIGFub3RoZXIgcGF0aC5cbiAqXG4gKiBAcGFyYW0gYVJvb3QgVGhlIHJvb3QgcGF0aCBvciBVUkwuXG4gKiBAcGFyYW0gYVBhdGggVGhlIHBhdGggb3IgVVJMIHRvIGJlIG1hZGUgcmVsYXRpdmUgdG8gYVJvb3QuXG4gKi9cbmZ1bmN0aW9uIHJlbGF0aXZlKGFSb290LCBhUGF0aCkge1xuICBpZiAoYVJvb3QgPT09IFwiXCIpIHtcbiAgICBhUm9vdCA9IFwiLlwiO1xuICB9XG5cbiAgYVJvb3QgPSBhUm9vdC5yZXBsYWNlKC9cXC8kLywgJycpO1xuXG4gIC8vIEl0IGlzIHBvc3NpYmxlIGZvciB0aGUgcGF0aCB0byBiZSBhYm92ZSB0aGUgcm9vdC4gSW4gdGhpcyBjYXNlLCBzaW1wbHlcbiAgLy8gY2hlY2tpbmcgd2hldGhlciB0aGUgcm9vdCBpcyBhIHByZWZpeCBvZiB0aGUgcGF0aCB3b24ndCB3b3JrLiBJbnN0ZWFkLCB3ZVxuICAvLyBuZWVkIHRvIHJlbW92ZSBjb21wb25lbnRzIGZyb20gdGhlIHJvb3Qgb25lIGJ5IG9uZSwgdW50aWwgZWl0aGVyIHdlIGZpbmRcbiAgLy8gYSBwcmVmaXggdGhhdCBmaXRzLCBvciB3ZSBydW4gb3V0IG9mIGNvbXBvbmVudHMgdG8gcmVtb3ZlLlxuICB2YXIgbGV2ZWwgPSAwO1xuICB3aGlsZSAoYVBhdGguaW5kZXhPZihhUm9vdCArICcvJykgIT09IDApIHtcbiAgICB2YXIgaW5kZXggPSBhUm9vdC5sYXN0SW5kZXhPZihcIi9cIik7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuIGFQYXRoO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBvbmx5IHBhcnQgb2YgdGhlIHJvb3QgdGhhdCBpcyBsZWZ0IGlzIHRoZSBzY2hlbWUgKGkuZS4gaHR0cDovLyxcbiAgICAvLyBmaWxlOi8vLywgZXRjLiksIG9uZSBvciBtb3JlIHNsYXNoZXMgKC8pLCBvciBzaW1wbHkgbm90aGluZyBhdCBhbGwsIHdlXG4gICAgLy8gaGF2ZSBleGhhdXN0ZWQgYWxsIGNvbXBvbmVudHMsIHNvIHRoZSBwYXRoIGlzIG5vdCByZWxhdGl2ZSB0byB0aGUgcm9vdC5cbiAgICBhUm9vdCA9IGFSb290LnNsaWNlKDAsIGluZGV4KTtcbiAgICBpZiAoYVJvb3QubWF0Y2goL14oW15cXC9dKzpcXC8pP1xcLyokLykpIHtcbiAgICAgIHJldHVybiBhUGF0aDtcbiAgICB9XG5cbiAgICArK2xldmVsO1xuICB9XG5cbiAgLy8gTWFrZSBzdXJlIHdlIGFkZCBhIFwiLi4vXCIgZm9yIGVhY2ggY29tcG9uZW50IHdlIHJlbW92ZWQgZnJvbSB0aGUgcm9vdC5cbiAgcmV0dXJuIEFycmF5KGxldmVsICsgMSkuam9pbihcIi4uL1wiKSArIGFQYXRoLnN1YnN0cihhUm9vdC5sZW5ndGggKyAxKTtcbn1cbmV4cG9ydHMucmVsYXRpdmUgPSByZWxhdGl2ZTtcblxudmFyIHN1cHBvcnRzTnVsbFByb3RvID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAhKCdfX3Byb3RvX18nIGluIG9iaik7XG59KCkpO1xuXG5mdW5jdGlvbiBpZGVudGl0eSAocykge1xuICByZXR1cm4gcztcbn1cblxuLyoqXG4gKiBCZWNhdXNlIGJlaGF2aW9yIGdvZXMgd2Fja3kgd2hlbiB5b3Ugc2V0IGBfX3Byb3RvX19gIG9uIG9iamVjdHMsIHdlXG4gKiBoYXZlIHRvIHByZWZpeCBhbGwgdGhlIHN0cmluZ3MgaW4gb3VyIHNldCB3aXRoIGFuIGFyYml0cmFyeSBjaGFyYWN0ZXIuXG4gKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3NvdXJjZS1tYXAvcHVsbC8zMSBhbmRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3NvdXJjZS1tYXAvaXNzdWVzLzMwXG4gKlxuICogQHBhcmFtIFN0cmluZyBhU3RyXG4gKi9cbmZ1bmN0aW9uIHRvU2V0U3RyaW5nKGFTdHIpIHtcbiAgaWYgKGlzUHJvdG9TdHJpbmcoYVN0cikpIHtcbiAgICByZXR1cm4gJyQnICsgYVN0cjtcbiAgfVxuXG4gIHJldHVybiBhU3RyO1xufVxuZXhwb3J0cy50b1NldFN0cmluZyA9IHN1cHBvcnRzTnVsbFByb3RvID8gaWRlbnRpdHkgOiB0b1NldFN0cmluZztcblxuZnVuY3Rpb24gZnJvbVNldFN0cmluZyhhU3RyKSB7XG4gIGlmIChpc1Byb3RvU3RyaW5nKGFTdHIpKSB7XG4gICAgcmV0dXJuIGFTdHIuc2xpY2UoMSk7XG4gIH1cblxuICByZXR1cm4gYVN0cjtcbn1cbmV4cG9ydHMuZnJvbVNldFN0cmluZyA9IHN1cHBvcnRzTnVsbFByb3RvID8gaWRlbnRpdHkgOiBmcm9tU2V0U3RyaW5nO1xuXG5mdW5jdGlvbiBpc1Byb3RvU3RyaW5nKHMpIHtcbiAgaWYgKCFzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IHMubGVuZ3RoO1xuXG4gIGlmIChsZW5ndGggPCA5IC8qIFwiX19wcm90b19fXCIubGVuZ3RoICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHMuY2hhckNvZGVBdChsZW5ndGggLSAxKSAhPT0gOTUgIC8qICdfJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDIpICE9PSA5NSAgLyogJ18nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gMykgIT09IDExMSAvKiAnbycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA0KSAhPT0gMTE2IC8qICd0JyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDUpICE9PSAxMTEgLyogJ28nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNikgIT09IDExNCAvKiAncicgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA3KSAhPT0gMTEyIC8qICdwJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDgpICE9PSA5NSAgLyogJ18nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gOSkgIT09IDk1ICAvKiAnXycgKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gbGVuZ3RoIC0gMTA7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKHMuY2hhckNvZGVBdChpKSAhPT0gMzYgLyogJyQnICovKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQ29tcGFyYXRvciBiZXR3ZWVuIHR3byBtYXBwaW5ncyB3aGVyZSB0aGUgb3JpZ2luYWwgcG9zaXRpb25zIGFyZSBjb21wYXJlZC5cbiAqXG4gKiBPcHRpb25hbGx5IHBhc3MgaW4gYHRydWVgIGFzIGBvbmx5Q29tcGFyZUdlbmVyYXRlZGAgdG8gY29uc2lkZXIgdHdvXG4gKiBtYXBwaW5ncyB3aXRoIHRoZSBzYW1lIG9yaWdpbmFsIHNvdXJjZS9saW5lL2NvbHVtbiwgYnV0IGRpZmZlcmVudCBnZW5lcmF0ZWRcbiAqIGxpbmUgYW5kIGNvbHVtbiB0aGUgc2FtZS4gVXNlZnVsIHdoZW4gc2VhcmNoaW5nIGZvciBhIG1hcHBpbmcgd2l0aCBhXG4gKiBzdHViYmVkIG91dCBtYXBwaW5nLlxuICovXG5mdW5jdGlvbiBjb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyhtYXBwaW5nQSwgbWFwcGluZ0IsIG9ubHlDb21wYXJlT3JpZ2luYWwpIHtcbiAgdmFyIGNtcCA9IHN0cmNtcChtYXBwaW5nQS5zb3VyY2UsIG1hcHBpbmdCLnNvdXJjZSk7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxMaW5lIC0gbWFwcGluZ0Iub3JpZ2luYWxMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsQ29sdW1uIC0gbWFwcGluZ0Iub3JpZ2luYWxDb2x1bW47XG4gIGlmIChjbXAgIT09IDAgfHwgb25seUNvbXBhcmVPcmlnaW5hbCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW4gLSBtYXBwaW5nQi5nZW5lcmF0ZWRDb2x1bW47XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZSAtIG1hcHBpbmdCLmdlbmVyYXRlZExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgcmV0dXJuIHN0cmNtcChtYXBwaW5nQS5uYW1lLCBtYXBwaW5nQi5uYW1lKTtcbn1cbmV4cG9ydHMuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMgPSBjb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucztcblxuLyoqXG4gKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdpdGggZGVmbGF0ZWQgc291cmNlIGFuZCBuYW1lIGluZGljZXMgd2hlcmVcbiAqIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb25zIGFyZSBjb21wYXJlZC5cbiAqXG4gKiBPcHRpb25hbGx5IHBhc3MgaW4gYHRydWVgIGFzIGBvbmx5Q29tcGFyZUdlbmVyYXRlZGAgdG8gY29uc2lkZXIgdHdvXG4gKiBtYXBwaW5ncyB3aXRoIHRoZSBzYW1lIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4sIGJ1dCBkaWZmZXJlbnRcbiAqIHNvdXJjZS9uYW1lL29yaWdpbmFsIGxpbmUgYW5kIGNvbHVtbiB0aGUgc2FtZS4gVXNlZnVsIHdoZW4gc2VhcmNoaW5nIGZvciBhXG4gKiBtYXBwaW5nIHdpdGggYSBzdHViYmVkIG91dCBtYXBwaW5nLlxuICovXG5mdW5jdGlvbiBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZChtYXBwaW5nQSwgbWFwcGluZ0IsIG9ubHlDb21wYXJlR2VuZXJhdGVkKSB7XG4gIHZhciBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRMaW5lIC0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW4gLSBtYXBwaW5nQi5nZW5lcmF0ZWRDb2x1bW47XG4gIGlmIChjbXAgIT09IDAgfHwgb25seUNvbXBhcmVHZW5lcmF0ZWQpIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gc3RyY21wKG1hcHBpbmdBLnNvdXJjZSwgbWFwcGluZ0Iuc291cmNlKTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbExpbmUgLSBtYXBwaW5nQi5vcmlnaW5hbExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxDb2x1bW4gLSBtYXBwaW5nQi5vcmlnaW5hbENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICByZXR1cm4gc3RyY21wKG1hcHBpbmdBLm5hbWUsIG1hcHBpbmdCLm5hbWUpO1xufVxuZXhwb3J0cy5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCA9IGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkO1xuXG5mdW5jdGlvbiBzdHJjbXAoYVN0cjEsIGFTdHIyKSB7XG4gIGlmIChhU3RyMSA9PT0gYVN0cjIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChhU3RyMSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAxOyAvLyBhU3RyMiAhPT0gbnVsbFxuICB9XG5cbiAgaWYgKGFTdHIyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIC0xOyAvLyBhU3RyMSAhPT0gbnVsbFxuICB9XG5cbiAgaWYgKGFTdHIxID4gYVN0cjIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdpdGggaW5mbGF0ZWQgc291cmNlIGFuZCBuYW1lIHN0cmluZ3Mgd2hlcmVcbiAqIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb25zIGFyZSBjb21wYXJlZC5cbiAqL1xuZnVuY3Rpb24gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQobWFwcGluZ0EsIG1hcHBpbmdCKSB7XG4gIHZhciBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRMaW5lIC0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW4gLSBtYXBwaW5nQi5nZW5lcmF0ZWRDb2x1bW47XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gc3RyY21wKG1hcHBpbmdBLnNvdXJjZSwgbWFwcGluZ0Iuc291cmNlKTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbExpbmUgLSBtYXBwaW5nQi5vcmlnaW5hbExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxDb2x1bW4gLSBtYXBwaW5nQi5vcmlnaW5hbENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICByZXR1cm4gc3RyY21wKG1hcHBpbmdBLm5hbWUsIG1hcHBpbmdCLm5hbWUpO1xufVxuZXhwb3J0cy5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZCA9IGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkO1xuXG4vKipcbiAqIFN0cmlwIGFueSBKU09OIFhTU0kgYXZvaWRhbmNlIHByZWZpeCBmcm9tIHRoZSBzdHJpbmcgKGFzIGRvY3VtZW50ZWRcbiAqIGluIHRoZSBzb3VyY2UgbWFwcyBzcGVjaWZpY2F0aW9uKSwgYW5kIHRoZW4gcGFyc2UgdGhlIHN0cmluZyBhc1xuICogSlNPTi5cbiAqL1xuZnVuY3Rpb24gcGFyc2VTb3VyY2VNYXBJbnB1dChzdHIpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyLnJlcGxhY2UoL15cXCldfSdbXlxcbl0qXFxuLywgJycpKTtcbn1cbmV4cG9ydHMucGFyc2VTb3VyY2VNYXBJbnB1dCA9IHBhcnNlU291cmNlTWFwSW5wdXQ7XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgVVJMIG9mIGEgc291cmNlIGdpdmVuIHRoZSB0aGUgc291cmNlIHJvb3QsIHRoZSBzb3VyY2Unc1xuICogVVJMLCBhbmQgdGhlIHNvdXJjZSBtYXAncyBVUkwuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVTb3VyY2VVUkwoc291cmNlUm9vdCwgc291cmNlVVJMLCBzb3VyY2VNYXBVUkwpIHtcbiAgc291cmNlVVJMID0gc291cmNlVVJMIHx8ICcnO1xuXG4gIGlmIChzb3VyY2VSb290KSB7XG4gICAgLy8gVGhpcyBmb2xsb3dzIHdoYXQgQ2hyb21lIGRvZXMuXG4gICAgaWYgKHNvdXJjZVJvb3Rbc291cmNlUm9vdC5sZW5ndGggLSAxXSAhPT0gJy8nICYmIHNvdXJjZVVSTFswXSAhPT0gJy8nKSB7XG4gICAgICBzb3VyY2VSb290ICs9ICcvJztcbiAgICB9XG4gICAgLy8gVGhlIHNwZWMgc2F5czpcbiAgICAvLyAgIExpbmUgNDogQW4gb3B0aW9uYWwgc291cmNlIHJvb3QsIHVzZWZ1bCBmb3IgcmVsb2NhdGluZyBzb3VyY2VcbiAgICAvLyAgIGZpbGVzIG9uIGEgc2VydmVyIG9yIHJlbW92aW5nIHJlcGVhdGVkIHZhbHVlcyBpbiB0aGVcbiAgICAvLyAgIOKAnHNvdXJjZXPigJ0gZW50cnkuICBUaGlzIHZhbHVlIGlzIHByZXBlbmRlZCB0byB0aGUgaW5kaXZpZHVhbFxuICAgIC8vICAgZW50cmllcyBpbiB0aGUg4oCcc291cmNl4oCdIGZpZWxkLlxuICAgIHNvdXJjZVVSTCA9IHNvdXJjZVJvb3QgKyBzb3VyY2VVUkw7XG4gIH1cblxuICAvLyBIaXN0b3JpY2FsbHksIFNvdXJjZU1hcENvbnN1bWVyIGRpZCBub3QgdGFrZSB0aGUgc291cmNlTWFwVVJMIGFzXG4gIC8vIGEgcGFyYW1ldGVyLiAgVGhpcyBtb2RlIGlzIHN0aWxsIHNvbWV3aGF0IHN1cHBvcnRlZCwgd2hpY2ggaXMgd2h5XG4gIC8vIHRoaXMgY29kZSBibG9jayBpcyBjb25kaXRpb25hbC4gIEhvd2V2ZXIsIGl0J3MgcHJlZmVyYWJsZSB0byBwYXNzXG4gIC8vIHRoZSBzb3VyY2UgbWFwIFVSTCB0byBTb3VyY2VNYXBDb25zdW1lciwgc28gdGhhdCB0aGlzIGZ1bmN0aW9uXG4gIC8vIGNhbiBpbXBsZW1lbnQgdGhlIHNvdXJjZSBVUkwgcmVzb2x1dGlvbiBhbGdvcml0aG0gYXMgb3V0bGluZWQgaW5cbiAgLy8gdGhlIHNwZWMuICBUaGlzIGJsb2NrIGlzIGJhc2ljYWxseSB0aGUgZXF1aXZhbGVudCBvZjpcbiAgLy8gICAgbmV3IFVSTChzb3VyY2VVUkwsIHNvdXJjZU1hcFVSTCkudG9TdHJpbmcoKVxuICAvLyAuLi4gZXhjZXB0IGl0IGF2b2lkcyB1c2luZyBVUkwsIHdoaWNoIHdhc24ndCBhdmFpbGFibGUgaW4gdGhlXG4gIC8vIG9sZGVyIHJlbGVhc2VzIG9mIG5vZGUgc3RpbGwgc3VwcG9ydGVkIGJ5IHRoaXMgbGlicmFyeS5cbiAgLy9cbiAgLy8gVGhlIHNwZWMgc2F5czpcbiAgLy8gICBJZiB0aGUgc291cmNlcyBhcmUgbm90IGFic29sdXRlIFVSTHMgYWZ0ZXIgcHJlcGVuZGluZyBvZiB0aGVcbiAgLy8gICDigJxzb3VyY2VSb2904oCdLCB0aGUgc291cmNlcyBhcmUgcmVzb2x2ZWQgcmVsYXRpdmUgdG8gdGhlXG4gIC8vICAgU291cmNlTWFwIChsaWtlIHJlc29sdmluZyBzY3JpcHQgc3JjIGluIGEgaHRtbCBkb2N1bWVudCkuXG4gIGlmIChzb3VyY2VNYXBVUkwpIHtcbiAgICB2YXIgcGFyc2VkID0gdXJsUGFyc2Uoc291cmNlTWFwVVJMKTtcbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic291cmNlTWFwVVJMIGNvdWxkIG5vdCBiZSBwYXJzZWRcIik7XG4gICAgfVxuICAgIGlmIChwYXJzZWQucGF0aCkge1xuICAgICAgLy8gU3RyaXAgdGhlIGxhc3QgcGF0aCBjb21wb25lbnQsIGJ1dCBrZWVwIHRoZSBcIi9cIi5cbiAgICAgIHZhciBpbmRleCA9IHBhcnNlZC5wYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBwYXJzZWQucGF0aCA9IHBhcnNlZC5wYXRoLnN1YnN0cmluZygwLCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VVUkwgPSBqb2luKHVybEdlbmVyYXRlKHBhcnNlZCksIHNvdXJjZVVSTCk7XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplKHNvdXJjZVVSTCk7XG59XG5leHBvcnRzLmNvbXB1dGVTb3VyY2VVUkwgPSBjb21wdXRlU291cmNlVVJMO1xuIiwiLypcbiAqIENvcHlyaWdodCAyMDA5LTIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFLnR4dCBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuZXhwb3J0cy5Tb3VyY2VNYXBHZW5lcmF0b3IgPSByZXF1aXJlKCcuL2xpYi9zb3VyY2UtbWFwLWdlbmVyYXRvcicpLlNvdXJjZU1hcEdlbmVyYXRvcjtcbmV4cG9ydHMuU291cmNlTWFwQ29uc3VtZXIgPSByZXF1aXJlKCcuL2xpYi9zb3VyY2UtbWFwLWNvbnN1bWVyJykuU291cmNlTWFwQ29uc3VtZXI7XG5leHBvcnRzLlNvdXJjZU5vZGUgPSByZXF1aXJlKCcuL2xpYi9zb3VyY2Utbm9kZScpLlNvdXJjZU5vZGU7XG4iLCJyZXF1aXJlKCcuLycpLmluc3RhbGwoKTtcbiIsInZhciBTb3VyY2VNYXBDb25zdW1lciA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAnKS5Tb3VyY2VNYXBDb25zdW1lcjtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG52YXIgZnM7XG50cnkge1xuICBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gIGlmICghZnMuZXhpc3RzU3luYyB8fCAhZnMucmVhZEZpbGVTeW5jKSB7XG4gICAgLy8gZnMgZG9lc24ndCBoYXZlIGFsbCBtZXRob2RzIHdlIG5lZWRcbiAgICBmcyA9IG51bGw7XG4gIH1cbn0gY2F0Y2ggKGVycikge1xuICAvKiBub3AgKi9cbn1cblxudmFyIGJ1ZmZlckZyb20gPSByZXF1aXJlKCdidWZmZXItZnJvbScpO1xuXG4vLyBPbmx5IGluc3RhbGwgb25jZSBpZiBjYWxsZWQgbXVsdGlwbGUgdGltZXNcbnZhciBlcnJvckZvcm1hdHRlckluc3RhbGxlZCA9IGZhbHNlO1xudmFyIHVuY2F1Z2h0U2hpbUluc3RhbGxlZCA9IGZhbHNlO1xuXG4vLyBJZiB0cnVlLCB0aGUgY2FjaGVzIGFyZSByZXNldCBiZWZvcmUgYSBzdGFjayB0cmFjZSBmb3JtYXR0aW5nIG9wZXJhdGlvblxudmFyIGVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucyA9IGZhbHNlO1xuXG4vLyBTdXBwb3J0cyB7YnJvd3Nlciwgbm9kZSwgYXV0b31cbnZhciBlbnZpcm9ubWVudCA9IFwiYXV0b1wiO1xuXG4vLyBNYXBzIGEgZmlsZSBwYXRoIHRvIGEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGZpbGUgY29udGVudHNcbnZhciBmaWxlQ29udGVudHNDYWNoZSA9IHt9O1xuXG4vLyBNYXBzIGEgZmlsZSBwYXRoIHRvIGEgc291cmNlIG1hcCBmb3IgdGhhdCBmaWxlXG52YXIgc291cmNlTWFwQ2FjaGUgPSB7fTtcblxuLy8gUmVnZXggZm9yIGRldGVjdGluZyBzb3VyY2UgbWFwc1xudmFyIHJlU291cmNlTWFwID0gL15kYXRhOmFwcGxpY2F0aW9uXFwvanNvblteLF0rYmFzZTY0LC87XG5cbi8vIFByaW9yaXR5IGxpc3Qgb2YgcmV0cmlldmUgaGFuZGxlcnNcbnZhciByZXRyaWV2ZUZpbGVIYW5kbGVycyA9IFtdO1xudmFyIHJldHJpZXZlTWFwSGFuZGxlcnMgPSBbXTtcblxuZnVuY3Rpb24gaXNJbkJyb3dzZXIoKSB7XG4gIGlmIChlbnZpcm9ubWVudCA9PT0gXCJicm93c2VyXCIpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmIChlbnZpcm9ubWVudCA9PT0gXCJub2RlXCIpXG4gICAgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gKCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJykgJiYgISh3aW5kb3cucmVxdWlyZSAmJiB3aW5kb3cubW9kdWxlICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09IFwicmVuZGVyZXJcIikpO1xufVxuXG5mdW5jdGlvbiBoYXNHbG9iYWxQcm9jZXNzRXZlbnRFbWl0dGVyKCkge1xuICByZXR1cm4gKCh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpICYmIChwcm9jZXNzICE9PSBudWxsKSAmJiAodHlwZW9mIHByb2Nlc3Mub24gPT09ICdmdW5jdGlvbicpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlckV4ZWMobGlzdCkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmV0ID0gbGlzdFtpXShhcmcpO1xuICAgICAgaWYgKHJldCkge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxudmFyIHJldHJpZXZlRmlsZSA9IGhhbmRsZXJFeGVjKHJldHJpZXZlRmlsZUhhbmRsZXJzKTtcblxucmV0cmlldmVGaWxlSGFuZGxlcnMucHVzaChmdW5jdGlvbihwYXRoKSB7XG4gIC8vIFRyaW0gdGhlIHBhdGggdG8gbWFrZSBzdXJlIHRoZXJlIGlzIG5vIGV4dHJhIHdoaXRlc3BhY2UuXG4gIHBhdGggPSBwYXRoLnRyaW0oKTtcbiAgaWYgKC9eZmlsZTovLnRlc3QocGF0aCkpIHtcbiAgICAvLyBleGlzdHNTeW5jL3JlYWRGaWxlU3luYyBjYW4ndCBoYW5kbGUgZmlsZSBwcm90b2NvbCwgYnV0IG9uY2Ugc3RyaXBwZWQsIGl0IHdvcmtzXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvZmlsZTpcXC9cXC9cXC8oXFx3Oik/LywgZnVuY3Rpb24ocHJvdG9jb2wsIGRyaXZlKSB7XG4gICAgICByZXR1cm4gZHJpdmUgP1xuICAgICAgICAnJyA6IC8vIGZpbGU6Ly8vQzovZGlyL2ZpbGUgLT4gQzovZGlyL2ZpbGVcbiAgICAgICAgJy8nOyAvLyBmaWxlOi8vL3Jvb3QtZGlyL2ZpbGUgLT4gL3Jvb3QtZGlyL2ZpbGVcbiAgICB9KTtcbiAgfVxuICBpZiAocGF0aCBpbiBmaWxlQ29udGVudHNDYWNoZSkge1xuICAgIHJldHVybiBmaWxlQ29udGVudHNDYWNoZVtwYXRoXTtcbiAgfVxuXG4gIHZhciBjb250ZW50cyA9ICcnO1xuICB0cnkge1xuICAgIGlmICghZnMpIHtcbiAgICAgIC8vIFVzZSBTSkFYIGlmIHdlIGFyZSBpbiB0aGUgYnJvd3NlclxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBhdGgsIC8qKiBhc3luYyAqLyBmYWxzZSk7XG4gICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29udGVudHMgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhwYXRoKSkge1xuICAgICAgLy8gT3RoZXJ3aXNlLCB1c2UgdGhlIGZpbGVzeXN0ZW1cbiAgICAgIGNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKHBhdGgsICd1dGY4Jyk7XG4gICAgfVxuICB9IGNhdGNoIChlcikge1xuICAgIC8qIGlnbm9yZSBhbnkgZXJyb3JzICovXG4gIH1cblxuICByZXR1cm4gZmlsZUNvbnRlbnRzQ2FjaGVbcGF0aF0gPSBjb250ZW50cztcbn0pO1xuXG4vLyBTdXBwb3J0IFVSTHMgcmVsYXRpdmUgdG8gYSBkaXJlY3RvcnksIGJ1dCBiZSBjYXJlZnVsIGFib3V0IGEgcHJvdG9jb2wgcHJlZml4XG4vLyBpbiBjYXNlIHdlIGFyZSBpbiB0aGUgYnJvd3NlciAoaS5lLiBkaXJlY3RvcmllcyBtYXkgc3RhcnQgd2l0aCBcImh0dHA6Ly9cIiBvciBcImZpbGU6Ly8vXCIpXG5mdW5jdGlvbiBzdXBwb3J0UmVsYXRpdmVVUkwoZmlsZSwgdXJsKSB7XG4gIGlmICghZmlsZSkgcmV0dXJuIHVybDtcbiAgdmFyIGRpciA9IHBhdGguZGlybmFtZShmaWxlKTtcbiAgdmFyIG1hdGNoID0gL15cXHcrOlxcL1xcL1teXFwvXSovLmV4ZWMoZGlyKTtcbiAgdmFyIHByb3RvY29sID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcnO1xuICB2YXIgc3RhcnRQYXRoID0gZGlyLnNsaWNlKHByb3RvY29sLmxlbmd0aCk7XG4gIGlmIChwcm90b2NvbCAmJiAvXlxcL1xcd1xcOi8udGVzdChzdGFydFBhdGgpKSB7XG4gICAgLy8gaGFuZGxlIGZpbGU6Ly8vQzovIHBhdGhzXG4gICAgcHJvdG9jb2wgKz0gJy8nO1xuICAgIHJldHVybiBwcm90b2NvbCArIHBhdGgucmVzb2x2ZShkaXIuc2xpY2UocHJvdG9jb2wubGVuZ3RoKSwgdXJsKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gIH1cbiAgcmV0dXJuIHByb3RvY29sICsgcGF0aC5yZXNvbHZlKGRpci5zbGljZShwcm90b2NvbC5sZW5ndGgpLCB1cmwpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVNvdXJjZU1hcFVSTChzb3VyY2UpIHtcbiAgdmFyIGZpbGVEYXRhO1xuXG4gIGlmIChpc0luQnJvd3NlcigpKSB7XG4gICAgIHRyeSB7XG4gICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgIHhoci5vcGVuKCdHRVQnLCBzb3VyY2UsIGZhbHNlKTtcbiAgICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgICBmaWxlRGF0YSA9IHhoci5yZWFkeVN0YXRlID09PSA0ID8geGhyLnJlc3BvbnNlVGV4dCA6IG51bGw7XG5cbiAgICAgICAvLyBTdXBwb3J0IHByb3ZpZGluZyBhIHNvdXJjZU1hcHBpbmdVUkwgdmlhIHRoZSBTb3VyY2VNYXAgaGVhZGVyXG4gICAgICAgdmFyIHNvdXJjZU1hcEhlYWRlciA9IHhoci5nZXRSZXNwb25zZUhlYWRlcihcIlNvdXJjZU1hcFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJYLVNvdXJjZU1hcFwiKTtcbiAgICAgICBpZiAoc291cmNlTWFwSGVhZGVyKSB7XG4gICAgICAgICByZXR1cm4gc291cmNlTWFwSGVhZGVyO1xuICAgICAgIH1cbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICB9XG4gIH1cblxuICAvLyBHZXQgdGhlIFVSTCBvZiB0aGUgc291cmNlIG1hcFxuICBmaWxlRGF0YSA9IHJldHJpZXZlRmlsZShzb3VyY2UpO1xuICB2YXIgcmUgPSAvKD86XFwvXFwvW0AjXVsgXFx0XStzb3VyY2VNYXBwaW5nVVJMPShbXlxccydcIl0rPylbIFxcdF0qJCl8KD86XFwvXFwqW0AjXVsgXFx0XStzb3VyY2VNYXBwaW5nVVJMPShbXlxcKl0rPylbIFxcdF0qKD86XFwqXFwvKVsgXFx0XSokKS9tZztcbiAgLy8gS2VlcCBleGVjdXRpbmcgdGhlIHNlYXJjaCB0byBmaW5kIHRoZSAqbGFzdCogc291cmNlTWFwcGluZ1VSTCB0byBhdm9pZFxuICAvLyBwaWNraW5nIHVwIHNvdXJjZU1hcHBpbmdVUkxzIGZyb20gY29tbWVudHMsIHN0cmluZ3MsIGV0Yy5cbiAgdmFyIGxhc3RNYXRjaCwgbWF0Y2g7XG4gIHdoaWxlIChtYXRjaCA9IHJlLmV4ZWMoZmlsZURhdGEpKSBsYXN0TWF0Y2ggPSBtYXRjaDtcbiAgaWYgKCFsYXN0TWF0Y2gpIHJldHVybiBudWxsO1xuICByZXR1cm4gbGFzdE1hdGNoWzFdO1xufTtcblxuLy8gQ2FuIGJlIG92ZXJyaWRkZW4gYnkgdGhlIHJldHJpZXZlU291cmNlTWFwIG9wdGlvbiB0byBpbnN0YWxsLiBUYWtlcyBhXG4vLyBnZW5lcmF0ZWQgc291cmNlIGZpbGVuYW1lOyByZXR1cm5zIGEge21hcCwgb3B0aW9uYWwgdXJsfSBvYmplY3QsIG9yIG51bGwgaWZcbi8vIHRoZXJlIGlzIG5vIHNvdXJjZSBtYXAuICBUaGUgbWFwIGZpZWxkIG1heSBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgdGhlIHBhcnNlZFxuLy8gSlNPTiBvYmplY3QgKGllLCBpdCBtdXN0IGJlIGEgdmFsaWQgYXJndW1lbnQgdG8gdGhlIFNvdXJjZU1hcENvbnN1bWVyXG4vLyBjb25zdHJ1Y3RvcikuXG52YXIgcmV0cmlldmVTb3VyY2VNYXAgPSBoYW5kbGVyRXhlYyhyZXRyaWV2ZU1hcEhhbmRsZXJzKTtcbnJldHJpZXZlTWFwSGFuZGxlcnMucHVzaChmdW5jdGlvbihzb3VyY2UpIHtcbiAgdmFyIHNvdXJjZU1hcHBpbmdVUkwgPSByZXRyaWV2ZVNvdXJjZU1hcFVSTChzb3VyY2UpO1xuICBpZiAoIXNvdXJjZU1hcHBpbmdVUkwpIHJldHVybiBudWxsO1xuXG4gIC8vIFJlYWQgdGhlIGNvbnRlbnRzIG9mIHRoZSBzb3VyY2UgbWFwXG4gIHZhciBzb3VyY2VNYXBEYXRhO1xuICBpZiAocmVTb3VyY2VNYXAudGVzdChzb3VyY2VNYXBwaW5nVVJMKSkge1xuICAgIC8vIFN1cHBvcnQgc291cmNlIG1hcCBVUkwgYXMgYSBkYXRhIHVybFxuICAgIHZhciByYXdEYXRhID0gc291cmNlTWFwcGluZ1VSTC5zbGljZShzb3VyY2VNYXBwaW5nVVJMLmluZGV4T2YoJywnKSArIDEpO1xuICAgIHNvdXJjZU1hcERhdGEgPSBidWZmZXJGcm9tKHJhd0RhdGEsIFwiYmFzZTY0XCIpLnRvU3RyaW5nKCk7XG4gICAgc291cmNlTWFwcGluZ1VSTCA9IHNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdXBwb3J0IHNvdXJjZSBtYXAgVVJMcyByZWxhdGl2ZSB0byB0aGUgc291cmNlIFVSTFxuICAgIHNvdXJjZU1hcHBpbmdVUkwgPSBzdXBwb3J0UmVsYXRpdmVVUkwoc291cmNlLCBzb3VyY2VNYXBwaW5nVVJMKTtcbiAgICBzb3VyY2VNYXBEYXRhID0gcmV0cmlldmVGaWxlKHNvdXJjZU1hcHBpbmdVUkwpO1xuICB9XG5cbiAgaWYgKCFzb3VyY2VNYXBEYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVybDogc291cmNlTWFwcGluZ1VSTCxcbiAgICBtYXA6IHNvdXJjZU1hcERhdGFcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBtYXBTb3VyY2VQb3NpdGlvbihwb3NpdGlvbikge1xuICB2YXIgc291cmNlTWFwID0gc291cmNlTWFwQ2FjaGVbcG9zaXRpb24uc291cmNlXTtcbiAgaWYgKCFzb3VyY2VNYXApIHtcbiAgICAvLyBDYWxsIHRoZSAob3ZlcnJpZGVhYmxlKSByZXRyaWV2ZVNvdXJjZU1hcCBmdW5jdGlvbiB0byBnZXQgdGhlIHNvdXJjZSBtYXAuXG4gICAgdmFyIHVybEFuZE1hcCA9IHJldHJpZXZlU291cmNlTWFwKHBvc2l0aW9uLnNvdXJjZSk7XG4gICAgaWYgKHVybEFuZE1hcCkge1xuICAgICAgc291cmNlTWFwID0gc291cmNlTWFwQ2FjaGVbcG9zaXRpb24uc291cmNlXSA9IHtcbiAgICAgICAgdXJsOiB1cmxBbmRNYXAudXJsLFxuICAgICAgICBtYXA6IG5ldyBTb3VyY2VNYXBDb25zdW1lcih1cmxBbmRNYXAubWFwKVxuICAgICAgfTtcblxuICAgICAgLy8gTG9hZCBhbGwgc291cmNlcyBzdG9yZWQgaW5saW5lIHdpdGggdGhlIHNvdXJjZSBtYXAgaW50byB0aGUgZmlsZSBjYWNoZVxuICAgICAgLy8gdG8gcHJldGVuZCBsaWtlIHRoZXkgYXJlIGFscmVhZHkgbG9hZGVkLiBUaGV5IG1heSBub3QgZXhpc3Qgb24gZGlzay5cbiAgICAgIGlmIChzb3VyY2VNYXAubWFwLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICAgIHNvdXJjZU1hcC5tYXAuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZSwgaSkge1xuICAgICAgICAgIHZhciBjb250ZW50cyA9IHNvdXJjZU1hcC5tYXAuc291cmNlc0NvbnRlbnRbaV07XG4gICAgICAgICAgaWYgKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gc3VwcG9ydFJlbGF0aXZlVVJMKHNvdXJjZU1hcC51cmwsIHNvdXJjZSk7XG4gICAgICAgICAgICBmaWxlQ29udGVudHNDYWNoZVt1cmxdID0gY29udGVudHM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc291cmNlTWFwID0gc291cmNlTWFwQ2FjaGVbcG9zaXRpb24uc291cmNlXSA9IHtcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBtYXA6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzb2x2ZSB0aGUgc291cmNlIFVSTCByZWxhdGl2ZSB0byB0aGUgVVJMIG9mIHRoZSBzb3VyY2UgbWFwXG4gIGlmIChzb3VyY2VNYXAgJiYgc291cmNlTWFwLm1hcCkge1xuICAgIHZhciBvcmlnaW5hbFBvc2l0aW9uID0gc291cmNlTWFwLm1hcC5vcmlnaW5hbFBvc2l0aW9uRm9yKHBvc2l0aW9uKTtcblxuICAgIC8vIE9ubHkgcmV0dXJuIHRoZSBvcmlnaW5hbCBwb3NpdGlvbiBpZiBhIG1hdGNoaW5nIGxpbmUgd2FzIGZvdW5kLiBJZiBub1xuICAgIC8vIG1hdGNoaW5nIGxpbmUgaXMgZm91bmQgdGhlbiB3ZSByZXR1cm4gcG9zaXRpb24gaW5zdGVhZCwgd2hpY2ggd2lsbCBjYXVzZVxuICAgIC8vIHRoZSBzdGFjayB0cmFjZSB0byBwcmludCB0aGUgcGF0aCBhbmQgbGluZSBmb3IgdGhlIGNvbXBpbGVkIGZpbGUuIEl0IGlzXG4gICAgLy8gYmV0dGVyIHRvIGdpdmUgYSBwcmVjaXNlIGxvY2F0aW9uIGluIHRoZSBjb21waWxlZCBmaWxlIHRoYW4gYSB2YWd1ZVxuICAgIC8vIGxvY2F0aW9uIGluIHRoZSBvcmlnaW5hbCBmaWxlLlxuICAgIGlmIChvcmlnaW5hbFBvc2l0aW9uLnNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgb3JpZ2luYWxQb3NpdGlvbi5zb3VyY2UgPSBzdXBwb3J0UmVsYXRpdmVVUkwoXG4gICAgICAgIHNvdXJjZU1hcC51cmwsIG9yaWdpbmFsUG9zaXRpb24uc291cmNlKTtcbiAgICAgIHJldHVybiBvcmlnaW5hbFBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxuLy8gUGFyc2VzIGNvZGUgZ2VuZXJhdGVkIGJ5IEZvcm1hdEV2YWxPcmlnaW4oKSwgYSBmdW5jdGlvbiBpbnNpZGUgVjg6XG4vLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L3NvdXJjZS9icm93c2UvdHJ1bmsvc3JjL21lc3NhZ2VzLmpzXG5mdW5jdGlvbiBtYXBFdmFsT3JpZ2luKG9yaWdpbikge1xuICAvLyBNb3N0IGV2YWwoKSBjYWxscyBhcmUgaW4gdGhpcyBmb3JtYXRcbiAgdmFyIG1hdGNoID0gL15ldmFsIGF0IChbXihdKykgXFwoKC4rKTooXFxkKyk6KFxcZCspXFwpJC8uZXhlYyhvcmlnaW4pO1xuICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBtYXBTb3VyY2VQb3NpdGlvbih7XG4gICAgICBzb3VyY2U6IG1hdGNoWzJdLFxuICAgICAgbGluZTogK21hdGNoWzNdLFxuICAgICAgY29sdW1uOiBtYXRjaFs0XSAtIDFcbiAgICB9KTtcbiAgICByZXR1cm4gJ2V2YWwgYXQgJyArIG1hdGNoWzFdICsgJyAoJyArIHBvc2l0aW9uLnNvdXJjZSArICc6JyArXG4gICAgICBwb3NpdGlvbi5saW5lICsgJzonICsgKHBvc2l0aW9uLmNvbHVtbiArIDEpICsgJyknO1xuICB9XG5cbiAgLy8gUGFyc2UgbmVzdGVkIGV2YWwoKSBjYWxscyB1c2luZyByZWN1cnNpb25cbiAgbWF0Y2ggPSAvXmV2YWwgYXQgKFteKF0rKSBcXCgoLispXFwpJC8uZXhlYyhvcmlnaW4pO1xuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gJ2V2YWwgYXQgJyArIG1hdGNoWzFdICsgJyAoJyArIG1hcEV2YWxPcmlnaW4obWF0Y2hbMl0pICsgJyknO1xuICB9XG5cbiAgLy8gTWFrZSBzdXJlIHdlIHN0aWxsIHJldHVybiB1c2VmdWwgaW5mb3JtYXRpb24gaWYgd2UgZGlkbid0IGZpbmQgYW55dGhpbmdcbiAgcmV0dXJuIG9yaWdpbjtcbn1cblxuLy8gVGhpcyBpcyBjb3BpZWQgYWxtb3N0IHZlcmJhdGltIGZyb20gdGhlIFY4IHNvdXJjZSBjb2RlIGF0XG4vLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L3NvdXJjZS9icm93c2UvdHJ1bmsvc3JjL21lc3NhZ2VzLmpzLiBUaGVcbi8vIGltcGxlbWVudGF0aW9uIG9mIHdyYXBDYWxsU2l0ZSgpIHVzZWQgdG8ganVzdCBmb3J3YXJkIHRvIHRoZSBhY3R1YWwgc291cmNlXG4vLyBjb2RlIG9mIENhbGxTaXRlLnByb3RvdHlwZS50b1N0cmluZyBidXQgdW5mb3J0dW5hdGVseSBhIG5ldyByZWxlYXNlIG9mIFY4XG4vLyBkaWQgc29tZXRoaW5nIHRvIHRoZSBwcm90b3R5cGUgY2hhaW4gYW5kIGJyb2tlIHRoZSBzaGltLiBUaGUgb25seSBmaXggSVxuLy8gY291bGQgZmluZCB3YXMgY29weS9wYXN0ZS5cbmZ1bmN0aW9uIENhbGxTaXRlVG9TdHJpbmcoKSB7XG4gIHZhciBmaWxlTmFtZTtcbiAgdmFyIGZpbGVMb2NhdGlvbiA9IFwiXCI7XG4gIGlmICh0aGlzLmlzTmF0aXZlKCkpIHtcbiAgICBmaWxlTG9jYXRpb24gPSBcIm5hdGl2ZVwiO1xuICB9IGVsc2Uge1xuICAgIGZpbGVOYW1lID0gdGhpcy5nZXRTY3JpcHROYW1lT3JTb3VyY2VVUkwoKTtcbiAgICBpZiAoIWZpbGVOYW1lICYmIHRoaXMuaXNFdmFsKCkpIHtcbiAgICAgIGZpbGVMb2NhdGlvbiA9IHRoaXMuZ2V0RXZhbE9yaWdpbigpO1xuICAgICAgZmlsZUxvY2F0aW9uICs9IFwiLCBcIjsgIC8vIEV4cGVjdGluZyBzb3VyY2UgcG9zaXRpb24gdG8gZm9sbG93LlxuICAgIH1cblxuICAgIGlmIChmaWxlTmFtZSkge1xuICAgICAgZmlsZUxvY2F0aW9uICs9IGZpbGVOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb3VyY2UgY29kZSBkb2VzIG5vdCBvcmlnaW5hdGUgZnJvbSBhIGZpbGUgYW5kIGlzIG5vdCBuYXRpdmUsIGJ1dCB3ZVxuICAgICAgLy8gY2FuIHN0aWxsIGdldCB0aGUgc291cmNlIHBvc2l0aW9uIGluc2lkZSB0aGUgc291cmNlIHN0cmluZywgZS5nLiBpblxuICAgICAgLy8gYW4gZXZhbCBzdHJpbmcuXG4gICAgICBmaWxlTG9jYXRpb24gKz0gXCI8YW5vbnltb3VzPlwiO1xuICAgIH1cbiAgICB2YXIgbGluZU51bWJlciA9IHRoaXMuZ2V0TGluZU51bWJlcigpO1xuICAgIGlmIChsaW5lTnVtYmVyICE9IG51bGwpIHtcbiAgICAgIGZpbGVMb2NhdGlvbiArPSBcIjpcIiArIGxpbmVOdW1iZXI7XG4gICAgICB2YXIgY29sdW1uTnVtYmVyID0gdGhpcy5nZXRDb2x1bW5OdW1iZXIoKTtcbiAgICAgIGlmIChjb2x1bW5OdW1iZXIpIHtcbiAgICAgICAgZmlsZUxvY2F0aW9uICs9IFwiOlwiICsgY29sdW1uTnVtYmVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBsaW5lID0gXCJcIjtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IHRoaXMuZ2V0RnVuY3Rpb25OYW1lKCk7XG4gIHZhciBhZGRTdWZmaXggPSB0cnVlO1xuICB2YXIgaXNDb25zdHJ1Y3RvciA9IHRoaXMuaXNDb25zdHJ1Y3RvcigpO1xuICB2YXIgaXNNZXRob2RDYWxsID0gISh0aGlzLmlzVG9wbGV2ZWwoKSB8fCBpc0NvbnN0cnVjdG9yKTtcbiAgaWYgKGlzTWV0aG9kQ2FsbCkge1xuICAgIHZhciB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUoKTtcbiAgICAvLyBGaXhlcyBzaGltIHRvIGJlIGJhY2t3YXJkIGNvbXBhdGFibGUgd2l0aCBOb2RlIHYwIHRvIHY0XG4gICAgaWYgKHR5cGVOYW1lID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICB0eXBlTmFtZSA9IFwibnVsbFwiO1xuICAgIH1cbiAgICB2YXIgbWV0aG9kTmFtZSA9IHRoaXMuZ2V0TWV0aG9kTmFtZSgpO1xuICAgIGlmIChmdW5jdGlvbk5hbWUpIHtcbiAgICAgIGlmICh0eXBlTmFtZSAmJiBmdW5jdGlvbk5hbWUuaW5kZXhPZih0eXBlTmFtZSkgIT0gMCkge1xuICAgICAgICBsaW5lICs9IHR5cGVOYW1lICsgXCIuXCI7XG4gICAgICB9XG4gICAgICBsaW5lICs9IGZ1bmN0aW9uTmFtZTtcbiAgICAgIGlmIChtZXRob2ROYW1lICYmIGZ1bmN0aW9uTmFtZS5pbmRleE9mKFwiLlwiICsgbWV0aG9kTmFtZSkgIT0gZnVuY3Rpb25OYW1lLmxlbmd0aCAtIG1ldGhvZE5hbWUubGVuZ3RoIC0gMSkge1xuICAgICAgICBsaW5lICs9IFwiIFthcyBcIiArIG1ldGhvZE5hbWUgKyBcIl1cIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGluZSArPSB0eXBlTmFtZSArIFwiLlwiICsgKG1ldGhvZE5hbWUgfHwgXCI8YW5vbnltb3VzPlwiKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNDb25zdHJ1Y3Rvcikge1xuICAgIGxpbmUgKz0gXCJuZXcgXCIgKyAoZnVuY3Rpb25OYW1lIHx8IFwiPGFub255bW91cz5cIik7XG4gIH0gZWxzZSBpZiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgbGluZSArPSBmdW5jdGlvbk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgbGluZSArPSBmaWxlTG9jYXRpb247XG4gICAgYWRkU3VmZml4ID0gZmFsc2U7XG4gIH1cbiAgaWYgKGFkZFN1ZmZpeCkge1xuICAgIGxpbmUgKz0gXCIgKFwiICsgZmlsZUxvY2F0aW9uICsgXCIpXCI7XG4gIH1cbiAgcmV0dXJuIGxpbmU7XG59XG5cbmZ1bmN0aW9uIGNsb25lQ2FsbFNpdGUoZnJhbWUpIHtcbiAgdmFyIG9iamVjdCA9IHt9O1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoZnJhbWUpKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBvYmplY3RbbmFtZV0gPSAvXig/OmlzfGdldCkvLnRlc3QobmFtZSkgPyBmdW5jdGlvbigpIHsgcmV0dXJuIGZyYW1lW25hbWVdLmNhbGwoZnJhbWUpOyB9IDogZnJhbWVbbmFtZV07XG4gIH0pO1xuICBvYmplY3QudG9TdHJpbmcgPSBDYWxsU2l0ZVRvU3RyaW5nO1xuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiB3cmFwQ2FsbFNpdGUoZnJhbWUpIHtcbiAgaWYoZnJhbWUuaXNOYXRpdmUoKSkge1xuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIC8vIE1vc3QgY2FsbCBzaXRlcyB3aWxsIHJldHVybiB0aGUgc291cmNlIGZpbGUgZnJvbSBnZXRGaWxlTmFtZSgpLCBidXQgY29kZVxuICAvLyBwYXNzZWQgdG8gZXZhbCgpIGVuZGluZyBpbiBcIi8vIyBzb3VyY2VVUkw9Li4uXCIgd2lsbCByZXR1cm4gdGhlIHNvdXJjZSBmaWxlXG4gIC8vIGZyb20gZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMKCkgaW5zdGVhZFxuICB2YXIgc291cmNlID0gZnJhbWUuZ2V0RmlsZU5hbWUoKSB8fCBmcmFtZS5nZXRTY3JpcHROYW1lT3JTb3VyY2VVUkwoKTtcbiAgaWYgKHNvdXJjZSkge1xuICAgIHZhciBsaW5lID0gZnJhbWUuZ2V0TGluZU51bWJlcigpO1xuICAgIHZhciBjb2x1bW4gPSBmcmFtZS5nZXRDb2x1bW5OdW1iZXIoKSAtIDE7XG5cbiAgICAvLyBGaXggcG9zaXRpb24gaW4gTm9kZSB3aGVyZSBzb21lIChpbnRlcm5hbCkgY29kZSBpcyBwcmVwZW5kZWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFudy9ub2RlLXNvdXJjZS1tYXAtc3VwcG9ydC9pc3N1ZXMvMzZcbiAgICB2YXIgaGVhZGVyTGVuZ3RoID0gNjI7XG4gICAgaWYgKGxpbmUgPT09IDEgJiYgY29sdW1uID4gaGVhZGVyTGVuZ3RoICYmICFpc0luQnJvd3NlcigpICYmICFmcmFtZS5pc0V2YWwoKSkge1xuICAgICAgY29sdW1uIC09IGhlYWRlckxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgcG9zaXRpb24gPSBtYXBTb3VyY2VQb3NpdGlvbih7XG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIGxpbmU6IGxpbmUsXG4gICAgICBjb2x1bW46IGNvbHVtblxuICAgIH0pO1xuICAgIGZyYW1lID0gY2xvbmVDYWxsU2l0ZShmcmFtZSk7XG4gICAgdmFyIG9yaWdpbmFsRnVuY3Rpb25OYW1lID0gZnJhbWUuZ2V0RnVuY3Rpb25OYW1lO1xuICAgIGZyYW1lLmdldEZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcG9zaXRpb24ubmFtZSB8fCBvcmlnaW5hbEZ1bmN0aW9uTmFtZSgpOyB9O1xuICAgIGZyYW1lLmdldEZpbGVOYW1lID0gZnVuY3Rpb24oKSB7IHJldHVybiBwb3NpdGlvbi5zb3VyY2U7IH07XG4gICAgZnJhbWUuZ2V0TGluZU51bWJlciA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcG9zaXRpb24ubGluZTsgfTtcbiAgICBmcmFtZS5nZXRDb2x1bW5OdW1iZXIgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHBvc2l0aW9uLmNvbHVtbiArIDE7IH07XG4gICAgZnJhbWUuZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMID0gZnVuY3Rpb24oKSB7IHJldHVybiBwb3NpdGlvbi5zb3VyY2U7IH07XG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgLy8gQ29kZSBjYWxsZWQgdXNpbmcgZXZhbCgpIG5lZWRzIHNwZWNpYWwgaGFuZGxpbmdcbiAgdmFyIG9yaWdpbiA9IGZyYW1lLmlzRXZhbCgpICYmIGZyYW1lLmdldEV2YWxPcmlnaW4oKTtcbiAgaWYgKG9yaWdpbikge1xuICAgIG9yaWdpbiA9IG1hcEV2YWxPcmlnaW4ob3JpZ2luKTtcbiAgICBmcmFtZSA9IGNsb25lQ2FsbFNpdGUoZnJhbWUpO1xuICAgIGZyYW1lLmdldEV2YWxPcmlnaW4gPSBmdW5jdGlvbigpIHsgcmV0dXJuIG9yaWdpbjsgfTtcbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICAvLyBJZiB3ZSBnZXQgaGVyZSB0aGVuIHdlIHdlcmUgdW5hYmxlIHRvIGNoYW5nZSB0aGUgc291cmNlIHBvc2l0aW9uXG4gIHJldHVybiBmcmFtZTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXJ0IG9mIHRoZSBWOCBzdGFjayB0cmFjZSBBUEksIGZvciBtb3JlIGluZm8gc2VlOlxuLy8gaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L3dpa2kvSmF2YVNjcmlwdFN0YWNrVHJhY2VBcGlcbmZ1bmN0aW9uIHByZXBhcmVTdGFja1RyYWNlKGVycm9yLCBzdGFjaykge1xuICBpZiAoZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zKSB7XG4gICAgZmlsZUNvbnRlbnRzQ2FjaGUgPSB7fTtcbiAgICBzb3VyY2VNYXBDYWNoZSA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIGVycm9yICsgc3RhY2subWFwKGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgcmV0dXJuICdcXG4gICAgYXQgJyArIHdyYXBDYWxsU2l0ZShmcmFtZSk7XG4gIH0pLmpvaW4oJycpO1xufVxuXG4vLyBHZW5lcmF0ZSBwb3NpdGlvbiBhbmQgc25pcHBldCBvZiBvcmlnaW5hbCBzb3VyY2Ugd2l0aCBwb2ludGVyXG5mdW5jdGlvbiBnZXRFcnJvclNvdXJjZShlcnJvcikge1xuICB2YXIgbWF0Y2ggPSAvXFxuICAgIGF0IFteKF0rIFxcKCguKik6KFxcZCspOihcXGQrKVxcKS8uZXhlYyhlcnJvci5zdGFjayk7XG4gIGlmIChtYXRjaCkge1xuICAgIHZhciBzb3VyY2UgPSBtYXRjaFsxXTtcbiAgICB2YXIgbGluZSA9ICttYXRjaFsyXTtcbiAgICB2YXIgY29sdW1uID0gK21hdGNoWzNdO1xuXG4gICAgLy8gU3VwcG9ydCB0aGUgaW5saW5lIHNvdXJjZUNvbnRlbnRzIGluc2lkZSB0aGUgc291cmNlIG1hcFxuICAgIHZhciBjb250ZW50cyA9IGZpbGVDb250ZW50c0NhY2hlW3NvdXJjZV07XG5cbiAgICAvLyBTdXBwb3J0IGZpbGVzIG9uIGRpc2tcbiAgICBpZiAoIWNvbnRlbnRzICYmIGZzICYmIGZzLmV4aXN0c1N5bmMoc291cmNlKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoc291cmNlLCAndXRmOCcpO1xuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgY29udGVudHMgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb3JtYXQgdGhlIGxpbmUgZnJvbSB0aGUgb3JpZ2luYWwgc291cmNlIGNvZGUgbGlrZSBub2RlIGRvZXNcbiAgICBpZiAoY29udGVudHMpIHtcbiAgICAgIHZhciBjb2RlID0gY29udGVudHMuc3BsaXQoLyg/OlxcclxcbnxcXHJ8XFxuKS8pW2xpbmUgLSAxXTtcbiAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UgKyAnOicgKyBsaW5lICsgJ1xcbicgKyBjb2RlICsgJ1xcbicgK1xuICAgICAgICAgIG5ldyBBcnJheShjb2x1bW4pLmpvaW4oJyAnKSArICdeJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHByaW50RXJyb3JBbmRFeGl0IChlcnJvcikge1xuICB2YXIgc291cmNlID0gZ2V0RXJyb3JTb3VyY2UoZXJyb3IpO1xuXG4gIC8vIEVuc3VyZSBlcnJvciBpcyBwcmludGVkIHN5bmNocm9ub3VzbHkgYW5kIG5vdCB0cnVuY2F0ZWRcbiAgaWYgKHByb2Nlc3Muc3RkZXJyLl9oYW5kbGUgJiYgcHJvY2Vzcy5zdGRlcnIuX2hhbmRsZS5zZXRCbG9ja2luZykge1xuICAgIHByb2Nlc3Muc3RkZXJyLl9oYW5kbGUuc2V0QmxvY2tpbmcodHJ1ZSk7XG4gIH1cblxuICBpZiAoc291cmNlKSB7XG4gICAgY29uc29sZS5lcnJvcigpO1xuICAgIGNvbnNvbGUuZXJyb3Ioc291cmNlKTtcbiAgfVxuXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3Iuc3RhY2spO1xuICBwcm9jZXNzLmV4aXQoMSk7XG59XG5cbmZ1bmN0aW9uIHNoaW1FbWl0VW5jYXVnaHRFeGNlcHRpb24gKCkge1xuICB2YXIgb3JpZ0VtaXQgPSBwcm9jZXNzLmVtaXQ7XG5cbiAgcHJvY2Vzcy5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3VuY2F1Z2h0RXhjZXB0aW9uJykge1xuICAgICAgdmFyIGhhc1N0YWNrID0gKGFyZ3VtZW50c1sxXSAmJiBhcmd1bWVudHNbMV0uc3RhY2spO1xuICAgICAgdmFyIGhhc0xpc3RlbmVycyA9ICh0aGlzLmxpc3RlbmVycyh0eXBlKS5sZW5ndGggPiAwKTtcblxuICAgICAgaWYgKGhhc1N0YWNrICYmICFoYXNMaXN0ZW5lcnMpIHtcbiAgICAgICAgcmV0dXJuIHByaW50RXJyb3JBbmRFeGl0KGFyZ3VtZW50c1sxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yaWdFbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbnZhciBvcmlnaW5hbFJldHJpZXZlRmlsZUhhbmRsZXJzID0gcmV0cmlldmVGaWxlSGFuZGxlcnMuc2xpY2UoMCk7XG52YXIgb3JpZ2luYWxSZXRyaWV2ZU1hcEhhbmRsZXJzID0gcmV0cmlldmVNYXBIYW5kbGVycy5zbGljZSgwKTtcblxuZXhwb3J0cy53cmFwQ2FsbFNpdGUgPSB3cmFwQ2FsbFNpdGU7XG5leHBvcnRzLmdldEVycm9yU291cmNlID0gZ2V0RXJyb3JTb3VyY2U7XG5leHBvcnRzLm1hcFNvdXJjZVBvc2l0aW9uID0gbWFwU291cmNlUG9zaXRpb247XG5leHBvcnRzLnJldHJpZXZlU291cmNlTWFwID0gcmV0cmlldmVTb3VyY2VNYXA7XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKG9wdGlvbnMuZW52aXJvbm1lbnQpIHtcbiAgICBlbnZpcm9ubWVudCA9IG9wdGlvbnMuZW52aXJvbm1lbnQ7XG4gICAgaWYgKFtcIm5vZGVcIiwgXCJicm93c2VyXCIsIFwiYXV0b1wiXS5pbmRleE9mKGVudmlyb25tZW50KSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImVudmlyb25tZW50IFwiICsgZW52aXJvbm1lbnQgKyBcIiB3YXMgdW5rbm93bi4gQXZhaWxhYmxlIG9wdGlvbnMgYXJlIHthdXRvLCBicm93c2VyLCBub2RlfVwiKVxuICAgIH1cbiAgfVxuXG4gIC8vIEFsbG93IHNvdXJjZXMgdG8gYmUgZm91bmQgYnkgbWV0aG9kcyBvdGhlciB0aGFuIHJlYWRpbmcgdGhlIGZpbGVzXG4gIC8vIGRpcmVjdGx5IGZyb20gZGlzay5cbiAgaWYgKG9wdGlvbnMucmV0cmlldmVGaWxlKSB7XG4gICAgaWYgKG9wdGlvbnMub3ZlcnJpZGVSZXRyaWV2ZUZpbGUpIHtcbiAgICAgIHJldHJpZXZlRmlsZUhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcmV0cmlldmVGaWxlSGFuZGxlcnMudW5zaGlmdChvcHRpb25zLnJldHJpZXZlRmlsZSk7XG4gIH1cblxuICAvLyBBbGxvdyBzb3VyY2UgbWFwcyB0byBiZSBmb3VuZCBieSBtZXRob2RzIG90aGVyIHRoYW4gcmVhZGluZyB0aGUgZmlsZXNcbiAgLy8gZGlyZWN0bHkgZnJvbSBkaXNrLlxuICBpZiAob3B0aW9ucy5yZXRyaWV2ZVNvdXJjZU1hcCkge1xuICAgIGlmIChvcHRpb25zLm92ZXJyaWRlUmV0cmlldmVTb3VyY2VNYXApIHtcbiAgICAgIHJldHJpZXZlTWFwSGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXRyaWV2ZU1hcEhhbmRsZXJzLnVuc2hpZnQob3B0aW9ucy5yZXRyaWV2ZVNvdXJjZU1hcCk7XG4gIH1cblxuICAvLyBTdXBwb3J0IHJ1bnRpbWUgdHJhbnNwaWxlcnMgdGhhdCBpbmNsdWRlIGlubGluZSBzb3VyY2UgbWFwc1xuICBpZiAob3B0aW9ucy5ob29rUmVxdWlyZSAmJiAhaXNJbkJyb3dzZXIoKSkge1xuICAgIHZhciBNb2R1bGU7XG4gICAgdHJ5IHtcbiAgICAgIE1vZHVsZSA9IHJlcXVpcmUoJ21vZHVsZScpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gTk9QOiBMb2FkaW5nIGluIGNhdGNoIGJsb2NrIHRvIGNvbnZlcnQgd2VicGFjayBlcnJvciB0byB3YXJuaW5nLlxuICAgIH1cbiAgICB2YXIgJGNvbXBpbGUgPSBNb2R1bGUucHJvdG90eXBlLl9jb21waWxlO1xuXG4gICAgaWYgKCEkY29tcGlsZS5fX3NvdXJjZU1hcFN1cHBvcnQpIHtcbiAgICAgIE1vZHVsZS5wcm90b3R5cGUuX2NvbXBpbGUgPSBmdW5jdGlvbihjb250ZW50LCBmaWxlbmFtZSkge1xuICAgICAgICBmaWxlQ29udGVudHNDYWNoZVtmaWxlbmFtZV0gPSBjb250ZW50O1xuICAgICAgICBzb3VyY2VNYXBDYWNoZVtmaWxlbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiAkY29tcGlsZS5jYWxsKHRoaXMsIGNvbnRlbnQsIGZpbGVuYW1lKTtcbiAgICAgIH07XG5cbiAgICAgIE1vZHVsZS5wcm90b3R5cGUuX2NvbXBpbGUuX19zb3VyY2VNYXBTdXBwb3J0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBDb25maWd1cmUgb3B0aW9uc1xuICBpZiAoIWVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucykge1xuICAgIGVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucyA9ICdlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMnIGluIG9wdGlvbnMgP1xuICAgICAgb3B0aW9ucy5lbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMgOiBmYWxzZTtcbiAgfVxuXG4gIC8vIEluc3RhbGwgdGhlIGVycm9yIHJlZm9ybWF0dGVyXG4gIGlmICghZXJyb3JGb3JtYXR0ZXJJbnN0YWxsZWQpIHtcbiAgICBlcnJvckZvcm1hdHRlckluc3RhbGxlZCA9IHRydWU7XG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmVwYXJlU3RhY2tUcmFjZTtcbiAgfVxuXG4gIGlmICghdW5jYXVnaHRTaGltSW5zdGFsbGVkKSB7XG4gICAgdmFyIGluc3RhbGxIYW5kbGVyID0gJ2hhbmRsZVVuY2F1Z2h0RXhjZXB0aW9ucycgaW4gb3B0aW9ucyA/XG4gICAgICBvcHRpb25zLmhhbmRsZVVuY2F1Z2h0RXhjZXB0aW9ucyA6IHRydWU7XG5cbiAgICAvLyBQcm92aWRlIHRoZSBvcHRpb24gdG8gbm90IGluc3RhbGwgdGhlIHVuY2F1Z2h0IGV4Y2VwdGlvbiBoYW5kbGVyLiBUaGlzIGlzXG4gICAgLy8gdG8gc3VwcG9ydCBvdGhlciB1bmNhdWdodCBleGNlcHRpb24gaGFuZGxlcnMgKGluIHRlc3QgZnJhbWV3b3JrcywgZm9yXG4gICAgLy8gZXhhbXBsZSkuIElmIHRoaXMgaGFuZGxlciBpcyBub3QgaW5zdGFsbGVkIGFuZCB0aGVyZSBhcmUgbm8gb3RoZXIgdW5jYXVnaHRcbiAgICAvLyBleGNlcHRpb24gaGFuZGxlcnMsIHVuY2F1Z2h0IGV4Y2VwdGlvbnMgd2lsbCBiZSBjYXVnaHQgYnkgbm9kZSdzIGJ1aWx0LWluXG4gICAgLy8gZXhjZXB0aW9uIGhhbmRsZXIgYW5kIHRoZSBwcm9jZXNzIHdpbGwgc3RpbGwgYmUgdGVybWluYXRlZC4gSG93ZXZlciwgdGhlXG4gICAgLy8gZ2VuZXJhdGVkIEphdmFTY3JpcHQgY29kZSB3aWxsIGJlIHNob3duIGFib3ZlIHRoZSBzdGFjayB0cmFjZSBpbnN0ZWFkIG9mXG4gICAgLy8gdGhlIG9yaWdpbmFsIHNvdXJjZSBjb2RlLlxuICAgIGlmIChpbnN0YWxsSGFuZGxlciAmJiBoYXNHbG9iYWxQcm9jZXNzRXZlbnRFbWl0dGVyKCkpIHtcbiAgICAgIHVuY2F1Z2h0U2hpbUluc3RhbGxlZCA9IHRydWU7XG4gICAgICBzaGltRW1pdFVuY2F1Z2h0RXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLnJlc2V0UmV0cmlldmVIYW5kbGVycyA9IGZ1bmN0aW9uKCkge1xuICByZXRyaWV2ZUZpbGVIYW5kbGVycy5sZW5ndGggPSAwO1xuICByZXRyaWV2ZU1hcEhhbmRsZXJzLmxlbmd0aCA9IDA7XG5cbiAgcmV0cmlldmVGaWxlSGFuZGxlcnMgPSBvcmlnaW5hbFJldHJpZXZlRmlsZUhhbmRsZXJzLnNsaWNlKDApO1xuICByZXRyaWV2ZU1hcEhhbmRsZXJzID0gb3JpZ2luYWxSZXRyaWV2ZU1hcEhhbmRsZXJzLnNsaWNlKDApO1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuZnJvbUNhbGxiYWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGhdID0gKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH1cbiAgICAgICAgYXJndW1lbnRzLmxlbmd0aCsrXG4gICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH0pXG4gICAgfVxuICB9LCAnbmFtZScsIHsgdmFsdWU6IGZuLm5hbWUgfSlcbn1cblxuZXhwb3J0cy5mcm9tUHJvbWlzZSA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYiA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV1cbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIGVsc2UgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKS50aGVuKHIgPT4gY2IobnVsbCwgciksIGNiKVxuICB9LCAnbmFtZScsIHsgdmFsdWU6IGZuLm5hbWUgfSlcbn1cbiIsIi8qKiBAYmFiZWwgKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogQ29weXJpZ2h0IDIwMTctMjAxOCBBbmRyZXMgTWVqaWEgPGFtZWppYTAwNEBnbWFpbC5jb20+LiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpc1xuICogc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlXG4gKiB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksXG4gKiBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG4gKiBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28uXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELFxuICogSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEFcbiAqIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAqIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuICogT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG4gKiBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcblxuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xuaW1wb3J0IG9zIGZyb20gJ29zJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZnVuY3Rpb24gbWtkdGVtcFN5bmNGb3JSZW5hbWluZ0RMTHMgKGF0b21Ib21lKSB7XG4gIGlmICghYXRvbUhvbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3QgcHJvdmlkZSBhdG9tSG9tZSBwYXJhbWV0ZXInKVxuICB9XG4gIGxldCB0bXAgPSBwYXRoLmpvaW4oYXRvbUhvbWUsICd0bXAnKVxuICBpZiAoIWZzLmV4aXN0c1N5bmModG1wKSkgZnMubWtkaXJTeW5jKHRtcClcbiAgcmV0dXJuIGZzLm1rZHRlbXBTeW5jKHBhdGguam9pbih0bXAsICdtb3ZlZC1kbGwtJykpXG59XG5cbmZ1bmN0aW9uIG1haW4gKCkge1xuICBjb25zb2xlLmxvZygnRXhlY3V0aW5nIHNjcmlwdCBhdCBcXCcnICsgcGF0aC5yZXNvbHZlKF9fZmlsZW5hbWUpICsgJ1xcJycpXG4gIC8vIFByb2NlZWQgb25seSBmb3IgV2luZG93cyBwbGF0Zm9ybXMuXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnd2luMzInKSB7XG4gICAgY29uc29sZS5sb2coJ05vdCB3aW4zMiBwbGF0Zm9ybSwgZXhpdGluZy4nKVxuICAgIHByb2Nlc3MuZXhpdCgwKVxuICB9XG5cbiAgY29uc29sZS5sb2coJz09PSBTdGFydCBwcm9jZXNzLmFyZ3YgbG9nID09PScpXG4gIHByb2Nlc3MuYXJndi5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coYCR7aW5kZXh9OiAke3ZhbH1gKVxuICB9KVxuICBjb25zb2xlLmxvZygnPT09IEVuZCBwcm9jZXNzLmFyZ3YgbG9nID09PScpXG4gIGNvbnNvbGUubG9nKCdwcm9jZXNzLmN3ZCgpOiAnICsgcHJvY2Vzcy5jd2QoKSlcbiAgY29uc29sZS5sb2coJz09PSBTdGFydCBwcm9jZXNzLmVudiBsb2cgPT09JylcbiAgT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGNvbnNvbGUubG9nKGtleSArICcgPSAnICsgcHJvY2Vzcy5lbnZba2V5XSlcbiAgfSlcbiAgY29uc29sZS5sb2coJz09PSBFbmQgcHJvY2Vzcy5lbnYgbG9nID09PScpXG5cbiAgLy8gTk9URTogQXRvbSBwYWNrYWdlIGluc3RhbGxzL3VwZGF0ZXMgYXJlIGRvbmUgdGhyb3VnaCBhIHN0YWdpbmcgZGlyZWN0b3J5XG4gIC8vIGZpcnN0LiBUaGVyZWZvcmUsIHRoaXMgd2hvbGUgc2NyaXB0IGlzIG5lZWRlZCB0byBkZWFsIHdpdGggbW92aW5nIHRoZVxuICAvLyB3aW5wdHkgYmluYXJpZXMgb24gV2luZG93cyBwbGF0Zm9ybXMuXG4gIGxldCBob21lRGlyID0gb3MuaG9tZWRpcigpXG4gIGNvbnNvbGUubG9nKCdob21lRGlyID0gXFwnJyArIGhvbWVEaXIgKyAnXFwnIGZyb20gb3MuaG9tZWRpcigpJylcbiAgbGV0IGF0b21Ib21lID0gcHJvY2Vzcy5lbnYuQVRPTV9IT01FXG4gIGlmIChhdG9tSG9tZSkge1xuICAgIGNvbnNvbGUubG9nKCdVc2luZyBBVE9NX0hPTUUgZW52aXJvbm1lbnQgdmFyaWFibGUuJylcbiAgICBhdG9tSG9tZSA9IHBhdGgucmVzb2x2ZShhdG9tSG9tZSlcbiAgfSBlbHNlIHtcbiAgICBhdG9tSG9tZSA9IHBhdGguam9pbihob21lRGlyLCAnLmF0b20nKVxuICAgIGlmICghZnMuZXhpc3RzU3luYyhhdG9tSG9tZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhdG9tSG9tZSA9IFxcJycgKyBhdG9tSG9tZSArICdcXCcgZG9lc25cXCd0IGV4aXN0LicpXG4gICAgICBjb25zb2xlLmxvZygnQ2hlY2tpbmcgaWYgaG9tZSBkaXJlY3RvcnkgaXMgc2V0IHRvIC5ub2RlLWd5cCBwYXRoJylcbiAgICAgIGxldCByZWdleHAgPSBuZXcgUmVnRXhwKHBhdGguam9pbignLmF0b20nLCAnLm5vZGUtZ3lwJykucmVwbGFjZSgvXFwuXFxcXC9nLCAnXFxcXCQmJykgKyAnJCcpXG4gICAgICBpZiAocmVnZXhwLnRlc3QoaG9tZURpcikpIHtcbiAgICAgICAgaG9tZURpciA9IHBhdGgucmVzb2x2ZShwYXRoLmpvaW4oaG9tZURpciwgJy4uJywgJy4uJykpXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIGhvbWVEaXIgPSBcXCcnICsgaG9tZURpciArICdcXCcgZnJvbSB0d28gZGlyZWN0b3JpZXMgbG93ZXIgZnJvbSBwcmV2aW91cyBob21lRGlyLicpXG4gICAgICAgIGF0b21Ib21lID0gcGF0aC5qb2luKGhvbWVEaXIsICcuYXRvbScpXG4gICAgICAgIGNvbnNvbGUubG9nKCdOZXcgYXRvbUhvbWUgPSBcXCcnICsgYXRvbUhvbWUgKyAnXFwnLicpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZnMuZXhpc3RzU3luYyhhdG9tSG9tZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHVzZSBvZiBIT01FRFJJVkUgYW5kIEhPTUVQQVRIIGVudmlyb25tZW50IHZhcmlhYmxlcy4nKVxuICAgICAgbGV0IGhvbWVEcml2ZSA9IHByb2Nlc3MuZW52LkhPTUVEUklWRVxuICAgICAgbGV0IGhvbWVQYXRoID0gcHJvY2Vzcy5lbnYuSE9NRVBBVEhcbiAgICAgIGlmIChob21lRHJpdmUgJiYgaG9tZVBhdGgpIHtcbiAgICAgICAgaG9tZURpciA9IGhvbWVEcml2ZSArIHBhdGguc2VwICsgaG9tZVBhdGhcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWVEaXIgPSBcXCcnICsgaG9tZURpciArICdcXCcgZGVyaXZlZCBmcm9tIEhPTUVEUklWRSBhbmQgSE9NRVBBVEggZW52aXJvbm1lbnQgdmFyaWFibGVzLicpXG4gICAgICB9XG4gICAgICBhdG9tSG9tZSA9IHBhdGgucmVzb2x2ZShwYXRoLmpvaW4oaG9tZURpciwgJy5hdG9tJykpXG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKCdVc2luZyBhdG9tSG9tZSA9IFxcJycgKyBhdG9tSG9tZSArICdcXCcnKVxuICBsZXQgYXRvbVh0ZXJtUGF0aCA9IHBhdGguam9pbihhdG9tSG9tZSwgJ3BhY2thZ2VzJywgJ2F0b20teHRlcm0nKVxuICBjb25zb2xlLmxvZygnVXNpbmcgYXRvbVh0ZXJtUGF0aCA9IFxcJycgKyBhdG9tWHRlcm1QYXRoICsgJ1xcJycpXG4gIGlmICghZnMuZXhpc3RzU3luYyhhdG9tWHRlcm1QYXRoKSkge1xuICAgIGNvbnNvbGUubG9nKCdhdG9tLXh0ZXJtIG5vdCBpbnN0YWxsZWQsIGV4aXRpbmcuJylcbiAgICBwcm9jZXNzLmV4aXQoMClcbiAgfVxuICAvLyBOT1RFOiBUaGlzIHNjcmlwdCB3aWxsIG1vdmUgYmluYXJpZXMgZm9yIHRoZSAnbm9kZS1wdHknIG1vZHVsZS4gQWx0aG91Z2hcbiAgLy8gJ25vZGUtcHR5JyBoYXMgYmVlbiByZXBsYWNlZCB3aXRoICdub2RlLXB0eS1wcmVidWlsdCcsIHRoaXMgc2NyaXB0IHdpbGxcbiAgLy8gc3RpbGwgbW92ZSB0aGUgYmluYXJpZXMgaW4gdGhlICdub2RlLXB0eScgbW9kdWxlIHRvIG1ha2UgdXBncmFkZXNcbiAgLy8gc21vb3RoZXIgZm9yIFdpbmRvd3MgdXNlcnMuXG4gIGxldCBub2RlUHR5UGF0aCA9IHBhdGguam9pbihhdG9tWHRlcm1QYXRoLCAnbm9kZV9tb2R1bGVzJywgJ25vZGUtcHR5JylcbiAgY29uc29sZS5sb2coJ1VzaW5nIG5vZGVQdHlQYXRoID0gXFwnJyArIG5vZGVQdHlQYXRoICsgJ1xcJycpXG4gIGxldCBub2RlUHR5UHJlYnVpbHRQYXRoID0gcGF0aC5qb2luKGF0b21YdGVybVBhdGgsICdub2RlX21vZHVsZXMnLCAnbm9kZS1wdHktcHJlYnVpbHQnKVxuICBjb25zb2xlLmxvZygnVXNpbmcgbm9kZVB0eVByZWJ1aWx0UGF0aCA9IFxcJycgKyBub2RlUHR5UHJlYnVpbHRQYXRoICsgJ1xcJycpXG5cbiAgLy8gTW92ZSB0aGUgZGlyZWN0b3JpZXMgY29udGFpbmluZyB0aGUgV2luZG93cyBiaW5hcmllcyB1bmRlciBhIHRtcFxuICAvLyBkaXJlY3RvcnkuXG4gIGZvciAobGV0IG5vZGVQdHlNb2R1bGVQYXRoIG9mIFtub2RlUHR5UGF0aCwgbm9kZVB0eVByZWJ1aWx0UGF0aF0pIHtcbiAgICBsZXQgcmVsZWFzZUJ1aWxkUGF0aCA9IHBhdGguam9pbihub2RlUHR5TW9kdWxlUGF0aCwgJ2J1aWxkJywgJ1JlbGVhc2UnKVxuICAgIGxldCBkZWJ1Z0J1aWxkUGF0aCA9IHBhdGguam9pbihub2RlUHR5TW9kdWxlUGF0aCwgJ2J1aWxkJywgJ0RlYnVnJylcbiAgICBmb3IgKGxldCBidWlsZFBhdGggb2YgW3JlbGVhc2VCdWlsZFBhdGgsIGRlYnVnQnVpbGRQYXRoXSkge1xuICAgICAgY29uc29sZS5sb2coYENoZWNraW5nIGlmICcke2J1aWxkUGF0aH0nIGV4aXN0c2ApXG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhidWlsZFBhdGgpKSB7XG4gICAgICAgIGxldCB0bXBkaXIgPSBta2R0ZW1wU3luY0ZvclJlbmFtaW5nRExMcyhhdG9tSG9tZSlcbiAgICAgICAgbGV0IG5ld1BhdGggPSBwYXRoLmpvaW4odG1wZGlyLCBwYXRoLmJhc2VuYW1lKGJ1aWxkUGF0aCkpXG4gICAgICAgIGNvbnNvbGUubG9nKGBNb3ZpbmcgJyR7YnVpbGRQYXRofScgdG8gJyR7bmV3UGF0aH0nLmApXG4gICAgICAgIGZzLnJlbmFtZVN5bmMoYnVpbGRQYXRoLCBuZXdQYXRoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBta2R0ZW1wU3luY0ZvclJlbmFtaW5nRExMcyxcbiAgbWFpblxufVxuXG5tYWluKClcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25zdGFudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9kdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==