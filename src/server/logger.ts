import { createLogger, format, transports } from 'winston'
// Configure the Winston logger. For the complete documentation seee https://github.com/winstonjs/winston
export default createLogger({
  // To see more detailed errors, change this to 'debug'
  level: 'info',
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [
    new transports.Console()
  ],
})
