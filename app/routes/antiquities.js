const express = require('express');
const router = express.Router();
const getAnnouncements = require('../models/class-methods/getAnnouncements');
const getSingleAnnouncement = require('../models/class-methods/getSingleAnnouncement');

router.get('/', (req, res, next) => {
    return getAnnouncements()
    .then(announcements => res.send(announcements))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    return getSingleAnnouncement(req.params.id)
    .then(specific => res.send(specific))
    .catch(next);
})

module.exports = router;
