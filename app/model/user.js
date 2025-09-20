module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  let UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
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
  return mongoose.model("User", UserSchema);
};
