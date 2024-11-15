// // models/User.js
// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
// });

// module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
