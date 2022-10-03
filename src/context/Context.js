import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import TurismorealContext from "./TurismorealContext";

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
  const [loading, setLoading] = useState(true);

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
      navigate("/");
    } else {
      alert("Oops! Crendeciales incorrectas");
    }
  };
  
  const registerUser = async (username,nombre,apellido,email, pass1, pass2) => {
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
      navigate("/");
    } else {
      alert("Ha ocurrido un error! Intenta denuevo más tarde");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser
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