const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan');
require('dotenv').config();
const createAnnouncements = require('./models/Announcements');
const util = require('./helpers/util');
const output = util.output;
const app = express();
const postRouts = require('./routes/antiquities');
const MongoDbConnection = require('./models/MongoDbConnection');
const path = __dirname + '/views/';

app.use('/antiquities', postRouts);

app.use(express.static(path));
// var corsOptions = {
//     origin: "http://localhost:8081"
// };
app.use(cors());
// app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const main = () => {
    app.get('/', function (req, res) {
        res.sendFile(path + "index.html");
    });
    
    MongoDbConnection.init()
    // .then(() => createAnnouncements(client))
    .then(() => app.listen(3030))
    .catch (error => output(error));
}

main();

// 404
app.use((req, res) => {
    res.send("Page you requested doesn't exist :(");
})
