const Controller = require('egg').Controller;
const MongoService = require('./mongo_service');
 
class SomeController extends Controller {
  async createCollection() {
    const { ctx } = this;
    const mongoService = new MongoService();
    const collectionName = ctx.query.collectionName || 'defaultCollection'; // 从请求中获取集合名，或者使用默认值
    await mongoService.createCollection(collectionName);
    ctx.body = `Collection ${collectionName} created`;
  }
}
 
module.exports = SomeController;