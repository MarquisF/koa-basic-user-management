const Router = require('koa-router');

const postComment = require('./postComment');
const getComments = require('./getComments');

const router = new Router();

router
  .post('/comment', postComment)
  .get('/comments', getComments)

module.exports = router;