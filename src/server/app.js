const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

//Import routes
const linksRoute = require("./routes/links");

app.use("/", linksRoute);

const url = "mongodb://localhost/social-links-app"

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));
app.listen(3000);
