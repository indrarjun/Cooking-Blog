const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser : true, useUnifiedTopology : ture });


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', function(){
    console.log('Connected')
});


//Models
require('./Category');