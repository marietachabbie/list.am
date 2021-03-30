const express = require('express');
const app = express();
const router = express.Router();
const util = require('../data/util');
const announcements = app.locals.announcements;
const loadAnnouncements = util.loadAnnouncements;
const loadSingleAnnouncement = util.loadSingleAnnouncement;

router.get('/', (req, res, next) => {
    return announcements
    .then(announcements => res.send(announcements))
    .catch(next);
})

// router.get('/:id', (req, res, next) => {
//     return loadSingleAnnouncement(req.params.id)
//     .then(specific => res.send(specific))
//     .catch(next);
// })

module.exports = router;
