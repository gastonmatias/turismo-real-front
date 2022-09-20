import {Routes,Route, useNavigate} from "react-router-dom"
import DeptoList from "../components/deptos/deptoList/DeptoList"
import Home from "../components/home/Home"
//import Header from "../components/UI/Header"
import TurismorealContext from "../context/TurismorealContext"
import { useContext } from "react"
import DeptoDetail from "../components/deptos/deptoDetail/DeptoDetail"
import Header from "../components/UI/Header"

export const DashboardRoutes = () => {
  
  let { user } = useContext(TurismorealContext);
  const navigate = useNavigate();
  
  return (
    <>
        
        <Header/>  
          <Routes>
              {/* en LoginScreen NO se verán estas rutas */}
              <Route path="" element={<Home/>} />
              <Route path="departamentos" element={<DeptoList/>} />
              <Route path="depto/:id" element={<DeptoDetail/>} />
              <Route path="mis-reservas"/>

          </Routes>
      
    </>
  )
}
