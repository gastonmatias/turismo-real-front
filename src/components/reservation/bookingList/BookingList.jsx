import React, { useContext, useState,useEffect } from 'react';

import {GrInfo } from "react-icons/gr";
import {BsFillInfoCircleFill } from "react-icons/bs";
import {MdOutlineFreeCancellation } from "react-icons/md";
import {BiEditAlt } from "react-icons/bi";
import {MdOutlineContactPhone } from "react-icons/md";

import ListGroup from 'react-bootstrap/ListGroup';
import TurismorealContext from '../../../context/TurismorealContext';
import getReservationsByClientId from '../../../services/getReservationsByClient';
import Loader from '../../UI/Spinner';
import BookingListItem from './BookingListItem';


const BookingList = () => {
    
    const {user,isLoading, setIsLoading} = useContext(TurismorealContext)  
    
    useEffect(() => {
        getReservas()
    }, [user.user_id]);

    const [bookings, setBookings] = useState([]);

    const getReservas = async() => {
        setIsLoading(true)
        const resp = await getReservationsByClientId(user.user_id)
        setBookings(resp)
        setIsLoading(false)
    }

    let reservationsFormat = bookings.map((e) => {
        let status;
        let capacidad = (e.qty_rooms)*2;
        if (e.status === 1) status = 'Reservado'
        if (e.status === 2) status = 'Estadía Activa'
        if (e.status === 3) status = 'Estadía Terminada'
        if (e.status === 4) status = 'Cancelado'
        return {...e,status,capacidad}
    })

    return (
    <>
    { !isLoading && 
        <div className='container my-3'>
            <h1 className='display-5'>Mis Reservas</h1>
            
            <ListGroup as="ol" numbered className='d-flex justify-content-center'>
            {reservationsFormat.map((e) => <BookingListItem key={e.id}{...e} /> )}
            </ListGroup>

            <div className='border border-dark rounded px-3 mx-5 mt-1' style={{width: "fit-content"}}>
                <p className='my-1'><BsFillInfoCircleFill/> </p>
                <p className='my-1'>Estimado cliente, por favor tenga en cuenta estas condiciones a la hora de gestionar sus reservas:</p>
                <p className='my-1'><BiEditAlt/> Podrá actualizar el número de acompañantes si así lo requiere</p>
                <p className='my-1'><MdOutlineFreeCancellation/> Para cambios de check in/out deberá cancelar su actual reserva</p>
                <p className='my-1'><MdOutlineContactPhone/> Para cancelar/solicitar nuevo servicio extra deberá contactar al administrador</p>
                   
            </div>
        </div>
    }
    {isLoading && 
        <Loader type="full" variant="light" animation="border" />
    }
    </>
  )
}

export default BookingList