const { timeStamp } = require("console")
const mongoose = require("mongoose")
const { object } = require("webidl-conversions")

const ObjectId = mongoose.Schema.Types.ObjectId

const createIntern = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    mobile :{
        type : Number,
        required : true,
        validate : {
            validator : function(mobile){
                return /^1?\s?(\([0-9]{3}\)[- ]?|[0-9]{3}[- ]?)[0-9]{3}[- ]?[0-9]{4}$/.test(mobile)
            }
        },
        unique : true
    },
    collegeId:{
        type : ObjectId,
        required : true,
        ref : "college"
    },
    isDeleted :{
        type : Boolean,
        default: false
    }

})

module.exports=mongoose.model("Intern", createIntern)