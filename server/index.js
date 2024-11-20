const express=require('express');
require('dotenv').config();
const app=express();
const cors=require('cors');
require('./config.js');
app.use(express.json());
app.use(cors());
const port= process.env.PORT ||3001;
const user=require('./user.js');
const posts=require('./post.js');

app.get('/', (req, res)=>
{
  res.send("Hello, World!");
});
app.post('/register/users', async(req, res)=>
{
  const  newUser=new user(req.body);
  const result=await newUser.save();
  res.send(result);
    
}),
app.post('/register/posts', async(req, res)=>
{
  const newPost=new posts(req.body);
  const result=await newPost.save();
  res.send(result);
});

app.listen(port);