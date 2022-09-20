import React, { useState } from 'react';
import { useContext } from 'react';
import TurismorealContext from '../../context/TurismorealContext';
import './registration.css'

const Register = () => {
  
  const {registerUser} = useContext(TurismorealContext)

  const [username, setUsername] = useState();
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState();
  const [pass1, setPass1] = useState();
  const [pass2, setPass2] = useState();


  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePass1Change = (e) => {
    setPass1(e.target.value)
  }

  const handlePass2Change = (e) => {
    setPass2(e.target.value)
  }
  
  const handleNombreChange = (e) => {
    setNombre(e.target.value)
  }

  const handleApellidoChange = (e) => {
    setApellido(e.target.value)
  }

  const handleRegisterUser = (e) => {
    e.preventDefault()
    registerUser(username, nombre,apellido,email, pass1,pass2)
  }
  
  return (
    <div className="Auth-form-container">
      
      <form className="Auth-form" onSubmit={handleRegisterUser}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registro de Usuario</h3>
          <div className="text-center">
            Ya posees una cuenta?{" "}
            <a className="link-primary" href='/login' >
              Inicia Sesión
            </a>
          </div>
          
          <div className="form-group mt-3">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="ej: principe"
              onChange={handleUsernameChange}
            />
          </div>

          <div className="form-group mt-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="ej: Charles"
              onChange={handleNombreChange}
            />
          </div>

          <div className="form-group mt-3">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="ej: Aranguiz"
              onChange={handleApellidoChange}
            />
          </div>      

          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="ej: principederenca@gmail.com"
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handlePass1Change}
            />
          </div>

          <div className="form-group mt-3">
            <label>Confirme su Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handlePass2Change}
            />
          </div>          

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </div>
          <p className="text-center mt-2">
            Volver al<a href="/"> Home</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
