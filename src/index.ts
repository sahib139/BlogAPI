import express ,{Express} from "express";
import bodyParser from "body-parser";
import { AppDataSource } from "./config/database-config";
import 'reflect-metadata';

const app : Express = express();
const PORT : number  = parseInt(process.env.PORT as string,10) || 5000 ;

app.use(bodyParser.json());

app.listen(PORT,async () : Promise<void> =>{ 
    console.log(`Server is running on ${PORT}`);
    await AppDataSource.initialize();
    console.log(`Database connected!`);
});
