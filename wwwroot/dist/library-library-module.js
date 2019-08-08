(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["library-library-module"],{

/***/ "./node_modules/lodash.get/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.get/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.merge/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.merge/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.set/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.set/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ "./node_modules/ngx-store/esm5/ngx-store.js":
/*!**************************************************!*\
  !*** ./node_modules/ngx-store/esm5/ngx-store.js ***!
  \**************************************************/
/*! exports provided: ɵa, WebStorageModule, CookieStorage, LocalStorage, SessionStorage, SharedStorage, TempStorage, WebStorageService, CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService, TempStorageService, NgxStorageEvent, NgxResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return WebStorageUtility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageModule", function() { return WebStorageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieStorage", function() { return CookieStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorage", function() { return SessionStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedStorage", function() { return SharedStorage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempStorage", function() { return SharedStorage$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageService", function() { return WebStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesStorageService", function() { return CookiesStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedStorageService", function() { return SharedStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempStorageService", function() { return SharedStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStorageEvent", function() { return NgxStorageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxResource", function() { return Resource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ts_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-debug */ "./node_modules/ts-debug/debug.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license ngx-store
 * ISC license
 */







var isEqual = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
var CacheItem = /** @class */ (function () {
    function CacheItem(cacheItem) {
        this.name = '';
        this.targets = [];
        this.services = [];
        this.utilities = [];
        this.proxy = null;
        this._key = '';
        this.initializedTargets = new Set();
        this._key = cacheItem.key;
        this.name = cacheItem.name;
        this.addTargets(cacheItem.targets);
        this.addServices(cacheItem.services);
        this.addUtilities(cacheItem.utilities);
    }
    Object.defineProperty(CacheItem.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: true,
        configurable: true
    });
    CacheItem.prototype.saveValue = function (value, config, source) {
        if (config === void 0) { config = {}; }
        debug.groupCollapsed('CacheItem#saveValue for ' + this.key + ' in ' + this.currentTarget.constructor.name);
        debug.log('new value: ', value);
        debug.log('previous value: ', this.readValue());
        debug.log('targets.length: ', this.targets.length);
        debug.log('currentTarget:', this.currentTarget);
        debug.groupEnd();
        // prevent overwriting value by initializators
        if (!this.initializedTargets.has(this.currentTarget)) {
            this.initializedTargets.add(this.currentTarget);
            var readValue = this.readValue();
            var savedValue = (readValue !== null && readValue !== undefined) ? readValue : value;
            var proxy = this.getProxy(savedValue, config);
            proxy = (proxy !== null) ? proxy : value;
            debug.log('initial value for ' + this.key + ' in ' + this.currentTarget.constructor.name, proxy);
            this.propagateChange(savedValue, source);
            return proxy;
        }
        this.propagateChange(value, source);
        return this.getProxy(value, config);
    };
    CacheItem.prototype.getProxy = function (value, config) {
        if (config === void 0) { config = {}; }
        if (value === undefined && this.proxy)
            return this.proxy; // return cached proxy if value hasn't changed
        value = (value === undefined) ? this.readValue() : value;
        if (typeof value !== 'object' || value === null) {
            this.proxy = value;
            return value;
        }
        if ((!Config.mutateObjects && !config.mutate) || config.mutate === false)
            return value;
        var _self = this; // alias to use in standard function expressions
        var prototype = Object.assign(new value.constructor(), value.__proto__);
        prototype.save = function () {
            _self.saveValue(value, config);
        };
        // TODO set prototype for Array.prototype or something
        if (Array.isArray(value)) { // handle methods that could change value of array
            var methodsToOverwrite = [
                'pop', 'push', 'reverse', 'shift', 'unshift', 'splice',
                'filter', 'forEach', 'map', 'fill', 'sort', 'copyWithin'
            ];
            var _loop_1 = function (method) {
                prototype[method] = function () {
                    var readValue = _self.readValue();
                    var result = Array.prototype[method].apply(readValue, arguments);
                    debug.log('Saving value for ' + _self.key + ' by method ' + prototype.constructor.name + '.' + method);
                    _self.saveValue(readValue, config);
                    return result;
                };
            };
            for (var _i = 0, methodsToOverwrite_1 = methodsToOverwrite; _i < methodsToOverwrite_1.length; _i++) {
                var method = methodsToOverwrite_1[_i];
                _loop_1(method);
            }
        }
        Object.setPrototypeOf(value, prototype);
        this.proxy = value;
        return value;
    };
    CacheItem.prototype.readValue = function (config) {
        if (config === void 0) { config = {}; }
        var entry = this.utilities[0];
        var value = entry ? entry.utility.get(this.key, entry.config) : null;
        return (typeof value !== 'object') ? value : JSON.parse(JSON.stringify(this.getProxy(value, entry.config)));
    };
    CacheItem.prototype.addTargets = function (targets) {
        var _this = this;
        targets.forEach(function (target) {
            if (_this.targets.indexOf(target) === -1) {
                if (typeof target === 'object') { // handle Angular Component destruction
                    var originalFunction_1 = target.ngOnDestroy;
                    var _self_1 = _this;
                    target.ngOnDestroy = function () {
                        if (typeof originalFunction_1 === 'function') {
                            originalFunction_1.apply(this, arguments);
                        }
                        target.ngOnDestroy = originalFunction_1 || function () { };
                        _self_1.initializedTargets.delete(target);
                        _self_1.targets = _self_1.targets.filter(function (t) { return t !== target; });
                        if (!_self_1.targets.length) {
                            _self_1.services.forEach(function (service) {
                                service.keys = service.keys.filter(function (key) { return key !== _self_1._key; });
                            });
                            _self_1.resetProxy();
                            Cache.remove(_self_1);
                        }
                        debug.groupCollapsed(_self_1.key + " OnDestroy handler:");
                        debug.log('removed target:', target.constructor.name);
                        debug.log('remaining targets:', _self_1.targets);
                        debug.log('cacheItem:', Cache.get(_self_1.key));
                        debug.groupEnd();
                    };
                    _this.targets.push(target);
                }
            }
        });
    };
    CacheItem.prototype.addServices = function (services) {
        var _this = this;
        services.forEach(function (service) {
            if (_this.services.indexOf(service) === -1) {
                service.keys.push(_this._key);
                _this.services.push(service);
            }
        });
    };
    CacheItem.prototype.addUtilities = function (utilityEntries) {
        var _this = this;
        utilityEntries.forEach(function (entry) {
            if (_this.utilities.findIndex(function (e) { return e.utility === entry.utility; }) === -1) {
                _this.utilities.push(entry);
                entry.utility.set(_this.key, _this.readValue());
            }
        });
    };
    CacheItem.prototype.resetProxy = function () {
        this.proxy = null;
    };
    CacheItem.prototype.propagateChange = function (value, source) {
        var _this = this;
        if (isEqual(value, this.readValue()))
            return;
        this.utilities.forEach(function (entry) {
            var utility = entry.utility;
            // updating service which the change came from would affect in a cycle
            if (utility === source)
                return;
            debug.log("propagating change on " + _this.key + " to:", utility);
            utility.set(_this._key, value, entry.config);
        });
    };
    return CacheItem;
}());

var Cache = /** @class */ (function () {
    function Cache() {
    }
    Cache.getCacheFor = function (cacheCandidate) {
        var cacheItem = Cache.get(cacheCandidate.key);
        if (!cacheItem) {
            cacheItem = new CacheItem(cacheCandidate);
            debug.log("Created new CacheItem for " + cacheCandidate.name + " for " + cacheItem.utilities[0].utility.getStorageName());
            Cache.set(cacheItem);
            return cacheItem;
        }
        debug.log("Loaded prior CacheItem of " + cacheItem.name + " for " + cacheCandidate.utilities[0].utility.getStorageName());
        cacheItem.addTargets(cacheCandidate.targets);
        cacheItem.addServices(cacheCandidate.services);
        cacheItem.addUtilities(cacheCandidate.utilities);
        Cache.set(cacheItem);
        return cacheItem;
    };
    Cache.remove = function (cacheItem) {
        return Cache.items.delete(cacheItem.key);
    };
    Cache.get = function (key) {
        return Cache.items.get(key);
    };
    Cache.set = function (cacheItem) {
        if (!Cache.get(cacheItem.key)) {
            debug.log('CacheItem for ' + cacheItem.key, cacheItem);
        }
        Cache.items.set(cacheItem.key, cacheItem);
    };
    Cache.items = new Map();
    return Cache;
}());

var NgxStorageEvent = /** @class */ (function () {
    function NgxStorageEvent(type, key, storageArea) {
        this.type = type;
        this.key = key;
        this.storageArea = storageArea;
        this.timeStamp = (Date.now() - NgxStorageEvent.initTimeStamp);
        this.bubbles = false;
        this.cancelBubble = false;
        this.cancelable = false;
        this.composed = false;
        this.currentTarget = window;
        this.defaultPrevented = false;
        this.eventPhase = 2;
        this.isTrusted = true;
        this.path = [window];
        this.returnValue = true;
        this.srcElement = window;
        this.target = window;
        this.url = window.location.href;
        this.isInternal = true;
    }
    Object.defineProperty(NgxStorageEvent.prototype, "initEvent", {
        /**
         * Methods below exist only to satisfy TypeScript compiler
         */
        get: function () {
            return StorageEvent.prototype.initEvent.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "preventDefault", {
        get: function () {
            return StorageEvent.prototype.preventDefault.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "stopImmediatePropagation", {
        get: function () {
            return StorageEvent.prototype.stopImmediatePropagation.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "stopPropagation", {
        get: function () {
            return StorageEvent.prototype.stopPropagation.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "composedPath", {
        get: function () {
            return StorageEvent.prototype.composedPath.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "AT_TARGET", {
        get: function () {
            return StorageEvent.prototype.AT_TARGET;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "BUBBLING_PHASE", {
        get: function () {
            return StorageEvent.prototype.BUBBLING_PHASE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "CAPTURING_PHASE", {
        get: function () {
            return StorageEvent.prototype.BUBBLING_PHASE;
        },
        enumerable: true,
        configurable: true
    });
    NgxStorageEvent.initTimeStamp = Date.now();
    return NgxStorageEvent;
}());

var WebStorageUtility = /** @class */ (function () {
    function WebStorageUtility(storage, prefix, previousPrefix) {
        var _this = this;
        this._prefix = '';
        this._changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._storage = storage;
        this._prefix = prefix;
        // handle previousPrefix for backward-compatibility and safe config changes below
        if (prefix === previousPrefix)
            return;
        if (previousPrefix === null)
            return;
        if (previousPrefix === undefined)
            return;
        debug.log(this.getStorageName() + ' > Detected prefix change from ' + previousPrefix + ' to ' + prefix);
        this.forEach(function (value, key) {
            // ignore config settings when previousPrefix = ''
            if (key.startsWith(previousPrefix) && !key.startsWith(CONFIG_PREFIX)) {
                var nameWithoutPrefix = _this.trimPrefix(key);
                _this.set(nameWithoutPrefix, _this._storage.getItem(key));
                if (previousPrefix !== '') {
                    _this._storage.removeItem(key);
                }
            }
        });
    }
    WebStorageUtility.getSettable = function (value) {
        return JSON.stringify(value);
    };
    WebStorageUtility.getGettable = function (value) {
        if (value === 'undefined')
            return null;
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    Object.defineProperty(WebStorageUtility.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebStorageUtility.prototype, "keys", {
        get: function () {
            var keys = [];
            this.forEach(function (value, key) { return keys.push(key); });
            return keys;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebStorageUtility.prototype, "changes", {
        get: function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    WebStorageUtility.prototype.getStorage = function () {
        return this._storage;
    };
    WebStorageUtility.prototype.getStorageKey = function (key, prefix) {
        prefix = (typeof prefix === 'string') ? prefix : this.prefix;
        return "" + prefix + key;
    };
    WebStorageUtility.prototype.getStorageName = function () {
        return this._storage.type || ((this._storage === localStorage) ? 'localStorage' : 'sessionStorage');
    };
    WebStorageUtility.prototype.get = function (key, config) {
        if (config === void 0) { config = {}; }
        var storageKey = this.getStorageKey(key, config.prefix);
        var value = this._storage.getItem(storageKey);
        return this.getGettable(value);
    };
    WebStorageUtility.prototype.set = function (key, value, config) {
        if (config === void 0) { config = {}; }
        if (value === null || value === undefined) {
            this.remove(key);
            return null;
        }
        try {
            var storageKey = this.getStorageKey(key, config.prefix);
            var storable = this.getSettable(value);
            this.emitEvent(key, value);
            this._storage.setItem(storageKey, storable, config.expires);
            var cacheItem = Cache.get(key);
            if (cacheItem) {
                debug.log("updating following CacheItem from " + this.constructor.name + ":", cacheItem);
                cacheItem.resetProxy();
                cacheItem.propagateChange(value, this);
            }
        }
        catch (error) {
            console.warn("[ngx-store] " + this.getStorageName() + ": following error occurred while trying to save " + key + " =", value);
            console.error(error);
        }
        return value;
    };
    // TODO return true if item existed and false otherwise (?)
    WebStorageUtility.prototype.remove = function (key, config) {
        if (config === void 0) { config = {}; }
        var storageKey = this.getStorageKey(key, config.prefix);
        this._storage.removeItem(storageKey);
        var cacheItem = Cache.get(key);
        if (cacheItem) {
            cacheItem.resetProxy();
        }
    };
    WebStorageUtility.prototype.clear = function () {
        var _this = this;
        this.emitEvent(null, null, null);
        this.forEach(function (value, key) {
            if (key.startsWith(CONFIG_PREFIX))
                return;
            _this.remove(key, { prefix: '' });
        });
    };
    WebStorageUtility.prototype.forEach = function (callbackFn) {
        var _this = this;
        if (typeof this._storage.forEach === 'function') {
            return this._storage.forEach(function (value, key) {
                callbackFn(_this.getGettable(value), key);
            });
        }
        Object.keys(this._storage).forEach(function (key) {
            callbackFn(_this.getGettable(_this._storage[key]), key);
        });
    };
    WebStorageUtility.prototype.getSettable = function (value) {
        return WebStorageUtility.getSettable(value);
    };
    WebStorageUtility.prototype.getGettable = function (value) {
        return WebStorageUtility.getGettable(value);
    };
    WebStorageUtility.prototype.trimPrefix = function (key) {
        return key.replace(this.prefix, '');
    };
    WebStorageUtility.prototype.emitEvent = function (key, newValue, oldValue) {
        var event = new NgxStorageEvent(this.getStorageName(), key, this._storage);
        event.oldValue = (oldValue !== undefined) ? oldValue : this.get(key);
        event.newValue = newValue;
        this._changes.next(event);
    };
    return WebStorageUtility;
}());

var CONFIG_PREFIX = 'NGX-STORE_';
var ConfigHelper = /** @class */ (function () {
    function ConfigHelper() {
    }
    ConfigHelper.getItem = function (key) {
        return ConfigHelper._webStorageUtility.get(key);
    };
    ConfigHelper.setItem = function (key, item) {
        return ConfigHelper._webStorageUtility.set(key, item);
    };
    ConfigHelper._webStorageUtility = new WebStorageUtility(localStorage, CONFIG_PREFIX);
    return ConfigHelper;
}());

var DefaultConfig = {
    prefix: 'ngx_',
    previousPrefix: 'angular2ws_',
    clearType: 'prefix',
    mutateObjects: true,
    cookiesScope: '',
    cookiesCheckInterval: 0,
    debugMode: false,
};
var ConfigFills = {};
var localStoragePrefix = ConfigHelper.getItem('prefix');
if (typeof NGXSTORE_CONFIG === 'object') {
    ConfigFills = Object.assign({}, NGXSTORE_CONFIG);
}
if (localStoragePrefix !== undefined && localStoragePrefix !== null) {
    ConfigFills.previousPrefix = localStoragePrefix;
}
else if (ConfigFills.previousPrefix === undefined) {
    ConfigFills.previousPrefix = DefaultConfig.previousPrefix;
}
// merge default config, deprecated config and global config all together
var Config = Object.assign({}, DefaultConfig, ConfigFills);
var debug = new ts_debug__WEBPACK_IMPORTED_MODULE_3__["Debugger"](console, Config.debugMode, '[ngx-store] ');
ConfigHelper.setItem('prefix', Config.prefix);

var _get = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
var _set = __webpack_require__(/*! lodash.set */ "./node_modules/lodash.set/index.js");
var _merge = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");
var Resource = /** @class */ (function () {
    function Resource(service, key) {
        this.service = service;
        this.key = key;
        this._defaultValue = null;
        this._path = [];
        this._prefix = Config.prefix;
    }
    Object.defineProperty(Resource.prototype, "value", {
        /**
         * Returns value taking path into account
         * @returns {any}
         */
        get: function () {
            return this.considerDefault(this.readValue());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "defaultValue", {
        /**
         * Returns default value
         * @returns {T}
         */
        get: function () {
            return this._defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "path", {
        /**
         * Returns current path as a string
         * @returns {string}
         */
        get: function () {
            return this.pathString;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resource.prototype, "prefix", {
        /**
         * Returns currently set prefix
         * @returns {string}
         */
        get: function () {
            return this._prefix;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets path of object property
     * @param {string} path
     * @returns {this}
     */
    Resource.prototype.setPath = function (path) {
        this._path = path.split('.');
        return this;
    };
    /**
     * Appends current path
     * e.g. if path('key') and appendPath('nested'), the path will be "key.nested"
     * @param {string} path
     * @returns {this}
     */
    Resource.prototype.appendPath = function (path) {
        this._path.push(path);
        return this;
    };
    /**
     * Removes last item of path
     * e.g. if path('key.nested') and truncatePath(), the path will be "key"
     * @returns {this}
     */
    Resource.prototype.truncatePath = function () {
        this._path.pop();
        return this;
    };
    /**
     * Resets set path
     * @returns {this}
     */
    Resource.prototype.resetPath = function () {
        this._path = [];
        return this;
    };
    /**
     * Sets prefix
     * @param {string} prefix
     * @returns {this}
     */
    Resource.prototype.setPrefix = function (prefix) {
        this._prefix = prefix;
        return this;
    };
    /**
     * Moves storage item to new key using given prefix
     * @param {string} prefix
     * @returns {this}
     */
    Resource.prototype.changePrefix = function (prefix) {
        this.service.utility.set(this.key, this.fullValue, { prefix: prefix });
        this.service.utility.remove(this.key, { prefix: this._prefix });
        return this.setPrefix(prefix);
    };
    /**
     * Sets default value for both reading and saving operations
     * @param defaultValue
     * @returns {this}
     */
    Resource.prototype.setDefaultValue = function (defaultValue) {
        this._defaultValue = defaultValue;
        var value = this.readValue();
        if (this.isNullOrUndefined(value)) {
            this.save(defaultValue);
        }
        return this;
    };
    /**
     * Creates or overrides value as a new entry or existing object property depending on path
     * @param value
     * @returns {this}
     */
    Resource.prototype.save = function (value) {
        if (this.pathString) {
            value = _set(this.fullValue, this.pathString, this.considerDefault(value));
        }
        this.service.utility.set(this.key, this.considerDefault(value), { prefix: this._prefix });
        return this;
    };
    /**
     * Updates existing object property using current path
     * @param {T} value
     * @returns {this}
     */
    Resource.prototype.update = function (value) {
        return this.save(_merge(this.readValue(), value));
    };
    /**
     * Removes item stored under current key
     * @returns {this}
     */
    Resource.prototype.remove = function () {
        this.service.utility.remove(this.key);
        return this;
    };
    Object.defineProperty(Resource.prototype, "fullValue", {
        get: function () {
            return this.considerDefault(this.service.utility.get(this.key, { prefix: this._prefix }));
        },
        enumerable: true,
        configurable: true
    });
    Resource.prototype.considerDefault = function (value) {
        return this.isNullOrUndefined(value) ? this._defaultValue : value;
    };
    Resource.prototype.isNullOrUndefined = function (value) {
        return (value === null || value === undefined);
    };
    Object.defineProperty(Resource.prototype, "pathString", {
        get: function () {
            return this._path.join('.');
        },
        enumerable: true,
        configurable: true
    });
    Resource.prototype.readValue = function () {
        var value = this.service.utility.get(this.key, { prefix: this._prefix });
        if (this.pathString) {
            return _get(value, this.pathString);
        }
        return value;
    };
    return Resource;
}());

var merge$1 = __webpack_require__(/*! lodash.merge */ "./node_modules/lodash.merge/index.js");
var WebStorageService = /** @class */ (function () {
    function WebStorageService(utility) {
        this.utility = utility;
    }
    Object.defineProperty(WebStorageService.prototype, "keys", {
        /**
         * Gets keys for stored variables created by ngx-store,
         * ignores keys that have not been created by decorators and have no prefix at once
         */
        get: function () {
            var _this = this;
            // get prefixed key if prefix is defined
            var prefixKeys = this.utility.keys.filter(function (key) {
                return _this.utility.prefix && key.startsWith(_this.utility.prefix);
            });
            var decoratorKeys = this.constructor.keys;
            return prefixKeys.concat(decoratorKeys);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebStorageService.prototype, "config", {
        get: function () {
            return Config;
        },
        enumerable: true,
        configurable: true
    });
    WebStorageService.prototype.get = function (key) {
        return this.utility.get(key);
    };
    /**
     * Returns new data Resource for given key exposing builder design pattern
     * designed for complex nested data structures
     * @param {string} key
     * @returns {any}
     */
    WebStorageService.prototype.load = function (key) {
        return new Resource(this, key);
    };
    WebStorageService.prototype.set = function (key, value) {
        return this.utility.set(key, value);
    };
    WebStorageService.prototype.update = function (key, changes) {
        var value = this.get(key);
        if (value !== undefined && typeof value !== 'object') {
            debug.throw(new Error("Value stored under \"" + key + "\" key is not an object and tried to be updated."));
            return value;
        }
        return this.set(key, merge$1({}, value, changes));
    };
    // TODO return true if item existed and false otherwise (?)
    WebStorageService.prototype.remove = function (key) {
        return this.utility.remove(key);
    };
    WebStorageService.prototype.observe = function (key, exactMatch) {
        return this._changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            if (!key) {
                return true;
            }
            if (exactMatch) {
                if (key.startsWith(Config.prefix)) {
                    return event.key === key;
                }
                return event.key === Config.prefix + key;
            }
            else {
                return event.key.indexOf(key) !== -1;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(30) // event should come after actual data change and propagation
        );
    };
    /**
     * Clears chosen data from Storage
     * @param clearType 'prefix' | 'decorators' | 'all'
     * @param prefixOrClass defines the prefix or class (not its instance) whose decorators should be cleared
     */
    WebStorageService.prototype.clear = function (clearType, prefixOrClass) {
        var _this = this;
        clearType = clearType || Config.clearType;
        if (clearType === 'decorators') {
            var keys = [];
            if (typeof prefixOrClass === 'object') {
                keys = this.keys.filter(function (key) { return Cache.get(key).targets.indexOf(prefixOrClass) !== -1; });
                debug.log(this.utility.getStorageName() + ' > Removing decorated data from ' + prefixOrClass.constructor.name + ':', keys);
            }
            else {
                keys = this.keys;
                debug.log(this.utility.getStorageName() + ' > Removing decorated data:', keys);
            }
            keys.forEach(function (key) { return _this.remove(key); });
        }
        else if (clearType === 'prefix') {
            prefixOrClass = prefixOrClass || this.utility.prefix;
            this.utility.forEach(function (value, key) {
                if (key.startsWith(prefixOrClass)) {
                    _this.remove(_this.utility.trimPrefix(key));
                }
            });
        }
        else if (clearType === 'all') {
            this.utility.clear();
        }
    };
    WebStorageService.prototype.generateEvent = function (key, newValue, oldValue) {
        var type = this.utility.getStorageName().charAt(0).toLowerCase() + this.utility.getStorageName().slice(1);
        var event = new NgxStorageEvent(type, key, this.utility.getStorage());
        event.oldValue = (oldValue !== undefined) ? oldValue : this.get(key);
        event.newValue = newValue;
        return event;
    };
    WebStorageService.prototype.mapNativeEvent = function (ev) {
        var event = this.generateEvent(ev.key, this.utility.getGettable(ev.newValue), this.utility.getGettable(ev.oldValue));
        event.isInternal = false;
        return event;
    };
    WebStorageService.keys = [];
    return WebStorageService;
}());

// TODO: in the future use ES6 Proxy to handle indexers
var NgxStorage = /** @class */ (function () {
    function NgxStorage() {
        this.externalChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NgxStorage.prototype.emitEvent = function (key, newValue, oldValue) {
        var event = new NgxStorageEvent(this.type, key, this);
        event.oldValue = (oldValue !== undefined) ? oldValue : this.getItem(key);
        event.newValue = newValue;
        event.isInternal = false;
        this.externalChanges.next(event);
    };
    return NgxStorage;
}());

var CookiesStorage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CookiesStorage, _super);
    function CookiesStorage() {
        var _this = _super.call(this) || this;
        _this.getAllItems();
        if (Config.cookiesCheckInterval) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(Config.cookiesCheckInterval)
                .subscribe(function () {
                if (!_this.externalChanges.observers.length) {
                    return; // don't run if there are no set subscriptions
                }
                _this.getAllItems();
            });
        }
        return _this;
    }
    Object.defineProperty(CookiesStorage.prototype, "type", {
        get: function () {
            return 'cookiesStorage';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CookiesStorage.prototype, "length", {
        get: function () {
            return this.getAllKeys().length;
        },
        enumerable: true,
        configurable: true
    });
    CookiesStorage.prototype.key = function (index) {
        return this.getAllKeys()[index];
    };
    CookiesStorage.prototype.getItem = function (key) {
        return this.getAllItems().get(key);
    };
    CookiesStorage.prototype.removeItem = function (key) {
        if (typeof document === 'undefined')
            return;
        var domain = this.resolveDomain(Config.cookiesScope);
        domain = (domain) ? 'domain=' + domain + ';' : '';
        document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;' + domain;
        this.cachedItemsMap.delete(key);
    };
    /**
     * @param key
     * @param value
     * @param expirationDate passing null affects in lifetime cookie
     */
    CookiesStorage.prototype.setItem = function (key, value, expirationDate) {
        if (typeof document === 'undefined')
            return;
        var domain = this.resolveDomain(Config.cookiesScope);
        debug.log('Cookies domain:', domain);
        domain = (domain) ? 'domain=' + domain + ';' : '';
        var utcDate = '';
        if (expirationDate instanceof Date) {
            utcDate = expirationDate.toUTCString();
        }
        else if (expirationDate === null) {
            utcDate = 'Fri, 18 Dec 2099 12:00:00 GMT';
        }
        var expires = utcDate ? '; expires=' + utcDate : '';
        var cookie = key + '=' + value + expires + ';path=/;' + domain;
        debug.log('Cookie`s set instruction:', cookie);
        this.cachedItemsMap.set(key, value);
        document.cookie = cookie;
    };
    CookiesStorage.prototype.clear = function () {
        var _this = this;
        this.getAllKeys().forEach(function (key) { return _this.removeItem(key); });
    };
    CookiesStorage.prototype.forEach = function (callbackFn) {
        return this.getAllItems().forEach(function (value, key) { return callbackFn(value, key); });
    };
    CookiesStorage.prototype.getAllKeys = function () {
        return Array.from(this.getAllItems().keys());
    };
    // TODO: consider getting cookies from all paths
    CookiesStorage.prototype.getAllItems = function () {
        var _this = this;
        if (this.cachedCookieString === document.cookie) { // No changes
            return this.cachedItemsMap;
        }
        var map$$1 = new Map();
        if (typeof document === 'undefined')
            return map$$1;
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            var eqPos = cookie.indexOf('=');
            var key = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            var value = eqPos > -1 ? cookie.substr(eqPos + 1, cookie.length) : cookie;
            map$$1.set(key, value);
        }
        // detect changes and emit events
        if (this.cachedItemsMap) {
            map$$1.forEach(function (value, key) {
                var cachedValue = _this.cachedItemsMap.get(key);
                cachedValue = (cachedValue !== undefined) ? cachedValue : null;
                if (value !== cachedValue) {
                    _this.emitEvent(key, WebStorageUtility.getGettable(value), WebStorageUtility.getGettable(cachedValue));
                }
            });
            this.cachedItemsMap.forEach(function (value, key) {
                if (!map$$1.has(key)) {
                    _this.emitEvent(key, null, WebStorageUtility.getGettable(value));
                }
            });
        }
        this.cachedCookieString = document.cookie;
        return this.cachedItemsMap = map$$1;
    };
    /**
     * domain.com         + path="."          = .domain.com
     * domain.com         + path=".sub."      = .sub.domain.com
     * sub.domain.com     + path="sub."       = sub.domain.com
     * www.sub.domain.com + path="."          = .sub.domain.com
     * localhost          + path=".whatever." = localhost
     * @param path
     */
    CookiesStorage.prototype.resolveDomain = function (path) {
        if (!path)
            return '';
        var hostname = document.domain;
        if ((hostname.match(/\./g) || []).length < 1) {
            return '';
        }
        var www = (path[0] !== '.' && hostname.indexOf('www.') === 0) ? 'www.' : '';
        return www + path + this.getDomain();
    };
    /**
     * This function determines base domain by setting cookie at the highest level possible
     * @url http://rossscrivener.co.uk/blog/javascript-get-domain-exclude-subdomain
     */
    CookiesStorage.prototype.getDomain = function () {
        var i = 0;
        var domain = document.domain;
        var domainParts = domain.split('.');
        var s = '_gd' + (new Date()).getTime();
        while (i < (domainParts.length - 1) && document.cookie.indexOf(s + '=' + s) === -1) {
            domain = domainParts.slice(-1 - (++i)).join('.');
            document.cookie = s + '=' + s + ';domain=' + domain + ';';
        }
        document.cookie = s + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=' + domain + ';';
        return domain;
    };
    return CookiesStorage;
}(NgxStorage));
var cookiesStorage = new CookiesStorage();

var SharedStorageUtility = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharedStorageUtility, _super);
    function SharedStorageUtility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SharedStorageUtility.prototype.getSettable = function (value) {
        return value;
    };
    SharedStorageUtility.prototype.getGettable = function (value) {
        return value;
    };
    return SharedStorageUtility;
}(WebStorageUtility));

var SharedStorage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharedStorage, _super);
    function SharedStorage() {
        var _this = _super.call(this) || this;
        _this.sharedMap = new Map();
        _this.externalChanges = undefined;
        return _this;
    }
    Object.defineProperty(SharedStorage.prototype, "type", {
        get: function () {
            return 'sharedStorage';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedStorage.prototype, "length", {
        get: function () {
            return this.getAllKeys().length;
        },
        enumerable: true,
        configurable: true
    });
    SharedStorage.prototype.key = function (index) {
        return this.getAllKeys()[index];
    };
    SharedStorage.prototype.getItem = function (key) {
        var value = this.sharedMap.get(key);
        return (value !== undefined) ? value : null;
    };
    SharedStorage.prototype.removeItem = function (key) {
        this.sharedMap.delete(key);
    };
    SharedStorage.prototype.setItem = function (key, value) {
        this.sharedMap.set(key, value);
    };
    SharedStorage.prototype.clear = function () {
        this.sharedMap.clear();
    };
    SharedStorage.prototype.forEach = function (func) {
        return this.sharedMap.forEach(function (value, key) { return func(value, key); });
    };
    SharedStorage.prototype.getAllKeys = function () {
        return Array.from(this.sharedMap.keys());
    };
    return SharedStorage;
}(NgxStorage));
var sharedStorage = new SharedStorage();

var localStorageUtility = new WebStorageUtility(localStorage, Config.prefix, Config.previousPrefix);
var sessionStorageUtility = new WebStorageUtility(sessionStorage, Config.prefix, Config.previousPrefix);
var cookiesStorageUtility = new WebStorageUtility(cookiesStorage, Config.prefix, Config.previousPrefix);
var sharedStorageUtility = new SharedStorageUtility(sharedStorage, Config.prefix, Config.prefix);

var LocalStorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalStorageService, _super);
    function LocalStorageService() {
        var _this = _super.call(this, localStorageUtility) || this;
        _this._changes =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'storage')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event.storageArea === localStorage; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return _this.mapNativeEvent(event); })), localStorageUtility.changes);
        return _this;
    }
    LocalStorageService.keys = [];
    LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}(WebStorageService));

var SessionStorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SessionStorageService, _super);
    function SessionStorageService() {
        var _this = _super.call(this, sessionStorageUtility) || this;
        _this._changes =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'storage')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event.storageArea === sessionStorage; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return _this.mapNativeEvent(event); })), sessionStorageUtility.changes);
        return _this;
    }
    SessionStorageService.keys = [];
    SessionStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SessionStorageService);
    return SessionStorageService;
}(WebStorageService));

var CookiesStorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CookiesStorageService, _super);
    function CookiesStorageService() {
        var _this = _super.call(this, cookiesStorageUtility) || this;
        _this._changes =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(cookiesStorage.externalChanges.asObservable(), cookiesStorageUtility.changes);
        return _this;
    }
    CookiesStorageService.prototype.set = function (key, value, expirationDate) {
        return this.utility.set(key, value, { expires: expirationDate });
    };
    CookiesStorageService.keys = [];
    CookiesStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CookiesStorageService);
    return CookiesStorageService;
}(WebStorageService));

var SharedStorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharedStorageService, _super);
    function SharedStorageService() {
        var _this = _super.call(this, sharedStorageUtility) || this;
        _this._changes = sharedStorageUtility.changes;
        return _this;
    }
    SharedStorageService.keys = [];
    SharedStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SharedStorageService);
    return SharedStorageService;
}(WebStorageService));

function LocalStorage(keyOrConfig, config) {
    return WebStorage(localStorageUtility, LocalStorageService, keyOrConfig, config);
}
function SessionStorage(keyOrConfig, config) {
    return WebStorage(sessionStorageUtility, SessionStorageService, keyOrConfig, config);
}
function CookieStorage(keyOrConfig, config) {
    return WebStorage(cookiesStorageUtility, CookiesStorageService, keyOrConfig, config);
}
function SharedStorage$1(keyOrConfig, config) {
    return WebStorage(sharedStorageUtility, SharedStorageService, keyOrConfig, config);
}
function WebStorage(webStorageUtility, service, keyOrConfig, config) {
    if (config === void 0) { config = {}; }
    return function (target, propertyName) {
        var key;
        if (typeof keyOrConfig === 'object') {
            key = keyOrConfig.key;
            config = keyOrConfig;
        }
        else if (typeof keyOrConfig === 'string') {
            key = keyOrConfig;
        }
        key = key || config.key || propertyName;
        var cacheItem = Cache.getCacheFor({
            key: key,
            name: propertyName,
            targets: [target],
            services: [service],
            utilities: [{
                    utility: webStorageUtility,
                    config: config,
                }],
        });
        Object.defineProperty(target, propertyName, {
            get: function () {
                return cacheItem.getProxy(undefined, config);
            },
            set: function (value) {
                if (!Cache.get(cacheItem.key)) {
                    cacheItem = Cache.getCacheFor(cacheItem);
                }
                cacheItem.addTargets([target]);
                cacheItem.currentTarget = target;
                cacheItem.saveValue(value, config);
            },
        });
        return target;
    };
}

// Public classes.
var WebStorageModule = /** @class */ (function () {
    function WebStorageModule() {
    }
    WebStorageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                LocalStorageService,
                SessionStorageService,
                CookiesStorageService,
                SharedStorageService,
            ]
        })
    ], WebStorageModule);
    return WebStorageModule;
}());

/**
 * Angular library starter
 * Build an Angular library compatible with AoT compilation & Tree shaking like an official package
 * Copyright Roberto Simonetti
 * MIT license
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */

// This file only reexports content of the `src` folder. Keep it that way.

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-store.js.map


/***/ }),

/***/ "./node_modules/ts-debug/debug.js":
/*!****************************************!*\
  !*** ./node_modules/ts-debug/debug.js ***!
  \****************************************/
/*! exports provided: Debugger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debugger", function() { return Debugger; });
var Debugger = /** @class */ (function () {
    function Debugger(console, isEnabled, prefix) {
        if (isEnabled === void 0) { isEnabled = true; }
        if (prefix === void 0) { prefix = ''; }
        this.prefix = '';
        this.console = console;
        this.isEnabled = isEnabled;
        this.prefix = prefix;
    }
    Object.defineProperty(Debugger.prototype, "memory", {
        get: function () {
            return this.doIfEnabled(function () { return console.hasOwnProperty('memory') && console.memory; });
        },
        enumerable: true,
        configurable: true
    });
    Debugger.prototype.assert = function (value, message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).assert.apply(_a, [value, message].concat(optionalParams));
        });
    };
    Debugger.prototype.countReset = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.countReset(label); });
    };
    Debugger.prototype.dir = function (obj) {
        var _this = this;
        var options = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            options[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).dir.apply(_a, [obj].concat(options));
        });
    };
    Debugger.prototype.error = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).error.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.info = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).info.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.log = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).log.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.time = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.time(label); });
    };
    Debugger.prototype.timeEnd = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.timeEnd(label); });
    };
    Debugger.prototype.timeLog = function (label) {
        var _this = this;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.timeLog(label, data); });
    };
    Debugger.prototype.timeStamp = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.timeStamp(label); });
    };
    Debugger.prototype.timeline = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.timeline(label); });
    };
    Debugger.prototype.timelineEnd = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.timelineEnd(label); });
    };
    Debugger.prototype.trace = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).trace.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.warn = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).warn.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.clear = function () {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.clear(); });
    };
    Debugger.prototype.count = function (countTitle) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.count(); });
    };
    Debugger.prototype.debug = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).debug.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.dirxml = function (value) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.dirxml(value); });
    };
    Debugger.prototype.exception = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).exception.apply(_a, [_this.addPrefix(message)].concat(optionalParams));
        });
    };
    Debugger.prototype.group = function (groupTitle) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.group(groupTitle); });
    };
    Debugger.prototype.groupCollapsed = function (groupTitle) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.groupCollapsed(groupTitle); });
    };
    Debugger.prototype.groupEnd = function () {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.groupEnd(); });
    };
    Debugger.prototype.markTimeline = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.markTimeline(label); });
    };
    Debugger.prototype.profile = function (reportName) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.profile(reportName); });
    };
    Debugger.prototype.profileEnd = function () {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.profileEnd(); });
    };
    Debugger.prototype.table = function () {
        var _this = this;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        return this.doIfEnabled(function () {
            var _a;
            return (_a = _this.console).table.apply(_a, data);
        });
    };
    /**
     * Throws usual error in debug mode and non-blocking otherwise
     * @param {Error} error
     */
    Debugger.prototype.throw = function (error) {
        error.message = this.addPrefix(error.message);
        if (this.isEnabled) {
            throw error;
        }
        setTimeout(function () {
            throw error;
        });
    };
    Debugger.prototype.doIfEnabled = function (action) {
        if (this.isEnabled) {
            return action();
        }
    };
    Debugger.prototype.addPrefix = function (message) {
        if (this.prefix && (typeof message === 'string' || !message)) {
            return this.prefix + message;
        }
        return message;
    };
    return Debugger;
}());



/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: User, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = "/api/Auth";
    }
    AuthService.prototype.GetUser = function () {
        var _this = this;
        if (this._user)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._user);
        return this.http.get(this.authUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (x) { return _this._user = x; }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/library/detail/detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/library/detail/detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     *ngIf=\"book\"\r\n     gdAreas=\"image content | review review\"\r\n     gdGap=\"16px\"\r\n     gdRows=\"auto auto\"\r\n     gdColumns=\"300px auto\">\r\n\r\n    <div gdArea=\"image\">\r\n        <mat-card fxLayout=\"column\" class=\"mat-elevation-z2\" style=\"height:100%\">\r\n            <div fxFlex style=\"height:300px;text-align:center\">\r\n                <img class=\"img-responsive\" style=\"max-height:300px;width:auto;align-self:center\" mat-card-image [src]=\"book.imageUrl\" alt=\"Photo\">\r\n            </div>\r\n            <div fxFlex fxLayoutAlign=\"center end\">\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"example-full-width\" *ngIf=\"user!=undefined\">\r\n                    <button mat-button class=\"btn-block\" color=\"primary\" *ngIf=\"book.loan==''\" (click)=\"LoanBook(book)\">\r\n                        Imprumuta\r\n                    </button>\r\n                    <div class=\"d-inline-block\" *ngIf=\"book.loan!=''\" matTooltip=\"{{book.loan=='Pending' ? 'O cerere de imprumut a fost adaugata deja!' : 'Carte imprumutata!'}}\">\r\n                        <button mat-button color=\"primary\" class=\"btn-block\" disabled>\r\n                            Imprumuta\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n    <div gdArea=\"content\">\r\n        <mat-card class=\"mat-elevation-z2\">\r\n            <div gdAreas=\"title star\"\r\n                 gdGap=\"16px\"\r\n                 gdColumns=\"auto 60px\">\r\n                <div gdArea=\"title\">\r\n                    <mat-card-title>{{book.title}}</mat-card-title>\r\n                    <mat-card-subtitle>{{GetAut(book)}}</mat-card-subtitle>\r\n                </div>\r\n                <div *ngIf=\"user!=undefined\" gdArea=\"star\" gdGridAlign=\"center center\">\r\n                    <button mat-button style=\"min-width:40px;padding:16px;\" *ngIf=\"book.wish==true\"\r\n                            matTooltip=\"Elimina din favorite\"\r\n                            (click)=\"RemoveFromWishList(book)\">\r\n                        <i class=\"fas fa-2x fa-star text-warning\"></i>\r\n                    </button>\r\n                    <button mat-button style=\"min-width:40px;padding:16px;\" *ngIf=\"book.wish==false\"\r\n                            matTooltip=\"Adauga la favorite\"\r\n                            (click)=\"AddToWishList(book)\">\r\n                        <i class=\"fas fa-2x fa-star text-dark\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <p>\r\n                <b class=\"mr-2\">Genuri:</b>\r\n                <mat-chip-list class=\"d-inline-block\">\r\n                    <mat-chip *ngFor=\"let gen of book.genres\">{{gen.name}}</mat-chip>\r\n                </mat-chip-list>\r\n            </p>\r\n            <div class=\"mb-2\" fxLayout=\"row\">\r\n                <div fxFlex>\r\n                    <b class=\"mr-1\">Editura:</b>\r\n                    <span>{{book.editura}}</span>\r\n                </div>\r\n                <div fxFlex>\r\n                    <b class=\"mr-1\">ISBN:</b>\r\n                    <span>{{book.isbn}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2\" fxLayout=\"row\">\r\n                <div fxFlex>\r\n                    <b class=\"mr-1\">An aparitie:</b>\r\n                    <span>{{book.year | date:'MMMM-yyyy'}}</span>\r\n                </div>\r\n                <div fxFlex>\r\n                    <b class=\"mr-1\">Limba:</b>\r\n                    <span>{{book.language}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-2\" fxLayout=\"row\">\r\n                <div fxFlex>\r\n                    <b class=\"mr-1\">Rating:</b>\r\n                    <bar-rating class=\"d-inline-block\" [(rate)]=\"reviewAvg\" [max]=\"5\" [readOnly]=\"true\"></bar-rating> {{reviewAvg}}\r\n                </div>\r\n                <div fxFlex>\r\n                    <b class=\"mr-1\">Nr. pagini:</b>\r\n                    <span>{{book.nrOfPages}}</span>\r\n                </div>\r\n            </div>\r\n            <div fxLayout=\"row\">\r\n                <div *ngIf=\"fullDescription==false\">\r\n                    <pre class=\"pre-description\">\r\n                    <span>{{book.description | truncate:200}}</span>\r\n                  </pre>\r\n                    <div fxLayoutAlign=\"center center\">\r\n                        <button mat-button color=\"primary\" (click)=\"fullDescription=!fullDescription\">\r\n                            Afiseaza toata descrierea\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"fullDescription==true\">\r\n                    <pre class=\"pre-scrollable pre-description\">\r\n                    <span>{{book.description}}</span>\r\n                  </pre>\r\n                    <div fxLayoutAlign=\"center center\">\r\n                        <button mat-button color=\"warn\" (click)=\"fullDescription=!fullDescription\">\r\n                            Ascunde toata descrierea\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </mat-card>\r\n    </div>\r\n    <div gdArea=\"review\">\r\n        <mat-card class=\"mat-elevation-z2\">\r\n            <mat-toolbar class=\"mb-3\">\r\n                <span>Reviews</span>\r\n            </mat-toolbar>\r\n            <mat-card class=\"mat-elevation-z2 mb-3\">\r\n                <mat-card-content>\r\n                    <div *ngIf=\"user!=undefined && !ExistReview()\" fxLayout=\"column\">\r\n                        <div fxFlex >\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <textarea matInput [(ngModel)]=\"addReviewText\" placeholder=\"Leave a comment\"></textarea>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex>\r\n                            <div fxLayout=\"row\">\r\n                                <div fxFlex>\r\n                                    <b>\r\n                                        Rating:\r\n                                    </b>\r\n                                    <bar-rating class=\"d-inline-block\" [(rate)]=\"addReviewRate\" [max]=\"5\"></bar-rating> {{addReviewRate}}\r\n                                </div>\r\n                                <div fxFlex fxLayoutAlign=\"end center\">\r\n                                    <button mat-button (click)=\"AddReview()\">\r\n                                        Adauga <mat-icon class=\"ml-1\">send</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"ExistReview()\">\r\n                        <i class=\"text-muted mr-2\"> Ai adaugat deja review pentru aceasta carte! </i>\r\n                    </div>\r\n                    <div *ngIf=\"user==undefined\">\r\n                        <i class=\"text-muted mr-2\"> Autentifica-te pentru a lasa review </i>\r\n                        <a mat-button color=\"primary\" href=\"/Identity/Account/Login\">\r\n                            Autentificare\r\n                        </a>\r\n                    </div>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            <mat-card class=\"mat-elevation-z2 mb-3\" *ngFor=\"let rev of book.reviews\">\r\n                <div gdAreas=\"user free free rate\" class=\"mb-2\">\r\n                    <div gdArea=\"rate\" class=\"text-right\">\r\n                        <bar-rating class=\"d-inline-block\" [(rate)]=\"rev.rate\" [max]=\"5\" [readOnly]=\"true\"></bar-rating> {{rev.rate}}\r\n                    </div>\r\n                    <div gdArea=\"free\">\r\n\r\n                    </div>\r\n                    <div gdArea=\"user\">\r\n                        {{rev.bibliotecaUser.userName}}\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <pre class=\"pre-description mb-0\">\r\n                    <span>{{rev.text}}</span>\r\n                    </pre>\r\n                </div>\r\n                <div class=\"text-right text-muted\">\r\n                    <i>{{rev.data | date:'dd-MMMM-yyyy HH:mm'}}</i>\r\n                </div>\r\n            </mat-card>\r\n        </mat-card>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/library/detail/detail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/library/detail/detail.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pre-description {\n  display: block;\n  white-space: -moz-pre-wrap;\n  /* Mozilla, supported since 1999 */\n  white-space: -pre-wrap;\n  /* Opera */\n  white-space: -o-pre-wrap;\n  /* Opera */\n  white-space: pre-wrap;\n  /* CSS3 - Text module (Candidate Recommendation) http://www.w3.org/TR/css3-text/#white-space */\n  word-wrap: break-word;\n  /* IE 5.5+ */\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  .pre-description span {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px; }\n  .br-default {\n  margin: 0 !important; }\n  bar-rating > * {\n  margin: 0 !important; }\n  .example-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9kZXRhaWwvQzpcXFVzZXJzXFxhbmRyZWkuZnVuYXJ1XFxEZXNrdG9wXFxGYWN1bHRhdGVcXERBV1xcTGlicmFyeVxcQmlibGlvdGVjYU9ubGluZVxcQmlibGlvdGVjYU9ubGluZS9zcmNcXGFwcFxcbGlicmFyeVxcZGV0YWlsXFxkZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsMkJBQTBCO0VBQUUsbUNBQW1DO0VBQy9ELHVCQUFzQjtFQUFFLFdBQVc7RUFDbkMseUJBQXdCO0VBQUUsV0FBVztFQUNyQyxzQkFBcUI7RUFBRSwrRkFBK0Y7RUFDdEgsc0JBQXFCO0VBQUUsYUFBYTtFQUNwQyxrREFBaUQsRUFNcEQ7RUFiRDtJQVVRLGtEQUFpRDtJQUNqRCxnQkFBYyxFQUNqQjtFQUdMO0VBQ0kscUJBQW9CLEVBQ3ZCO0VBRUQ7RUFDSSxxQkFBb0IsRUFDdkI7RUFFRDtFQUNJLFlBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmUtZGVzY3JpcHRpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDsgLyogTW96aWxsYSwgc3VwcG9ydGVkIHNpbmNlIDE5OTkgKi9cclxuICAgIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7IC8qIE9wZXJhICovXHJcbiAgICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7IC8qIE9wZXJhICovXHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IC8qIENTUzMgLSBUZXh0IG1vZHVsZSAoQ2FuZGlkYXRlIFJlY29tbWVuZGF0aW9uKSBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXRleHQvI3doaXRlLXNwYWNlICovXHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIElFIDUuNSsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ici1kZWZhdWx0e1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJhci1yYXRpbmc+KntcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6MTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/library/detail/detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/library/detail/detail.component.ts ***!
  \****************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/library.service */ "./src/app/library/shared/library.service.ts");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/spinner.service */ "./src/app/core/spinner.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _loan_book_loan_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loan-book/loan-book.component */ "./src/app/library/loan-book/loan-book.component.ts");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(route, router, libraryService, authService, dialog, spinnerService, snackBar) {
        this.route = route;
        this.router = router;
        this.libraryService = libraryService;
        this.authService = authService;
        this.dialog = dialog;
        this.spinnerService = spinnerService;
        this.snackBar = snackBar;
        this.fullDescription = false;
        this.addReviewRate = 0;
        this.addReviewText = "";
        this.reviewAvg = 0;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.GetUser().subscribe(function (e) {
            _this.user = e;
        });
        this.bookId = parseInt(this.route.snapshot.paramMap.get('id'));
        this.GetBook(this.bookId);
    };
    DetailComponent.prototype.GetBook = function (bookId) {
        var _this = this;
        this.libraryService.GetBook(bookId).subscribe(function (data) {
            _this.book = data;
            if (_this.book.reviews.length > 0) {
                var sum_1 = 0;
                _this.book.reviews.map(function (e) { return e.rate; }).forEach(function (e) { return sum_1 += e; });
                _this.reviewAvg = sum_1 / _this.book.reviews.length;
            }
        });
    };
    DetailComponent.prototype.GetAut = function (book) {
        return book.authors.map(function (e) { return e.name; }).join(", ");
    };
    DetailComponent.prototype.GetGen = function (book) {
        return book.genres.map(function (e) { return e.name; }).join(", ");
    };
    DetailComponent.prototype.AddToWishList = function () {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.libraryService.AddRemoveWishList(this.book.bookId, this.user.userId, true).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Carte adaugata la favorite!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.book.wish = true;
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    DetailComponent.prototype.RemoveFromWishList = function () {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.libraryService.AddRemoveWishList(this.book.bookId, this.user.userId, false).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Carte stearsa de la favorite!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.book.wish = false;
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    DetailComponent.prototype.AddReview = function () {
        var _this = this;
        if (this.addReviewRate == null || this.addReviewRate == 0) {
            this.snackBar.open("Selecteaza un rating pentru review!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
            return;
        }
        this.spinnerService.spin$.next(true);
        this.libraryService.AddReviewReq(this.book.bookId, this.user.userId, this.addReviewText, this.addReviewRate).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Review-ul trimis cu succes, asteapta confirmare!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.book.reviews.push({
                bibliotecaUser: _this.user,
                bibliotecaUserId: _this.user.userId,
                book: null,
                bookId: _this.book.bookId,
                data: new Date(),
                rate: _this.addReviewRate,
                text: _this.addReviewText,
                reviewId: null
            });
            _this.addReviewRate = 0;
            _this.addReviewText = null;
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    DetailComponent.prototype.ExistReview = function () {
        if (this.user) {
            return this.book.reviews.map(function (e) { return e.bibliotecaUserId; }).indexOf(this.user.userId) > 0;
        }
    };
    DetailComponent.prototype.LoanBook = function (book) {
        var _this = this;
        var dialogRef = this.dialog.open(_loan_book_loan_book_component__WEBPACK_IMPORTED_MODULE_7__["LoanBookComponent"], {
            width: '1000px',
            data: {
                book: { bookId: book.bookId },
                storeSelected: null,
                stores: Object.assign([], book.stores),
                mention: ""
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result != undefined) {
                _this.spinnerService.spin$.next(true);
                _this.libraryService.AddLoanRequest(book.bookId, _this.user.userId, result.storeSelected.storeId, result.mention).subscribe(function (response) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("Cerere imprumut trimitsa!", null, {
                        duration: 3000,
                        panelClass: "text-success"
                    });
                    book.loan = "Pending";
                    book.stores.filter(function (e) { return e.storeId == result.storeSelected.storeId; })[0].stock--;
                }, function (error) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                        duration: 3000,
                        panelClass: "text-danger"
                    });
                });
            }
        });
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/library/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/library/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_library_service__WEBPACK_IMPORTED_MODULE_3__["LibraryService"],
            src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/library/index/index.component.html":
/*!****************************************************!*\
  !*** ./src/app/library/index/index.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n    <div fxFlex=\"20\">\r\n        <div class=\"searchBox\">\r\n            <mat-card class=\"mat-elevation-z2 mb-3\">\r\n                <mat-card-content>\r\n                    <mat-card-title>\r\n                        Filtreaza\r\n                    </mat-card-title>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input type=\"text\" placeholder=\"Gen\" matInput [formControl]=\"genControl\" [matAutocomplete]=\"autog\">\r\n                        <mat-autocomplete #autog=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let gen of genres\" [value]=\"gen.name\">\r\n                                {{gen.name}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input type=\"text\" placeholder=\"Autor\" matInput [formControl]=\"autorControl\" [matAutocomplete]=\"autoa\">\r\n                        <mat-autocomplete #autoa=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let aut of authors\" [value]=\"aut.name\">\r\n                                {{aut.name}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"An aparitie\" type=\"number\" [formControl]=\"yearControl\">\r\n                    </mat-form-field>\r\n                    <button mat-button (click)=\"GetBooksButton()\">\r\n                        <i class=\"fas fa-search\"></i> Cauta\r\n                    </button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n            <mat-card class=\"mat-elevation-z2\">\r\n                <mat-card-content>\r\n                    <mat-card-title>\r\n                        Cauta\r\n                    </mat-card-title>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"Cauta in rezultate afisate\" (keyup)=\"applyFilter($event.target.value)\">\r\n                    </mat-form-field>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </div>\r\n\r\n    </div>\r\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"20px\" fxLayoutAlign=\"flex-start\" fxFlex=\"60\" style=\"height:100%;overflow: auto\">\r\n        <ng-container *ngFor=\"let book of booksShow\" >\r\n            <mat-card fxFlex=\"0 1 calc(33.3% - 32px)\"\r\n                      class=\"example-card mat-elevation-z2 mb-3\">\r\n\r\n                <div style=\"height:300px;text-align:center\">\r\n                    <img class=\"img-responsive\" style=\"max-height:300px;width:auto;align-self:center\" mat-card-image [src]=\"book.imageUrl\" alt=\"Photo\">\r\n                </div>\r\n\r\n                <mat-card-content>\r\n                    <div gdAreas=\"title star | subtitle star\"\r\n                         gdGap=\"16px\"\r\n                         gdRows=\"auto auto\"\r\n                         gdColumns=\"auto 40px\">\r\n                        <mat-card-title gdArea=\"title\">{{book.title}}</mat-card-title>\r\n                        <mat-card-subtitle gdArea=\"subtitle\">{{GetAut(book)}}</mat-card-subtitle>\r\n                        <div *ngIf=\"user!=undefined\" gdArea=\"star\">\r\n                            <button mat-button style=\"min-width:40px\" *ngIf=\"book.wish==true\"\r\n                                    matTooltip=\"Elimina din favorite\"\r\n                                    (click)=\"RemoveFromWishList(book)\">\r\n                                <i class=\"fas fa-star text-warning\"></i>\r\n                            </button>\r\n                            <button mat-button style=\"min-width:40px\" *ngIf=\"book.wish==false\"\r\n                                    matTooltip=\"Adauga la favorite\"\r\n                                    (click)=\"AddToWishList(book)\">\r\n                                <i class=\"fas fa-star text-dark\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <p>\r\n                        <b class=\"mr-2\">Genuri:</b>\r\n                        <mat-chip-list class=\"d-inline-block\">\r\n                            <mat-chip *ngFor=\"let gen of book.genres\">{{gen.name}}</mat-chip>\r\n                        </mat-chip-list>\r\n                    </p>\r\n                    <p>\r\n                        <b>Rating:</b>\r\n                        <bar-rating class=\"d-inline-block\" [(rate)]=\"book.rate\" [max]=\"5\" [readOnly]=\"true\"></bar-rating> {{book.rate}}\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-button (click)=\"OpenDetail(book)\">\r\n                        Detalii\r\n                    </button>\r\n                    <a mat-button color=\"primary\" href=\"/Identity/Account/Login\" *ngIf=\"user==undefined\" matTooltip=\"Autentifica-te pentru a inmprumuta!\">\r\n                        Autentificare\r\n                    </a>\r\n                    <div *ngIf=\"user!=undefined\" style=\"display:inline-block\">\r\n                        <button mat-button color=\"primary\" *ngIf=\"book.loan==''\" (click)=\"LoanBook(book)\">\r\n                            Imprumuta\r\n                        </button>\r\n                        <div style=\"display:inline-block\" *ngIf=\"book.loan!=''\" matTooltip=\"{{book.loan=='Pending' ? 'O cerere de imprumut a fost adaugata deja!' : 'Carte imprumutata!'}}\">\r\n                            <button mat-button color=\"primary\" disabled>\r\n                                Imprumuta\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </ng-container>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/library/index/index.component.scss":
/*!****************************************************!*\
  !*** ./src/app/library/index/index.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".br-default {\n  margin: 0 !important; }\n\n.mat-card-title {\n  font-size: 20px; }\n\n.example-full-width {\n  width: 100%; }\n\n.searchBox {\n  position: fixed;\n  top: 75px;\n  left: 20px;\n  width: calc((100% / 5) - 50px); }\n\n.br-rating > br.br-default {\n  margin: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9pbmRleC9DOlxcVXNlcnNcXGFuZHJlaS5mdW5hcnVcXERlc2t0b3BcXEZhY3VsdGF0ZVxcREFXXFxMaWJyYXJ5XFxCaWJsaW90ZWNhT25saW5lXFxCaWJsaW90ZWNhT25saW5lL3NyY1xcYXBwXFxsaWJyYXJ5XFxpbmRleFxcaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxnQkFBYyxFQUNqQjs7QUFFRDtFQUNJLFlBQ0osRUFBQzs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsVUFBUztFQUNULFdBQVU7RUFDViwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSxxQkFBb0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyLWRlZmF1bHR7XHJcbiAgICBtYXJnaW46MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOjEwMCVcclxufVxyXG5cclxuLnNlYXJjaEJveCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDc1cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLyA1KSAtIDUwcHgpO1xyXG59XHJcblxyXG4uYnItcmF0aW5nPmJyLmJyLWRlZmF1bHR7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/library/index/index.component.ts":
/*!**************************************************!*\
  !*** ./src/app/library/index/index.component.ts ***!
  \**************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/library.service */ "./src/app/library/shared/library.service.ts");
/* harmony import */ var src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/spinner.service */ "./src/app/core/spinner.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loan_book_loan_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loan-book/loan-book.component */ "./src/app/library/loan-book/loan-book.component.ts");










var IndexComponent = /** @class */ (function () {
    function IndexComponent(authService, libraryService, spinnerService, snackBar, dialog, router, localStorageService) {
        this.authService = authService;
        this.libraryService = libraryService;
        this.spinnerService = spinnerService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.localStorageService = localStorageService;
        this.booksShow = [];
        this.genControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.autorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.searchFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.yearControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genreId = null;
        this.authorId = null;
        this.year = null;
        if (this.genreStorage != null) {
            this.genreId = parseInt(this.genreStorage);
        }
        if (this.authorStorage != null) {
            this.authorId = parseInt(this.authorStorage);
        }
        if (this.yearStorage != null) {
            this.year = parseInt(this.yearStorage);
            this.yearControl.setValue(this.year);
        }
        this.authService.GetUser().subscribe(function (e) {
            _this.user = e;
        });
        this.GetGenres();
        this.GetAuthors();
        this.GetBooks(this.genreId, this.authorId, this.year);
        this.localStorageService.clear();
    };
    IndexComponent.prototype.GetGenres = function () {
        var _this = this;
        this.libraryService.GetGenres().subscribe(function (data) {
            _this.genres = data;
            _this.genreId == null ? null : _this.genControl.setValue(_this.genres.filter(function (e) { return e.genreId == _this.genreId; })[0].name);
        });
    };
    IndexComponent.prototype.GetAuthors = function () {
        var _this = this;
        this.libraryService.GetAutori().subscribe(function (data) {
            _this.authors = data;
            _this.authorId == null ? null : _this.autorControl.setValue(_this.authors.filter(function (e) { return e.authorId == _this.authorId; })[0].name);
        });
    };
    IndexComponent.prototype.GetBooksButton = function () {
        var _this = this;
        console.log(this.genControl.value);
        var genreId = (this.genControl.value != null || this.genControl.value != "") ? this.genres.filter(function (e) { return e.name == _this.genControl.value; })[0].genreId : null;
        var authorId = (this.autorControl.value != null || this.autorControl.value != "") ? this.authors.filter(function (e) { return e.name == _this.autorControl.value; })[0].authorId : null;
        var year = (this.yearControl.value != null || this.yearControl.value != "") ? this.yearControl.value : null;
        this.GetBooks(genreId, authorId, year);
    };
    IndexComponent.prototype.GetBooks = function (genreId, authorId, an) {
        var _this = this;
        this.booksShow = [];
        this.books = [];
        this.libraryService.GetBooks(genreId, authorId, an).subscribe(function (response) {
            _this.books = response;
            if (_this.books.length == 0) {
                _this.booksShow = [];
            }
            else {
                Object.assign(_this.booksShow, _this.books);
            }
        });
    };
    IndexComponent.prototype.LoanBook = function (book) {
        var _this = this;
        var dialogRef = this.dialog.open(_loan_book_loan_book_component__WEBPACK_IMPORTED_MODULE_9__["LoanBookComponent"], {
            width: '1000px',
            data: {
                book: book,
                storeSelected: null,
                stores: Object.assign([], book.stores),
                mention: ""
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result != undefined) {
                _this.spinnerService.spin$.next(true);
                _this.libraryService.AddLoanRequest(book.bookId, _this.user.userId, result.storeSelected.storeId, result.mention).subscribe(function (response) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("Cerere imprumut trimitsa!", null, {
                        duration: 3000,
                        panelClass: "text-success"
                    });
                    book.loan = "Pending";
                    book.stores.filter(function (e) { return e.storeId == result.storeSelected.storeId; })[0].stock--;
                }, function (error) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                        duration: 3000,
                        panelClass: "text-danger"
                    });
                });
            }
        });
    };
    IndexComponent.prototype.GetAut = function (book) {
        return book.authors.map(function (e) { return e.name; }).join(", ");
    };
    IndexComponent.prototype.GetGen = function (book) {
        return book.genres.map(function (e) { return e.name; }).join(", ");
    };
    IndexComponent.prototype.AddToWishList = function (book) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.libraryService.AddRemoveWishList(book.bookId, this.user.userId, true).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Carte adaugata la favorite!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            book.wish = true;
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    IndexComponent.prototype.RemoveFromWishList = function (book) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.libraryService.AddRemoveWishList(book.bookId, this.user.userId, false).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Carte stearsa de la favorite!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            book.wish = false;
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    IndexComponent.prototype.applyFilter = function (filterValue) {
        this.booksShow = this.books.filter(function (e) { return e.title.toLowerCase().trim().indexOf(filterValue.toLowerCase().trim()) > -1; });
    };
    IndexComponent.prototype.OpenDetail = function (book) {
        var _this = this;
        if (this.genControl.value != null)
            this.genreStorage = this.genres.filter(function (e) { return e.name == _this.genControl.value; })[0].genreId;
        if (this.autorControl.value != null)
            this.authorStorage = this.authors.filter(function (e) { return e.name == _this.autorControl.value; })[0].authorId;
        if (this.yearControl.value != null)
            this.yearStorage = this.yearControl.value;
        this.router.navigate(['/library', 'book', book.bookId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndexComponent.prototype, "genreStorage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndexComponent.prototype, "authorStorage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IndexComponent.prototype, "yearStorage", void 0);
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/library/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/library/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_library_service__WEBPACK_IMPORTED_MODULE_3__["LibraryService"],
            src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ngx_store__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/library/library-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/library/library-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LibraryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryRoutingModule", function() { return LibraryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/library/index/index.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/library/detail/detail.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/library/user-dashboard/user-dashboard.component.ts");






var routes = [
    { path: '', redirectTo: 'index' },
    {
        path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    },
    {
        path: 'book/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
    },
    {
        path: 'userdashboard', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"]
    }
];
var LibraryRoutingModule = /** @class */ (function () {
    function LibraryRoutingModule() {
    }
    LibraryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LibraryRoutingModule);
    return LibraryRoutingModule;
}());



/***/ }),

/***/ "./src/app/library/library.module.ts":
/*!*******************************************!*\
  !*** ./src/app/library/library.module.ts ***!
  \*******************************************/
/*! exports provided: LibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _library_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library-routing.module */ "./src/app/library/library-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/library.service */ "./src/app/library/shared/library.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "./src/app/library/index/index.component.ts");
/* harmony import */ var _core_spinner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/spinner.service */ "./src/app/core/spinner.service.ts");
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bar-rating */ "./node_modules/ngx-bar-rating/index.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/library/detail/detail.component.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/library/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _loan_book_loan_book_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loan-book/loan-book.component */ "./src/app/library/loan-book/loan-book.component.ts");
















var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_12__["DetailComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["UserDashboardComponent"], _loan_book_loan_book_component__WEBPACK_IMPORTED_MODULE_15__["LoanBookComponent"]],
            providers: [_shared_library_service__WEBPACK_IMPORTED_MODULE_6__["LibraryService"], _core_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _library_routing_module__WEBPACK_IMPORTED_MODULE_4__["LibraryRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                ngx_bar_rating__WEBPACK_IMPORTED_MODULE_11__["BarRatingModule"],
                ngx_store__WEBPACK_IMPORTED_MODULE_13__["WebStorageModule"]
            ],
            entryComponents: [_loan_book_loan_book_component__WEBPACK_IMPORTED_MODULE_15__["LoanBookComponent"]]
        })
    ], LibraryModule);
    return LibraryModule;
}());



/***/ }),

/***/ "./src/app/library/loan-book/loan-book.component.html":
/*!************************************************************!*\
  !*** ./src/app/library/loan-book/loan-book.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">Imprumuta carte</h1>\r\n<div mat-dialog-content>\r\n    <div fxLayout=\"column\">\r\n        <div fxFlex>\r\n            <mat-form-field class=\"example-full-width\">\r\n                <textarea matInput [(ngModel)]=\"data.mention\" placeholder=\"Mentiuni\"></textarea>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex>\r\n            <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n                <ng-container matColumnDef=\"storeId\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Id. </mat-header-cell>\r\n                    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.storeId}} </mat-cell>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"store.name\">\r\n                    <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Nume </mat-header-cell>\r\n                    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.store.name}} </mat-cell>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"store.address\">\r\n                    <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Adresa </mat-header-cell>\r\n                    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.store.address}} </mat-cell>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"stock\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Stock. </mat-header-cell>\r\n                    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.stock}} </mat-cell>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"actions\">\r\n                    <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                    <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\r\n                        <button mat-button color=\"primary\" (click)=\"Imprumuta(element)\">Imprumuta</button>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n\r\n            </table>\r\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button mat-button color=\"warn\" (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon> Renunta\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/library/loan-book/loan-book.component.scss":
/*!************************************************************!*\
  !*** ./src/app/library/loan-book/loan-book.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9sb2FuLWJvb2svQzpcXFVzZXJzXFxhbmRyZWkuZnVuYXJ1XFxEZXNrdG9wXFxGYWN1bHRhdGVcXERBV1xcTGlicmFyeVxcQmlibGlvdGVjYU9ubGluZVxcQmlibGlvdGVjYU9ubGluZS9zcmNcXGFwcFxcbGlicmFyeVxcbG9hbi1ib29rXFxsb2FuLWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFVLEVBQ2I7O0FBRUQ7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2xvYW4tYm9vay9sb2FuLWJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/library/loan-book/loan-book.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/library/loan-book/loan-book.component.ts ***!
  \**********************************************************/
/*! exports provided: LoanBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanBookComponent", function() { return LoanBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var LoanBookComponent = /** @class */ (function () {
    function LoanBookComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['storeId', 'store.name', 'store.address', 'stock', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data.stores);
    }
    LoanBookComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data.stores);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    LoanBookComponent.prototype.Imprumuta = function (element) {
        this.data.storeSelected = element;
        this.dialogRef.close(this.data);
    };
    LoanBookComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], LoanBookComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], LoanBookComponent.prototype, "paginator", void 0);
    LoanBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loan-book',
            template: __webpack_require__(/*! ./loan-book.component.html */ "./src/app/library/loan-book/loan-book.component.html"),
            styles: [__webpack_require__(/*! ./loan-book.component.scss */ "./src/app/library/loan-book/loan-book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], LoanBookComponent);
    return LoanBookComponent;
}());



/***/ }),

/***/ "./src/app/library/shared/library.service.ts":
/*!***************************************************!*\
  !*** ./src/app/library/shared/library.service.ts ***!
  \***************************************************/
/*! exports provided: LibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryService", function() { return LibraryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LibraryService = /** @class */ (function () {
    function LibraryService(http) {
        this.http = http;
        this.baseUrl = "/api/Library/";
    }
    LibraryService.prototype.GetAutori = function () {
        return this.http.get(this.baseUrl + "GetAuthors");
    };
    LibraryService.prototype.GetGenres = function () {
        return this.http.get(this.baseUrl + "GetGenres");
    };
    LibraryService.prototype.GetBooks = function (GenreId, AutorId, An) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                GenreId: GenreId == null ? "" : GenreId.toString(),
                AutorId: AutorId == null ? "" : AutorId.toString(),
                An: An == null ? "" : An.toString(),
            }
        });
        return this.http.get(this.baseUrl + "GetBooks", { params: params });
    };
    LibraryService.prototype.GetBook = function (bookId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("BookId", bookId.toString());
        return this.http.get(this.baseUrl + "GetBook", { params: params });
    };
    LibraryService.prototype.AddRemoveWishList = function (BookId, UserId, WishListed) {
        return this.http.post(this.baseUrl + "AddRemoveWishList", {
            BookId: BookId,
            UserId: UserId,
            WishListed: WishListed
        });
    };
    LibraryService.prototype.AddReviewReq = function (BookId, UserId, Text, Rate) {
        return this.http.post(this.baseUrl + "AddReviewReq", {
            BookId: BookId,
            UserId: UserId,
            Text: Text,
            Rate: Rate
        });
    };
    LibraryService.prototype.GetWishList = function (UserId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("UserId", UserId.toString());
        return this.http.get(this.baseUrl + "GetWishList", { params: params });
    };
    LibraryService.prototype.AddLoanRequest = function (BookId, UserId, StoreId, Mention) {
        return this.http.post(this.baseUrl + "AddLoanRequest", {
            BookId: BookId,
            UserId: UserId,
            StoreId: StoreId,
            Mention: Mention
        });
    };
    LibraryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LibraryService);
    return LibraryService;
}());



/***/ }),

/***/ "./src/app/library/user-dashboard/user-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/library/user-dashboard/user-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div>\r\n        <h3>Wishlist:</h3>\r\n    </div>\r\n    <div>\r\n        <ng-container *ngFor=\"let book of wishListbooks\">\r\n            <mat-card fxFlex=\"0 1 calc(33.3% - 32px)\"\r\n                      class=\"example-card mat-elevation-z2 mb-3\">\r\n\r\n                <div style=\"height:300px;text-align:center\">\r\n                    <img class=\"img-responsive\" style=\"max-height:300px;width:auto;align-self:center\" mat-card-image [src]=\"book.imageUrl\" alt=\"Photo\">\r\n                </div>\r\n\r\n                <mat-card-content>\r\n                    <div gdAreas=\"title star | subtitle star\"\r\n                         gdGap=\"16px\"\r\n                         gdRows=\"auto auto\"\r\n                         gdColumns=\"auto 40px\">\r\n                        <mat-card-title gdArea=\"title\">{{book.title}}</mat-card-title>\r\n                        <mat-card-subtitle gdArea=\"subtitle\">{{GetAut(book)}}</mat-card-subtitle>\r\n                        <div *ngIf=\"user!=undefined\" gdArea=\"star\">\r\n                            <button mat-button style=\"min-width:40px\" *ngIf=\"book.wish==true\"\r\n                                    matTooltip=\"Elimina din favorite\"\r\n                                    (click)=\"RemoveFromWishList(book)\">\r\n                                <i class=\"fas fa-star text-warning\"></i>\r\n                            </button>\r\n                            <button mat-button style=\"min-width:40px\" *ngIf=\"book.wish==false\"\r\n                                    matTooltip=\"Adauga la favorite\"\r\n                                    (click)=\"AddToWishList(book)\">\r\n                                <i class=\"fas fa-star text-dark\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <p>\r\n                        <b class=\"mr-2\">Genuri:</b>\r\n                        <mat-chip-list class=\"d-inline-block\">\r\n                            <mat-chip *ngFor=\"let gen of book.genres\">{{gen.name}}</mat-chip>\r\n                        </mat-chip-list>\r\n                    </p>\r\n                    <p>\r\n                        <b>Rating:</b>\r\n                        <bar-rating class=\"d-inline-block\" [(rate)]=\"book.rate\" [max]=\"5\" [readOnly]=\"true\"></bar-rating> {{book.rate}}\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-card-actions>\r\n                    <button mat-button [routerLink]=\"['/library/book', book.bookId]\">\r\n                        Detalii\r\n                    </button>\r\n                    <a mat-button color=\"primary\" href=\"/Identity/Account/Login\" *ngIf=\"user==undefined\" matTooltip=\"Autentifica-te pentru a inmprumuta!\">\r\n                        Autentificare\r\n                    </a>\r\n                    <div *ngIf=\"user!=undefined\" style=\"display:inline-block\">\r\n                        <button mat-button color=\"primary\" *ngIf=\"book.loan==''\">\r\n                            Imprumuta\r\n                        </button>\r\n                        <div style=\"display:inline-block\" *ngIf=\"book.loan!=''\" matTooltip=\"{{book.loan=='Pending' ? 'O cerere de imprumut a fost adaugata deja!' : 'Carte imprumutata!'}}\">\r\n                            <button mat-button color=\"primary\" disabled>\r\n                                Imprumuta\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </ng-container>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/library/user-dashboard/user-dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/library/user-dashboard/user-dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/library/user-dashboard/user-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/library/user-dashboard/user-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_library_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/library.service */ "./src/app/library/shared/library.service.ts");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/spinner.service */ "./src/app/core/spinner.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(router, libraryService, authService, spinnerService, snackBar) {
        this.router = router;
        this.libraryService = libraryService;
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.snackBar = snackBar;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.GetUser().subscribe(function (e) {
            _this.user = e;
            _this.GetWishList();
        });
    };
    UserDashboardComponent.prototype.GetAut = function (book) {
        return book.authors.map(function (e) { return e.name; }).join(", ");
    };
    UserDashboardComponent.prototype.GetGen = function (book) {
        return book.genres.map(function (e) { return e.name; }).join(", ");
    };
    UserDashboardComponent.prototype.GetWishList = function () {
        var _this = this;
        this.libraryService.GetWishList(this.user.userId).subscribe(function (response) {
            _this.wishListbooks = response;
            if (_this.wishListbooks.length == 0) {
                _this.wishListbooksShow = [];
            }
            else {
                Object.assign(_this.wishListbooksShow, _this.wishListbooks);
            }
        });
    };
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/library/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.scss */ "./src/app/library/user-dashboard/user-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_library_service__WEBPACK_IMPORTED_MODULE_2__["LibraryService"],
            src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=library-library-module.js.map