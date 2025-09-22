'use strict';
const BaseController = require('./base');
class TreeDataMetaController extends BaseController {
  async add() {
    const {
      ctx,
    } = this;
    let treeDataMeta = ctx.request.body;
    const { label, value, url,level,descript,node ,parent,hasChildren} = treeDataMeta;
    try {
      treeDataMeta = await ctx.model.TreeDataMeta.create({ label, value, url,level,descript,node ,parent,hasChildren});
      this.success(treeDataMeta);
      console.log('添加成功');
    } catch (error) {
      this.error(error);
    }
  }
    async patchAdd() {
    const {
      ctx,
    } = this;
    let treeDataMeta = ctx.request.body;
    const data = treeDataMeta.map((label, value, url,level,descript,node ,parent,hasChildren)=>({ label, value, url,level,descript,node ,parent,hasChildren}));
    try {
      treeDataMeta = await ctx.model.TreeDataMeta.insertMany(data);
      this.success(treeDataMeta);
      console.log('添加成功');
    } catch (error) {
      this.error(error);
    }
  }
  async del() {
    const {
      ctx,
    } = this;
    let treeDataMeta = ctx.request.body;
    const { label, id } = treeDataMeta;
    try {
      treeDataMeta = await ctx.model.TreeDataMeta.findByIdAndDelete(id, { label });
      this.success(treeDataMeta);
      console.log('删除成功');
    } catch (error) {
      this.error(error);
    }
  }
    async patchDel() {
    const {
      ctx,
    } = this;
    let treeDataMeta = ctx.request.body;
    const { label, id } = treeDataMeta;
    try {
      treeDataMeta = await ctx.model.TreeDataMeta.findByIdAndDelete(id, { label });
      this.success(treeDataMeta);
      console.log('删除成功');
    } catch (error) {
      this.error(error);
    }
  }
  async edit() {
    const {
      ctx,
    } = this;
    let treeDataMeta = ctx.request.body;
    const { label, value, url,level,descript,node ,parent,hasChildren, id } = treeDataMeta;
    try {
      treeDataMeta = await ctx.model.TreeDataMeta.findByIdAndUpdate(id, { label, value, url,level,descript,node ,parent,hasChildren });
      this.success(treeDataMeta);
      console.log('编辑成功');
    } catch (error) {
      this.error(error);
    }
  }
    async patchEdit() {
    const {
      ctx,
    } = this;
    let treeDataMeta = ctx.request.body;
    const { label, value, url,level,descript,node ,parent,hasChildren, id } = treeDataMeta;
    try {
      treeDataMeta = await ctx.model.TreeDataMeta.findByIdAndUpdate(id, { label, value, url,level,descript,node ,parent,hasChildren });
      this.success(treeDataMeta);
      console.log('编辑成功');
    } catch (error) {
      this.error(error);
    }
  }
  async query() {
    const {
      ctx,
    } = this;
    let treeDataMeta = ctx.request.body;
    const { query, sorter, current, pageSize } = treeDataMeta
    try {
      treeDataMeta = await ctx.model.TreeDataMeta.find(query)
        .sort(sorter)
        .skip((current - 1) * pageSize)
        .limit(pageSize);
      this.success(treeDataMeta);
      console.log('查询成功');
    } catch (error) {
      this.error(error);
    }
  }
}
module.exports = TreeDataMetaController;