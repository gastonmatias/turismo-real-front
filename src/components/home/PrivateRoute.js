/* All this code does is that it checks whether user is present or not. 
If the user is present, then it will pass all the props to the child component and 
that route will be rendered. Otherwise, it will redirect to the login page. */

import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import TurismorealContext from "../../context/TurismorealContext";

const PrivateRoute = ({ children, ...rest }) => {
  
    let { user } = useContext(TurismorealContext);
  
  return <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>;

};

export default PrivateRoute;