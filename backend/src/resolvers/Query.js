const { forwardTo } = require('prisma-binding');

const Query = {
  currentUser(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info);
  },
  user: forwardTo('db'),
  users: forwardTo('db'),
  usersConnection: forwardTo('db'),
  userRoles: forwardTo('db'),
  smallGroups: forwardTo('db'),
  discipleshipCommunities: forwardTo('db'),
};

module.exports = Query;
