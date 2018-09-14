const commentController = require('../controllers/comment');

module.exports = async ctx => {
  const result = await commentController.getAll();
  ctx.body = {
    success: 1,
    data: result
  };
}