const mongoose = require('mongoose');

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

let connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Succesfuly connected to DB!');
});
connection.on('disconnected', () => {
    console.log('Succesfuly disconnected from DB!');
})

connection.on('error', console.error.bind(console, 'connection error:'));

module.exports = connection;
