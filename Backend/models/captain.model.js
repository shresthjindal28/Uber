const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long']
        }
    },
    email:{
        type: String,
        required: true,
        unique : true,
        minlength: [6, 'Email must be at least 6 characters long']
    },
    password:{
        type: String,
        required: true,
        select : false
    },
    socketId:{
        type: String
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color: {
            type: String,
            required: true
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'plate number must be more then 3 digit']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'capacity must be more than 1']
        },
        vehicleType:{
            type: String,
            enum: ['car', 'motorcycle', 'auto'],
            required: true
        }
    },
    location:{
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;