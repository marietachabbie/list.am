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

AnnouncementModel = mongoose.model('Announcements', AnnouncementSchema);

module.exports = () => {
    AnnouncementModel.create(existedAnnouncements, function (err) {
        if (err) console.log(err);
        console.log('Announcements collection is created!');
    })
}
