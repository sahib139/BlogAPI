import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Post } from "../models/post";
import { User } from "../models/user";

dotenv.config();

export const DatabaseConfig = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost', 
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false, 
    logging: false,
    entities: [User,Post],
    migrations: ['src/migrations/**/*.ts'], 
});