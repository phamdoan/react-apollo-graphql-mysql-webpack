1. Import sql into your database: File graphql-database.sql
2. Into the server directory :
cd server
open src/db.js
```
const Conn = new Sequelize(
  'graphql', // db name
  'root', // username
  '1qaz2wsx', // password
  {
    dialect:'mysql', // driver
    host: 'localhost'
  }
);
```
Installing dependancies  and run
```
npm install
npm run start
```

3. Into the client directory :
Open another bash and run 

```
npm install
npm run dev
build: npm run build:app