const express = require('express');
const app = express();
const createAndInsertAnnouncements = require('./models/Announcements');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/antiquities');
app.use('/antiquities', postsRoute);


// createAndInsertAnnouncements();
app.listen(3000);
