const express = require('express');

const router = express.Router();

const tasks = [
    { id: 1, description: 'Task 1', completed: true},
    { id: 2, description: 'Task 2', completed: false},
    { id: 3, description: 'Task 3', completed: true},
];

router.get('/completas', (req, res) => {
    const completedTasks = tasks.filter(task => task.completed);
    res.json(completedTasks);
});
router.get('/incompletas', (req, res) => {
    const incompletedTasks = tasks.filter(task => !task.completed);
    res.json(incompletedTasks);
});

module.exports = router;