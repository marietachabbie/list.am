// loadSingleAnnouncement: async (id) => {
//     try {
//         const objectID = new mongodb.ObjectID(id);
//         const announcements = await collection();
//         return announcements.findOne({'_id': objectID});
//     } catch (error) {
//         output(error);
//     }
// },