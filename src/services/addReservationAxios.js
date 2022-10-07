import axios from "axios";
import { url_django } from "../env";

const addReservationAxios = async (
  total_amount,
  reservation_amount,
  qty_customers,
  check_in,
  check_out,
  user_id,
  department_id) => {

    const url = `${url_django}/api_web/reserve/`;
    
    const body ={
      total_amount,
      reservation_amount,
      qty_customers,
      check_in,
      check_out,
      user_id,
      department_id
    }

    axios
    .post(url,{
      body
    })
    .then((response) =>{
      console.log(response);
    })
    .catch((err)=>{
      console.log('error con axios: ',err);
    })
  
};
  
  export default addReservationAxios;
  