const express = require('express');
const app = express();
const util = require('../data/util');
const output = util.output;
const currentNumberOfAnnouncements = util.currentNumberOfAnnouncements;
const existedAnnouncements = require('../data/existedAnnouncements');
const assignAnnouncementNumber = util.assignAnnouncementNumber;

assignAnnouncementNumber(existedAnnouncements, currentNumberOfAnnouncements);
const createCollection = (client) => {
    const db = client.db("ListamDB");
    const announcements = db.collection("announcements");
    announcements.drop()
    .then(console.log('Announcement table dropped succesfully! '))
    .catch(error => output(error));

    // db.listCollections({name: 'announcements'})
    // .next(function(error, done) {
    //     if(done) {
    //         announcements.drop()
    //         .then(() => console.log('Announcement table dropped succesfully!'))
    //         .catch(error => output(error));
    //     }
    // });

    const options = { ordered: true };
    announcements.insertMany(existedAnnouncements, options)
    .then(result => {
        console.log(`${result.insertedCount} documents inserted!`);
    })
    .catch(error => output(error));
}

module.exports = createCollection;
