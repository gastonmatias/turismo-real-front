import React, { useState, useEffect } from 'react';

import getDeptos from '../../../services/getDeptos';

import DeptoListItem from '../deptoListItem/DeptoListItem'
//import { getDeptos } from '../../../services/arrayGetDeptoList'

import './deptoList.css'

const DeptoList = () => {

  useEffect(() => {
    listarDeptos()
  }, []);

  const [deptos, setDeptos] = useState([]);

  const listarDeptos = async() => {
    const resp = await getDeptos()
    setDeptos(resp)
  }
  
    return (
    
    <div className="">

        {deptos.map((depto) => <DeptoListItem key={depto.id}{...depto}/>)}

    </div>    
  )
}

export default DeptoList