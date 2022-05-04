const StudentControllers = require("../../lib/controllers/studentscontrollers");

describe('Test para el controlador', () => {
    
    test('Debería obtener todos los estudiantes', () => {
        const students = StudentControllers.getAllStudents();
        expect(students).not.toBeUndefined();
    });

    test('Debería obtener todos los emails de estudiantes certificados', () => {
        const emails = StudentControllers.getEmailsCetification();
        expect(emails).not.toBeUndefined();
    });

    test('Debería obtener todos los estudiantes con creditos mayores a 500', () => {
        const studentsCredits = StudentControllers.getStudentsCredits();
        expect(studentsCredits).not.toBeUndefined();
    });

});