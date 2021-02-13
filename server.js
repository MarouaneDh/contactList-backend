const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/connectDB");
const app = express();
// connect DB
dbConnect();
//create route
//body parse midware
app.use(express.json());
app.use("/api/contact", require("./routes/contacts"));
const PORT = process.env.PORT;

app.listen(5000, (err) =>
  err ? console.error : console.log("server is running")
);
