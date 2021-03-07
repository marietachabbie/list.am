const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

app.get('/', (req, res) => {
    res.send('yoohoo!!');
});

mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
    { useNewUrlParser: true },
    () => console.log('Succesfuly connected to DB!')
);

app.listen(3000);




// generating IDs for announcements with random chars and nums

// const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const getRandomInt = function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// const generateID = function(){
//     let res = '';
//     for(let i = 0; i < 8; i++){
//         let j = getRandomInt(0, 36);
//         res += chars[j];
//     };
//     return res;
// }
