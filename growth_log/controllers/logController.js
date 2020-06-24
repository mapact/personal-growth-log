const logRepository = require('../repositories/logRepository');
const moment = require('moment');
const db = require('../db');
//const logsValidator = require('../validators/logValidator');
//const ValidationError = require('../exceptions/ValidationError');

module.exports = {
    async getAll (req, res) {
        const logs = await logRepository.getAll();
        res.render('index', { logs });
    },
    getForm (req, res) {
        res.render('new');
    },
    async create (req, res) {
        try {
            const logs = await logRepository.create(req.body);
            return res.redirect('/');
        } catch (err) {
            console.log('error', err);
        }
    },
    async getOne (req, res) {
        try{
            // console.log("am i on the right route?");
            const logs = await logRepository.getOne(req.params.id);
            res.render('show', { logs });
        } catch (err) {
            console.log('error', err);
        }   
    },
    async destroy (req, res) {
        try{
            const logs = await logRepository.destroy(req.params.id);
            return res.redirect('/')
        } catch (err) {
            console.log('error', err);
        }
    },
    async updateOne (req, res) {
        try {
            
        }
    }
};