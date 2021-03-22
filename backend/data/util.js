const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

const collect = async () => {
    const client = await MongoClient.connect(
        process.env.DB_CONNECTION,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    );
    console.log('Successfuly connected to db!');
    const db = client.db('ListamDB');
    return db.collection('announcements');
}

module.exports = {
    currentNumberOfAnnouncements: 15737110,
    outputError: () => {
        console.log(error.name);
        console.log(error.message);
    },
    assignAnnouncementNumber: (annList, startNumber) => {
        annList.forEach(obj => obj['postNumber'] = startNumber++);
    },
    loadAnnouncements: async () => {
        try {
            const collection = await collect();
            return collection.find().toArray();
        } catch (error) {
            outputError();
        }
    },
    loadSingleAnnouncement: async (id) => {
        try {
            const objectID = new mongodb.ObjectID(id);
            const collection = await collect();
            return collection.findOne({'_id': objectID});
        } catch (error) {
            outputError();
        }
    },
}
