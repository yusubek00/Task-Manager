const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//Task Routes
router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.addTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;