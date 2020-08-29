const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./src/routes/tarefaRoutes')
const mongoose  = require('mongoose')
const tarefa = require('./src/models/tarefasModel')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/TarefasMongoDB', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
routes(app)

app.route('/').get((req, res) => {
    res.send('Acessou a API tarefas')
})



app.listen(port)

console.log('Aplicação iniciada', port)