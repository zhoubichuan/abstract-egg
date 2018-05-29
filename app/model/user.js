module.exports = app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;
  let UserSchema = new Schema({
    username: String,
    password: String,
    email: String
  });
  return mongoose.model("User", UserSchema);
};
