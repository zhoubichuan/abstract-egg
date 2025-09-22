const { MongoClient } = require('mongodb');
const config = require('../../../config/config.default');
 
class MongoService {
  constructor() {
    this.client = new MongoClient(config.mongo.client.url, config.mongo.client);
    this.client.connect();
    this.db = this.client.db(config.mongo.client.dbName);
  }
 
  async createCollection(collectionName) {
    return this.db.createCollection(collectionName);
  }
}
 
module.exports = MongoService;