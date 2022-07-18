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
      url: 'mongodb://127.0.0.1/201812blog',
    },
  };
  config.security = {
    csrf: false,
    domainWhiteList: ['http://192.168.1.109:666'],
  };
  config.cors = {
    credentials: true,
  };
  return config;
};