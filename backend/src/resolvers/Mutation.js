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
};

module.exports = Mutation;
