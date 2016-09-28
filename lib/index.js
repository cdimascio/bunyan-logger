import bunyan from 'bunyan';
export function configure({
  appId,
  level
}) {
  Logger.B = bunyan.createLogger({name: appId || 'appId'});
  Logger.B.level(level || 'debug');
}

export default class Logger {
  constructor(module) {
    if (!module) { throw Error(`${this.constructor.name}: module required`); }
    this.module = module;
  }

  info(method, msg) {
    return Logger.B.info(this._props(method), msg);
  }

  error(method, msg) {
    return Logger.B.error(this._props(method), msg);
  }

  warn(method, msg) {
    return Logger.B.warn(this._props(method), msg);
  }

  debug(method, msg) {
    return Logger.B.debug(this._props(method), msg);
  }

  trace(method, msg) {
    return Logger.B.trace(this._props(method), msg);
  }

  _props(method) {
    return {module: this.module, method};
  }
}

Logger.B = bunyan.createLogger({name: 'appId'});
Logger.B.level('debug');