import React, { useState, useEffect} from 'react';
import { useParams} from "react-router-dom"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useMemo } from 'react';
import CrearReserva from '../../reserva/crearReserva/CrearReserva';
import getDeptoById from '../../../services/getDeptoById';


const DeptoDetail = () => {

  const {idDepto} = useParams()
  //console.log('idDepto: ',idDepto);
  
  useEffect(() => {
    getDeptoDetail(idDepto)
  }, []);

  const [depto, setDepto] = useState([]);
  const [showFormReserva, setShowFormReserva] = useState(false);

  //const depa = useMemo(() => getDeptoById(idDepto), [idDepto])
  //setDepto(depa)
  
  const getDeptoDetail =  async(idDepto) => {
    const deptoDetail = await getDeptoById(idDepto)
    setDepto(deptoDetail)
  }

  const handleClickForm = () => {
    setShowFormReserva(!showFormReserva)
  }

    
  return (
    <div className='container'>

    {
      !showFormReserva ?
    
      <Card >
        <Card.Img variant="top" className='img img-fluid' src={depto.link_img} />
        <Card.Body>
          <Card.Title className='display-5'>{depto.commune}</Card.Title>
          <Card.Text>
            {depto.long_description}
          </Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item><b>Precio:       </b> ${depto.price}</ListGroup.Item>
          <ListGroup.Item><b>Región:       </b>  {depto.region} </ListGroup.Item>
          <ListGroup.Item><b>Direción:     </b>  {depto.address} </ListGroup.Item>
          <ListGroup.Item><b>Tipo:         </b>  {depto.short_description} </ListGroup.Item>
          <ListGroup.Item><b>Capacidad:    </b>  {depto.capacity} </ListGroup.Item>
          <ListGroup.Item><b>Habitaciones: </b>  {depto.qty_rooms} </ListGroup.Item>
        </ListGroup>

        <Card.Body>
          <button onClick={handleClickForm} className='btn btn-primary mx-2 px-5' href="#">Reservar!</button>
          <button className='btn btn-success mx-2 px-5' href="#">Ver Disponibilidad</button>
        </Card.Body>
      </Card>
    :
      <CrearReserva handleClickForm={handleClickForm}/>
    
    }
        
    </div>
  )
}

export default DeptoDetail