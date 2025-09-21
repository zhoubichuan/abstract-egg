'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525493950685_4595';

  // add your config here
  config.middleware = [];
  // 配置mongoose mongoose是node里面操作mongodb数据库的一个模块
  // 它可以以对象的形式操作数据库
  config.mongoose = {
    client: {
      url: 'mongodb://localhost:27017/treedata',
      options: {} // 可选，MongoDB Node.js 客户端的其他配置选项
    },
  };
  config.security = {
    csrf: { enable: false },
    domainWhiteList: ['http://192.168.1.109:666'],
  };
  config.cors = {
    origin: '*', // 或者 origin: '*'  *代表所有来源都可访问
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', //允许的请求方式  get、post等基本请求方式不需要设置
  }
  exports.cluster = {
    listen: {
      port: 7005,
      hostname: '127.0.0.1', // 0.0.0.0
    }
  }
  return config;
};