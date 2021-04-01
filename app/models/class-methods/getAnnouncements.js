const output = require('../../data/util').output;
const CollectionAnnouncements = require('./CollectionAnnouncements');

const getAnnouncements = () => {
    const announcements = CollectionAnnouncements.init()
    .then(() => { return announcements.find().toArray() })
    .catch((error) => output(error));
}

module.exports = getAnnouncements;
