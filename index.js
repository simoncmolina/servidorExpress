const express = require('express');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/tareas', listViewRouter, listEditRouter);



app.get('/', (req, res) => {
    const taskList = [{
        "id":"123456",
        "isCompleted":false,
        "description":"walk the dog"
    }];
    res.json(taskList)
})

app.listen(port, () => {
    console.log('Server running in ', port)
})