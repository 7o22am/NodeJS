
 
const StudentSchema = require("./../Models/StudentsModel");



exports.getAllStudent = (request, response, next) => {
   StudentSchema.find().then(data => {
      response.status(200).json(data);
      console.log(data);
   }).catch(error => next(error))

}


exports.getStudentById = (request, response) => {

   StudentSchema.findOne({ id: request.body.id }).then(data => {
      response.status(200).json(data);
      console.log(data);
   }).catch(error => next(error))

}

exports.addStudent = (request, response, next) => {

   let newobj = new StudentSchema({

      _id: request.body.id,
      fullname: request.body.fullname,
      class: request.body.class,
      level: request.body.level,
      address: request.body.address,
      age: request.body.age,

   });
   newobj.save()
      .then((data) => {
         response.status(201).json(data)
      })
      .catch(error => next(error));

}

exports.updateStudent = (request, response, next) => {

   StudentSchema.updateOne({ _id: request.body.id }, {
      $set: {
         fullname: request.body.fullname,
         class: request.body.class,
         level: request.body.level,
         address: request.body.address,
         age: request.body.age,
      }
   })
      .then(response.status(200).json( "Update"  ))
      .catch(error => next(error));
}

exports.deleteStudent = (request, response, next) => {

   StudentSchema.deleteOne({ _id: request.body.id })
      .then(response.status(200).json("deleted"))
      .catch(error => next(error));



}
exports.getchildclassinfo = (request, response, next) => {

   StudentSchema.find()
  .populate("class")
  .then((data) => {
    response.status(200).json({data});
  })
  .catch((error) => {
    console.error(error);
  });

}