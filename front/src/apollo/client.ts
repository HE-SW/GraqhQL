import { InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export default client;
