'use strict'

import Model from 'model'
import { sanitize } from 'model/utils'
import schemas from './schemas'

export default class User extends Model {
  constructor (options) {
    // The rules for ES2015 (ES6) classes basically come down to: // 1. In a child
    // class constructor, this cannot be used until super is called. // 2. ES6 class
    // constructors MUST call super if they are subclasses, or they must explicitly
    // return some object to take the place of the one that was not initialized. //
    // https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes#toc-creating-subclasses-with-extends-calling-with-super //
    // https://stackoverflow.com/questions/31067368/javascript-es6-class-extend-without-super
    super(options)
    this.data = sanitize(options, schemas.user)
  }

  async insert (options) {
    let result

    let data = options || this.data
    this.data = sanitize(data, schemas.user)

    // Get the db connection.
    const db = await super.db()

    // Get the collection.
    const collectionUsers = db.collection('users')

    result = await collectionUsers.insert(this.data)
    db.close()

    return result
  }

  async find (options) {
    let result

    // Get the db connection.
    const db = await super.db()

    // Get the collection.
    const collectionUsers = db.collection('users')

    result = await collectionUsers.find(options).toArray()
    db.close()

    return result
  }

  // https://docs.mongodb.com/manual/reference/method/db.collection.findOne/
  async findOne (options) {
    let result

    // Get the db connection.
    const db = await super.db()

    // Get the collection.
    const collectionUsers = db.collection('users')

    result = await collectionUsers.findOne(
      options,
      // Specify the Fields to Return.
      // "The _id field is always included unless you explicitly exclude it."
      // https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/#suppress-id-field
      { name: 1, uuid: 1, _id: 0 }

      // Return All but the Excluded Fields
      // { _id: 0 }
    )
    db.close()

    return result
  }

  // https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/
  async findOneAndUpdate (find, update, options) {
    let result

    // Get the db connection.
    const db = await super.db()

    // Get the collection.
    const collectionUsers = db.collection('users')

    find = find || {}
    update = { $set: update } || {}
    options = options || {
      // The Node.js driver documentation doesn't mention a returnNewDocument
      // option for findOneAndUpdate() (which is an option for the MongoDB shell
      // command with the same name).
      // Instead, it mentions an option called returnOriginal, which defaults to
      // true. Try using that option, setting it to false to return the updated
      // document instead of the original.
      // https://stackoverflow.com/questions/35626040/findoneandupdate-used-with-returnnewdocumenttrue-returns-the-original-document
      returnOriginal: false
    }

    result = await collectionUsers.findOneAndUpdate(
      find,
      update,
      options
    )
    console.log(result)
    db.close()

    return result
  }

  async remove (options) {
    let result

    // Get the db connection.
    const db = await super.db()

    // Get the collection.
    const collectionUsers = db.collection('users')

    // collectionUsers.remove({_id: objectId(userId)})
    result = collectionUsers.remove(options)
    db.close()

    return result
  }
}
