const logRepository = require('../repositories/logRepository');
const moment = require('moment');
//const logsValidator = require('../validators/logValidator');
//const ValidationError = require('../exceptions/ValidationError');

module.exports = {
    async getAll (req, res) {
        const logs = await logRepository.getAll();
        console.log(logs)
        //moment.locale('sg');
        //logs[0].date = moment('20201001', 'YYYYMMDD');
        res.render('index', { logs });
    },
    getForm (req, res) {
        // res.render('new', { date: moment().format('YYYY-MM-DDTHH:mm') });
        res.render('new', { logs });
    },
    async create (req, res) {
        try {
            //ajvLogsValidator.logs.validate(req.body);
            const logs = await logRepository.create(req.body);
            return res.redirect('/');
        } catch (err) {
            console.log('error', err);
        }
    },
    async getOne (req, res) {
        try{
            const log = await logRepository.getOne(req.params.title);
            res.render('show', { logs });
        } catch (err) {
            console.log('error', err);
        }   
    }
};