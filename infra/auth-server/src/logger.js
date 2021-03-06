'use strict'

const Logger = require('logplease')
Logger.setLogLevel(process.env.LOG_LEVEL || 'INFO')
module.exports = Logger.create('origin-auth-server', {
  color: Logger.Colors.Yellow,
  showTimestamp: false
})
