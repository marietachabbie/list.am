const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

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

const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('yoohoo!!');
});


app.listen(3000);
