const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/userController.js');



router.post('/user', usercontroller.createUser);

router.get('/watch-user', usercontroller.getAllUsers);

router.put('/update-user',usercontroller.updateUser);

router.delete('/delete-user',usercontroller.deleteUser);


module.exports = router;
