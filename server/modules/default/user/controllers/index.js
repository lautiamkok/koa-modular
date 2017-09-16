'use strict'

import User from '../models/user'
import { example1, example2 } from 'utils'

export default async (ctx) => {
  console.log(await example1())
  console.log(await example2())

  let data
  let user = new User()

  // Find all docs.
  const userDocuments = await user.find()
  return userDocuments
}

// Sample:
// module.exports = {
//   // index action
//   index: (ctx) => {
//     return ctx.render('index', {
//       name: 'Hello World!'
//     })
//   }
// }
