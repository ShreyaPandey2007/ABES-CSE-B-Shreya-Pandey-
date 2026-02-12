const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.get('/', (req, res) => {
    res.send('This is my first express server');
});

app.get('/api/about', (req, res) => {
    const students = [
        { id: 1, name: "anshika", class: "cse" },
        { id: 2, name: "aditi", class: "ece" },
        { id: 3, name: "ankita", class: "it" },
        { id: 4, name: "anushka", class: "ce" },
        { id: 5, name: "anushree", class: "cs" }
    ];
    res.json(students);
});

app.get('/contact', (req, res) => {
    res.send("<h1>This is my contact server</h1>");
});

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
