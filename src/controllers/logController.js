const logRepository = require('../repositories/logRepository');
const moment = require('../../node_modules/moment');
const db = require('../db');
const { update, getMany } = require('../repositories/logRepository');
const { data } = require('jquery');

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
        const logs = await logRepository.destroy(req.params.id);
        return res.redirect('/')
    },
    async update (req, res) {
        const logs = await logRepository.getOne(req.params.id);
        res.render('edit', { logs })
    },
    async editOne (req, res) {
        const editedLog = req.body;
        const id = req.params.id;
        await logRepository.updateByID(id, editedLog);
        res.redirect('/')
    },
    async getMany (req,res) {
        const logs = await logRepository.getMany();
        res.render('graph', { logs });
    }
};