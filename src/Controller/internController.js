const collegeModel = require("../Model/collegeModel")
const internModel = require("../Model/internModel")
const { response } = require("express")
//const jwt = require("jsonwebtoken")

const createInterns = async function (req, res) {
    try {

        let data = req.body

        if (Object.keys(data).length != 0) {

            let collegeId = data.collegeId
            let check = await collegeModel.findById(collegeId)
            //console.log(check)

            if (check) {
                let internCreated = await internModel.create(data)
                res.status(201).send({ status: true, msg: internCreated })
            } else {
                return res.status(400).send({ status: false, msg: "please provide valid college Id" })
            }

        } else {
            res.status(400).send({ status: false, msg: "pls provide data in the body " })
        }

    } catch (err) {
        res.status(400).send({ status: false, msg: err.message })
    }
}

const GetCollegeDetails = async function(req, res){
    try{
    collegeName=req.query.name
    const datas = await collegeModel.findOne({name : collegeName, isDeleted : false})
    //console.log(data)
    const obj = {}

    const {name, FullName, logoLink} = datas
    obj.name=name
    obj.FullName=FullName
    obj.logoLink=logoLink


    const allInterns= await internModel.find({collegeId : datas._id, isDeleted:false}).select({ "collegeId":0, "isDeleted":0, "__v" : 0})
    
    obj.interest = allInterns
    res.status(400).send({status : true, data: obj})
    }
    catch(err){
        res.status(404).send({status : false, msg : err.message} )
    }

}






module.exports.createInterns = createInterns
module.exports.GetCollegeDetails = GetCollegeDetails
