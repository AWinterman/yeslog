var Logger = require('./')
var tape = require('tape')
var through = require('through')
var concat = require('concat-stream')

tape('logs at the appropriate level', function (t) {
  var stream = through()

  var expected = [
    'INFO [./test.js]: goodbye',
    'WARN [./test.js]: watch out!',
    'ERROR [./test.js]: oh noes',
    'FATAL [./test.js]: very very bad'
  ].join('\n') + '\n'

  var results = concat(function (data) {
    t.equal(
      data.replace(/ \(.*?\)/g, '')
      , expected
    )

    t.end()
  })

  var logger = new Logger('INFO', './test.js', stream)

  stream.pipe(results)

  logger.debug('hello')
  logger.info('goodbye')
  logger.warn('watch out!')
  logger.error('oh noes')
  logger.fatal('very very bad')

  stream.end()
})
