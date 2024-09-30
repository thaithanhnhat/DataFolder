const fs = require('fs');
const express = require('express');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
const path = require('path');
app.get('/getGame', (req, res) => {
   
});

app.post('/addGame', (req, res) => {
  
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

