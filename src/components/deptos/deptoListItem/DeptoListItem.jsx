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
    link_img
  } = props

  return (

    <div className="row my-2 mx-2 border">

      <div className='col-md-6 col-sm-12' >
      <img className="img-fluid" src={link_img} alt="Card image cap"/>
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