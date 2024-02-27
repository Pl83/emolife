const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.createReadStream('bdd.CSV')
        .pipe(csv())
        .on('data', (row) => {
            if (row.username === username && row.password === password) {
                res.send({ status: 'success' });
                return;
            }
        })
        .on('end', () => {
            res.status(401).send({ status: 'failure' });
        });
});

app.listen(3000, () => console.log('Server started on port 3000'));