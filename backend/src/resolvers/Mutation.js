const Mutation = {
  async createUser(parent, args, ctx, info) {
    args.data.email = args.data.email.toLowerCase();
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args.data,
        },
      },
      info
    );

    return user;
  },
  updateUser(parent, args, ctx, info) {
    const updates = { ...args.data };
    delete updates.id;
    return ctx.db.mutation.updateUser(
      {
        data: {
          ...updates,
        },
        where: {
          id: args.data.id,
        },
      },
      info
    );
  },
  async deleteUser(parent, args, ctx, info) {
    const where = { id: args.id };
    const user = await ctx.db.query.user({ where }, `{ id }`);
    // TODO: check is user has permissions to delete user
    return ctx.db.mutation.deleteUser(
      {
        where,
      },
      info
    );
  },
  async createUserRole(parent, args, ctx, info) {
    const userRole = await ctx.db.mutation.createUserRole(
      {
        data: {
          type: args.data.type,
          user: {
            connect: {
              id: args.data.user,
            },
          },
          smallGroup: {
            connect: {
              id: args.data.smallGroup,
            },
          },
        },
      },
      info
    );

    return userRole;
  },
  async createSmallGroup(parent, args, ctx, info) {
    const smallGroup = await ctx.db.mutation.createSmallGroup(
      {
        data: {
          leader: {
            connect: {
              id: args.data.leader,
            },
          },
        },
      },
      info
    );
    return smallGroup;
  },
  async createDiscipleshipCommunity(parent, args, ctx, info) {
    const discipleshipCommunity = await ctx.db.mutation.createDiscipleshipCommunity(
      {
        data: {
          night: args.data.night,
          pastor: {
            connect: {
              id: args.data.pastor,
            },
          },
        },
      },
      info
    );
    return discipleshipCommunity;
  },
};

module.exports = Mutation;
