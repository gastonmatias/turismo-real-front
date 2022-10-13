import React, { useState } from 'react';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import BookingDetail from './BookingDetail';

const BookingListItem = (props) => {
  
    const {
        id,
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

    if (status ==='Reservado')    statusFormat = 'success'
    if (status ==='Estadía Activa') statusFormat = 'primary'
    if (status ==='Estadía Terminada') statusFormat = 'secondary'
    if (status ==='Cancelado') statusFormat = 'danger'

    const handleClickBookingItem = () => {
        setShowBookingDetail(!showBookingDetail)
        navigate(`/mis-reservas/${id}`,{state:{props}})
    } 

    return (
    <>
      <ListGroup.Item style={{cursor: "pointer"}} onClick={handleClickBookingItem}
        className="d-flex justify-content-center align-items-start mb-2 border">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
                {commune} [ID Reserva: {id}]
            </div>
            {check_in} - {check_out}
          </div>

            <div className='d-flex align-items-center'>
                <Badge bg={statusFormat} className='py-2 mt-2 me-2'  pill>
                  {status}
                </Badge>
            </div>
      </ListGroup.Item>
    </>
  )
}

export default BookingListItem