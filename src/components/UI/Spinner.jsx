import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

import './spinner.css'

const Loader = ({type,variant,animation}) => {
  return (
    <div className={type}>
        <Spinner animation={animation} role="status" variant={variant}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  )
}

export default Loader