
import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import getDisponibilityByDepto from '../../../services/getDisponibilityByDepto';
import getExtraServices from '../../../services/getExtraServices';
import DateDisponibility from './DateDisponibility';
import DateDisponibilityReactDate from './DateDisponibilityReact-Dates';

const CrearReserva = ({handleClickForm}) => {
  
  useEffect(() => {
    getServices()
    getDisponibility()
  }, []);

  const [disabledDates, setDisabledDates] = useState([]);

    const getServices = async() => {
      const resp = await getExtraServices()
      //console.log(resp);
    }
    
    const getDisponibility = async() => {
      const resp = await getDisponibilityByDepto(1)
      console.log('resp SIN Parseo',resp)
      
      let resp_parsed = resp.map((e) => new Date(e))

      setDisabledDates(resp_parsed)
      console.log('fechas parseadas',disabledDates)
    }

    return (
    
    <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label className='p'>Fecha Ingreso/Salida</Form.Label>
        {/*         <Form.Control type="date" placeholder="Enter email" /> */}
        <DateDisponibility disabledDates={disabledDates}/>
        {/* <Form.Text className="text-muted"> */}
        {/*   Sujeto a disponibilidad. */}
        {/* </Form.Text> */}

        {/* <DateDisponibilityReactDate/> */}

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Acompañantes</Form.Label>
        <Form.Control type="numeric" placeholder="" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Servicios Extra?</Form.Label>
        <Form.Select type="select" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Reservar
      </Button>

      <Button variant="secondary" className='ms-2' onClick={handleClickForm}>
        Volver
      </Button>
    </Form>

  )
}

export default CrearReserva