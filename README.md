# yeslog

yes, I wrote another logging module.

It's a super simple implementation/api.

```js
var Log = require('yeslog')

var log = new Log('INFO', process.stderr)

log.debug('yeah, so what') // nothing written

// these all get logged:
log.info('interesting stuff')   
log.warn('this is the kinda bad?')
log.error('stop!')
```

## API

```
var Log = require('yeslog')

var log = new Log(level, stream)
```

### Arguments
- `level`: one of the following strings:

  - `'DEBUG'`
  - `'INFO'`
  - `'WARN'`
  - `'ERROR'`

  Determines which messages get written to the stream.

- `stream`: A writable stream to which to write messages.


### Methods

- `log` is an object with methods:

  - `debug`
  - `info`
  - `warn`
  - `error`

  Each of which expects a string to be passed to `util.format` and writes it to
  the supplied stream.

  Each output line has the format:

  ```
  LEVEL (isodate): MESSAGE
  ```






