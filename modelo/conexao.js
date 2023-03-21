const banco = mongoose;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

banco
    .connect('mongodb://localhost/nome-do-banco', options)
    .then(() => {console.log('Conexão com MongoDB estabelecida')})
    .catch(err => console.log(`Erro na conexão com MongoDB: ${err}`));

module.exports = banco;