const Client = require('./Client');

class CollectionAnnouncements {
    static init(){
        const client = Client.init();
        const db = client.db('ListamDB');
        const announcements = db.collection('announcements');
        return announcements;
    }
}

module.exports = CollectionAnnouncements;
