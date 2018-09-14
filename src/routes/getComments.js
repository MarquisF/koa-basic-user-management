const commentController = require('../controllers/comment');
const jwt = require('jsonwebtoken');

module.exports = async ctx => {
  const result = await commentController.get(ctx.request.body);
  ctx.body = {
    success: 1,
    data: result
  };
}