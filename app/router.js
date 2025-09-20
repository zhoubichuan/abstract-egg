'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.post('/api/user/add', controller.users.add); // 用户添加
  router.post('/api/user/edit', controller.users.edit); // 用户修改
  router.post('/api/user/del', controller.users.del); // 用户删除
  router.get('/api/user/query', controller.users.query); // 用户查询
  router.post('/api/user/login', controller.users.signin); // 用户登录
  router.get('/api/user/signout', controller.users.signout); // 用户退出

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