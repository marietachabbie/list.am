const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const collection = async () => {
    const client = await MongoClient.connect(
        process.env.URI,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    );
    console.log('Successfuly connected to db!');
    const db = client.db('ListamDB');
    return db.collection('announcements');
};

const output = (error) => {
    console.log(error.name);
    console.log(error.message);
};

module.exports = {
    currentNumberOfAnnouncements: 15737110,
    assignAnnouncementNumber: (annList, startNumber) => {
        annList.forEach(obj => obj['postNumber'] = startNumber++);
    },
    loadAnnouncements: async () => {
        try {
            const announcements = await collection();
            return announcements.find().toArray();
        } catch (error) {
            output(error);
        }
    },
    loadSingleAnnouncement: async (id) => {
        try {
            const objectID = new mongodb.ObjectID(id);
            const announcements = await collection();
            return announcements.findOne({'_id': objectID});
        } catch (error) {
            output(error);
        }
    },
}
