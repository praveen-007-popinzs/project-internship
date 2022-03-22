const mongoose = require("mongoose")

const CollegeModel = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        
    },
    FullName: {
        type: String,
        required: true,
    },
    logoLink: {
        type: String,
        required: true,
    },
    isDeleted : {
        type : Boolean,
        default : false,
    } 
})

module.exports = mongoose.model("college", CollegeModel)