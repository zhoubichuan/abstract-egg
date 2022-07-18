/**
 * Created by Administrator on 2018/5/14.
 */
'use strict';
const {
  Controller,
} = require('egg');
module.exports = class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }
  async getPager({
    modName = '',
    fields = [],
    populateFields = [],
  }) {
    const {
      ctx,
    } = this;
    let {
      pageNum = 1, pageSize = 5, name = '',
    } = ctx.query;
    pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
    pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
    const query = {};
    if (name && fields.length > 0) {
      query.$or = fields.map(field => ({
        [field]: new RegExp(name),
      }));
    }
    const total = await ctx.model[modName].count(query);
    let cursor = ctx.model[modName]
      .find(query)
      .sort({
        _id: -1,
      })
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize);
    populateFields.forEach(field => {
      cursor = cursor.populate(field);
    });
    const items = await cursor;
    this.success({
      pageNum,
      pageSize,
      items,
      total,
    });
  }
  success(data) {
    this.ctx.body = {
      code: 0,
      data,
    };
  }
  error(error) {
    console.error(error);
    this.ctx.body = {
      code: 1,
      error: error.toString(),
    };
  }
};