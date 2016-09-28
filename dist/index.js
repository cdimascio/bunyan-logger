'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.configure = configure;

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function configure(_ref) {
  var appId = _ref.appId;
  var level = _ref.level;

  Logger.B = _bunyan2.default.createLogger({ name: appId || 'appId' });
  Logger.B.level(level || 'debug');
}

var Logger = function () {
  function Logger(module) {
    _classCallCheck(this, Logger);

    if (!module) {
      throw Error(this.constructor.name + ': module required');
    }
    this.module = module;
  }

  _createClass(Logger, [{
    key: 'info',
    value: function info(method, msg) {
      return Logger.B.info(this._props(method), msg);
    }
  }, {
    key: 'error',
    value: function error(method, msg) {
      return Logger.B.error(this._props(method), msg);
    }
  }, {
    key: 'warn',
    value: function warn(method, msg) {
      return Logger.B.warn(this._props(method), msg);
    }
  }, {
    key: 'debug',
    value: function debug(method, msg) {
      return Logger.B.debug(this._props(method), msg);
    }
  }, {
    key: 'trace',
    value: function trace(method, msg) {
      return Logger.B.trace(this._props(method), msg);
    }
  }, {
    key: '_props',
    value: function _props(method) {
      return { module: this.module, method: method };
    }
  }]);

  return Logger;
}();

exports.default = Logger;


Logger.B = _bunyan2.default.createLogger({ name: 'appId' });
Logger.B.level('debug');