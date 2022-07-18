module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;
  const ArticleSchema = new Schema({
    name: { // 中文名称
      type: String,
      required: true,
    },
    nameEn: { // 英文名称
      type: String,
      required: true,
    },
    descript: { // 中文描述
      type: String,
      default: '-',
    },
    descriptEn: { // 英文描述
      type: String,
      default: '-',
    },
    tag: { // 分类
      type: ObjectId,
      ref: 'Tag',
    },
    category: { // 分类
      type: ObjectId,
      ref: 'Category',
    },
    pv: { // 浏览量
      type: Number,
      default: 0,
    },
    content: { // 内容
      type: Object,
      ref: 'User',
    },
    creater: {
      type: String,
    },
    createTime: { // 创建时间
      type: Date,
      default: Date.now,
    },
    updater: {
      type: String,
    },
    updateTime: { // 申请时间
      type: Date,
      default: Date.now,
    },
    comments: [{
      user: {
        type: ObjectId,
        ref: 'User',
      },
      content: String,
      createTime: {
        type: Date,
        default: Date.now,
      },
    }],
  });
  const Article = mongoose.model('Article', ArticleSchema);
  return Article;
};