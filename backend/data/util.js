const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

module.exports = {
    currentNumberOfAnnouncements: 15737110,
    assignAnnouncementNumber: (annList, startNumber) => {
        annList.forEach(obj => obj['postNumber'] = startNumber++);
    },
    loadAnnouncements: async () => {
        const client = await MongoClient.connect(
            process.env.DB_CONNECTION,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );
        console.log('successfuly connected to db!');
        const db = client.db('ListamDB');
        const collection = db.collection('announcements');
        const cursor = collection.find();
        return cursor.toArray();
    },
    loadSingleAnnouncement: async (id) => {
        const client = await MongoClient.connect(
            process.env.DB_CONNECTION,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        );
        const objectID = new mongodb.ObjectID(id);
        const db = client.db('ListamDB');
        const collection = db.collection('announcements');
        const cursor = collection.findOne({'_id': objectID});
        return cursor;
    }
}
