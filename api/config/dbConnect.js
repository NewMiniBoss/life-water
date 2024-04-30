"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoDBURL = process.env.DB_CONNEXION;
if (mongoDBURL)
    mongoose_1.default.connect(mongoDBURL);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', () => {
    console.log('Conexão bem-sucedida ao MongoDB!');
});
