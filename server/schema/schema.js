const graphql = require("graphql");
const _ = require("lodash");

// ToDo: - Convert String date type to GraphQLDate



// graphql variables
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLDate,
    GraphQLList
} = require("graphql");

// Dummy data

const clients = [
    { id: "1", name: "Quan Jackson", eventId: "1" },
    { id: "2", name: "Shantel Nubian", eventId: "2" },
    { id: "3", name: "Femi Brown", eventId: "3"},
];

const events = [
  { id: "1", type: "birthday Party",  date: "9/1/2023", clientId: "1" },
  { id: "2", type: "wedding", date:  "9/2/2023", clientId: "2"},
  { id: "3", type: "graduation", date: "9/3/2023", clientId: "3"},
  { id: "4", type: "baby shower", date: "9/4/2023", clientId: "3"},
];


// Types

const ClientType = new GraphQLObjectType({
    name: "Client",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        events: {
          type: new GraphQLList(EventType),
          resolve(parent, args) {
            return _.filter(events,{clientId: parent.id} )
          }
        }
    }),
});

const EventType = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: { type: GraphQLID },
        date: { type: GraphQLString },
        type: { type: GraphQLString },
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
                return _.find(clients, { id: args.id });
            },
        },
        event: {
            type: EventType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(events, { id: args.id });
            },
        },
    },
});

module.exports = new GraphQLSchema({ query: RootQuery });
