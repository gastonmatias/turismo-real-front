import React, { useState, useEffect, useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {MdFamilyRestroom } from "react-icons/md";
import {BsFillPeopleFill } from "react-icons/bs";

import DateDisponibility from './DateDisponibility';
import ExtraServices from './ExtraServices';
import addReservation from '../../../services/addReservation';
import addReservationAxios from '../../../services/addReservationAxios';
import TurismorealContext from '../../../context/TurismorealContext';
import { useParams } from 'react-router-dom';

const CrearReserva = ({handleClickForm,capacidad,deptoPrice}) => {

    useEffect(() => {
      
    }, []);

    const {user} = useContext(TurismorealContext)

    const [selectedServices, setSelectedServices] = useState([1]);
    //const [amountServices, setAmountServices] = useState(0);
    //const [totalAmount, setTotalAmount] = useState(deptoPrice);
    const [range, setRange] = useState([{startDate: new Date(),endDate: new Date(),key:'selection'}]);
    const [days, setDays] = useState(1);
    const [qtyCustomers, setQtyCustomers] = useState(0);
    //const [checkIn,  setCheckIn]  = useState(new Date().toLocaleDateString('en-CA'));
    //const [checkOut, setCheckOut] = useState(new Date().toLocaleDateString('en-CA'));
    const [checkIn,  setCheckIn]  = useState('-');
    const [checkOut, setCheckOut] = useState('-');

    const handleSubmit = (e) => {
      e.preventDefault()
      newReservation()
    }

    const {idDepto} = useParams()

    let arriendoAmount = deptoPrice*days
    let servicesAmount =  5990
    let totalAmount = arriendoAmount + servicesAmount
    let reservationAmount = totalAmount/10

    //console.log('checkIn  parsed local',  checkIn.toLocaleDateString('es-CL'));
    //console.log('checkOut parsed local',checkOut.toLocaleSDatetring('es-CL'));

    const newReservation = async() => {
      
      const resp = await addReservation(
        totalAmount,//total_amount
        reservationAmount,//reservation_amount
        qtyCustomers,//qty_customers
        checkIn.toLocaleDateString('en-CA'),//check_in
        checkOut.toLocaleDateString('en-CA'),//check_out
        user.user_id,//user_id
        idDepto,//department_id
        selectedServices
      )

      console.log('add reserve duraceli',resp);
      
    }



    let checkInVisual  = checkIn.toLocaleString( 'es-CL',{year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long'})
    let checkOutVisual = checkOut.toLocaleString('es-CL',{year: 'numeric', month: 'numeric', day: 'numeric',  weekday: 'long'})

    return (
    
    <Form className='mt-5 mb-5' onSubmit={handleSubmit}>
      
      <DateDisponibility range={range} setRange={setRange} 
                        days={days} setDays={setDays} 
                        setCheckIn={setCheckIn} setCheckOut={setCheckOut}
                        />
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          Numero de Acompañantes <BsFillPeopleFill/>(sujeto a cantidad de Habitaciones)
        </Form.Label>
        <Form.Control min='0' max={capacidad} 
                      value={qtyCustomers} onChange={(e)=>setQtyCustomers(e.target.value)} 
                      type="number" placeholder="" style={{width:"60%"}}/>
      </Form.Group>

      <ExtraServices 
        setSelectedServices={setSelectedServices}
        selectedServices={selectedServices}
      />

      <div className='py-3 ps-3 mb-3 border border-dark' style={{width:'60%'}}>
        <p className='display-6'><strong>Total:</strong> $ {totalAmount}</p>
        <p className='display-7'><strong>Costo Reserva:</strong> $ {reservationAmount}</p>
        <p className='display-7'><strong>Días:</strong> {days}</p>
        <p className='display-7'><strong>Check In:</strong>  {checkInVisual}  12:00pm </p>
        <p className='display-7'><strong>Check Out:</strong> {checkOutVisual} 19:00pm </p>
      </div>
      
      <div>
        <Button variant="primary" type="submit" >
          Reservar
        </Button>

        <Button variant="secondary" className='ms-2' onClick={handleClickForm}>
          Volver
        </Button>
      </div>

    </Form>

  )
}

export default CrearReserva