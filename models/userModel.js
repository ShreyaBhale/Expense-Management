const mongoose = require('mongoose');

//schema design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is rwquires']
    },
    email: {
        type: String,
        required: [true, 'email is rwquires'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password is rwquires']
    },
},
 {timestamps: true} 
);

const userModel = mongoose.model('users', userSchema);
module.exports = userModel