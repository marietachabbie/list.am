const express = require('express');
const app = express();
const mongoose = require('mongoose');
const createAndInsertAnnouncements = require('./models/Announcements');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if(err)
            console.log(err);
        else
            console.log('Succesfuly connected to DB!');
    }
);

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/antiquities')
// app.use('/posts', postsRoute); ????????????????

app.get('/announcements/antiquities', (req, res) => {
    res.send('Here you see all antiquities on sale!!');
});

// createAndInsertAnnouncements();
app.listen(3000);
