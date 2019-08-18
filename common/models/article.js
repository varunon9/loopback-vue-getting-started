'use strict';

module.exports = function(Article) {
  Article.beforeRemote('create', function(context, instance, next) {
    context.args.data.createdAt = new Date();
    context.args.data.updatedAt = new Date();
    context.args.data.userId = context.req.accessToken.userId;
    next();
  });

  Article.beforeRemote('prototype.patchAttributes', function(context, instance, next) {
    context.args.data.updatedAt = new Date();
    next();
  });
};
