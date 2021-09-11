const express = require('express');
const connectDb = require('./config/db.config');

const PORT = 5000;

connectDb();

const app = express();

app.listen(PORT, () => console.log(`Server listen on Port ${PORT}`));