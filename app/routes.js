const express = require('express');
const router = express.Router();

const donateController = require('./controllers/donateController');

router.get('/', donateController.home);
// router.get('/enviarDados', donateController.enviarDados);
router.post('/enviarDados', donateController.enviarDados);


module.exports = router;
