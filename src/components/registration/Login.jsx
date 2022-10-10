import React from 'react'
import { useContext } from 'react'
import TurismorealContext from '../../context/TurismorealContext'

import './registration.css'

const Login = () => {
  
  const {loginUser} = useContext(TurismorealContext)

  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  
  return (

    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Inicio de Sesión</h3>
          <div className="text-center">
            No posees una cuenta?{" "}
            <a className="link-primary" href='/registro' >
              Regístrate aquí
            </a>
          </div>
          <div className="form-group mt-3">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              htmlFor="username"
              id="username"
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              htmlFor="password"
              id="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Volver al <a className='text-primary' href="/">Home</a>
          </p>
        </div>
      </form>
    </div>

  )
}

export default Login