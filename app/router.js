"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/api/users/signup", controller.users.signup);
  router.post("/api/users/signin", controller.users.signin);
  router.get("/api/users/signout", controller.users.signout);

  router.resources("categories", "/api/categories", controller.categories);
  router.resources("articles", "/api/articles", controller.articles);

  router.get("/api/articles/pv/:id", controller.articles.addPv);
  router.post("/api/articles/comment/:id", controller.articles.addComment);
  router.delete(
    "/api/articles/:article_id/comment/:comment_id",
    controller.articles.removeComment
  );
};
