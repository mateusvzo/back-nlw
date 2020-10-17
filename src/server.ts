import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection'

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

//Rota = conjunto inteiro
//Recurso = usuario

//Métodos HTTP = GET(buscar informaçao), POST(criando informacao), PUT(editando informacao), DELETE(removendo informacao)
//Parametros: 
            // Query params: http://localhost:3333/users?search=diego
            // Route Params: http://localhost:3333/users/1 (Identificar um recurso)
            // Body: http://localhost:3333/users



app.listen(3333);