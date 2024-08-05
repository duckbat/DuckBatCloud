// Importing the necessary modules/schemes
const {Schema, model, ObjectId} = require('mongoose');


// Creating User schema following created diagram
const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    diskSpace: {type: String, required: true},
    userSpace: {type: String, required: true},
    avatar: {type: String},
    files: [{type: ObjectId, ref: 'File'}]
})


// Exporting the User model
module.exports = model('User', User)