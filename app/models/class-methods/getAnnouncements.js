const express = require('express');
const app = express();
const output = require('../../data/util').output;
const MongoDbConnection = require('../MongoDbConnection');

const getAnnouncements = () => {
    return MongoDbConnection.cursor.find().toArray()
    // const announcements = app.locals.announcementsCursor;
    // return announcements.find().toArray();
    .catch((error) => output(error));
}

module.exports = getAnnouncements;
