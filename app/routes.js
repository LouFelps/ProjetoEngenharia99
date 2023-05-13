const express = require('express');
const router = express.Router();

const donateController = require('./controllers/donateController');
const mailController = require('./controllers/mailController');
const acompanhaController = require('./controllers/acompanhaController');

router.get('/', donateController.home);
// router.get('/enviarDados', donateController.enviarDados);
router.post('/enviarDados', mailController.enviarDados);

router.get('/agradecimento', donateController.agradecimento)

router.get('/acompanhamento', acompanhaController.acompanhamento);

module.exports = router;
