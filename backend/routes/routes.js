const express = require('express');

const router = express.Router();

router.use('/regLoginRt', require('./regLoginRt'));
router.use('/productDataRt', require('./productDataRt'));
router.use('/chatRt', require('./chatRt'));
module.exports = router;
