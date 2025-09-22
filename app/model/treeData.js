module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  let TreeDataSchema = new Schema({
    label: { type: String },
    value: { type: String },
    url: { type: String },
    level: { type: String },
    descript: { type: String },
    node: { type: String },
    parent: { type: String },
    hasChildren: { type: Boolean },
  },
    {
      timestamps: true,
      toJSON: {
        transform(doc, ret) {
          ret.id = ret._id;
          delete ret._id;
          delete ret.__v;
          return ret;
        },
      },
    });
  return mongoose.model("TreeData", TreeDataSchema);
};
