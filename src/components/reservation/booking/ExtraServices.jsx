import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { BsClipboardCheck } from "react-icons/bs";
import { MdEmojiTransportation,MdOutlineNordicWalking } from "react-icons/md";

import getExtraServices from '../../../services/getExtraServices';
import { ModalTransp } from './ModalTransp';
import { ModalTours } from './ModalTours';

const ExtraServices = ({setSelectedServices,selectedServices,setAmountServices,amountServices,setServiceInfo, serviceInfo}) => {
  
    useEffect(() => {
        getServices()
      }, []);
    
    // const [services, setServices] = useState([]); // llamada a bd
    const [transportes, setTransportes] = useState([]); // llamada a bd
    const [tours, setTours] = useState([]);// llamada a bd
    const [servicesNames, setServicesNames] = useState([]); // para imprimir seleccionados en dom
    const [showModal, setShowModal] = useState(false);
    const [showModalTours, setShowModalTours] = useState(false);
    const [showModalTransp, setShowModalTransp] = useState(false);
    
    const getServices = async() => {
      // obtener todos los servivios ext desde bd
      const resp = await getExtraServices()

      // separar los servicios extra en tours y trans
      let tours = resp.filter((e) => e.service_type_id === 2 )
      let transp = resp.filter((e) => e.service_type_id === 3 )

      // a trans agregarles hora, sera util en componente modalTrans
      let transConHora = transp.map((e) => {return {...e,'hora':'00:00'}})
      
      // setear tours y transportes
      setTransportes(transConHora)
      setTours(tours)
    }

    const handleSelect = (e) => {
      
      if (e.target.id==='modal-transp') {
        setShowModalTransp(true)
      }
      if (e.target.id==='modal-tours') {
        setShowModalTours(true)
      }      
    }
    
    const handleCloseModal = () => {
      setShowModalTransp(false)
      setShowModalTours(false)
      setShowModal(false);
    }
    
    const handleChangeCheckbox = (ev,el) => {
      
      if(ev.currentTarget.checked){
          setSelectedServices([...selectedServices,Number(ev.target.value)])
          setServicesNames([...servicesNames,ev.target.name])         
          setAmountServices([...amountServices,Number(ev.target.id)])

          setServiceInfo([
            ...serviceInfo,
            { 'id': el.id,
              'hora':el.hora}
          ])
        }

      if(!ev.currentTarget.checked) {
          setSelectedServices(selectedServices.filter((x) => x !== Number(ev.target.value)))
          setServicesNames(servicesNames.filter((x) => x !== ev.target.name))     
          setAmountServices(amountServices.filter((x) => x !== Number(ev.target.id))) 
          
          setServiceInfo(serviceInfo.filter(x => x.id !== Number(el.id)))
      }      
    }

    return (
    <>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='d-block'>
          <MdEmojiTransportation/>  
             Servicios Extra? 
          <MdOutlineNordicWalking/>
        </Form.Label>

        <Form.Label className='btn btn-outline-primary me-1'onClick={handleSelect} id='modal-tours'>
            Tours?
          <MdOutlineNordicWalking/>
        </Form.Label>

        <Form.Label className='btn btn-outline-primary'onClick={handleSelect} id='modal-transp'>
          <MdEmojiTransportation/>  
            Transporte?
        </Form.Label>
       
        {/* //! INIT MODAL TOURS */}
        {
          showModalTours &&
          <ModalTours   handleCloseModal={handleCloseModal} 
                        showModalTours={showModalTours}
                        handleChangeCheckbox={handleChangeCheckbox}
                        tours={tours}
                        selectedServices={selectedServices}
          />
        }{/* //! FIN MODAL Tours */}

        
        {/* //! INIT MODAL TRANSPORTE */}
        {
          showModalTransp &&
          <ModalTransp  handleCloseModal={handleCloseModal} 
                        showModalTransp={showModalTransp}
                        handleChangeCheckbox={handleChangeCheckbox}
                        transportes={transportes}
                        selectedServices={selectedServices}
                        serviceInfo={serviceInfo}
                        setServiceInfo={setServiceInfo}
                        setTransportes={setTransportes}

          />
        }{/* //! FIN MODAL TRANSPORTE */}

        {/* imprime servicios seleccionados en DOM */}
        <div>
          {JSON.stringify(serviceInfo)}
          {servicesNames.map((e) => 
             (
              <ul className='my-1' key={e}>
                <BsClipboardCheck/> {e}
              </ul>
            )
          )}
        </div>
      
      </Form.Group>
       
    </>
  )
}

export default ExtraServices