const express = require('express');

const router = express.Router();

const tasks = [
    { id: 1, description: 'Task 1', completed: false},
    { id: 2, description: 'Task 2', completed: true},
];

router.post('/create', (req, res) => {
    const newTask = req.body;
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    res.json(newTask);
});

router.delete('/delete/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.json({
            message: 'Task deleted'
        });
    } else {
        res.status(404).json({
            message: 'Task not founded'
        });
    }
});

router.put('/update/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;

    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex] = {...tasks[taskIndex], ...updatedTask };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json(
            { message: 'Task not founded'}
        );
    }
});

module.exports = router;