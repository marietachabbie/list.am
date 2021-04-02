const output = require('../../data/util').output;

const getSingleAnnouncements = (id) => {
    const objectID = new mongodb.ObjectID(id);
    const announcements = CollectionAnnouncements.init()
    .then(() => { return announcements.findOne({'_id': objectID}) })
    .catch((error) => output(error));
}

module.exports = getSingleAnnouncements;

// loadSingleAnnouncement: async (id) => {
//     try {
//         const objectID = new mongodb.ObjectID(id);
//         const announcements = await collection();
//         return announcements.findOne({'_id': objectID});
//     } catch (error) {
//         output(error);
//     }
// },