const CommentModel = require('../models/Comment');

exports.get = async fields => {
  const query = CommentModel.findOne(fields);
  return await query.exec();
}

exports.post = async data => {
  const commentData = new CommentModel(data);
  return await commentData.save();
}