const express = require("express");
const router = express.Router();
const calDataController = require("../controllers/CalDataController");  //

router.get('/', calDataController.getData);   
router.post('/post', calDataController.postData);  
router.get('/getid/:calId', calDataController.getCalId);
router.put('/update/:calId', calDataController.updatePost);

module.exports = router;