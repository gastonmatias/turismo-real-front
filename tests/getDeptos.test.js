const { default: getDeptos } = require("../src/services/getDeptos")

describe('test en servicio getDeptos', () => {

    test('respuesta de getDeptos debe retornar un array de objetos', async() => {

        const resp = await getDeptos()
        expect(typeof resp).toBe('object');

    })

})