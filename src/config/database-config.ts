import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const DatabaseConfig = new DataSource({
    type:'postgres',
    host:'localhost',
    port:Number(process.env.DATABASE_PORT),
    username:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_NAME,
    synchronize:true,
    logging:false,
    entities:[],
    migrations:['src/migrations/**/*.ts']
});