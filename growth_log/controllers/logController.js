const logRepository = require('../repositories/logRepository');
const moment = require('moment');
//const logsValidator = require('../validators/logValidator');
//const ValidationError = require('../exceptions/ValidationError');

module.exports = {
    async getAll (req, res) {
        const logs = await logRepository.getAll();
        // moment.locale('sg');
        // logs[0].date = moment('20201001', 'YYYYMMDD');
        res.render('index', { logs });
    },
    async create (req, res) {
        try {
            req.body.date = moment(req.body.date).toISOString();
            //ajvLogsValidator.logs.validate(req.body);
            const logs = await logRepository.create(req.body);
            httpResponseFormatter.formatOkResponse(res, logs);
            console.log(logs)
        } catch (err) {
            console.log('error', err);
            httpResponseFormatter.formatErrorResponse(res, err);
        }
    }
};