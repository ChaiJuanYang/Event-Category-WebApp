/**
 * Constant mongoose that references required Mongoose
 */
const mongoose = require('mongoose');

/**
 * Schema for a Category
 */
const categorySchema = new mongoose.Schema({ 
    name: { 
        type: String,
        required : true,
        match: /^[a-zA-Z0-9\s]*$/, 
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "/event_management_app.jpg",
        set: function(value) {
            // If the value is an empty string, set it to the default
            if (value == "") {
                return "/event_management_app.jpg";
            }
            return value;
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    categoryID: {
        type: String,
        unique: true,
        default: function() {
            // Generate a unique category ID using the first two letters of the name
            const prefix = 'C';
            const firstTwoLetters = this.name.substr(0, 2).toUpperCase();
            const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            return `${prefix}${firstTwoLetters}-${randomDigits}`;
        }
    }
});

module.exports = mongoose.model('Category', categorySchema);

