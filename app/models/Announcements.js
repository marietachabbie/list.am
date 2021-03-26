const util = require('../data/util');
const output = util.output;
const currentNumberOfAnnouncements = util.currentNumberOfAnnouncements;
const existedAnnouncements = require('../data/existedAnnouncements');
const assignAnnouncementNumber = util.assignAnnouncementNumber;

assignAnnouncementNumber(existedAnnouncements, currentNumberOfAnnouncements);

module.exports = async (client) => {
    try {
        const db = client.db("ListamDB");
        db.listCollections({name: 'announcements'})
            .next(function(err, exist) {
                if (exist) {
                    const announcements = db.collection("announcements")
                    announcements.drop()
                    .then(() => console.log('Announcement table dropped succesfully!'))
                    .catch(error => output(error));
                }
        });

        const options = { ordered: true };
        return announcements.insertMany(existedAnnouncements, options)
        .then(result => console.log(`${result.insertedCount} documents inserted!`))
        .catch(error => output(error));
    } catch(error) {
        output(error);
    } finally {
        // client.close();
    }
}
