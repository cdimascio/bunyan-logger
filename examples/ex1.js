const Logger = require('../dist').default;
// configure the app wide log level and app name
require('../dist').configure({
  appId: 'TestApp',
  level: 'debug'
});

// Example class with its own logger
class MyClass {
  constructor() {
    this.l = new Logger(this.constructor.name);
  }
  myMethod() {
    this.l.debug('myMethod', {key: 'value'});
  }
}

// Main app with its own logger
const l = new Logger('MyApp');
l.info('main', 'my app is starting');
new MyClass().myMethod();
l.info('main', 'my app is finished');

