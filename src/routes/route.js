const express = require('express');
const router = express.Router();

const collegeController = require("../Controller/collegeController")
const internController = require("../Controller/internController")




router.get("/test-me", function(req,res){
    res.send("hello there")
})

router.post("/functionUp/colleges", collegeController.createColleges)

router.post("/function/interns",   internController.createInterns)


router.get("/functionup/collegeDetails",   internController.GetCollegeDetails)


module.exports = router;