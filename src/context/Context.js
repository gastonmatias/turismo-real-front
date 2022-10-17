import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import TurismorealContext from "./TurismorealContext";
import alertToast from "../components/UI/alertToast";
import { url_django } from "../env";

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
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    const response = await fetch(`${url_django}/api_web/token/`, {
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
      alertToast('success','Login exitoso!','bottom-center','dark')
      navigate("/");
    } else {
      alertToast('error','Oops! Crendeciales incorrectas',"bottom-center",'dark')
    }
  };
  
  const registerUser = async (username,nombre,apellido,email, pass1, pass2) => {
    
    if(username===''||nombre===''||apellido===''||email===''|| pass1===''|| pass2===''){
      return 
    }

    const response = await fetch(`${url_django}/api_web/register/`, {
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
      alertToast('success','Cuenta creada exitosamente!','bottom-center','dark')
      navigate("/");
    } else {
      alertToast('error','Ha ocurrido un error, por favor intente nuevamente','bottom-center','dark')
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    alertToast('default','Hasta Pronto!','bottom-center','dark')
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