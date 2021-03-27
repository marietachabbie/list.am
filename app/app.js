const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan');
require('dotenv').config();
const createAndInsertAnnouncements = require('./models/Announcements');
const util = require('./data/util');
const output = util.output;

const app = express();

const postRouts = require('./routes/antiquities');
app.use('/antiquities', postRouts);

const path = __dirname + '/views/';
app.use(express.static(path));
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const main = () => {
    app.get('/', function (req, res) {
        res.sendFile(path + "index.html");
    });
    const client = require('./data/client');
    client.connect()
    .then(() => createAndInsertAnnouncements(client))
    .catch (error => output(error))
    .finally(() => app.listen(3000));
}

main();

// 404
app.use((req, res) => {
    res.send("Page you requested doesn't exist :(");
})
