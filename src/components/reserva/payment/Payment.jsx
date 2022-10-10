import React from 'react'
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import visa from '../../../assets/payment/visa.jpg'
import mastercard from '../../../assets/payment/mastercard.png'
import amex from '../../../assets/payment/amex.png'
import './payment.css'

const Payment = () => {
  
  const location = useLocation()
  const navigate = useNavigate()

  const {state:{reservationAmount,id_reservation}} = location

  const saveTransaction = async() => {
    /* await saveTrx(
      id_reservation,
      reservationAmount
    ) 
    
    */
  }
  
  const handleSubmit = () => {
    //await new saveTransaction()
    //redirect mis reservas
    navigate(`/mis-reservas`)
    
  }

  return (
        <>
    <div className="container mt-5 ">
        <div className="card-group">
         
        <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title className='display-5 mb-4'>Resumen</Card.Title>
                      <div className='botonera mb-3 d-flex flex-column text-center border border-grey py-2'>
                        <div className="procesador my-2 border border-grey my-1 mx-5 py-1">
                          <Card.Img className='img-procesador' variant="top" src={visa} />
                        </div>

                        <div className="procesador my-2 border border-grey my-1 mx-5 py-1">
                          <Card.Img className='img-procesador' variant="top" src={mastercard} />
                        </div>

                        <div className="procesador my-2 border border-grey my-1 mx-5 py-1">
                          <Card.Img className='img-procesador' variant="top" src={amex} />
                        </div>


                      </div>{/* fin botonera */}
                     
                  <div className='mx-2'>
                    <p className='display-6 border border-grey px-2'><strong>Monto: </strong>${reservationAmount}</p>
                  </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title className='display-5 mb-4'>Pago Reserva</Card.Title>
                  <Form className='row' onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" >
                        <Form.Label>Titular Tarjeta</Form.Label>
                        <Form.Control  placeholder="Nombre" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" >
                        <Form.Label>Número Tarjeta</Form.Label>
                        <Form.Control type="number" placeholder="12345678901232" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3 col-5" >
                        <Form.Label>Fecha Vto.</Form.Label>
                        <Form.Control type="text" placeholder="mm/aaaa" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                      </Form.Group>   
                      
                      <Form.Group className="mb-3 col-4" controlId="formBasicCheckbox">
                        <Form.Label>CCV</Form.Label>
                          <Form.Control type="text" placeholder="123" />
                          <Form.Text className="text-muted">
                          </Form.Text>
                      </Form.Group>                                         

                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Acepto términos y condiciones" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Button variant="primary" className='' type="submit">
                          PAGAR
                        </Button>
                        <a className='link mx-5' href='/departamentos'>Cancelar</a>
                      </Form.Group>
                    </Form>

                </Card.Body>
            </Card>

        
    </div>{/* end carg group */}

    </div> 
    </>
  )
}

export default Payment