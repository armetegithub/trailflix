require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

const user = [
  {
    username: "Luis",
    password: "Moreno Suárez",
    email: "luis@gmail.com"
  },

  {
    username: "Pepe",
    password: "Rubio Oliva",
    email: "pepe@gmail.com"
  },

  {
    username: "Erenesto",
    password: "Minguelles Arteta",
    email: "erenesto@gmail.com"
  },

  {
    username: "Maribel",
    password: "Vetiste Buñuel",
    email: "Maribel@gmail.com"
  },

  {
    username: "Jasmine",
    password: "Cruela Devil",
    email: "Maribel@gmail.com"
  }
];

mongoose
  .connect("mongodb://localhost/trailflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    User.deleteMany()
      .then(() => {
        return User.create(user);
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
