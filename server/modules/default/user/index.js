'use strict'

import Router from 'koa-trie-router'
import fetchUsers from './_routes'
import fetchUser from './_routes/fetch-user'
import insertUser from './_routes/insert-user'
import updateUser from './_routes/update-user'
import deleleUser from './_routes/delete-user'

const router = new Router()

export default () => {
  router.get(fetchUsers())
  router.get(fetchUser())
  router.post(insertUser())
  router.put(updateUser())
  router.del(deleleUser())
  return router.middleware()
}
