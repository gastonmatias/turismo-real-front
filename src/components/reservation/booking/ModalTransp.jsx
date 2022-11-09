import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

export const ModalTransp = ({
    handleCloseModal,
    showModalTransp,
    handleChangeCheckbox,
    transportes,
    setTransportes,
    selectedServices,
    serviceInfo,
    setServiceInfo
}) => {

  const handleHourChange = (ev,id) => {

    // determina si la hora del servicio ofrecido en modal ha sido manipulada
    // de ser asi, actualiza la hora del array transportes
    const transportesNewHour = transportes.map((e) =>  e.id === id ? {...e, hora: ev.target.value} : e )
    setTransportes(transportesNewHour)
    
    // se determina si un elemento de selectedServices esta contenido en el array transportes,
    // de ser asi retorna un nuevo array qe incliye el id del servicio + hora seleccionada
    let selectedTransp = transportes.map(e => selectedServices.includes(e.id) ? {'id':e.id,'hora': e.hora} :null)
    
    // seteo de hora + id_servicio_transporte (sacando los nulls)
    setServiceInfo(selectedTransp.filter(e => e !== null))
  }

  return (
    <Modal className='d-flex align-items-center' show={showModalTransp} 
                onHide={handleCloseModal}
                backdrop="static"
                >
            <Modal.Header closeButton>
              <Modal.Title>Selección Servicios Extra</Modal.Title>
            </Modal.Header>
            
            <div className="mx-3 justify-content-center aligns-items-center  px-2 py-3">
                {transportes.map((e) => (
                  
                  <Form key={e.id} className='row mb-1'>
                    <Form.Check
                        className='col-8'  
                        type='checkbox' 
                        label={`${e.id}) ${e.name}, $${e.price}`}
                        value={e.id}
                        name={e.name}
                        onChange={(x)=>handleChangeCheckbox(x,e)}
                        checked={selectedServices.includes(e.id)}
                        id={e.price}
                    />
                    
                    <div className='col-4' >
                      <input 
                          className=''  
                          placeholder='indique hora'
                          id={e.id}
                          value ={e.hora}
                          onChange={(ev) => handleHourChange(ev,e.id)}
                          type='time'
                      />
                   </div>
                  </Form>
                  
                ))}

            </div>  
            <Modal.Footer>
             <Button variant="primary" onClick={handleCloseModal}>
                Seleccionar
              </Button>
            </Modal.Footer>
    </Modal>
  )
}