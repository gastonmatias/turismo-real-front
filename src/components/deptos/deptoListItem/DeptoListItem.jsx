import React from 'react'
import {Link} from 'react-router-dom'

const DeptoListItem = (props) => {

  const {
    id,
    status,
    price,
    region,
    commune,
    adress,
    short_description,
    long_description,
    capacity,
    qty_rooms,
    img
  } = props

  return (
   /*  <div className="card">
    
      <img className="card-img-top img-fluid" src={img} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{ciudad}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text"><small className="text-muted">capacidad: {capacidad}</small></p>
      </div>
    
    </div> */

    <div className="row my-2 mx-2 border">

      <div className='col-md-6 col-sm-12' >
      <img className="img-fluid" src={img} alt="Card image cap"/>
      </div>

      <div className="col-md-6 col-sm-12 mt-5">
        <h5 className="display-6">{commune}</h5>
        <h4 className="">Región de {region}</h4>
        <p className="">Tipo: {short_description}</p>
        <p className=""><small className="text-muted">capacidad: {capacity}</small></p>
        <Link to={`/depto/${id}`}
              className='btn btn-outline-primary'
              >
            ...Ver Más </Link>
      
      </div>
  
    </div>
  )
}

export default DeptoListItem