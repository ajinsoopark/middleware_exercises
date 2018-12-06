const express = require('express');
const { isAnimals } = require('./animal.js');
const { pickRandomNumber, generateSpread } = require('./random.js');
const {handleQueue} = require('./queue.js');
const app = express();

app.get('/queue/:mod', handleQueue, (req, res) => {
});

app.get('/animal/:species', isAnimals, (req, res) => {
});

app.get('/random', generateSpread, pickRandomNumber, (req, res) => {
});

app.get('/', (req, res) => {
   res.sendfile(__dirname + '/middleware.html')
})

app.listen(9000, (req, res) => {
    console.log('Server 9000 running!')
})