const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');
const logger = require('koa-morgan');
const router = require('./router');

module.exports = {
  bodyParser,
  helmet,
  logger,
  router
};
