import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import { BsClipboardCheck } from "react-icons/bs";
import { MdEmojiTransportation,MdOutlineNordicWalking,MdFamilyRestroom } from "react-icons/md";

import getExtraServices from '../../../services/getExtraServices';

const ExtraServices = ({setSelectedServices,selectedServices}) => {
  
    useEffect(() => {
        getServices()
      }, []);
    
    const [services, setServices] = useState([]);
    const [servicesNames, setServicesNames] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [checked, setChecked] = useState(false);
    
    const getServices = async() => {
      const resp = await getExtraServices()
      setServices(resp)  
    }

    const handleSelect = () => {
      setSelectedServices([])
      setServicesNames([])
      setShowModal(true)
    }
    const handleCloseModal = () => setShowModal(false);
    const handleClickServices = () => setShowModal(false)
    
    const handleChangeCheckbox = (e) => {
      
      if(e.currentTarget.checked){
          setSelectedServices([...selectedServices,e.target.value])
          setServicesNames([...servicesNames,e.target.name])
          setChecked(e.target.checked)              
        }

        if(!e.currentTarget.checked) {
            setSelectedServices(selectedServices.filter((x) => x !== e.target.value))
            setServicesNames(servicesNames.filter((x) => x !== e.target.name))
            setChecked(e.currentTarget.checked)              
        }
    }
    
    return (
    <>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='btn btn-outline-primary'onClick={handleSelect}>
          <MdEmojiTransportation/>  
            Servicios Extra?
          <MdOutlineNordicWalking/>
        </Form.Label>
        
        {/* imprime servicios seleccionados en DOM */}
        <div>
          {servicesNames.map((e) => 
             (
              <ul className='my-1' key={e}>
                <BsClipboardCheck/> {e}
              </ul>
            )
          )}
        </div>

        
        {/* //! INIT modal */}
        {showModal && 

        <Modal className='d-flex align-items-center' show={showModal} 
                onHide={handleCloseModal}
                backdrop="static"
                >
            <Modal.Header closeButton>
              <Modal.Title>Selección Servicios Extra</Modal.Title>
            </Modal.Header>
            
            <div className="mx-3 justify-content-center aligns-items-center  px-2 py-3">
                {services.map((e) => (
                    <Form.Check  
                        type='checkbox' 
                        label={`${e.id}) ${e.name}, $${e.price}`}
                        value={e.id}
                        name={e.name}
                        key={e.id}
                        onChange={handleChangeCheckbox}
                    />
                ))}
            </div>       
            <Modal.Footer>
             <Button variant="primary" onClick={handleClickServices}>
                Seleccionar
              </Button>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </Modal.Footer>
        </Modal>

        }{/* //! FIN modal */}
      
      </Form.Group>
       
    </>
  )
}

export default ExtraServices