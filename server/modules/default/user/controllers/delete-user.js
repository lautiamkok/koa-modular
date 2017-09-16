'use strict'

import User from '../models/user'

export default async (ctx) => {
  let body = ctx.request.body || {}
  if (body._id === undefined) {
    // Throw the error.
    ctx.throw(400, '_id is required.')
  }

  let data
  let user = new User()

  // Delete the doc by id.
  var result = await user.remove({_id: user.objectId(body._id)})
  return result
}
