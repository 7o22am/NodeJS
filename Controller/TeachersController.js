

const TeachersSchema = require("./../Models/TeacherModel");
const ClassSchema = require("./../Models/ClassModel");


exports.getAllTeachers = (requset, response) => {
  TeachersSchema.find()
    .then(data => {
      response.status(200).json(data);
      console.log(data);
    }).catch(error => next(error))
}






exports.addTeachers = (request, response) => {
  let newobj = new TeachersSchema({

    _id: request.body.id,
    fullname: request.body.fullname,
    email: request.body.email,
    password: request.body.password,
    image: request.body.image,
    age: request.body.age,

  });
  newobj.save()
    .then((data) => {
      response.status(201).json(data)
    })
    .catch(error => next(error));

};


exports.getTeachersById = (request, response) => {

  TeachersSchema.findOne({ _id: request.body.id }).then(data => {
    response.status(200).json(data);
    console.log(data);
  }).catch(error => next(error))

};

exports.updateteacheruserData = (request, response) => {

  TeachersSchema.updateOne({ _id: request.body.id }, {
    $set: {
      fullname: request.body.fullname,
      email: request.body.email,
      password: request.body.password,
      image: request.body.image,
      age: request.body.age,
    }
  })
    .then(response.status(200).json("Update"))
    .catch(error => next(error));

};
exports.deletespecifiedteacher = (request, response) => {
  TeachersSchema.deleteOne({ id: request.body.id })
    .then(response.status(200).json("deleted"))
    .catch(error => next(error));
};

exports.getTeacherssupervisors = (requset, response) => {

  ClassSchema.find()
    .populate("supervisor")
    .then((data) => {
      response.status(200).json({data});
    })
    .catch((error) => {
      console.error(error);
    });


}