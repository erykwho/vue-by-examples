var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  EXD_EXPENSES_URL: JSON.stringify(process.env.EXD_EXPENSES_URL)
})
