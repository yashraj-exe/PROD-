const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const createError = require('http-errors')

const dbConnect = require('./config/connection')
const loggerConsole = require("./logs/consoleLogger")
const logger = loggerConsole();
dbConnect()  // establish connnection to a Database


app.use(cors({origin : "*"}));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/',require('./routes/admin-routes'))


//404 handler and pass to error handler
app.use((req, res, next) => {
    next(createError(404, 'Not found'));
});

//Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      error: {
          status: err.status || 500,
          message: err.message
        }
    });
});
const PORT = process.env.SERVER_PORT || 8000;
app.listen(PORT,()=>{
    logger.info("Server Started on http://localhost:8000");
})