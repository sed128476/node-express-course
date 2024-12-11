const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
// middlewaer


app.use(express.json())

// routes
app.get('/Hello' , (req,res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)


const port = 3000

const  start = async () =>{
 try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server  is litening on port : ${port}...`) )
} catch (error){
   console.log(error);
   
}

}

start()