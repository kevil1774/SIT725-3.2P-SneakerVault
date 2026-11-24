
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('================================');
        console.log(' MongoDB Connected Successfully');
        console.log(' Database: sneakervault');
        console.log('================================');

    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
