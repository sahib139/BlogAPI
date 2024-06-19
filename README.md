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


### Curl Command to test the API endPoints

#### User Routes 
- Sign Up ->
```
curl -X POST http://localhost:5000/signup \
-H "Content-Type: application/json" \
-d '{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password123"
}'
```

- Sign In ->
```
curl -X POST http://localhost:5000/signin \
-H "Content-Type: application/json" \
-d '{
  "email": "newuser@example.com",
  "password": "password123"
}'
```

#### Posts Routes ->
- Get All Posts ->
```
curl -X GET http://localhost:5000/posts \
-H "Authorization: Bearer <your_jwt_token>"
```

- Get a Specific Post ->
```curl -X POST http://localhost:5000/posts \
-H "Authorization: Bearer <your_jwt_token>" \
-H "Content-Type: application/json" \
-d '{
  "title": "My First Post",
  "content": "This is the content of my first post."
}'
```

- Update a Post ->
```curl -X PUT http://localhost:5000/posts/1 \
-H "Authorization: Bearer <your_jwt_token>" \
-H "Content-Type: application/json" \
-d '{
  "title": "Updated Post Title",
  "content": "This is the updated content of my post."
}'
```

- Delete a Post ->
```curl -X DELETE http://localhost:5000/posts/1 \
-H "Authorization: Bearer <your_jwt_token>"
```


