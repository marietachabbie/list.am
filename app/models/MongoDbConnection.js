const Client = require('./class-methods/Client');

class MongoDbConnection {
    static init(){
        const client = Client.init();

        client.on('serverOpening', () => this.onServerOpening());
        client.on('serverClosed', () => this.onServerClosing());

        return client.connect()
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
