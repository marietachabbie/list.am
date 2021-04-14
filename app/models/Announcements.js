const util = require('../helpers/util');
const existedAnnouncements = require('../helpers/existedAnnouncements');
const output = util.output;
const assignId = util.assignId;

assignId(existedAnnouncements);

const createCollection = (client) => {
    const db = client.db('ListamDB');
    const announcements = db.collection('announcements');
    announcements.drop()
    .then(console.log('Announcement table dropped succesfully!'))
    .catch(error => output(error));

    const options = { ordered: true };
    announcements.insertMany(existedAnnouncements, options)
    .then(result => {
        console.log(`${result.insertedCount} documents inserted!`);
    })
    .catch(error => output(error));
}

module.exports = createCollection;
