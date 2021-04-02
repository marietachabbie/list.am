const output = require('../../data/util').output;
const mongodb = require('mongodb');
const MongoDbConnection = require('../MongoDbConnection');

const getSingleAnnouncements = (id) => {
    const objectID = new mongodb.ObjectID(id);
    return MongoDbConnection.announcementsCollection.find({'_id': objectID}).toArray()
    .catch((error) => output(error));
}

module.exports = getSingleAnnouncements;
