const mongoose = require('mongoose');
const util = require('../data/util');
const assignAnnouncementNumber = util.assignAnnouncementNumber;
const currentNumberOfAnnouncements = util.currentNumberOfAnnouncements;
const existedAnnouncements = require('../data/announcements');
const outputError = util.outputError;


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

module.exports = async () => {
        try {
            await mongoose.connect(
                process.env.DB_CONNECTION,
                {
                    useUnifiedTopology: true,
                    useNewUrlParser: true
                }
            );
            console.log('Successfuly connected to db!');
            const announcementsModel = mongoose.model('Announcements', AnnouncementSchema);
            
            try {
                announcementsModel.create(existedAnnouncements);
                console.log('Announcements collection is created!');
            } catch (error) {
                outputError();
            }
        } catch (error) {
            outputError();
        }
    }
