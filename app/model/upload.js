module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;
  const UploadSchema = new Schema({
    company: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    articleId: { // 分类
      type: ObjectId,
      ref: 'Article',
    },
    projectCategory: {
      type: String,
      required: true,
    },
    projectDesc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    softFunction: {
      type: String,
      required: true,
    },
    scene: {
      type: String,
      required: true,
    },
    projectAdvice: {
      type: String,
      required: true,
    },
  });
  const Upload = mongoose.model('Upload', UploadSchema);
  return Upload;
};