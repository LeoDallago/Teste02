const mongoose = require('mongoose')

function connect() {
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useUnifiedTopology', true)

    mongoose.connect('mongodb://localhost:27017')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Conectado ao banco de dados')
    })

    db.on('error', console.error.bind(console, 'erro de conexao'))
}

module.exports = {
    connect
}