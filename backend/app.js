const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const createAndInsertAnnouncements = require('./models/Announcements');
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const posts = require('./routes/antiquities');
app.use('/antiquities', posts);

const main = async() => {
    try {
        const client = new MongoClient(
            process.env.URI,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            },
        );
        await client.connect();
        
        createAndInsertAnnouncements(client);
        app.listen(3000);
    } catch (error) {
        outputError();
    }
};

main();    
