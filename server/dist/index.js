"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = require("./schema");
var resolvers_1 = require("./resolvers");
var resolvers = {
    Query: resolvers_1.Query,
    Mutation: resolvers_1.Mutation,
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers,
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log('Server listening on ' + url);
});
