const graphql = require("graphql");
const _ = require("lodash");

// graphql variables
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLDate } = require("graphql");

// Dummy data

const clients = [
  {id: "1", name: "Quan Jackson" },
  {id: "2", name: "Shantel Nubian"},
  {id: "3", name: "Fem Brown"}
];

const events = [

];


// Types

const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    }),
});

const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
      id: { type: GraphQLID },
      date: { type: GraphQLDate },
  }),
});

// Root queries

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(clients, {id: args.id});
            },
        },
    },
});

module.exports = new GraphQLSchema({query: RootQuery})