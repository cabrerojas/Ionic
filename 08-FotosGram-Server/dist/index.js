"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const post_1 = __importDefault(require("./routes/post"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
// BodyParse
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//FileUpload
server.app.use(express_fileupload_1.default({ useTempFiles: true }));
//Configurar Cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
//Rutas de mi app
server.app.use('/user', usuario_1.default);
server.app.use('/posts', post_1.default);
//Conectar DB
// mongoose.connect('mongodb://localhost:27017/fotosgram', 
//                 { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true, useFindAndModify: false }, (err) => {
//  if (err) throw err;
//  console.log('Base de datos ONLINE');
// });
mongoose_1.default.connect('mongodb+srv://admin:30753614@fotosgram-r7hme.gcp.mongodb.net/fotosgram?retryWrites=true&w=majority', {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false
});
//Levantar Express
server.app.listen(3000, () => { console.log('Server is running...'); });
// server.start( ()=> {
//     console.log(`Servidor corriendo en puerto: ${server.port}`);
// });
