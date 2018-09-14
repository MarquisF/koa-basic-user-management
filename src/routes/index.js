const Router = require('koa-router');

const login = require('./login');
const register = require('./register');
const assets = require('./assets');

const router = new Router();

router
  .post('/login', login)
  .get('/assets', assets)
  .post('/register', register);

module.exports = router;