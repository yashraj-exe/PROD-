const router = require('express').Router() 
const authorize = require('../middleware/auth-middleware');
const adminControllers = require('../controllers/adminControllers');


router.get("/data",adminControllers.login)




module.exports = router;