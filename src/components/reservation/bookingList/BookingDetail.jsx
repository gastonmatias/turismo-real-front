import React, { useContext, useState,useEffect } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsFillPeopleFill } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";

import cancelReservation from '../../../services/cancelReservation';
import confirmAction from '../../UI/confirmAction';
import alertToast from '../../UI/alertToast';
import TurismorealContext from '../../../context/TurismorealContext';
import Loader from '../../UI/Spinner';
import editReservation from '../../../services/editReservation';
import getServicesByReservation from '../../../services/getServicesByReservation';

const BookingDetail = () => {

  const {isLoading,setIsLoading} = useContext(TurismorealContext)
  const location = useLocation()
  const {state:{props}} = location;
  const navigate = useNavigate()

  useEffect(() => {
    getReservationServices()
  }, [props.id]);

  const [qtyCustomers, setQtyCustomers] = useState(props.qty_customers);
  const [services, setServices] = useState([]);

  const getReservationServices = async() => {
    setIsLoading(true)
    const resp = await getServicesByReservation(props.id)
    setServices(resp)
    setIsLoading(false)
  }

  const cancelarReserva = async() => {
    setIsLoading(true)
    await cancelReservation(props.id)
    alertToast('success','Reserva Cancelada!','top-center','dark')
    navigate('/mis-reservas')
    setIsLoading(false)
  }

  const handleCancelClick = async() => {
    confirmAction(
      'Cancelación Reserva',
      'Estás Seguro? Esta acción es irreversible',
      cancelarReserva //fx sin ejecutar, aun
    )
  }

  const handleUpdateClick = async() => {
    setIsLoading(true)
    const resp = await editReservation(props.id, qtyCustomers)
    console.log(resp);
    alertToast('success','Reserva Actualizada!','top-center','dark')
    setIsLoading(false)
  }

  return (
    <> 
    {(isLoading||services.length===0) && <Loader type="full" animation="border" variant="light"/>}
    
    {services.length>0 &&
    <div className='d-flex justify-content-center mt-3'>
        <Form className='border border-secondary rounded px-5 mx-5'>
            <Form.Group className="mb-3" >
                <Form.Label>Destino</Form.Label>
                <Form.Control type="text" value={`${props.commune}, ${props.region}`} disabled/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Check In</Form.Label>
                <Form.Control type="text" value={props.check_in} disabled/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Check Out</Form.Label>
                <Form.Control type="text" value={props.check_out} disabled/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                    Numero de Asistentes <BsFillPeopleFill/> (Máx. {props.capacidad})
                </Form.Label>
                <Form.Control min='0' max={props.capacidad} 
                      value={qtyCustomers} onChange={(e)=>setQtyCustomers(e.target.value)} 
                      type="number" placeholder="" style={{width:"fit-content"}}
                      disabled={props.status!=='Reservado' ? true: false}
                    />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>
                    Servicios Extra Contratados
                </Form.Label>
                { services.map((e) => (
                    <ul className='mb-1' key={e}>
                      <BsClipboardCheck/> {e}
                    </ul>
                  ))
                }
            </Form.Group>

          {(props.status==='Reservado') &&
          <div className='row'>
            <Button variant="success" onClick={handleUpdateClick}
                    className='col-12 col-lg-5 mb-3 me-5'>
              Actualizar Reserva
            </Button>

            <Button variant="danger" onClick={handleCancelClick}
                    className='col-12 col-lg-5 mb-3'>
              Cancelar Reserva
            </Button>
          </div>
          }

          <div className='pb-3'>
            <a className="text-primary" href='/mis-reservas'>
              Volver
            </a>
          </div>
        </Form>
    </div>
  }
    </>
  )
}

export default BookingDetail