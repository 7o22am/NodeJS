const ClassSchema = require("./../Models/ClassModel");


exports.getAllClass = (request, response, next) => {
    ClassSchema.find().then(data => {
        response.status(200).json(data);
        console.log(data);
    }).catch(error => next(error))

}


exports.getClassById = (request, response) => {

    ClassSchema.findOne({ _id: request.body.id }).then(data => {
        response.status(200).json(data);
        console.log(data);
     }).catch(error => next(error))
}

exports.addClass = (request, response, next) => {

    let newobj = new ClassSchema({

        _id: request.body.id ,
        name:request.body.name,
        supervisor:request.body.supervisor,
        StudentsInClass:request.body.StudentsInClass,
  
     });
     newobj.save()
        .then((data) => {
           response.status(201).json(data)
        })
        .catch(error => next(error));
  
}

exports.updateClass = (request, response, next) => {

    ClassSchema.updateOne({ id: request.body.id }, {
        $set: {
            _id: request.body.id ,
            name:request.body.name,
            supervisor:request.body.supervisor,
            StudentsInClass:request.body.StudentsInClass,
        }
     })
        .then(response.status(200).json( "Update"  ))
        .catch(error => next(error));
}

exports.deleteClass = (request, response, next) => {

    ClassSchema.deleteOne({ id: request.body.id })
      .then(response.status(200).json("deleted"))
      .catch(error => next(error));

}
exports.getclasschildreninfo = (request, response, next) => {

    
    ClassSchema.find()
    .populate("StudentsInClass")
    .then((data) => {
      response.status(200).json({data});
    })
    .catch((error) => {
      console.error(error);
    });
}
exports.getclasssupervisorinfo = (request, response, next) => {

    ClassSchema.find()
    .populate("supervisor")
    .then((data) => {
      response.status(200).json({data});
    })
    .catch((error) => {
      console.error(error);
    });
}