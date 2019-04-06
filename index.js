/*let Config = require('./lib/config/configuration');
module.exports.config = new Config();
module.exports.Logger = require('./lib/log/logger').Logger;
module.exports.Transaction = require('./lib/log/transaction').Transaction;
module.exports.TransactionAsync = require('./lib/log/transaction-async').Transaction;
module.exports.Utils = require('./lib/utils/util');
module.exports.DBConnector = require('./lib/connector/mongodb-connector');
module.exports.CustomizableError = require('./lib/error/customizable-error');
module.exports.isItPingQ = require('./lib/utils/ping');
const CalendarBuilder = require('./lib/utils/calendar/CalendarBuilder').CalendarBuilder;
module.exports.CalendarBuilderFactory = {
    getBuilder: ()=>{
        return new CalendarBuilder();
    }
};*/
const dbConnector = require('./lib/connector/mysql-connector');
async function a(){
	await(dbConnector.findAll('User'));
};
a();