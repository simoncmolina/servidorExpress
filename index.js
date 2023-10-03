const express = require('express');
const app = express();
const port = 3000;



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