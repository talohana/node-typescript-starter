import * as usersController from '@controllers/users.controller';
import express from 'express';
import morgan from 'morgan';

const app = express();

// Express Configurations
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('combined'));

// Endpoints
app.get('/users', usersController.getUsers);

export default app;
