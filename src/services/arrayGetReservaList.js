export const getReservas = () => {
    
    let reservas = [
        {
            "idCustomer": 1,
            "idServices": 1,
            //"idPayment": 1,
            "reservationAmount": 10000,
            "totalAmount": 100000,
            "differenceAmount":90000,
            "idDepartment": 1,
            "idReservationStatus": 1,// 1 reservado/ 2 pagado
            
            "reservationDate":2,
            "qtyCustomers":4,
            "reservationDate": '16/09/2022',
            "checkIn": '25/09/2022',
            "checkOut": '26/09/2022'
        },

      ]

      return reservas
}