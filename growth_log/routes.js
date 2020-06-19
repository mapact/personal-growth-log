const logController = require('./controllers/logController');

module.exports = app => {
    app.get('/', logController.getAll);

    //get the create form api
    app.get('/logs/new', logController.create);

    // create post api
    app.post('/', logController.create);
    // Min Shan's show route
    // app.get('/:name', logController.getOneByName);

    // Yinsheng's show route
    // app.get('/shop/:name', shopController.show);

    // delete route
    // app.delete('/shop/:name', shopController.destroy);

    // edit route
    // retrieve the current document in edit page
    // app.get('/shop/edit', shopController.edit);

    // update route
    // app.put('/shop/:name', logController.update);
};