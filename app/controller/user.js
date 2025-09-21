'use strict';
const BaseController = require('./base');
class UsersController extends BaseController {
  async add() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;
    const { username, password, email } = user;
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
    const { username, id } = user;
    try {
      user = await ctx.model.User.findByIdAndDelete(id, { username });
      this.success(user);
      console.log('删除成功');
    } catch (error) {
      this.error(error);
    }
  }
  async edit() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;
    const { username, password, email, id } = user;
    try {
      user = await ctx.model.User.findByIdAndUpdate(id, { username, password, email });
      this.success(user);
      console.log('编辑成功');
    } catch (error) {
      this.error(error);
    }
  }
  async query() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;
    const { query, sorter, current, pageSize } = user
    try {
      user = await ctx.model.User.find(query)
        .sort(sorter)
        .skip((current - 1) * pageSize)
        .limit(pageSize);
      this.success(user);
      console.log('查询成功');
    } catch (error) {
      this.error(error);
    }
  }
  async signin() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;
    const { username, password } = user;
    try {
      const doc = await ctx.model.User.findOne({ username, password });
      if (doc) {
        ctx.session.user = doc;
        this.success({
          username: doc.username,
        });
      } else {
        this.error('用户名或密码错误');
      }
    } catch (error) {
      this.error(error);
    }
  }
  async current() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;
    const { username, password } = user;
    if (ctx.session.user.includes(username)) {
      this.success('成功');
    } else {
      this.error('失败');
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