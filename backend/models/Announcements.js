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

module.exports = {
    createAndInsertAnnouncements: () => {
        mongoose.connect(
            process.env.DB_CONNECTION,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );
        console.log('Successfuly connected to db!');
        
        return mongoose.model('Announcements', AnnouncementSchema);
        
        // Announcements.create(existedAnnouncements, function (err) {
        //     if (err) console.log(err);
        //     console.log('Announcements collection is created!');
        // })
    }
}
