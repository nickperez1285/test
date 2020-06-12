const express = require('express');
const router = express.Router();

const supreme = require("./supreme.js")

router.use('/supreme', supreme)



module.exports = router;