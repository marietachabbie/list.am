const mongoose = require('mongoose');
const util = require('../data/util');
const assignAnnouncementNumber = util.assignAnnouncementNumber;
let currentNumberOfAnnouncements = util.currentNumberOfAnnouncements;
let existedAnnouncements = require('../data/announcements');


assignAnnouncementNumber(existedAnnouncements, currentNumberOfAnnouncements);

const Schema = mongoose.Schema;
const AnnouncementSchema = new Schema({
    header: String,
    description: String,
    photoLink: String,
    status: String,
    category: String,
    price: String,
    location: String,
    publicationDate: String,
    lastUpdated: String,
    sellerName: String,
    sellerPhotoLink: String,
    postNumber: Number,
});

let Announcements = mongoose.model('Announcements', AnnouncementSchema);

module.exports = {
    Announcements: Announcements,
    createAndInsertAnnouncements: () => {
        mongoose.connect(
            process.env.DB_CONNECTION,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );
        console.log('successfuly connected to db!');

        Announcements.create(existedAnnouncements, function (err) {
            if (err) console.log(err);
            console.log('Announcements collection is created!');
        })
    }
}
