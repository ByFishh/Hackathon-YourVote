const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/auth');
const voteCtrl = require('../controllers/vote');

router.post('/register', authCtrl.signup);
router.post('/login', authCtrl.login);

router.post('/vote/register', voteCtrl.signup);

module.exports = router;