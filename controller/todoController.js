const express = require("express");
const router = express.Router();
const {storeTask, getAllTask, updateTask, completeTask} = require('../service/todoServices');

//? Setting up the routes
router.route('/store-task').post(storeTask);
router.route('/get-tasks').post(getAllTask);
router.route('/update-task').put(updateTask);
router.route('/complete-task').put(completeTask);

module.exports = router;
