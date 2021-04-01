const { MongoClient } = require('mongodb');

class MongoDbConnection {
    static exec(connection_URI){
        const connectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            keepAlive: true,
            // reconnectTries: 5 -> (node:44427) DeprecationWarning: The option `reconnectTries` is incompatible with the unified topology, please read more by visiting http://bit.ly/2D8WfT6
        };

        const client = new MongoClient(
            connection_URI,
            connectionOptions
        );

        client.on('serverOpening', () => this.onServerOpening());
        client.on('serverClosed', () => this.onServerClosing());

        client.connect()
        .catch((error) => this.catchConnectionError(error));
    }

    static onServerOpening(){
        console.log('Successfully connected!')
    }

    static onServerClosing(){
        console.log('Server disconnected!')
    }

    static catchConnectionError(error){
        console.error(`Connection error: \n${error.message}`)
    }
}

module.exports = MongoDbConnection;
