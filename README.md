# Simple Blogging API 

## Project SetUp ->
- Start by cloning the repository
- Go into the root folder `./blogAPI`
- Run command `npm i`
- Create `.env` file in root directory and add following values in it ->
    ```
    DATABASE_HOST=<Your Database Host>
    DATABASE_PORT=<Your Database running Port>
    DATABASE_USERNAME=<Your Database Username>
    DATABASE_PASSWORD=<Your Database password corresponding to the username>
    DATABASE_NAME=blogdb
    JWT_SECRET=<your_secret>
    PORT = <Server Port Number>
    ``` 
- No run the migrations file using command `npx typeorm-ts-node-commonjs migration:run -d ./src/config/database config.ts`
