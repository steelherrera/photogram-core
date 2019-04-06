module.exports = function(){
    switch( process.env.NODE_ENV ){
        case "dev":
            return require("./development.json");
        case "prod":
            return require("./production.json");
        default:
            return require("./development.json");
    }
};