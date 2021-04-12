const express = require('express');
const router = express.Router();
const schema = require('../data/JoiValidatorSchema');
const getAnnouncements = require('../models/class-methods/getAnnouncements');
const getSingleAnnouncement = require('../models/class-methods/getSingleAnnouncement');

router.get('/', (req, res, next) => {
    return getAnnouncements()
    .then(announcements => res.send(announcements))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    schema.validateAsync({postId: id})
    .then(() => {
        return getSingleAnnouncement(id)
        .then(specific => res.send(specific))
        .catch(next);
    })
    .catch((err) => { res.send(err.message) });
})

module.exports = router;
