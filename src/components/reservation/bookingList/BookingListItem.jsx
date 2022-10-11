import React, { useState } from 'react';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import BookingDetail from './BookingDetail';

const BookingListItem = (props) => {
  
    const {
        reservation_id,
        total_amount,
        qty_customers,
        check_in,
        check_out,
        status,
        user_id,
        commune,
        region,
        extra_service,
        capacidad
    } = props;

    const [showBookingDetail, setShowBookingDetail] = useState(false);

    const navigate = useNavigate()

    let statusFormat

    if (status ==='Cancelado') {
        statusFormat = 'danger'
    }
  
    if (status ==='Activo') {
        statusFormat = 'success'
    }    

    const handleClickBookingItem = () => {
        setShowBookingDetail(!showBookingDetail)
        navigate(`/mis-reservas/${reservation_id}`,{state:{props}})
    } 

    return (
    <>
  
        {!showBookingDetail ? 
        <ListGroup.Item style={{cursor: "pointer"}} onClick={handleClickBookingItem}
        className="d-flex justify-content-center align-items-start mb-2 border">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
                {commune}
            </div>
            {check_in} - {check_out}
          </div>

            <div className='d-flex align-items-center'>
                <Badge bg={statusFormat} className='py-2 mt-2 me-2'  pill>
                  {status}
                </Badge>
            </div>
        </ListGroup.Item>
        :
        <BookingDetail handleClickBookingItem={handleClickBookingItem}  />
    }
    

    
    </>
  )
}

export default BookingListItem