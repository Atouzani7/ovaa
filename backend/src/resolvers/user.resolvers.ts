export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

export const resolvers = {
  Query: {
    users: async (_: any, __: any, { dataSource }: { dataSource: any }) => {
      return await dataSource.getRepository("User").find();
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      { name, email }: { name: string; email: string },
      { dataSource }: { dataSource: any }
    ) => {
      const repo = dataSource.getRepository("User");
      const user = repo.create({ name, email });
      return await repo.save(user);
    },
  },
};
