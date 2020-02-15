require('dotenv').config();
const mongoose = require("mongoose");
const user = require("../models/User");



const User = [
    {
        username: "José",
        userlastname: "Moreno Suárez",
        password: ""

    },

    {
      username: "Raúl",
      userlastname: "Ruíz Ramirez",
      password: ""
    },

    {
      username: "Juan",
      userlastname: "Fernández Tarancón",
      password: ""
    }
]

mongoose
    .connect('mongodb://localhost/trailflix', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        User.deleteMany()
            .then(() => {
                return User.create(celebrity);
            })
            .then(() => {
                console.log("succesfully added all the data");
                mongoose.connection.close();
                process.exit(0);
            });
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    });