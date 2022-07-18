module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.Types.ObjectId;
  const TagSchema = new Schema({
    name: String,
    nameEn: String,
    descript: String,
    descriptEn: String,
    creater: String,
    createTime: {
      type: Date,
      default: Date.now,
    },
    updater: String,
    updateTime: {
      type: Date,
      default: Date.now,
    },
  });
  const Tag = mongoose.model('Tag', TagSchema);
  return Tag;
};