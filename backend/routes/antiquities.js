const express = require('express');
const router = express.Router();
const loadAnnouncements = require('../data/util').loadAnnouncements;

router.get('/', async (req, res) => {
    const announcements = await loadAnnouncements();
    res.send(announcements);
})

module.exports = router;
