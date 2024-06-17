# Simple Blogging API 

## Project SetUp ->
- Start by cloning the repository
- Go into the root folder `./blogAPI`
- Run command `npm i`
- Create `.env` file in root directory and add following values in it ->
    ```
    DATABASE_HOST=<Database Host>
    DATABASE_PORT=<Database Running Port>
    DATABASE_USERNAME=<Database Username>
    DATABASE_PASSWORD=<Database Password corresponding to the Username>
    DATABASE_NAME=blogdb
    JWT_SECRET=<your_secret>
    PORT = <Server Port Number>
    ``` 
- Run the migrations file using command `npx typeorm-ts-node-commonjs migration:run -d ./src/config/database config.ts`
- Run `npm start` to run server!