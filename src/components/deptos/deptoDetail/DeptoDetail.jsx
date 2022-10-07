import React, { useState, useEffect, useContext} from 'react';
import { useParams} from "react-router-dom"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import CrearReserva from '../../reserva/crearReserva/CrearReserva';
import getDeptoById from '../../../services/getDeptoById';
import Loader from '../../UI/Spinner';
import TurismorealContext from '../../../context/TurismorealContext';


const DeptoDetail = () => {

  useEffect(() => {
    getDeptoDetail(idDepto)
  }, []);
  
  const {idDepto} = useParams()
  const {isLoading, setIsLoading} = useContext(TurismorealContext);
  
  const [depto, setDepto] = useState([]);
  const [showFormReserva, setShowFormReserva] = useState(false);

  //const depa = useMemo(() => getDeptoById(idDepto), [idDepto])
  //setDepto(depa)
  
  const getDeptoDetail =  async(idDepto) => {
    setIsLoading(true)
    const deptoDetail = await getDeptoById(idDepto)
    setDepto(deptoDetail)
    setIsLoading(false)
  }

  const handleClickForm = () => {
    setShowFormReserva(!showFormReserva)
  }

    
  return (
    <>
    { isLoading  &&  <Loader type={'simple'} variant={'dark'} animation={'grow'}/>}
    
    {!isLoading &&
    
      <div className='container'>
        {!showFormReserva &&
          <Card >
            <Card.Img variant="top" className='img img-fluid' src={`data:image/jpeg;base64,${depto.department_image}`} />
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
              <ListGroup.Item><b>Habitaciones: </b>  {depto.qty_rooms} </ListGroup.Item>
            </ListGroup>

            <Card.Body>
              <button onClick={handleClickForm} className='btn btn-primary mx-2 px-5' href="#">Reservar!</button>
              <button className='btn btn-success mx-2 px-5' href="#">Ver Disponibilidad</button>
            </Card.Body>
          </Card>
        }

        {showFormReserva && 
          <CrearReserva handleClickForm={handleClickForm} 
                        capacidad={(depto.qty_rooms)*2} 
                        deptoPrice={depto.price}
          />
        }  
      </div>
    }
    </>
  )
}

export default DeptoDetail