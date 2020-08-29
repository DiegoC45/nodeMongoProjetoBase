module.exports = function (app) {
    const tarefas = require('../controllers/tarefasController')
    app.route('/tarefas')

        .get(tarefas.listAllTarefas)
        .post(tarefas.createTarefa)
        
        app.route('/tarefas/:cpf')
        .get(tarefas.buscarPorId)

        app.route('/tarefas/:id')
        .put(tarefas.updateTarefas)
        .delete(tarefas.deleteTarefas)
}