'use strict'

import uuidv1 from 'uuid/v1'
import User from '../models/user'

export default async (ctx) => {
  let body = ctx.request.body || {}
  if (body.name === undefined) {
    // Throw the error.
    ctx.throw(400, 'name is required.')
  }

  let document = {
    uuid: uuidv1(),
    name: body.name
  }

  let data
  let user = new User({ uuid: '1', name: 'dummy', password: '1234' })

  // Inject the doc.
  const result = await user.insert(document)
  return result
}
