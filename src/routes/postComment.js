const commentController = require('../controllers/comment');

module.exports = async ctx => {
  const result = await commentController.post(ctx.request.body);
  ctx.body = result;
}