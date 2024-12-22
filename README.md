{ 
"compilerOptions": {
"target": "ES2016",
"module":"commonjs"
"outDir":"./dist",
"rootDir":"./src",
"strict": true,
"esModuleInterop": true,
"experimentalDecorators": true,
"strictPropertyInitialization": false,
"emitDecoratorMetadata": true
},
"include": ["src/**/*,ts"],
  "exclude": ["node_modules"]
}

//old
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
--

 "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon --exec ts-node src/app.ts", //Run in development mode with No
    "build": "tsc", 
    "prestart": "npm run build", //Ensure the app is built before starting
    "lint": "eslint. --ext .ts", // Run EsLint for Typescript
    "test": "jest", // Run your tests
    "test:watch": "jest --watch", 
    "test: coverage": "jest --coverage" // Generate test coverage report
},

---

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "ts-node src/index.ts",
    "build": "tsc",
    "dev": "ts-node-dev --respawn src/index.ts"
  },

  # Install as dev dependency
npm install nodemon --save-dev
npm install dotenv

# structure

nodejs- typescript-postgresql-crud/
src/
    --controllers/
    -- user.controller.ts
    entities/
    -- User.ts 
    routes/
        -- user.routes.ts
    -- index.ts
-- ormconfig. json
-- package. json 
-- tsconfig. json


CREATE USER node_ts_user WITH PASSWORD 'nodets123' CREATEDB;
CREATE DATABASE node_ts_db WITH OWNER = 'node_ts_user' ENCODING = 'UTF8';

#------

# Basic psql connection
psql -h localhost -p 5432 -U your_username -d your_database

# If using default postgres database
psql -h localhost -p 5432 -U postgres -d postgres

# For Docker container
docker exec -it your_container_name psql -U postgres

#--

# Connect to your specific database
psql -h localhost -p 5432 -U node_ts_user -d node_ts_db
# When prompted, enter password: nodets123

#----


localhost:3000/api/users

localhost:3000/api/users

Post

Request 
{
  "name":"arden",
  "password": "aden1234",
  "email":"areden@yahoo.com",
  "age":5,
  "lastName":"kofo"
}

Response
{
    "savedUser": {
        "name": "arden",
        "email": "areden@yahoo.com",
        "password": "aden1234",
        "age": 5,
        "lastName": "kofo",
        "id": 1,
        "createdAt": "2024-12-22T11:21:07.811Z",
        "updatedAt": "2024-12-22T11:21:07.811Z"
    }
}

localhost:3000/api/users/1


npm run migration:generate src/migrations/DescriptiveChangeName

npm run migration:run