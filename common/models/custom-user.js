'use strict';

module.exports = function(CustomUser) {
  CustomUser.beforeRemote('create', function(context, instance, next) {
    context.args.data.createdAt = new Date();
    context.args.data.updatedAt = new Date();
    next();
  });

  CustomUser.beforeRemote('prototype.patchAttributes', function(context, instance, next) {
    context.args.data.updatedAt = new Date();
    next();
  });
};
