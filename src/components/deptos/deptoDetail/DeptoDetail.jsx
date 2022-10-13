import React, { useState, useEffect, useContext} from 'react';
import { useParams} from "react-router-dom"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Booking from '../../reservation/booking/Booking';
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
    
    <div className='container mt-1 mb-3'>
        {!showFormReserva &&
          <>
          <Card >
            <Card.Img variant="top" className='img img-fluid' src={`data:image/jpeg;base64,${depto.department_image}`} />
            <Card.Body>
              <Card.Title className='display-5'>{depto.commune}</Card.Title>
              <Card.Text>
                {depto.department_type}
              </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item><b>Precio:       </b> ${depto.price}</ListGroup.Item>
              <ListGroup.Item><b>Región:       </b>  {depto.region} </ListGroup.Item>
              <ListGroup.Item><b>Direción:     </b>  {depto.address} </ListGroup.Item>
              <ListGroup.Item><b>Descripción:         </b>  {depto.long_description} </ListGroup.Item>
              <ListGroup.Item><b>Habitaciones: </b>  {depto.qty_rooms} </ListGroup.Item>
            </ListGroup>

            {/* <Card.Body> */}
              {/* <button className='btn btn-success mx-2 px-5' href="#">Ver Disponibilidad</button> */}
            {/* </Card.Body> */}
            {/* <div className='d-flex justify-content-center'> */}
            </Card>
            <div className='row mx-1'>
              <button onClick={handleClickForm} 
                      className='btn btn-primary my-2 col-12'>
                Reservar!
              </button>
            </div>
        </>
        }

        {showFormReserva && 
          <Booking handleClickForm={handleClickForm} 
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