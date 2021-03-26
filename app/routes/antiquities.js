const express = require('express');
const router = express.Router();
const util = require('../data/util');
const loadAnnouncements = util.loadAnnouncements;
const loadSingleAnnouncement = util.loadSingleAnnouncement;

router.get('/', async (req, res, next) => {
    return loadAnnouncements()
    .then(announcements => res.send(announcements))
    .catch(next);
})

router.get('/:id', async (req, res, next) => {
    return loadSingleAnnouncement(req.params.id)
    .then(specific => res.send(specific))
    .catch(next);
})

module.exports = router;
