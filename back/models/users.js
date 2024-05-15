const mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    role: String
});

module.exports = mongoose.model('users', userSchema);