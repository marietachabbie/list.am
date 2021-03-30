const router = express.Router();
const getAnnouncements = require('../models/class-methods/getAnnouncements');
const getSingleAnnouncement = require('../models/class-methods/getSingleAnnouncement');

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
