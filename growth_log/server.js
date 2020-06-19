const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

db.connect();

require('./routes')(app);

app.listen(port, () =>{
    console.log('listening to port' + port)
});