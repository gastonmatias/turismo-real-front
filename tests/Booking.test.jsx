const { render } = require("@testing-library/react")
// const { Booking } = require("../src/components/reservation/booking/Booking")

import { getDeptos } from '../src/services/arrayGetDeptoList';

describe('Pruebas en componente <Booking/>', () => {

    test('should match', async() => {

        // const addReservation = async (
        //     total_amount,
        //     reservation_amount,
        //     qty_customers,
        //     check_in,
        //     check_out,
        //     user_id,
        //     department_id,
        //     selectedServices
        //     ) => {
        // addReservation()
        const resp = await getDeptos()
        expect(resp).toBe('array')
        //render(<Booking/>)
    })


})