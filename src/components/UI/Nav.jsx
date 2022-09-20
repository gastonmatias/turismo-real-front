import React from 'react'
import { useContext } from 'react';
import TurismorealContext from '../../context/TurismorealContext';

import logoTR from './../../assets/images/icon_png.png';

import './header.css'

const Header = () => {
  
  const {user, logoutUser} = useContext(TurismorealContext)
  
  return (

    <nav className="navbar navbar-dark navbar-expand-md bg-dark ">
        <div className="container-fluid border border-dark">
            
            {/* LOGO */}
            <a className="navbar-brand" href="/">
                <img src={logoTR} alt="tr"  width="100" height="24" 
                className="d-inline-block align-text-top img-fluid rounded"/>
            </a>

            {/* btn sandwich */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* INIT elementos nav */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/departamentos">Departamentos</a>
                    </li>
                </ul>
                
               
            </div>{/* FIN elementos nav 1*/}

            {/* INIT nav 2 */}
            <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
            {user ?
                /* INIT usuario logueado */
                (  
                  <ul className='navbar-nav'>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">Mis Reservas</a>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link btn btn-secondary" 
                        aria-current="page" onClick={logoutUser}>
                        Cerrar Sesión
                        </ button>
                    </li>
                  </ul>
                )/* FIN usuario logueado */
                :
                (
                  <>
                  {/* INIT usuario NO logueado */}
                  <ul className='navbar-nav d-flex justify-content-end '>
                    <li className="nav-item justify-content-end">
                      <a className="nav-link " aria-current="page" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" href="/registro">Crear Cuenta</a>
                    </li>
                  </ul>{/* FIN usuario NO logueado */}
                </>)
                }
            </div>
        </div>
    </nav>
  )
}

export default Header