1. Import sql into your database: File graphql-database.sql
2. Config db
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
3. Into the server directory :
Installing dependancies  and run
```
npm install
npm run start
```

4. Into the client directory :
Open another bash and run 

```
npm install
npm run dev
build: npm run build:app
