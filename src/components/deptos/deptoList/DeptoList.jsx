import React from 'react'

import './deptoList.css'
import { getDeptos } from './arrayDeptos'
import DeptoListItem from '../deptoListItem/DeptoListItem'

const DeptoList = () => {
  
  const deptos = getDeptos()
  
    return (
    
    
    <div className="">

        {deptos.map((depto) => <DeptoListItem key={depto.id}{...depto}/>)}


    </div>
    
  )
}

export default DeptoList