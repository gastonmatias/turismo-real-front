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
    qty_rooms,
    department_image,
    department_type
  } = props

  return (
    
    <div className="row my-2 mx-2 border rounded">
      <div className='col-md-6 col-sm-12' >
        <img className="img-fluid" src={`data:image/jpg;base64,${department_image}`} alt="image depto"/>
      </div>

      <div className="col-md-6 col-sm-12 mt-5">
        <h5 className="display-6">{commune}</h5>
        <h4 className="">Región de {region}</h4>
        <p className="">Tipo: {department_type}</p>
        <p className=""><small className="text-muted">Habitaciones: {qty_rooms}</small></p>
        
        <Link to={`/depto/${id}`}
              className='btn btn-outline-primary mb-3'
              >
            ...Ver Más
        </Link>
      </div>
    </div>
  )
}

export default DeptoListItem