  
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin:102030@cluster0.qvkn3.mongodb.net/todo-api?retryWrites=true&w=majority';

const connect = async () => {
  const connection = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log(`DataBase connected: ${connection.connections[0].name}`);
};

module.exports = connect