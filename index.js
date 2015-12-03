var util = require('util')

var LEVELS = [
  'TRACE',
  'DEBUG',
  'INFO',
  'WARN',
  'ERROR',
  'FATAL'
]

module.exports = function Logger (level, filename, outputStream) {
  if (!(this instanceof Logger)) {
    return new Logger(level, filename, outputStream)
  }

  this.levelIndex = LEVELS.indexOf(level)

  if (this.levelIndex < 0) {
    throw new Error(util.format('invalid log level: %s', level))
  }

  this.level = level
  this.outputStream = outputStream

  for (var i = 0, len = LEVELS.length; i < len; ++i) {
    this[LEVELS[i].toLowerCase()] = logMethodFactory(this, filename, i)
  }
}

function logMethodFactory (instance, filename, levelIndex) {
  return function () {
    if (instance.levelIndex > levelIndex) {
      return
    }

    instance.outputStream.write(util.format(
      '%s (%s) [%s]: %s\n',
      LEVELS[levelIndex],
      (new Date()).toISOString(),
      filename,
      util.format.apply(util, arguments)
    ))
  }
}
