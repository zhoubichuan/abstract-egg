'use strict';
const BaseController = require('./base');
const fs = require('fs');
const path = require('path');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const md5 = require('md5');
module.exports = class UploadController extends BaseController {
  async index() {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    const filename = md5(stream.filename) + path
      .extname(stream.filename)
      .toLocaleLowerCase();
    const target = path.join(this.config.baseDir, '/api/uploads', filename);
    const writeStream = fs.createWriteStream(target);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }
    ctx.body = {
      url: '/api/uploads/' + filename,
    };
  }
  async show() {
    const {
      ctx
    } = this.ctx;
    const id = ctx.params.id
    try {
      let result = await ctx.model.Upload.findById(id)
      ctx.body = {
        code: 0,
        data: result
      };
    } catch (err) {
      throw err;
    }
  }
  async cteateContent() {
    const ctx = this.ctx;
    let context = ctx.request.body;
    try {
      let result = await ctx.model.Upload.create(context)
      ctx.body = {
        code: 0,
        data: result
      };
    } catch (err) {
      throw err;
    }
  }
};