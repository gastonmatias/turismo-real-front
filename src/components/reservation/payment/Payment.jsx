import React, { useContext } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import visa from '../../../assets/payment/visa.jpg'
import mastercard from '../../../assets/payment/mastercard.png'
import amex from '../../../assets/payment/amex.png'

import './payment.css'
import { sendEmailJS } from '../../../helpers/sendEmailJS';
import alertToast from '../../UI/alertToast';
import addTransaction from '../../../services/addTransaction';
import TurismorealContext from '../../../context/TurismorealContext';

const Payment = () => {
  
  const location = useLocation()
  const navigate = useNavigate()

  const {state:{reservationAmount,id_reservation}} = location
  const {user} = useContext(TurismorealContext)

  const saveTransaction = async() => {
    // await addTransaction(id_reservation,reservationAmount)
    const resp = await addTransaction(id_reservation,reservationAmount)
    console.log(resp);
  }
  
  const handlePayBtn = (e) => {
    e.preventDefault()
    saveTransaction()
    alertToast('success','Reserva creada exitosamente!','top-center','dark')
    sendEmailJS(user.username,user.email,id_reservation)
    // sendEmailJS(user.username,'gas.villagra@duocuc.cl',id_reservation)
    navigate(`/mis-reservas`)
  }
  
  return (
        <>
    <div className="container mt-5 d-flex justify-content-center">
        <div className="card-group">
         
        <Card >
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title className='display-5 mb-4'>Resumen</Card.Title>
                      <div className='botonera mb-3 d-flex flex-column text-center border border-grey py-2'>
                        <div className="procesador my-2 border border-warning rounded my-1 mx-5 py-1">
                          <Card.Img className='img-procesador' variant="top" src={visa} />
                        </div>

                        <div className="procesador my-2 border border-danger rounded my-1 mx-5 py-1">
                          <Card.Img className='img-procesador' variant="top" src={mastercard} />
                        </div>

                        <div className="procesador my-2 border border-primary rounded my-1 mx-5 py-2">
                          <Card.Img className='img-procesador' variant="top" src={amex} />
                        </div>


                      </div>{/* fin botonera */}
                     
                  <div className=''>
                    <p className='display-6 border px-2 text-center'><strong>Monto: </strong>${reservationAmount}</p>
                  </div>
                </Card.Body>
            </Card>

            <Card >
                <Card.Body>
                  <Card.Title className='display-5 mb-4'>Pago Reserva</Card.Title>
                  <Form className='row'>
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
                        <Button variant="primary" className='' onClick={handlePayBtn}>
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