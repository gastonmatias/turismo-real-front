import {Routes,Route} from "react-router-dom"
import DeptoList from "../components/deptos/deptoList/DeptoList"
import Home from "../components/home/Home"
import DeptoDetail from "../components/deptos/deptoDetail/DeptoDetail"
import Header from "../components/UI/Header"
import Booking from "../components/reservation/booking/Booking"
import BookingList from "../components/reservation/bookingList/BookingList"
import BookingDetail from "../components/reservation/bookingList/BookingDetail"




export const DashboardRoutes = () => {
  
  return (
    <>
        
        <Header/>  
        
          <Routes>
              {/* en LoginScreen NO se verán estas rutas */}
              <Route path="" element={<Home/>} />
              <Route path="departamentos" element={<DeptoList/>} />
              <Route path="depto/:idDepto" element={<DeptoDetail/>} />
              <Route path="nueva-reserva" element={<Booking/>}/>
              <Route path="mis-reservas" element={<BookingList/>}/>
              <Route path="mis-reservas/:idReserva" element={<BookingDetail/>}/>

          </Routes>
      
    </>
  )
}
