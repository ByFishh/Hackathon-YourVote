const express = require('express');
const router = express.Router();

const voteCtrl = require('../controllers/vote');

router.post('/register', voteCtrl.signup);
router.get('/list/:wallet', voteCtrl.getVoteOfWallet);

module.exports = router;