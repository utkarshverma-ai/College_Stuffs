const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: false},
    age: Number,
    course: String,
    skills: [String],
    address: {
        city: String,
        pincode: Number
    },
    isActive: Boolean,
    marks: [
        {
            subject: String,
            score: Number
        }
    ]
}, { timestamps: true });

userSchema.pre('find', function(next) {
    console.log("Find querry is now executing..."); 
    next();
});
    

const User = mongoose.model('User', userSchema);

module.exports = User;
