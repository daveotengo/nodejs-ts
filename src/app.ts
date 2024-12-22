import 'reflect-metadata';

import express, {Application} from 'express';
import {createUser, getUsers,getUser,updateUser,deleteUser} from  './controllers/userControllers';
import userRoutes from './routes/userRoutes';
import AppDataSource from './config/database';

const app: Application = express();

app.use(express.json());

app.use('/api/users', userRoutes);

AppDataSource.initialize()
 .then(()=>{
    console.log('Data Source has been initialized');
 }).catch((err)=>{
    console.error('Error during Data Source initialization:', err);
 })

 export default app;


