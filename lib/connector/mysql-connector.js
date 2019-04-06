const MySqlClient = require('mysql');
const util = require('util');
const Config = require('./../config/configuration');
const config = new Config();

const uri = config.database.uri;
let client = null;

exports.connect = async () => {
	if( client === null ){
        client = MySqlClient.createConnection(uri);
        client.query = util.promisify(client.query);
	}
};

exports.findAll = async (modelName) => {
    await(exports.connect());
	return await(client.query("SELECT * FROM ??", [modelName]));
};

exports.projectionFind = async (modelName, values) => {
    await(exports.connect());
    let q = client.format("SELECT * FROM ?? WHERE (", [modelName]);
    for(const key of Object.keys(values)){
        if(!q.includes("AND")){
            q += client.format("?? = ? AND", [key, values[key]]);
        }else{
            q += client.format("?? = ?", [key, values[key]]);
        }
    }
    //TODO
    q += ""
    console.log(q);
	return await(client.query(q));
};

exports.projectionFindAll = async (modelName) => {
    await(exports.connect());
    return await(client.query("SELECT ?? FROM ??", [fields, modelName]));
};

exports.insert = async (modelName, row) => {
	await(exports.connect());
	return await(client.query("INSERT INTO ?? SET ?", [modelName, row]));
};

/*exports.aggregate = async(function(collection, pipeline){
	await(exports.connect());
	let coll = client.db(config.database.dbName).collection(collection);
	let cursor = coll.aggregate(pipeline,{allowDiskUse:true});
	return await(cursor.toArray());
});

exports.findWLimit = async(function(collection, query, _limit, orderBy){
	await(exports.connect());
	let coll = client.db(config.database.dbName).collection(collection);
	let cursor = coll.find(query).limit(_limit).sort(orderBy);
	return await(cursor.toArray());
});

exports.projectionFindWSort = async(function(collection, query, projection, orderBy){
	await(exports.connect());
	let coll = client.db(config.database.dbName).collection(collection);
	let cursor = coll.find(query).project(projection).sort(orderBy);
	return await(cursor.toArray());
});

exports.projectionFind = async(function(collection, query, projection, _limit, _skip){
	await(exports.connect());
	let coll = client.db(config.database.dbName).collection(collection);
	let cursor = coll.find(query).project(projection).limit( _limit ? _limit : 0 ).skip( _skip ? _skip : 0 );
	return await(cursor.toArray());
});

exports.count = async(function(collection, query, skip, limit){
	await(exports.connect());
	let coll = client.db(config.database.dbName).collection(collection);
	let cursor = coll.find(query).skip( skip ? skip : 0 ).limit( limit ? limit : 0 );
	return await(coll.count(query));
});

exports.update = async(function(collection, query, set){
	await(exports.connect());
	let coll = client.db(config.database.dbName).collection(collection);
	return await(coll.update(query, set));
});

exports.remove = async(function(collection, query){
	await(exports.connect());
	let coll = client.db(config.database.dbName).collection(collection);
	return await(coll.remove(query));
});*/