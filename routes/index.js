const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.get('/', (req, res) => {

    User.find({})
        .then((users) => {
            res.render('index', { users });
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
    
});

module.exports = router;