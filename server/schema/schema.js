const graphql = require("graphql");
const _ = require("lodash");
const Event = require("../models/event");
const Client = require("../models/user");

// ToDo: - Convert String date type to GraphQLDate

// graphql variables
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLDate,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");

// Dummy data

const clients = [
    { id: "1", name: "Quan Jackson", eventId: "1" },
    { id: "2", name: "Shantel Nubian", eventId: "2" },
    { id: "3", name: "Femi Brown", eventId: "3" },
];

const events = [
    { id: "1", type: "birthday Party", date: "9/1/2023", clientId: "1" },
    { id: "2", type: "wedding", date: "9/2/2023", clientId: "2" },
    { id: "3", type: "graduation", date: "9/3/2023", clientId: "3" },
    { id: "4", type: "baby shower", date: "9/4/2023", clientId: "3" },
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
                return Event.find({ clientId: parent.id});
            },
        },
    }),
});

const EventType = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: { type: GraphQLID },
        date: { type: GraphQLString },
        type: { type: GraphQLString },
        clientId: { type: GraphQLID},
        client: {
          type: ClientType,
          resolve(parent, args) {
            return Client.findById(parent.clientId)
          }
        }
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
                // return _.find(clients, { id: args.id });
                return Event.findById(args.id);
            },
        },
        event: {
            type: EventType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(events, { id: args.id });
                return Client.findById(args.id)
            },
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                // return clients;
                return Client.find({})
            },
        },
        events: {
            type: new GraphQLList(EventType),
            resolve(parent, args) {
                // return events;
                return Event.find({})
            },
        },
    },
});

// Mutations

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addClient: {
      type: ClientType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let client = new Client({
          name: args.name,
        });
        return client.save();
      },
    },
    addEvent: {
      type: EventType,
      args: {
        date: { type: new GraphQLNonNull(GraphQLString)},
        type: { type: new GraphQLNonNull(GraphQLString)},
        clientId: { type: GraphQLID}
      },
      resolve(parent, args) {
        let event = new Event({
          type: args.type,
          date: args.date,
          clientId: args.clientId
        });
        return event.save()
      },
    }
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
