const { forwardTo } = require('prisma-binding');

const Query = {
  users: forwardTo('db'),
  userRoles: forwardTo('db'),
  smallGroups: forwardTo('db'),
};

module.exports = Query;
