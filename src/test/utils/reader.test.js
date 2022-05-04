const Reader = require("../../lib/utils/reader");

describe('Test para el lector de archivos', () => {
    
    test('Debería retornar elarchivo correctamente', () => {
        const archivo = Reader.readJsonFile("./src/lib/models/visualpartners.json");
        expect(archivo).not.toBeUndefined();
    });

    test('Debería retornar error', () => {
        const archivoErr = Reader.readJsonFile("archivo.json");
        expect(archivoErr).toBe("error");
    });

});