import dotenv from 'dotenv';


dotenv.config()

export default {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '5432',
    DB_USERNAME: process.env.USERNAME || 'node_ts_user',
    DB_PASSWORD: process.env.DB_PASSWORD || 'nodets123',
    DB_DATABASE: process.env.DB_DATABASE || 'node_ts_db',
    PORT: process.env.PORT || '3000'
}