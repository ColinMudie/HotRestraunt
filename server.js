const express = require("express");

const Reservation = require("./lib/reservation");

const app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const tables = [];
const waitList = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/api/tables')

app.post('')


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));