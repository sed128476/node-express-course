const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getALLTasks = asyncWrapper ( async (req,res) => {
      const tasks = await Task.find({})
      res.status(200).json({ tasks})
      //res.status(200).json({ tasks,amount:tasks.length})
      //res.status(200).json({ success:'success',data:{tasks, nbHits: tasks.length }})

} )

const createTasks = asyncWrapper( async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getTasks = asyncWrapper(async (req,res,next) => {
    const {id:taskID} = req.params;
    const task = await Task.findOne({_id:taskID})
    if(!task){
       return next(createCustomError(`No Task with id : ${taskID}`,404))
        
    }
    res.status(200).json({ task })

})


const deleteTasks = asyncWrapper( async (req,res) => {

      const {id:taskID} = req.params;
      const task = await Task.findByIdAndDelete({_id:taskID})
      if(!task){
        return next(createCustomError(`No Task with id : ${taskID}`,404))
        
    }
    //res.status(200).json({task: null, status: 'success'})
    res.status(200).json({task })

})

const updateTasks = asyncWrapper(async (req,res) => {

    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
        new:true,
        runValidators: true,
     })


    if(!task){
      return next(createCustomError(`No Task with id : ${taskID}`,404))
    }

    res.status(200).json({ task})

})

//const editTask = async (req,res) => {
//   try {
//  const {id:taskID} = req.params;
//    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
//        new:true,
//        runValidators:true,
//        overwrite:true,
 //   })


   // if(!task){
     // return next(createCustomError(`No Task with id : ${taskID}`,404))
   // }

    //res.status(200).json({ task})


//} catch (error) {
  //  res.status(500).json({ msg: error })
   //}

//}  



module.exports = {
    getALLTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks,
    
}