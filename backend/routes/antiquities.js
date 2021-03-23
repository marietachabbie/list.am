const express = require('express');
const router = express.Router();
const util = require('../data/util');
const loadAnnouncements = util.loadAnnouncements;
const loadSingleAnnouncement = util.loadSingleAnnouncement;

router.get('/', async (req, res) => {
    const announcements = await loadAnnouncements();
    res.send(announcements);
})

router.get('/:id', async (req, res) => {
    const specific = await loadSingleAnnouncement(req.params.id);
    res.send(specific);
})

module.exports = router;
