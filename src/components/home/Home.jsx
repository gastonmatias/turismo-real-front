import React, { useContext } from 'react'
import TurismorealContext from '../../context/TurismorealContext'
import { getDeptos } from '../../services/arrayGetDeptoList'
import {CarouselHome} from './CarouselHome'

const Home = () => {
  
  const {user, logoutUser} = useContext(TurismorealContext)

  const deptos = getDeptos()

  //console.log(deptos);

  const test = deptos.find((e) => e.id === 1)
  console.log(test)
  
  return (
   
    <div className='container'>
        
        <div className='my-2'>
            {user ? 
              <h1 className='h1 text-center display-4'>Bienvenido {user.username} !</h1>
              :
              <h1 className='h1 text-center display-4'>Bienvenidos!</h1>  
            }
        </div>
   
        <CarouselHome/>

        <div className='py-2'>
          <h2 className='display-4 text-center py-2'>Testimonios</h2>
        </div>
        
    </div>
  )
}

export default Home