const graphql = require('graphql');
const User = require('../user.mongo.schema');
const GraphQLDate = require('../custom.Types.js');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
} = graphql;

const updateUser = {
    type: UserType,  // Make sure UserType is available in this scope
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        userId: { type: GraphQLID },
        role: { type: GraphQLString },
        username: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        dob: { type: GraphQLString },
        address: { type: GraphQLString },
        profileImageUrl: { type: GraphQLString },
        profileImage: { type: GraphQLString },
        createdAt: { type: GraphQLDate },
    },
    resolve(parent, args) {
        return User.findByIdAndUpdate(args.id, args, { new: true });
    },
};

module.exports = updateUser;
