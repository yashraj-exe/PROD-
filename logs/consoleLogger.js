const { createLogger, format, transports,addColors } = require('winston');
const { combine, timestamp, printf,colorize } = format;
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} :: [ ${level} ] ::- ${message}`;
});
const myCustomLevels = {
    colors: {
      info: 'bold white greenBG',
      warn: 'bold black yellowBG',
      error: 'bold white redBG',
    }
};
addColors(myCustomLevels.colors);
const logger = ()=>{
    	return createLogger({
          level: 'info',
          format : combine(colorize(),
              timestamp({format:'DD-MM-YYYY T hh:mm:ss A'}),
              myFormat
            ),
          transports: [
              new transports.Console()
            ],
            exitOnError: false
        });
} 

module.exports = logger;


