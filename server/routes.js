'use strict'

import Router from 'koa-trie-router'
import mount from 'koa-mount'

// Import routes from different modules.
import home from 'default/home'
import user from 'default/user'

const router = new Router()

export default () => {
  // Add Routes.
  router.use(mount('/', home()))
  router.use(mount('/users', user()))
  return router.middleware()
}
