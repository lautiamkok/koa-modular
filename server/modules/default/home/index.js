'use strict'

import Router from 'koa-trie-router'
import index from './_routes'

const router = new Router()

export default () => {
  router.get(index())
  return router.middleware()
}
