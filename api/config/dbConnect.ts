import mongoose from "mongoose";

const mongoDBURL = process.env.DB_CONNEXION;

if (mongoDBURL) mongoose.connect(mongoDBURL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão:'));

db.once('open', () => {
    console.log('Conexão bem-sucedida ao MongoDB!');
});