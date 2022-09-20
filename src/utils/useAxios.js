/* Custom hook qe permite resolver problema de token de usuario No valido
ANTES de mandar alguna solicitud al servidor. 
(intercepta token de la request y aplica refresh en caso de NO ser valido) */

import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import TurismorealContext from "../context/TurismorealContext";

// ! CAMBIAR X URL DE LA API REST DE DJANGO!!
const baseURL = "http://127.0.0.1:8000/api";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(TurismorealContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` }
  });

  axiosInstance.interceptors.request.use(async req => {
    const user = jwt_decode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req; // ! si el token es VALIDO, entonces return altoke

    // ! en caso de token NO valido, generar refresh del mismo
    const response = await axios.post(`${baseURL}/token/refresh/`, {
      refresh: authTokens.refresh
    });

    localStorage.setItem("authTokens", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;