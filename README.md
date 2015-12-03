# yeslog

yes, I wrote another logging module.

It's a super simple implementation/api.

```js
var Log = require('yeslog')
var path = require('path')

var filename = path.join(__dirname, __filename)

var log = new Log('INFO', filename, process.stderr)

log.debug('yeah, so what') // nothing written

// these all get logged:
log.info('interesting stuff')
log.warn('this is the kinda bad?')
log.error('stop!')
```

## API

```
var Log = require('yeslog')

var log = new Log(level, name, stream)
```

### Arguments
- `level`: one of the following strings:


  - `'TRACE'`
  - `'DEBUG'`
  - `'INFO'`
  - `'WARN'`
  - `'ERROR'`
  - `'FATAL'`

  Determines which messages get written to the stream.

- `name`: A string to include which describes the file originating the error.

- `stream`: A writable stream to which to write messages.


### Methods

- `log` is an object with methods:

  - `trace`
  - `debug`
  - `info`
  - `warn`
  - `error`
  - `fatal`

  Each of which expects a string to be passed to `util.format` and writes it to
  the supplied stream.

  Each output line has the format:

  ```
  LEVEL (isodate) [name]: MESSAGE
  ```






