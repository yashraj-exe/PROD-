const mongoose = require('mongoose');
const loggerConsole = require('../logs/consoleLogger')
const logger = loggerConsole();
const SERVICE_FILE_NAME = "MONOG CONNECTION :: "
const CONFIG = require('../CONFIG.json')

const connectDB = ()=>{
    const SERVICE_NAME = "connectDB() :: "
    try {
        logger.info(SERVICE_FILE_NAME + SERVICE_NAME + "Entering into connectDB")
        mongoose.connect(CONFIG.MONGO_URI,{
            dbName : CONFIG.DATABASE_NAME
        })
        mongoose.connection.on('connected',()=>{
            logger.info(SERVICE_FILE_NAME + SERVICE_NAME + `Mongoose Connected to DataBase Successfully....`)
        })
    
        mongoose.connection.on('error',(err)=>{
            logger.error(err.message)
        })
    
        mongoose.connection.on('disconnected',()=>{
            logger.info("Mongoose connection is disconnected")
        })
    
        process.on('SIGINT',()=>{
            mongoose.connection.close(()=>{
                logger.warn("Mongoose connection is disconnected due to app termination...");
                process.exit(0);
            })
        })
    } catch (error) {
        logger.error(error)
    }
    
}

module.exports = connectDB;