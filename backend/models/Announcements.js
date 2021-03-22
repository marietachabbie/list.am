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

module.exports = () => {
        try {
            mongoose.connect(
                process.env.DB_CONNECTION,
                {
                    useUnifiedTopology: true,
                    useNewUrlParser: true
                }
            );
            console.log('Successfuly connected to db!');
            return mongoose.model('Announcements', AnnouncementSchema);
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }
    }
