const mongoose = require('mongoose');
const User = require('../../schema/schema2'); // Assuming this is the path to your User model/schema

// Function to get a user by userId
const getUserByUserId = async (userId) => {
    try {
        const user = await User.findOne({ userId: userId }); // Find the user by the userId field
        return user;
    } catch (error) {
        console.error('Error retrieving user by userId:', error);
        throw error;
    }
};

// Export the function
module.exports = getUserByUserId;
