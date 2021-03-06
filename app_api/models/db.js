
const mongoose = require('mongoose');
const dbURI='mongodb://lindhmik:kiikkala@ds012188.mlab.com:12188/mycourses';
mongoose.connect(dbURI);

mongoose.connection.on('connected',function(){
    console.log('Mongoose connected to ${dbURI}');
})

mongoose.connection.on('error',function(err){
    console.log('Mongoose connection error:',err);
})

mongoose.connection.on('disconnected',function(){
    console.log('Mongoose disconnected');
})

require('./appSchemas');