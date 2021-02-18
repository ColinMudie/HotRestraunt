const express = require("express");

const Reservation = require("./lib/reservation")

const app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const tables = []