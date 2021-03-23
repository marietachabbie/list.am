const util = require('../data/util');
const currentNumberOfAnnouncements = util.currentNumberOfAnnouncements;
const existedAnnouncements = require('../data/existedAnnouncements');
const assignAnnouncementNumber = util.assignAnnouncementNumber;

assignAnnouncementNumber(existedAnnouncements, currentNumberOfAnnouncements);

module.exports = async (client) => {
    try {
        const announcements = client.db("ListamDB").collection("announcements");
        const options = { ordered: true };
        const result = await announcements.insertMany(existedAnnouncements, options);

        console.log(`${result.insertedCount} documents were succesfully inserted!`);
    } finally {
        client.close();
    }
}
