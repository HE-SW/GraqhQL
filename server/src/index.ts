import express from "express";
const { makeExecutableSchema }= require("@graphql-tools/schema")
const { loadFilesSync }= require("@graphql-tools/load-files")
const  path = require("path")
const { ApolloServer }= require("@apollo/server")
const { expressMiddleware }= require("@apollo/server/express4")
const cors =require("cors")
const http =require("http")
const Keyv =require("keyv")
const { KeyvAdapter } =require("@apollo/utils.keyvadapter")

const loadedTypes = loadFilesSync("**/*", { extensions: ["graphql"] });
const loadedResolvers = loadFilesSync(path.join(__dirname, "**/*.resolvers.ts"));
const port = 4000;

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const schema = makeExecutableSchema({
        typeDefs: loadedTypes,
        resolvers: loadedResolvers,
    });

    const server = new ApolloServer({
        schema,
        cache: new KeyvAdapter(new Keyv()),
    });
    await server.start();

    app.use(
        "/graphql",
        cors(),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }:any) => ({ token: req.headers.token }),
        })
    );

    await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

    console.log(`server is running... Port is http://localhost:${port}`);
}
startApolloServer();
