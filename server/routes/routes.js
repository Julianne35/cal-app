const express = require("express");
const router = express.Router();
const calDataController = require("../controllers/CalDataController");  //

router.get('/', calDataController.getData);   //
router.post('/post', calDataController.postData);  //

module.exports = router;