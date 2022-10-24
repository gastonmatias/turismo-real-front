import React, { useContext} from 'react'
import TurismorealContext from '../../context/TurismorealContext'
import {CarouselHome} from './CarouselHome'

const Home = () => {

  const {user} = useContext(TurismorealContext)
  
  return (
   
    <div className='container border border-dark' style={{width: '100vh'}}>
        
        <div className='my-2'>
            {user ? 
              <h1 className='h1 text-center display-4'>Bienvenido {user.username} !</h1>
              :
              <h1 className='h1 text-center display-4'>Bienvenidos!</h1>  
            }
        </div>
   
        <CarouselHome/>

        {/* <div className='py-2'>
          <h2 className='display-4 text-center py-2'>Testimonios</h2>
        </div> */}
        
    </div>
  )
}

export default Home