#bunyan-node-logger
A simple bunyan based logger for Node.js

## Install
`npm install bunyan-node-logger`

## Usage

### Site configuration

Define the sitewide application id and log level

```javascript
require('../dist').configure({
  appId: 'TestApp',
  level: 'debug'
});
```

###Log messages
Create a logger instance

```javascript
const Logger = require('bunyan-node-logger').default;
const l = new Logger('MyModules');
```

Log messages

```javascript
l.info('main', {id: 1, name: 'sam'});
l.error('main', 'yikes!!!');
```

## API

### Methods
|method              |params|
|--------------------|--------------------|
|error  |(method: string, msg: any)|
|warn  |(method: string, msg: any)|
|info  |(method: string, msg: any)|
|debug  |(method: string, msg: any)|
|trace  |(method: string, msg: any)|
### Parameters

`method` is the method name e.g. 'myMethod'

`msg` is the message to log. it can be any js primitive, object, or array e.g. `{id: 'test', arr: [1,2,3], b: true}`

## Run the example
This repo contains a simple example. To run it, execute:

`node examples/ex1.js`

## Example
Below is a simple example. See exmples/ex1.js

```javascript
const Logger = require('bunyan-node-logger').default;
// configure the app wide log level and app name
require('bunyan-node-logger').configure({
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
```
####output: 

```json
{"name":"TestApp","hostname":"Carmines-MacBook-Pro-7.local","pid":18620,"level":30,"module":"MyApp","method":"main","msg":"my app is starting","time":"2016-09-28T00:58:19.688Z","v":0}
{"name":"TestApp","hostname":"Carmines-MacBook-Pro-7.local","pid":18620,"level":20,"module":"MyClass","method":"myMethod","msg":"{ key: 'value' }","time":"2016-09-28T00:58:19.689Z","v":0}
{"name":"TestApp","hostname":"Carmines-MacBook-Pro-7.local","pid":18620,"level":30,"module":"MyApp","method":"main","msg":"my app is finished","time":"2016-09-28T00:58:19.689Z","v":0}

```

##License
[MIT](https://opensource.org/licenses/MIT)