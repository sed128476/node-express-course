const express = require('express');
const app = express()

const people = require('./routes/people')

const auth = require('./routes/auth')


//const people = require('./routes/people')

// static assets
app.use(express.static('./methods-public'));

//parse  from  data
app.use(express.urlencoded({extended: false}))


// pposte json
app.use(express.json());

app.use('/api/people',people)
app.use('/login',auth)

  

app.listen(3000,()=>{
    console.log('server listen to port 3000')
})