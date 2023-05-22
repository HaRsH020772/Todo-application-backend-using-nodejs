const mongoClient = require('mongodb').MongoClient;

const connectionWithDb = async () => {

    let mClient;

    try 
    {
        mClient = new mongoClient(process.env.DB_URL);
        if(await mClient.connect())
        {
            console.log("Connection to the db is successfull!!");
            return mClient;
        }
    } 
    catch (error) 
    {
        console.error("Connection to mongodb failed!!", error);
        process.exit(1);
    }
}

module.exports = connectionWithDb;
