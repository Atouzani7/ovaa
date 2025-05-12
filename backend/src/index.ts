import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { AppDataSource } from "./data-source";
import { resolvers, typeDefs } from "./resolvers/user.resolvers";
// import { typeDefs, resolvers } from "./resolvers/UserResolver";

AppDataSource.initialize().then(() => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ dataSource: AppDataSource }),
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
