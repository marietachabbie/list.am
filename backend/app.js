const express = require('express');
const app = express();
const createAndInsertAnnouncements = require('./models/Announcements');
const util = require('./data/util');
const cors = require('cors');
const output = util.output;

require('dotenv').config();

app.use(cors());
app.use(express.json());

const postRouts = require('./routes/antiquities');
app.use('/antiquities', postRouts);

const main = async() => {
    try {
        const client = require('./data/client');
        await client.connect();
        createAndInsertAnnouncements(client);
        app.listen(3000);
    } catch (error) {
        output(error);
    }
};

main();    
