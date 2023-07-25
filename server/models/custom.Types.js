const graphql = require("graphql");



// graphql variables
const {

    GraphQLScalarType,
} = require("graphql");


// custom type

const GraphQLDate = new GraphQLScalarType({
    name: "GraphQLDate",
    description: "Date custom scalar type",
    parseValue(value) {
        return new Date(value);
    },
    serialize(value) {
        return value.toISOString();
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return new Date(ast.value);
        }
        return null;
    },
});

module.exports = GraphQLDate;