const express = require('express');
const app = express();
const {errorHandler} = require('./middleware/errorMiddleware')
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/discussions', require('./routes/discussionRoute'))
app.use('/api/users', require('./routes/userRoute'))


app.use(errorHandler)

module.exports = app;