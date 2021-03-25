const { MongoClient } = require('mongodb');

const client = new MongoClient(
    process.env.URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
);

module.exports = client;
