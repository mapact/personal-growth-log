const logController = require('./src/controllers/logController');

module.exports = app => {
    app.put('/logs/:id', logController.editOne);
    // create post 
    app.post('/', logController.create);
    app.get('/', logController.getAll);

    //get create form
    app.get('/new', logController.getForm);
    
    // show route
    app.get('/logs/:id', logController.getOne);

    // delete route
    app.delete('/logs/:id', logController.destroy);

    // edit route
    // 1. retrieve the current document in edit page
    app.get('/logs/:id/edit', logController.update);
    // 2. update route above
    
    //get graph
    app.get('/graph', logController.getMany);
};