const express = require("express");
const controller = require("./../Controller/TeachersController");
const router = express.Router();

router.route("/Teacher")
      .get(controller.getAllTeachers)
      .post(controller.addTeachers)
      .put(controller.updateteacheruserData);




router.route("/Teacher/:id")
      .get(controller.getTeachersById)
      .delete(controller.deletespecifiedteacher);



router.route('/teachers/supervisors')
       .get(controller.getTeacherssupervisors);

module.exports = router;

