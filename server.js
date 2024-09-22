require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');

const app = express();

const router = require('./Router/router')
require('./DB/connection')

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(router)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/',(req,res)=>{
    res.send(`<h1>Server started..</h1>`)
})