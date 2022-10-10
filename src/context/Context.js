import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import TurismorealContext from "./TurismorealContext";
import {toast} from 'react-toastify'

export const TurismorealProvider = ({ children }) => {
  
  const [authTokens, setAuthTokens] = useState(() =>
  localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens"))
    : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  
  // para manejo de token
  const [loading, setLoading] = useState(true);

  // para manejo de spinner
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    const response = await fetch("http://127.0.0.1:8000/api_web/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      toast.success('Login exitoso!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate("/");
    } else {
      toast.error('Oops! Crendeciales incorrectas"', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  
  const registerUser = async (username,nombre,apellido,email, pass1, pass2) => {
    
    if(username===''||nombre===''||apellido===''||email===''|| pass1===''|| pass2===''){
      return alert('complete todo caballero')
    }

    const response = await fetch("http://127.0.0.1:8000/api_web/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        first_name: nombre,
        last_name: apellido ,
        email,
        password: pass1,
        password2: pass2
      })
    });

    if (response.status === 201) {
      await loginUser(username,pass1)
      toast.success('Cuenta creada exitosamente!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate("/");
    } else {
      toast.error('Ha ocurrido un error, por favor intente nuevamente', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    toast('Hasta pronto!', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    navigate("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
    isLoading, 
    setIsLoading
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <TurismorealContext.Provider value={contextData}>
      {loading ? null : children}
    </TurismorealContext.Provider>
  );
};