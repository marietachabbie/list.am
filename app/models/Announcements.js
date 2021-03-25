const util = require('../data/util');
const currentNumberOfAnnouncements = util.currentNumberOfAnnouncements;
const existedAnnouncements = require('../data/existedAnnouncements');
const assignAnnouncementNumber = util.assignAnnouncementNumber;

assignAnnouncementNumber(existedAnnouncements, currentNumberOfAnnouncements);

module.exports = async (client) => {
    try {
        const announcements = client.db("ListamDB").collection("announcements");
        await announcements.drop();
        // console.log('Announcement table dropped succesfully!')

        const options = { ordered: true };
        const result = await announcements.insertMany(existedAnnouncements, options);

        // console.log(`${result.insertedCount} documents inserted!`);
    } finally {
        // client.close();
    }
}
