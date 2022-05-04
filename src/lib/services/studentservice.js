const Reader = require("../utils/reader");

class StudentService {

    static allStudents(){
        return Reader.readJsonFile("./src/lib/models/visualpartners.json");
    }

    static emailsWithCertification(){
        const students = Reader.readJsonFile("./src/lib/models/visualpartners.json");
        let studentsEmailWithCertification = [];
        students.forEach(student => {
            if(student.haveCertification){
                studentsEmailWithCertification.push(student.email)
            }
        });
        return studentsEmailWithCertification;
    }

    static studentsCredits(){
        return Reader.readJsonFile("./src/lib/models/visualpartners.json").filter((student) => student.credits > 500);
    }

}

module.exports = StudentService;