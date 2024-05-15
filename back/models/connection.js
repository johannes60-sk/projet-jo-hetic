const mongoose = require('mongoose');
console.log(process.env.CONNECTION_STRING);
// Connect to the database
const connectionString = process.env.CONNECTION_STRING;

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch((error) => console.error(error));
