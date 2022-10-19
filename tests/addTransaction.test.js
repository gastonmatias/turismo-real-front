const { default: addReservation } = require("../src/services/addReservation");
const { default: addTransaction } = require("../src/services/addTransaction");

describe('Pruebas en servicio addTransaction',() => {

    const total_amount =  99890
    const reservation_amount = 9989 
    const qty_customers =  2
    const check_in =  '2022-10-25'
    const check_out =  '2022-10-29'
    const user_id =  22
    const department_id = 41  
    const selectedServices= [2,3,4] 
    
    test('ejecución de addTrx debe retornar objeto json', async() => {

        const reservation = await addReservation(
            total_amount,
            reservation_amount,
            qty_customers,
            check_in,
            check_out,
            user_id,
            department_id,
            selectedServices
        )

        const {id_reservation} = reservation;

        const resp = await addTransaction(id_reservation,reservation_amount)

        expect(typeof resp).toBe('object');

    })


    test('json retornado debe contener: message=success + id_trx', async() => {

        const reservation = await addReservation(
            total_amount,
            reservation_amount,
            qty_customers,
            check_in,
            check_out,
            user_id,
            department_id,
            selectedServices
        )

        const {id_reservation} = reservation;

        const resp = await addTransaction(id_reservation,reservation_amount)

        const jsonExpected ={
            message: expect.any(String),
            id_transaction: expect.any(Number)
        }

        expect(resp).toEqual(expect.objectContaining(jsonExpected))
        expect(resp).toHaveProperty('message','success')

    })
})