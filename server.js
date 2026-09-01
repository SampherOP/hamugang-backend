const express =NOWLEDGE = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
    res.send("HAMUGANG Backend is Live on Vercel!");
});

// Yahan aapke login/register ke routes aayenge

// Vercel ke liye yeh zaroori hai:
module.exports = app;
