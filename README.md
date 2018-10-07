Koa Modular
===========

> A basic example creating a Koa modular application + MongoDB.

Read the post [here](https://www.codementor.io/lautiamkok/creating-a-modular-koa-application-cfprkirld) about this repository.

Quick start
=============

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

Dependencies
==========

* [koa-static](https://github.com/koajs/static) - Koa static file serving middleware, wrapper for koa-send.
* [koa-bodyparser](https://github.com/koajs/bodyparser) - A body parser for koa, base on co-body. support json, form and text type body.
* [koa-favicon](https://github.com/koajs/favicon) - Koa middleware for serving a favicon. Based on serve-favicon.
* [koa-mount](https://github.com/koajs/mount) - Mount other Koa applications or middleware to a given pathname.
* [trie-router](https://github.com/koajs/trie-router) - Trie routing for Koa based on routington.
* [mongodb](https://github.com/mongodb/node-mongodb-native) - The official MongoDB driver for Node.js. Provides a high-level API on top of mongodb-core that is meant for end users.
* [lodash](https://github.com/lodash/lodash) - A modern JavaScript utility library delivering modularity, performance, & extras.
* [uuid](https://www.npmjs.com/package/uuid) - Simple, fast generation of RFC4122 UUIDS..
* [cross-env](https://github.com/kentcdodds/cross-env) - Run scripts that set and use environment variables across platforms

# Notes

1. During the development, use: `$ npm run dev`

2. [backpack](https://github.com/palmerhq/backpack) is used to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

3. MongoDB may fail in Ubuntu 18.04 as of 7/10/2018, to fix it, follow the [guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) from Mongo official site.

Step 1:

    `$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4`

Step 2:

    `$ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list`

Step 3:

    `$ sudo apt-get update`

Step 4:

    `$ sudo apt-get install -y mongodb-org=4.0.2 mongodb-org-server=4.0.2 mongodb-org-shell=4.0.2 mongodb-org-mongos=4.0.2 mongodb-org-tools=4.0.2`

Step 5:

    `$ sudo service mongod start`

Step 6:

    ```
    $ sudo service mongod status
    ● mongod.service - High-performance, schema-free document-oriented database
       Loaded: loaded (/etc/systemd/system/mongod.service; enabled; vendor preset: enabled)
       Active: active (running) since Sun 2018-10-07 17:06:28 BST; 4min 24s ago
     Main PID: 27797 (mongod)
        Tasks: 26 (limit: 4915)
       CGroup: /system.slice/mongod.service
               └─27797 /usr/bin/mongod --quiet --config /etc/mongod.conf

    Oct 07 17:06:28 lau-desktop systemd[1]: Started High-performance, schema-free document-oriented database.
    Oct 07 17:06:28 lau-desktop mongod[27797]: 2018-10-07T17:06:28.337+0100 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS
    lines 1-10/10 (END)
    ```
4. NodeJS and NPM may fail in Ubuntu 18.04 as of 7/10/2018, to fix it:

Step 1 - Try remove the npm first:

    ```
    $ sudo apt-get remove nodejs
    $ sudo apt-get remove npm
    ```

Check if npm or node folder still exist, delete it if you found them

    ```
    $ which node
    $ which npm
    ```

Step 2 - reinstall NodeJS:

    ```
    $ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
    ```

Check if npm and node was installed and you're ready to use node.js

    ```
    $ node -v
    $ npm -v
    ```

