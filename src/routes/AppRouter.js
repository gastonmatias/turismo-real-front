import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/registration/Login";
import Register from "../components/registration/Register";
import Payment from "../components/reservation/payment/Payment";
import { TurismorealProvider } from "../context/Context";
import { DashboardRoutes } from "./Dashboard";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AppRouter = () => {
  
  return (
    <BrowserRouter>
      <TurismorealProvider>
      <ToastContainer/>
      
      <Routes>
      
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Register />} />
        <Route exact path="/*" element={<DashboardRoutes />} />  
        <Route path="/payment" element={<Payment/>}/>
      </Routes>

      </TurismorealProvider>
    </BrowserRouter>
  );
};
export default AppRouter;
