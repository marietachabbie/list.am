let mongoose=require('mongoose');
let db = require('./database');

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
        
module.exports = {
    fetchData:function(callback){
        let AnnouncementsData = AnnouncementModel.find({});
        AnnouncementsData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
    }
}
