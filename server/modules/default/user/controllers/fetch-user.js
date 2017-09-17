'use strict'

import User from '../models/user'

export default async (ctx) => {
  var name = ctx.params.name
  if (name === undefined) {
    ctx.throw(400, 'name is required.')
  }

  let options = {
    name: name
  }

  let data
  let user = new User()

  // Find the user.
  const userDocument = await user.findOne(options)

  // Throw the error if no result.
  if(userDocument === null) {
    ctx.throw(400, 'No user found.')
  }

  return userDocument
}
