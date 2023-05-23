const mongo = require("mongodb");


//? Registration of the user
exports.storeTask = async (req, res, next) => {

    try
    {
        const db = global.db.db("todomanagement");
        const collection = db.collection("todos");

        let todoInsertion = await collection.insertOne({
            taskTopic: req.body.taskTitle,
            taskDescription: req.body.taskDescription,
            completed: false,
            createdAt: new Date()
        });

        return res.status(200).send(todoInsertion);
    } 
    catch (error) 
    {
        console.error(error);
        return error;
    }
}

exports.getAllTask = async (req, res, next) => {
    try 
    {
        const db = global.db.db("todomanagement");
        const collection = db.collection("todos");

        let todoListing = req.body.taskIdList;
        let todos = [];

        for(let i=0 ; i<todoListing.length ; i++)
        {
            let todoList = await collection.findOne({_id: new mongo.ObjectId(todoListing[i]), completed: false});
            todos.push(todoList);
        }

        return res.status(200).send(todos);
    }
    catch (error) 
    {
        console.error(error);
        return error;
    }
}

exports.updateTask = async (req, res, next) => {

    try
    {
        const db = global.db.db("todomanagement");
        const collection = db.collection("todos");

        let todoDetail = req.body.todoDetail;

        let todoModification = await collection.updateOne({_id: new mongo.ObjectId(todoDetail.taskId)}, {
            $set: {
                taskTopic: todoDetail.taskTitle,
                taskDescription: todoDetail.taskDescription,
                createdAt: new Date()
            }
        });

        return res.status(200).send(todoModification);
    } 
    catch (error) 
    {
        console.error(error);
        return error;
    }
}

exports.completeTask = async (req, res, next) => {

    try
    {
        const db = global.db.db("todomanagement");
        const collection = db.collection("todos");

        let todoDetail = req.body.todoDetail;

        let todoModification = await collection.updateOne({_id: new mongo.ObjectId(todoDetail.taskId)}, {
            $set: {
                completed: true,
                createdAt: new Date()
            }
        });

        return res.status(200).send(todoModification);
    } 
    catch (error) 
    {
        console.error(error);
        return error;
    }
}
