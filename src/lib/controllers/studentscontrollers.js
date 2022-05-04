const StudentService = require("../services/studentservice");

class StudentControllers {

    static getAllStudents(){
        return StudentService.allStudents();
    }

    static getEmailsCetification(){
        return StudentService.emailsWithCertification();
    }

    static getStudentsCredits(){
        return StudentService.studentsCredits();
    }

}

module.exports = StudentControllers;