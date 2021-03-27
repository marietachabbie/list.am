const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const currentNumberOfAnnouncements = 15737110;

const output = (error) => {
    console.log(error.name);
    console.log(error.message);
};

const collection = async () => {
    const client = require('./client');
    await client.connect();
    return client.db("ListamDB").collection("announcements");
}

module.exports = {
    currentNumberOfAnnouncements,
    output,
    assignAnnouncementNumber: (annList, startNumber) => {
        annList.forEach(obj => obj['postNumber'] = startNumber++);
    }, // generator is a better solution for the future (on creating an announcement)
    // function* idMaker() {
    //     var index = 0;
    //     while (true)
    //       yield index++;
    //   }
      
    //   var gen = idMaker();
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
