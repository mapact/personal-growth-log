const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'project2';
const COLLECTIONS = {
    LOGS: 'logs',
};

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB: Personal Growth Logs');
        const db = connection.db(DB_NAME);
        this.logs = db.collection(COLLECTIONS.LOGS);
    },
    disconnect () {
        return client.close();
    },
};