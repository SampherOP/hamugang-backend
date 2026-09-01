const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Test route yeh check karne ke liye ki server chal raha hai ya nahi
app.get('/', (req, res) => {
    res.send("HAMUGANG Backend is Live!");
});

// Yahan aap apna login/register ka code ya routes baad me add kar sakte hain

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});