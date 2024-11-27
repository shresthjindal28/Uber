const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
            trim : true
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
            trim : true
        }
    },
    email:{
        type: String,
        required: true,
        unique : true,
        minlength: [6, 'Email must be at least 6 characters long'],
    },
    password:{
        type: String,
        required: true,
        select : false
    },
    socketId:{
        type: String
    },
})

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}   

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;