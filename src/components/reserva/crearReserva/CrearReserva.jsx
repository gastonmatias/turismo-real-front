import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CrearReserva = ({handleClickForm}) => {
  
    
    
    return (
    
    <Form className='mt-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Fecha Ingreso/Salida</Form.Label>
        <Form.Control type="date" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Sujeto a disponibilidad.
        </Form.Text>
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