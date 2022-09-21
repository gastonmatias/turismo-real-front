import React from 'react'

import DeptoListItem from '../deptoListItem/DeptoListItem'
import { getDeptos } from '../../../services/arrayGetDeptoList'

import './deptoList.css'

const DeptoList = () => {
  
  const deptos = getDeptos()
  
    return (
    
    <div className="">

        {deptos.map((depto) => <DeptoListItem key={depto.id}{...depto}/>)}

    </div>    
  )
}

export default DeptoList