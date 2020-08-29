const mongoose = require('mongoose')
const tarefaRoutes = require('../routes/tarefaRoutes')
const Schema = mongoose.Schema

const TarefasSchema = new Schema([{
    descricao: {
        type: String,
        required: 'Favor descrever a tarefa que será executada.'
    },

    cpf: {
        type: String,
        required: 'Favor informar seu CPF para criação da tarefa.',
        max: [11, 'Digite o CPF Corretamente, são permitidos apenas 11 digitos.'],
        min: [11, 'Digite o CPF Corretamente, são necessários 11 digitos.']
    },


    dataDeCriacao: {
        type: Date,
        default: Date.now,
        required: 'Favor informar a data de criação da  tarefa.'
    },

    status: {
        type: [
            {
            type: String,
            enum: ['Pendente', 'Em Andamento', 'Concluída']

            }

        ],
        required: 'Favor informar status da tarefa.'
    }
}])



module.exports = mongoose.model('Tarefas', TarefasSchema)