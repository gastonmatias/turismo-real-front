import React, { useContext } from 'react'
import TurismorealContext from '../../context/TurismorealContext'
import DeptoList from '../deptos/deptoList/DeptoList'
import {CarouselDeptos} from './Carousel'

const Home = () => {
  
  const {user, logoutUser} = useContext(TurismorealContext)
  
  return (
   
    <div className='container'>
        
        <div className='my-2'>
            {user ? 
              <h1 className='h1 text-center display-4'>Bienvenido {user.username} !</h1>
              :
              <h1 className='h1 text-center display-4'>Bienvenidos!</h1>  
            }
        </div>

   
        <CarouselDeptos/>

        

        <div className='py-2'>
        <h2 className='display-4 text-center py-2'>Nuestros Departamentos</h2>
        <DeptoList/>
        </div>


    </div>
  )
}

export default Home