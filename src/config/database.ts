import { DataSource } from "typeorm";
import dotenv from "./dotenv";
import {User} from "../entities/User";

const AppDataSource = new DataSource({
    type: 'postgres',
    host: dotenv.DB_HOST,
    port:  parseInt(dotenv.DB_PORT),
    username: dotenv.DB_USERNAME,
    password: dotenv.DB_PASSWORD,
    database: dotenv.DB_DATABASE,
    //entities: [User],
    synchronize: true,
    logging: false,

    entities: ['src/entities/**/*.ts'],
    subscribers: [],
    migrations: [],
})

export default AppDataSource;

