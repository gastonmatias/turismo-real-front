import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsFillPeopleFill } from "react-icons/bs";
import cancelReservation from '../../../services/cancelReservation';

const BookingDetail = () => {

    const location = useLocation()
    const {state:{props}} = location;

    const [qtyCustomers, setQtyCustomers] = useState(0);

    const handleCustomers = () => {
      //return props.status.contains('Activo')
      //if(props.status==='Cancelado'){ 
      return false
    }

  const handleCancelClick = async() => {
    const resp = await cancelReservation(props.id)
    console.log(resp)

  }

  return (
    <div className='container mt-3 d-flex justify-content-center'>
        <Form className='border border-light rounded px-5 mx-5'>
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
                    Numero de Acompañantes <BsFillPeopleFill/> (Máx. {props.capacidad})
                </Form.Label>
                <Form.Control min='0' max={props.capacidad} 
                      value={qtyCustomers} onChange={(e)=>setQtyCustomers(e.target.value)} 
                      type="number" placeholder="" style={{width:"20%"}}
                      disabled={props.status!=='Reservado' ? true: false}
                    />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>
                    Servicios Extra
                </Form.Label>
              <ul>{props.commune}</ul>
            </Form.Group>

          {(props.status==='Reservado') &&
          <div className=''>
          <Button variant="primary" type="submit" className='me-3'>
            Actualizar Reserva
          </Button>

          <Button variant="danger" className='' onClick={handleCancelClick}>
            Cancelar Reserva
          </Button>
          </div>
          }

          <div className='py-4'>
            <a className="text-primary" href='/mis-reservas'>
              Volver
            </a>
          </div>
        </Form>
    </div>
  )
}

export default BookingDetail