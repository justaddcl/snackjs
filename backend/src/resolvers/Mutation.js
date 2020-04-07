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
