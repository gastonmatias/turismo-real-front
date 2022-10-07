import React, { useState, useEffect,useContext } from 'react';

import TurismorealContext from '../../../context/TurismorealContext';
import getDeptos from '../../../services/getDeptos';
import Loader from '../../UI/Spinner';
import DeptoListItem from '../deptoListItem/DeptoListItem'
//import { getDeptos } from '../../../services/arrayGetDeptoList'
import './deptoList.css'

const DeptoList = () => {

  useEffect(() => {
    listarDeptos()
  }, []);

  const {isLoading, setIsLoading} = useContext(TurismorealContext);
  //const [isLoading, setIsLoading] = useState(false);
  const [deptos, setDeptos] = useState([]);

  const listarDeptos = async() => {
    setIsLoading(true)
    const resp = await getDeptos()
    setDeptos(resp)
    setIsLoading(false)
  }
  
    return (
    <>
      { isLoading ?  <Loader type={'full'} variant={'light'} animation={'border'}/> 
      :
        <div className="">
            {deptos.map((depto) => <DeptoListItem key={depto.id}{...depto}/>)}
        </div>    
      
      }
    </>
  )
}

export default DeptoList