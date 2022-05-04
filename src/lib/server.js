const StudentControllers = require("./controllers/studentscontrollers");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Thinking Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    response.json(StudentControllers.getAllStudents());
});

app.get("/v1/students/emails", (request, response) => {
    response.json(StudentControllers.getEmailsCetification());
});

app.get("/v1/students/credits", (request, response) => {
    response.json(StudentControllers.getStudentsCredits());
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});