const db = require('../db');
const { getOne, destroy } = require('../controllers/logController');
const { ObjectId } = require('mongodb');
const { updateLocale } = require('moment');

module.exports = {
    create(data) {
        return db.logs.insertOne(data);
    },
    getAll () {
        return db.logs.find().toArray();
    },
    async getOne(id) {
        const result = await db.logs.findOne({"_id" : ObjectId(id)});
        return result;
    },
    async destroy(id) {
        const { result } = await db.logs.deleteOne( {"_id" : ObjectId(id)});
        if (!result.n) throw new Error (`Item with id ${id} does not exist!`);
        return result.n;
    },
    async updateByID(id, data){
        return db.logs.updateOne({"_id" : ObjectId(id)}, {$set: data})
    },
    async getMany () {
        const result = await db.logs.find().toArray();
        return result;
    }
};