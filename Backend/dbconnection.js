const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.url;

async function dbConnection() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error.message);
    }
}
module.exports = { dbConnection };
