import express from "express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import * as path from "path";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";
import Keyv from "keyv";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";

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
        cors<cors.CorsRequest>(),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
        })
    );

    await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

    console.log(`server is running... Port is http://localhost:${port}`);
}
startApolloServer();
