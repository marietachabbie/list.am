const express = require('express');
const router = express.Router();

// get posts
router.get('/', async (req, res) => {
    const posts = loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('url', {blah: true})
    return client.db('db_name'.collection('collection_name'));
}


module.exports = router;
