const express = require('express')

const router = new express.Router()

const TodoController = require('../controllers/todoController')

router.get('/todos',TodoController.getTodos)
router.post('/todos',TodoController.addTodos)
router.delete('/todos/:id',TodoController.deleteTodos)
router.put('/todos/:id',TodoController.editTodos)

module.exports = router