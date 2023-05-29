const express = require("express");
const controller = require("./../Controller/studentController");

const router = express.Router();

//craete express route object and return it 

router.route("/students")
       .get(controller.getAllStudent)
       .post(controller.addStudent)
       .put(controller.updateStudent);




router.route("/students/:id")
       .get(controller.getStudentById)
       .delete(controller.deleteStudent);
router.route('/students/class/:class')
       .get(controller.getchildclassinfo);


module.exports = router;











