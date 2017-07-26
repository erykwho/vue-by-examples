# Vue by Examples

> This is just the result of me playing with Vue and pushing some crazy things into this beautiful world called GitHub

* Version of Vue used: ^2.3.3

#### Access this beautiful project on Heroku:
https://vue-by-examples.herokuapp.com/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deploy it yourself
Note: this is what worked for me on 26 of july of 2017 using a Kubuntu 17.04.
If you needed to use alternative steps for deploying on Heroku because you are on a different environment, I invite you to make a contribution for this repository with the steps you've followed.

I followed this tutorial for deploying in Heroku: https://medium.com/@sagarjauhari/quick-n-clean-way-to-deploy-vue-webpack-apps-on-heroku-b522d3904bc8

##### Requirements:
* Have a Heroku Account
* Have Heroku on your machine.
  - Install it with: $ sudo apt install heroku
  - More info at: https://dashboard.heroku.com/
* Have Git on your machine. If not:
  - Install it with: $ sudo apt install git
* Have a machine.
  - Buy it at: www.amazon.com

#### Steps (or, in other words, what worked on my machine)
* Build your application
``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# cd to dist folder
cd dist
```

* Put some files on dist folder (and don't ask me why)
  - package.json:
    ```` json
    {
      "name": "vue-by-examples",
      "version": "1.0.0",
      "description": "Vue by Examples",
      "author": "Eryk Humberto Oliveira Alves <erykhumberto@hotmail.com>",
      "private": true,
      "scripts": {
        "postinstall": "npm install express"
      }
    }
    ````

  - server.js:
    ```` js
    var express = require('express');
    var serveStatic = require('serve-static');
    var port = process.env.PORT || 5000;

    app = express();

    app.use(serveStatic(__dirname));
    app.listen(port);

    console.log('server started '+ port);
    ````
* Heroku Deploy
``` bash
# You should be on dist folder

# Init git repo
git init

# Commit changes
git add .
git commit -m "Changes for deploy in heroku"

# Heroku login
heroku login

# Heroku create app (if not created already)
heroku apps:create <app_name>

# Heroku track remote
heroku git:remote -a <app_name>

# Push changes
git push heroku master

# use the flag -f to force push into heroku app, if necessary
# git push -f heroku master
```

All done. Your applications should be available for access now. You can see the link on the final of the output of the push or on the Heroku platform.
The link should be something like: <app_name>.herokuapp.com/
