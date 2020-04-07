const { forwardTo } = require('prisma-binding');

const Query = {
  users: forwardTo('db'),
  userRoles: forwardTo('db'),
  smallGroups: forwardTo('db'),
  discipleshipCommunities: forwardTo('db'),
};

module.exports = Query;
