import React, { useState,useContext,useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsFillPeopleFill } from "react-icons/bs";

import DateDisponibility from './DateDisponibility';
import ExtraServices from './ExtraServices';
import addReservation from '../../../services/addReservation';
import TurismorealContext from '../../../context/TurismorealContext';
import { useNavigate, useParams } from 'react-router-dom';
import alertToast from '../../UI/alertToast';

const Booking = ({handleClickForm,capacidad,deptoPrice,disabledDates}) => {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const {user} = useContext(TurismorealContext)
    const {idDepto} = useParams()
    const navigate = useNavigate()

    const [selectedServices, setSelectedServices] = useState([]);
    const [serviceInfo, setServiceInfo] = useState([]);// para guardar hora si servicio extra select es transp
    const [amountServices, setAmountServices] = useState([0]);
    const [range, setRange] = useState([{startDate: new Date(),endDate: new Date(),key:'selection'}]);
    const [days, setDays] = useState(0);
    const [qtyCustomers, setQtyCustomers] = useState(1);
    const [checkIn,  setCheckIn]  = useState('-');
    const [checkOut, setCheckOut] = useState('-');

    let arriendoAmount = deptoPrice*days
    let servicesAmount = amountServices.reduce((previous, current) => (previous + current),0)
    let totalAmount = arriendoAmount + servicesAmount
    let reservationAmount = totalAmount/10


    const newReservation = async() => {
      const resp = await addReservation(
        totalAmount,//total_amount
        reservationAmount,//reservation_amount
        qtyCustomers,//qty_customers
        //checkIn.toLocaleDateString('en-CA'), // yyyy-mm-dd (not anymore!)
        //checkOut.toLocaleDateString('en-CA'),// yyyy-mm-dd (not anymore!)
        checkIn.toLocaleDateString( 'ko-KR'),// año - mes - dia (funcando)
        checkOut.toLocaleDateString('ko-KR'),// año - mes - dia (funcando)
        user.user_id,
        idDepto,
        selectedServices,
        serviceInfo
      )      

      const {id_reservation} = resp;

      navigate('/payment',{state:{reservationAmount,id_reservation}})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()

      if (user ===null) {// si usuario NO esta logueado
        alertToast('info','Por favor, inicie sesión antes de continuar','bottom-center','dark')
        navigate('/login')
      }
      else{
        alertToast('info','Redireccionando a Webpay','bottom-center','dark')
        
        await newReservation()
      }  
      
    }

    const handleInvalidCustomers = () => {
      alertToast('warning',`Por favor, indique número válido de asistentes (1-${capacidad})`,'bottom-center','dark')
    }

    let checkInVisual  = checkIn.toLocaleString( 'es-CL',
      {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long'}
    )
    let checkOutVisual = checkOut.toLocaleString('es-CL',
      {year: 'numeric', month: 'numeric', day: 'numeric',  weekday: 'long'}
    )

    return (
    
    <>
    <Form className='mt-5 mb-5' onSubmit={handleSubmit} >
      
      <DateDisponibility range={range} setRange={setRange} 
                        setDays={setDays} 
                        setCheckIn={setCheckIn} setCheckOut={setCheckOut}
                        idDepto={idDepto}
                        />
      
      <Form.Group className="mb-3" style={{width:'fit-content'}}>
        <Form.Label>
          Número de asistentes <BsFillPeopleFill/> (Máx. {capacidad})
        </Form.Label>
        <Form.Control min='1' max={capacidad} onInvalid={handleInvalidCustomers}
                      value={qtyCustomers} onChange={(e)=>setQtyCustomers(e.target.value)} 
                      type="number" placeholder="" style={{width:"fit-content"}}/>
      </Form.Group>

      <ExtraServices 
        setSelectedServices={setSelectedServices}
        selectedServices={selectedServices}
        setAmountServices={setAmountServices}
        amountServices={amountServices}
        setServiceInfo={setServiceInfo}
        serviceInfo={serviceInfo}
      />


      <div className='py-3 ps-3 px-3 border border-dark' style={{width:'fit-content'}}>
      {/* <div className='py-3 ps-3 px-3 border border-dark d-flex flex-column justify-content-center'> */}
        <h1>Resumen</h1>
        <p className='display-7'><strong>Costo Arriendo:</strong> $ {arriendoAmount}</p>
        <p className='display-7'><strong>Costo Servicios Extra:</strong> $ {servicesAmount}</p>
        <p className='display-7'><strong>Días:</strong> {days}</p>
        <p className='display-7'><strong>Check In:</strong>  {checkInVisual}  12:00pm </p>
        <p className='display-7'><strong>Check Out:</strong> {checkOutVisual} 19:00pm </p>
        <div className=' border border-secondary p-2'>
        <p className='display-6'><strong>Total:</strong> $ {totalAmount}</p>
        <p className='display-6'><strong>Costo Reserva:</strong> ${reservationAmount}</p>
        </div>
      </div>
{/*       <div className='py-1 ps-3 mb-3 border border-secondary' style={{width:'fit-content'}}>
        <p className='display-6'><strong>Costo Reserva:</strong> ${reservationAmount}</p>
      </div> */}
      
      <div className='row mt-2 mx-1'>
        <Button variant="primary"  className='col-12 col-lg-4 mb-2 me-2' type='submit' disabled={checkIn==='-' ? true : ''}>
          Reservar
        </Button>

        <Button variant="secondary" className='col-12 col-lg-4 mb-2 ' onClick={handleClickForm}>
          Volver
        </Button>
      </div>

    </Form>
    </>

  )
}

export default Booking