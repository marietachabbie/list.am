const output = require('../../helpers/util').output;
const MongoDbConnection = require('../MongoDbConnection');

const getAnnouncements = () => {
    return MongoDbConnection.announcementsCollection.find().toArray()
    .catch((error) => output(error));
}

module.exports = getAnnouncements;
