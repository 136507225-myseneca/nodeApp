const express = require('express');
const path =require('path');
const mongoose =require('mongoose');
  
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection; 


//Check for connection
db.once('open',function(){
    console.log('connected to mongodb');
});


//check for db errors
db.on('error', function(err){
    console.log(err);
});
 
//initApp
const app = express();

//brings in models
let Article = require('./models/article');
 

//load View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//Home Route
app.get('/',function(req,res){
     Article.find({}, function(err, articles) {
        if (err){
            console.log(err);
        }    else{
             res.render('index', {
                    title:'Articles',
                 articles: articles
        });    
        }
        }); 
        });

//Add Route
app.get('/article/add', (req, res) =>
    res.render('add_aticle', {
        title: 'Add Aticles'
    }));


//Start Server
app.listen(3000,function(){
    console.log('server started on port 3000...');
}); 