const logController = require('./controllers/logController');

module.exports = app => {
    // create post 
    app.post('/', logController.create);
    app.get('/', logController.getAll);

    //get create form
    app.get('/new', logController.getForm);
    
    // show route
    //app.get('/:log', logController.getOne);

    // delete route
    // app.delete('/shop/:name', shopController.destroy);

    // edit route
    // retrieve the current document in edit page
    // app.get('/shop/edit', shopController.edit);

    // update route
    // app.put('/shop/:name', logController.update);
};