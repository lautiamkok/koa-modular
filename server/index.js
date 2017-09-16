'use strict'

import Koa from 'koa'
import http from 'http'
import config from './config'
import middlewares from './middlewares'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || config.server.port

// Middlewares are imported here.
middlewares(app)

// app.listen(port, host)
module.exports = app.listen(port, host)

// Socket io hoook up.
// const server = http.createServer(app.callback())
// const io = socket(server)

// For unit test, it's important to export the http.Server object returned by
// app.listen(3000) instead of just the function app, otherwise you will get
// TypeError: app.address is not a function.
// server.listen(port, host)
// module.exports = server.listen(port, host)
