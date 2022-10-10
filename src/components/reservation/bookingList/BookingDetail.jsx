import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsFillPeopleFill } from "react-icons/bs";

const BookingDetail = () => {

    const location = useLocation()
    const {state:{props}} = location;

    const [qtyCustomers, setQtyCustomers] = useState(0);

    /* console.log('props.capacidad',props) */

    
    /* console.log('props bookking detail', props); */

  return (
    <div className='container mt-3'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Check In</Form.Label>
                <Form.Control type="text" value={props.check_in} disabled/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Check Out</Form.Label>
                <Form.Control type="text" value={props.check_out} disabled/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                    Numero de Acompañantes <BsFillPeopleFill/> (Máx. {props.capacidad})
                </Form.Label>
                <Form.Control min='0' max={props.capacidad} 
                      value={qtyCustomers} onChange={(e)=>setQtyCustomers(e.target.value)} 
                      type="number" placeholder="" style={{width:"60%"}}
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>
                    Servicios Extra
                </Form.Label>
              <ul>{props.extra_service}</ul>
            </Form.Group>

          <Button variant="primary" type="submit" className='mx-3'>
            Actualizar Reserva
          </Button>

          <Button variant="danger" >
            Cancelar Reserva
          </Button>

          <a className='navlink mx-3 block'>
            volver
          </a>
        </Form>
    </div>
  )
}

export default BookingDetail