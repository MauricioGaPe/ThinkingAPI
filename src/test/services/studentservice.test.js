const StudentService = require("../../lib/services/studentservice");

describe('Test para el serrvicio de estudiantes', () => {
    
    test('Debería obtener todos los estudiantes', () => {
        const students = StudentService.allStudents();
        expect(students).not.toBeUndefined();
    });

    test('Debería obtener todos los emails de estudiantes certificados', () => {
        const emails = StudentService.emailsWithCertification();
        expect(emails).not.toBeUndefined();
    });

    test('Debería obtener todos los estudiantes con creditos mayores a 500', () => {
        const studentsCredits = StudentService.studentsCredits();
        expect(studentsCredits).not.toBeUndefined();
    });
    
});