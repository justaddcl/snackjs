const { forwardTo } = require('prisma-binding');

const Query = {
  user: forwardTo('db'),
  users: forwardTo('db'),
  userRoles: forwardTo('db'),
  smallGroups: forwardTo('db'),
  discipleshipCommunities: forwardTo('db'),
};

module.exports = Query;
