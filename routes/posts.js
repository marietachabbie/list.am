const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('here you see posts');
});

router.get('/postnumbertwo', (req, res) => {
    res.send('second post');
});

module.exports = router;
