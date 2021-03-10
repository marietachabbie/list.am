const express = require('express');
const router = express.Router();
const Announcements = require('../models/Announcements');

// all posts
router.get('/', async (req, res) => {
    try {
        // const announcements = await Announcements.find();
        // console.log(announcements);
        // res.json(announcements);
        res.send('antiquities page succecfully loaded')
    } catch (err) {
        console.log(err);
        res.json({ message: err});
    }
})

// specific post
// router.get('/:postId', async (req, res) => {
//     try {
//         const announcement = await Announcements.findById(req.params.postId);
//         res.json(announcement);
//     } catch (err) {
//         res.json({ message: err});
//     }
// });


module.exports = router;
