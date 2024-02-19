const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

db.connect()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'))

const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)


app.use('/', routes)


//ERRO 404
app.use((req, res) => {
    res.send('pagina não encontrada')
})


//CONEXÃO COM O SERVIDOR NA PORTA 8080
app.listen(8080, () => {
    console.log('servidor iniciado na porta 8080: http://localhost:8080');

})