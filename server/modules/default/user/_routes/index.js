'use strict'

import Router from 'koa-trie-router'
import uuidv1 from 'uuid/v1'
import controller from '../controllers'

const router = new Router()

export default () => {
  router.get('/', async (ctx, next) => {
    console.log(uuidv1())
    let result
    try {
      result = await controller(ctx, next)
    } catch (err) {
      // Get the error message and do something.
      // console.log(err.message)

      // Throw the error.
      ctx.throw(500, err)
    }
    ctx.type = 'json'
    ctx.body = result
  })

  return router.middleware()
}
