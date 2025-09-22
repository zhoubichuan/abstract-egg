'use strict';
const BaseController = require('./base');
class TreeDataController extends BaseController {
  async add() {
    const {
      ctx,
    } = this;
    let user = ctx.request.body;
    const { l, password, email } = user;
    try {
      user = await ctx.model.TreeData.create({ username, password, email });
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
      user = await ctx.model.TreeData.findByIdAndDelete(id, { username });
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
      user = await ctx.model.TreeData.findByIdAndUpdate(id, { username, password, email });
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
      user = await ctx.model.TreeData.find(query)
        .sort(sorter)
        .skip((current - 1) * pageSize)
        .limit(pageSize);
      this.success(user);
      console.log('查询成功');
    } catch (error) {
      this.error(error);
    }
  }
}
module.exports = TreeDataController;