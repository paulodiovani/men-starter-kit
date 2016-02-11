process.env.NODE_ENV = 'test'

global.expect  = require('chai').expect
global.request = require('supertest')
global.app     = require('../app')

port = process.env.PORT || '3101'
app.set('port', port)
