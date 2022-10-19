const { default: addReservation } = require("../src/services/addReservation");

describe('Pruebas en servicio addReservation',() => {
    
    const total_amount =  99890
    const reservation_amount = 9989 
    const qty_customers =  2
    const check_in =  '2022-10-25'
    const check_out =  '2022-10-29'
    const user_id =  22
    const department_id = 41  
    const selectedServices= [2,3,4] 
    
    test('addReservation debe retornar object tipo json', async() => {

        const resp = await addReservation(
            total_amount,
            reservation_amount,
            qty_customers,
            check_in,
            check_out,
            user_id,
            department_id,
            selectedServices
        )

        expect(typeof resp).toBe('object');

    })


    test('json retornado debe contener las keys id_reserv + services', async() => {

        const resp = await addReservation(
            total_amount,
            reservation_amount,
            qty_customers,
            check_in,
            check_out,
            user_id,
            department_id,
            selectedServices
        )

        const jsonExpected ={
            id_reservation: expect.any(Number),
            services: expect.any(Object)
        }

        expect(resp).toEqual(expect.objectContaining(jsonExpected))

    })

    test('json retornado debe contener array de services seleccionados', async() => {

        const resp = await addReservation(
            total_amount,
            reservation_amount,
            qty_customers,
            check_in,
            check_out,
            user_id,
            department_id,
            selectedServices
        )

        expect(resp).toHaveProperty('services',[2,3,4])

    })

    test('si NO se selecciona servicios extra, por default manda el item [0]', async() => {

        const resp = await addReservation(
            total_amount,
            reservation_amount,
            qty_customers,
            check_in,
            check_out,
            user_id,
            department_id,
            [] //array vacio qe contiene
        )

        const jsonExpected ={
            id_reservation: expect.any(Number),
            services: expect.any(Object)
        }

        expect(resp).toEqual(expect.objectContaining(jsonExpected))
        expect(resp).toHaveProperty('services',[0])

    })

})