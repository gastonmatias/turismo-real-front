import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/registration/Login";
import Register from "../components/registration/Register";
import { TurismorealProvider } from "../context/Context";
import TurismorealContext from "../context/TurismorealContext";
import { DashboardRoutes } from "./Dashboard";


const AppRouter = () => {
  
  return (
    <BrowserRouter>
    <TurismorealProvider>
      <Routes>

        
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Register />} />
        <Route exact path="/*" element={<DashboardRoutes />} />  
      
      
      
      
      
      
      
      
      </Routes>
    </TurismorealProvider>
    </BrowserRouter>
  );
};
export default AppRouter;
