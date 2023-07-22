const graphql = require("graphql");
const _ = require("lodash");
const Event = require("../models/event");
const User = require("../models/user");

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
    GraphQLNonNull,
} = require("graphql");



// Types - User & Event

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        userId: { type: GraphQLID },
        id: { type: GraphQLID },
        role: { type: GraphQLString},
        username: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString},
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        dob: { type: GraphQLString},
        address: { type: GraphQLString},
        profileImageUrl: { type: GraphQLString},
        profileImage: { type: GraphQLString},
        createdAt: { type: Date, default: Date.now },
        events: {
            type: new GraphQLList(EventType),
            resolve(parent, args) {
                return Event.find({ userId: parent.id });
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
        status: { type: GraphQLString},
        notes: { type: GraphQLString},
        userId: { type: GraphQLID },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId);
            },
        },
    }),
});

// Root queries

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getUserById: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(clients, { id: args.id });
                return Event.findById(args.id);
            },
        },
        getEventById: {
            type: EventType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // code to get data from db / other source
                // return _.find(events, { id: args.id });
                return User.findById(args.id);
            },
        },
        getAllUsers: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                // return clients;
                return User.find({});
            },
        },
        getAllEvents: {
            type: new GraphQLList(EventType),
            resolve(parent, args) {
                // return events;
                return Event.find({});
            },
        },
    },
});

// Mutations

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                userId : { type: new GraphQLNonNull(GraphQLID)  },
                createdAt: { type: Date, default: Date.now },
            },
            resolve(parent, args) {
                let user = new User({
                    userId: args.userId,
                    email: args.email,
                    createdAt: args.createdAt
                });
                return user.save();
            },
        },
        addEvent: {
            type: EventType,
            args: {
                date: { type: new GraphQLNonNull(GraphQLString) },
                type: { type: new GraphQLNonNull(GraphQLString) },
                userId: { type: GraphQLID },
            },
            resolve(parent, args) {
                let event = new Event({
                    type: args.type,
                    date: args.date,
                    userId: args.userId,
                });
                return event.save();
            },
        },
    },
});


module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
