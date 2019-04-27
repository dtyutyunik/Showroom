const express = require('express');
const logger= require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port= parseInt(process.env.PORT)||3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', port);

app.listen(port, ()=> {
  console.log('app started');
});

app.get('/', async(req, res)=> {
  res.send('hello world!');
});

app.get('/users', async(req,res)=>{
  console.log()
})


app.get('/users/:id', async(req,res)=>{
  try{
      console.log(params.id);
      res.send(params.id);
  }catch(e){
      console.log(e);
  }
});

app.post('/users', async(req,res)=>{
  try{

  }catch(e){
    console.log(e);
  }});

app.get('/genres', async(req,res)=>{
  try{

  }catch(e){
    console.log(e);
  }
})

app.get('/shows', async(req,res)=>{
  try{

  }catch(e){
    console.log(e);
  }
})

app.get('/shows/:g', async(req,res)=>{
  try{

  }catch(e){
    console.log(e);
  }
})



// Shows
// GET all shows
// GET all shows for specific genre_id
// GET all shows for specific user_id
// GET one show
// POST new show
// Comments
// GET all comments for specific show_id
// POST new comment
