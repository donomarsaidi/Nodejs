const mongoose = require('mongoose');
const schema = mongoose.Schema({
    fullName:String,
    phone:Number
})
mongoose.set('strictQuery', false);
module.exports = mongoose.model('Contact',schema);