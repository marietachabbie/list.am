const express = require('express');
const router = express.Router();
const loadAnnouncements = require('../data/util').loadAnnouncements;
const loadSingleAnnouncement = require('../data/util').loadSingleAnnouncement;

router.get('/', async (req, res) => {
    const announcements = await loadAnnouncements();
    res.send(announcements);
})

router.get('/:id', async (req, res) => {
    const specific = await loadSingleAnnouncement(req.params.id);
    res.send(specific);
})

module.exports = router;
