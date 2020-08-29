const mongoose = require('mongoose')
const tarefa = mongoose.model('Tarefas')

exports.listAllTarefas = (req, res) => {
    tarefa.find({}, (error, tarefas) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'Lista de Tarefas Cadastradas.',
            data: tarefas
        }
        res.send(response)
    })

}

exports.createTarefa = (req, res) => {
    const { descricao, cpf, dataDeCricao, status } = req.body
    let novaTarefa = new tarefa({ descricao, cpf, dataDeCricao, status })
    novaTarefa.save((error, tarefa) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'Tarefa criada com sucesso',
            data: tarefa
        }
        res.status(201).json(response)
    })
}

exports.buscarPorId = (req, res) => {

    tarefa.find({ cpf: req.params.cpf }, (error, tarefa) => {
        if (error) {
            res.send(error)
        }
        let response = {
            message: 'Tarefa encontrada.',
            data: tarefa
        }
        res.send(response)
    })
}

exports.updateTarefas = (req, res) => {
    tarefa.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (error, tarefa) => {
            if (error) {
                res.send(error)
            }
            let response = {
                message: 'Tarefa atualizada.',
                data: tarefa
            }
            res.send(response)
        }
    )

}

exports.deleteTarefas = (req, res) =>{
    tarefa.remove({_id: req.params.id}, (error, tarefa) => {
        if(error){
            res.send(error)
        } 
        let response = {
            message: 'Tarefa deletada com sucesso.',
            data: tarefa
        }
        res.send(response)

    })
}