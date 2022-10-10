import React, { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import BookingListItem from './BookingListItem';


const BookingList = () => {
  

    let reservationsByUserId = [
        {
            "reservation_id":"1",
            "total_amount":  "136.590",
            "qty_customers": "5",
            "check_in":      "15/10/2022",
            "check_out":     "20/10/2022",
            "status":        "1",
            "user_id":       "21",
            "commune":       "Valdivia",
            "region":        "Los Rios",
            "capacidad":     5,
            "extra_service": "pique toreto, acercamiento, lavadita auto"

        },
        {
            "reservation_id":"2",
            "total_amount":  "149.990",
            "qty_customers": "5",
            "check_in":      "25/10/2022",
            "check_out":     "29/10/2022",
            "status":        "0",
            "user_id":       "21",
            "commune":       "Castro",
            "region":        "Chiloe",
            "capacidad":     5,
            "extra_service": "acercamiento"
        }
    ]

    let misReservas = reservationsByUserId.map((e) => {
        
        let status;
        
        if (e.status ==='1') {
            status = 'Activo'
        }
        
        if (e.status ==='0') {
            status = 'Cancelado'
        }

        return {
            ...e,
            status
        }
    })

  
    return (
    <div className='container my-3'>
        <ListGroup as="ol" numbered>
            {misReservas.map((e) => <BookingListItem key={e.reservation_id}{...e} /> )}
        </ListGroup>
    </div>
  )
}

export default BookingList