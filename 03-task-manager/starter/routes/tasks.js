const express = require('express');
const router = express.Router();


//console.log(`express: ${express}  "   " router: ${router}`);


const {getALLTasks,createTasks,getTasks,updateTasks,deleteTasks,editTask} = require('../controllers/tasks')

router.route('/').get(getALLTasks).post(createTasks)
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks);

module.exports = router