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
        const item = await db.logs.findOne({"_id" : ObjectId(id)});
        return item;
    },
    async destroy(id) {
        const { result } = await db.logs.deleteOne( {"_id" : ObjectId(id)});
        if (!result.n) throw new Error (`Item with id ${id} does not exist!`);
        return result.n;
    },
    async update(id, data){
        const { result } = await db.logs.updateOne({"_id" : ObjectId(id)});
        return result.n;
    }
}