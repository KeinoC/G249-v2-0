const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");


const app = express();


mongoose.connect("mongodb+srv://keinoc:yySnkH7hWo8cFTCl@g249.gnsmy6e.mongodb.net/")
mongoose.connection.once('open',()=>{
    console.log("connected to MongoDB!!!***");
})
// middleware



app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);


// Mongoose Schema - for data that's actually stored in the database. (not the same as the schema)




app.listen(4444, () => console.log("now listening for request on port 4444"));
