require('dotenv').config();
const mongoose = require("mongoose");
const Celebrity = require("../models/User");



const User = [
    {
        username: "José Pérez",
        userlastname: "Actriz, bióloga, guionista...",
        password: ""

    },

    {
      username: "José Pérez",
      userlastname: "Actriz, bióloga, guionista...",
      password: ""
    },

    {
      username: "José Pérez",
      userlastname: "Actriz, bióloga, guionista...",
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
        Celebrity.deleteMany()
            .then(() => {
                return Celebrity.create(celebrity);
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