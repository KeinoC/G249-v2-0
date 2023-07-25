const graphql = require("graphql");
const _ = require("lodash");
const Event = require("../event.mongo.schema");
const User = require("../user.mongo.schema");
const GraphQLDate = require('../custom.Types.js');


// graphql variables
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull,
} = require("graphql");


// custom type

// Types - User & Event


// Root queries


// Mutations

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                userId : { type: new GraphQLNonNull(GraphQLID)  },
                createdAt: { type: GraphQLDate },
            },
            resolve(parent, args) {
                let user = new User({
                    userId: args?.userId,
                    email: args?.email,
                    createdAt: args?.createdAt,
                });
                return user.save();
            },
        }
    },
});


module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
