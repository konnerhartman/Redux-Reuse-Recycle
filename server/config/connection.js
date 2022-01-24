const mongoose = require('mongoose');

mongoose.connect('process.env.mongodb+srv://khartman22-admin:k_Hart1022@cluster0.gllsx.mongodb.net/mernshopping?retryWrites=true&w=majority' || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
