const express = require('express');
const app = express();
const createAndInsertAnnouncements = require('./models/Announcements');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.use(express.json());

const posts = require('./routes/antiquities');
app.use('/antiquities', posts);


createAndInsertAnnouncements();
app.listen(3000);
