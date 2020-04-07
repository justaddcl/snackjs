const Mutation = {
  async createUser(parent, args, ctx, info) {
    const user = await ctx.db.mutation.createUser(
      {
        ...args,
      },
      info
    );

    return user;
  },
  async createUserRole(parent, args, ctx, info){
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
};

module.exports = Mutation;
