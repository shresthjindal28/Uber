const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, {}).then(
        console.log('Connected to the database')
    ).catch(err => console.log(err));
}

module.exports = connectDB;