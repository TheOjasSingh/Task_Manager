const mongoose = require('mongoose')
// console.log("Hello World");


const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20, 'name cannot be more than 20 character'],
    },
    completed:{
        type: Boolean,
        default:false,
    },
})


module.exports = mongoose.model('Task',TaskSchema)
