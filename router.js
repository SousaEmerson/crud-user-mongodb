const express = require('express');
const userController = require('./src/controller/user');

const router = express.Router();

router.get('/users', userController.get);
router.post('/user', userController.post);
router.put('/user/:id', userController.put);
router.delete('/user/:id', userController.del);


module.exports = router;
