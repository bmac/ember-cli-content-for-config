/* jshint node: true */
'use strict';

function isObject(x) {
  return typeof x === 'object' && x !== null;
}

function getProp(obj, path) {
  if (!isObject(obj) || typeof path !== 'string') {
    return obj;
  }

  path = path.split('.');

  return getProp(obj[path.shift()], path.length && path.join('.'));
};

module.exports = {
  name: 'ember-cli-content-for-config',
  contentFor: function(type, config) {
    var path = type.split('.');
    
    if (path.shift() === 'config') {
      return getProp(config, path.join('.'));
    }
  }
};
