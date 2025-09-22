'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  // user
  router.post('/api/user/add', controller.user.add); // 用户添加
  router.post('/api/user/edit', controller.user.edit); // 用户修改
  router.post('/api/user/del', controller.user.del); // 用户删除
  router.get('/api/user/query', controller.user.query); // 用户查询
  router.post('/api/user/login', controller.user.signin); // 用户登录
  router.get('/api/user/signout', controller.user.signout); // 用户退出
  router.get('/api/user/current', controller.user.current); // 用户检查
  // 树状数据元数据
  router.post('/api/treedata/meta/add', controller.treedatameta.add); // 用户添加
  router.post('/api/treedata/meta/edit', controller.treedatameta.edit); // 用户修改
  router.post('/api/treedata/meta/del', controller.treedatameta.del); // 用户删除
  router.get('/api/treedata/meta/query', controller.treedatameta.query); // 用户查询
  // 树状数据
  router.post('/api/treedata/add', controller.treedata.add); // 用户添加
  router.post('/api/treedata/edit', controller.treedata.edit); // 用户修改
  router.post('/api/treedata/del', controller.treedata.del); // 用户删除
  router.get('/api/treedata/query', controller.treedata.query); // 用户查询
  //集合
  // router.get('/create-collection', 'someController.createCollection');

  router.post('/api/upload', controller.upload.index);
  router.post('/api/upload/cteateContent', controller.upload.cteateContent);
  router.resources('uploadManager', '/api/upload', controller.upload);

  router.resources('categories', '/api/categories', controller.categories); //分类
  //标签
  router.resources('tagManager', '/api/tag', controller.tag);
  router.resources('articles', '/api/articles', controller.articles); //文章
  router.post('/api/articles/search', controller.articles.search); //浏览
  router.get('/api/articles/pv/:id', controller.articles.addPv); //评论
  router.post('/api/articles/comment/:id', controller.articles.addComment);
  router.delete(
    '/api/articles/:article_id/comment/:comment_id',
    controller.articles.removeComment
  );
};