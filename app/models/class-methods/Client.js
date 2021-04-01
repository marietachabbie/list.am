const { MongoClient } = require('mongodb');

class Client {
    static init(){
        const connectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            keepAlive: true
        };

        return new MongoClient(
            process.env.URI,
            connectionOptions
        );
    }
}

module.exports = Client;
