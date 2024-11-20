const mongoose = require('mongoose');
const Post=mongoose.Schema({
  image:{ type:String},
  content:{type:String},
});
const posts=mongoose.model('posts',Post);
module.exports=posts;
