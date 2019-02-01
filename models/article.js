let mongoose = require('mongoose');

//Article Schema
let articleSchema = mongoose.Schema({
    tittle:{
        type : String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    body:{ 
        type: String,
        required: true
    }
});
 
let Article = module.exports = mongoose.model('Article', articleSchema);  