// const { render } = require("@testing-library/react")
// const { Booking } = require("../src/components/reservation/booking/Booking")

const { default: getDeptos } = require("../src/services/getDeptos")

// import { getDeptos } from '../src/services/getDeptos/';

describe('Pruebas en servicio getDeptos', () => {

    test('should match', async() => {


        const depas = [{
            "id": 41,
            "address": "Avenida Matta #565",
            "short_description": "Desconexion Ideal",
            "long_description": "Ideal para vacacionar en pareja",
            "qty_rooms": 1,
            "price": 59990
        }]

        const resp = await getDeptos()
        // expect(resp).toBe('object')
        // expect(resp).objectContaining({
            // id: expect.any(Number),
        //   })
        
        //const resp = jest.fn();
        // simulatePresses(onPress);
        // expect(resp).toHaveBeenCalledWith(
        //   expect.objectContaining({
        //     id: expect.any(Number),
        //   }),
        // );

        expect(resp).toMatchObject(depas);

    })


})