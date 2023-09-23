const express = require('express')
const { loginController, registerController } = require('../controllers/userController')

//router obj
const router = express.Router();

//routers
// POST || LOGIN
router.post('/login', loginController);

//post || register
router.post('/register', registerController);


module.exports = router