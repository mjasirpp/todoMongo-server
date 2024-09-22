const Todo = require('../Models/todoSchema')

exports.getTodos = async(req,res)=>{
    // console.log('inside getTodo Controller');
    try {
        const todos = await Todo.find();
        // console.log(todos);
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.addTodos = async(req,res)=>{
    // console.log('inside addTodo Controller');
    try {
        const newTodo = new Todo({
            task: req.body.task,
            completed: false,
        });
        // console.log(newTodo);      
        await newTodo.save();
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.deleteTodos = async(req,res)=>{
    // console.log('inside deleteTodos Controller');
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.editTodos= async (req, res) => {
    try {       
        const todoId = req.params.id;       // Extract the ID from the URL parameters       
        const { task } = req.body;          // Extract the updated data from the request body       
        const updatedTodo = await Todo.findByIdAndUpdate(todoId, { task }, { new: true });          // Find the todo by ID and update it
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(updatedTodo);          // Respond with the updated todo
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ message: 'Failed to update todo' });
    }
}

// exports.editTodos = async (req,res)=>{
//     const TodoId = req.payload
//     const {task} = req.body
//     try{
//         const updatedTodo = await users.findByIdAndUpdate({_id:TodoId},{
//             task
//         },{new:true})
//         await updatedTodo.save()
//         res.status(200).json(updatedTodo)
//     }catch(err){
//         res.status(401).json(err)
//     }
// }