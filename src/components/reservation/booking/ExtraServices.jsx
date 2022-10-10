import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { BsClipboardCheck } from "react-icons/bs";
import { MdEmojiTransportation,MdOutlineNordicWalking } from "react-icons/md";

import getExtraServices from '../../../services/getExtraServices';

const ExtraServices = ({setSelectedServices,selectedServices,setAmountServices,amountServices}) => {
  
    useEffect(() => {
        getServices()
      }, []);
    
    const [services, setServices] = useState([]);
    const [servicesNames, setServicesNames] = useState([]);
    const [showModal, setShowModal] = useState(false);
    
    const getServices = async() => {
      const resp = await getExtraServices()
      setServices(resp)  
    }

    const handleSelect = () => {
      setShowModal(true)
    }
    const handleCloseModal = () => setShowModal(false);
    
    const handleChangeCheckbox = (e) => {
      
      if(e.currentTarget.checked){
          setSelectedServices([...selectedServices,Number(e.target.value)])
          setServicesNames([...servicesNames,e.target.name])         
          setAmountServices([...amountServices,Number(e.target.id)])
        }

      if(!e.currentTarget.checked) {
          setSelectedServices(selectedServices.filter((x) => x !== Number(e.target.value)))
          setServicesNames(servicesNames.filter((x) => x !== e.target.name))     
          setAmountServices(amountServices.filter((x) => x !== Number(e.target.id)))     
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
                        checked={selectedServices.includes(e.id)}
                        id={e.price}
                    />
                ))}
            </div>       
            <Modal.Footer>
             <Button variant="primary" onClick={handleCloseModal}>
                Seleccionar
              </Button>
            </Modal.Footer>
        </Modal>

        }{/* //! FIN modal */}
      
      </Form.Group>
       
    </>
  )
}

export default ExtraServices