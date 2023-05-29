const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRouter = require("./routes/studentRoute");
const TeachersRoute = require("./routes/TeachersRoute");
const ClassRoute = require("./routes/ClassRoute");


mongoose.connect('mongodb://127.0.0.1:27017/Nursery')
    .then(() => console.log('Connected!'));



const app = express();
app.use(bodyParser.json());

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});



app.use(morgan('tiny')); //  to log request  in console


app.use(studentRouter);
app.use(TeachersRoute);
app.use(ClassRoute);

app.use((request, repsonse, next) => {
    repsonse.status(404).json({ message: "  not founde  " });
});

//Error MW
app.use((error, request, response, next) => {
    response.status(500).json({ message: "error : " + error });
})

