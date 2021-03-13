const MongoClient = require('mongodb').MongoClient;

module.exports = {
    currentNumberOfAnnouncements: 15737110,
    assignAnnouncementNumber: (annList, startNumber) => {
        for(let i = 0; i < annList.length; i++){
            annList[i]['postNumber'] = startNumber + i;
        }
    },
    loadAnnouncements: async () => {
        const client = await MongoClient.connect(
            process.env.DB_CONNECTION,
            {
                useUnifiedTopology: true,
                useUnifiedTopology: true,
            }
        );
        console.log('successfuly connected to db!');
        const db = client.db('ListamDB');
        const collection = db.collection('announcements');
        const cursor = collection.find();
        return cursor.toArray();
    }
}
