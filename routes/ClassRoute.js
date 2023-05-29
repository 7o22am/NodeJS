const express = require("express");
const controller = require("./../Controller/classontroller");

const router = express.Router();

//craete express route object and return it 

router.route("/class")
       .get(controller.getAllClass)
       .post(controller.addClass)
       .put(controller.updateClass);




router.route("/class/:id")
       .get(controller.getClassById)
       .delete(controller.deleteClass);

       
router.route('/class/Student/:id?')
       .get(controller.getclasschildreninfo);
       router.route('/class/teacher/:id?')
       .get(controller.getclasssupervisorinfo);
 


module.exports = router;











