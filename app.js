const express = require('express');
const app = express();
const indexRouter = require('./routes/index-router');
const userRouter = require('./routes/user-router');
const path = require("path");
const config = require("config");
require("dotenv").config();
const db = require("./config/mongoose-connection");


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(config.get("PORT"));