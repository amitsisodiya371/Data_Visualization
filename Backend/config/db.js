const mongoose = require('mongoose');

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/dashboard', {
    mongoose.connect('mongodb+srv://asisodiya9045:1234@cluster0.t7vpksl.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = db;
