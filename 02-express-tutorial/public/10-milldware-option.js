const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize');
const morgan = require('morgan');
// req => middleware  => res

//app.use(express.static("./public"))
//app.use([authorize,logger]);

app.use(morgan('tiny'));

app.get('/'  , (req,res)=>{
  res.send('Hmoe Page')  
})


app.get('/about', (req,res)=>{
  res.send('About Page')
})

app.get('/api/products', (req,res)=>{
  res.send('products')
})
/*app.get('/api/item', [authorize ,logger] , 
  console.log(req.user);
  
  res.send('item')
})*/


*app.get('/api/item', (req,res)=>{
  console.log(req.user);
  
  res.send('item')
})

app.listen(3000,()=>{
    console.log('server listen to port 3000')
})