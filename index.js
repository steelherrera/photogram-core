const Config = require('./lib/config/configuration');
module.exports.config = new Config();
module.exports.DBConnector = require('./lib/connector/mysql-connector');
module.exports.Utils = require('./lib/utils/util');