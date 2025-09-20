'use strict';
const BaseController = require('./base');
class UsersController extends BaseController {
  async add() {
    const {
      ctx,
    } = this;
    const { username, password, email } = ctx.request.body;

    try {
      user = await ctx.model.User.create({ username, password, email });
      this.success(user);
      console.log('添加成功');
    } catch (error) {
      this.error(error);
    }
  }
  async del() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;
    const { username, id } = ctx.request.body;
    try {
      user = await ctx.model.User.findByIdAndDelete(id, { username });
      this.success(user);
      console.log('登录成功');
    } catch (error) {
      this.error(error);
    }
  }
  async edit() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;
    const { username, password, email, id } = ctx.request.body;
    try {
      user = await ctx.model.User.findByIdAndUpdate(id, { username, password, email });
      this.success(user);
      console.log('登录成功');
    } catch (error) {
      this.error(error);
    }
  }
  async query() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;

    try {
      user = await ctx.model.User.countDocuments(user);
      this.success(user);
      console.log('登录成功');
    } catch (error) {
      this.error(error);
    }
  }
  async signup() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;

    try {
      user = await ctx.model.User.create(user);
      this.success(user);
      console.log('登录成功');
    } catch (error) {
      this.error(error);
    }
  }
  async signin() {
    const {
      ctx,
    } = this;
    // 拿到请求体
    const user = ctx.request.body;
    try {
      const doc = await ctx.model.User.findOne(user);
      if (doc) {
        // 可以通过ctx.session.user是否为null来判断此用户是否登录过
        ctx.session.user = doc;
        this.success({
          user: doc,
        });
      } else {
        this.error('用户名或密码错误');
      }
    } catch (error) {
      this.error(error);
    }
  }
  async signout() {
    const {
      ctx,
    } = this;
    ctx.session.user = null;
    this.success('退出成功');
  }
}
module.exports = UsersController;