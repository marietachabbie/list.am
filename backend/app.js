const express = require('express');
const app = express();
const createAndInsertAnnouncements = require('./models/Announcements');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(express.json());

const posts = require('./routes/antiquities');
app.use('/antiquities', posts);

try {
    createAndInsertAnnouncements();
    app.listen(3000);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
