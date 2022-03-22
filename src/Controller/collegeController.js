const collegeModel = require("../Model/collegeModel")


const createColleges = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length != 0) {
            const collegeData = await collegeModel.create(data)

            res.status(201).send({ status: true, msg: collegeData })

        }else{
            res.status(400).send({status:false, msg:"body is missing"})
        }


    } catch (err) {
        res.status(400).send({ status: false, error: err.message })
    }

}


module.exports.createColleges = createColleges