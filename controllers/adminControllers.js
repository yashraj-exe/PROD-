const SERVICE_FILE_NAME = "adminControllers ::"
const loggerConsole = require('../logs/consoleLogger');
const logger = loggerConsole();
const CONFIG = require('../CONFIG.json');
class AdminControllers{
    static login = async (req,res)=>{
        const SERVICE_NAME = " Login() :: " 
        logger.info(SERVICE_FILE_NAME + SERVICE_NAME + "Entering into it");
    }
}

module.exports = AdminControllers;