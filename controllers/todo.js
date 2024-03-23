const { Todo } = require('../models')

class TodoController {
    static healthCheck(req, res, next) {
        res.status(200).json({message: "Hello World"})
    }

    static index(req, res, next) {
        Todo.findAll()
            .then(data => {
                res.status(200).json({data})
            })
            .catch(err => {
                next(err)
            })
    }

    static add(req, res, next) {
        Todo.create({
            title: req.body.title
        })
        .then(data => {
            res.status(201).json({data, message: "Todo Created!"})
        })
        .catch(err => {
            res.status(500).json({message: "Something went wrong", error: err})
        })
    }

    static detail(req, res, next) {
        Todo.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            if (!data) {
                res.status(404).json({message: "Todo not found!"})
            } else {
                res.status(200).json({data})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Something went wrong", error: err})
        })
    }
}

module.exports = TodoController;