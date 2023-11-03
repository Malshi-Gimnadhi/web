const express =require('express');

const router =express.Router();
const BuyerController =require('../controllers/buyer')

router.post('/',BuyerController.register)
router.post('/login',BuyerController.login)


module.exports =router;
