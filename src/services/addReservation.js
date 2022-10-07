import { url_django } from "../env";

const addReservation = async (
  total_amount,
  reservation_amount,
  qty_customers,
  check_in,
  check_out,
  user_id,
  department_id,
  selectedServices
  ) => {
  
  const url = `${url_django}/api_web/reserve/`;
  
  const body ={
    total_amount,
    reservation_amount,
    qty_customers,
    check_in,
    check_out,
    user_id,
    department_id,
    selectedServices
  }

  const opt = {
      method: "POST",
      body: JSON.stringify(body)
  };
  
  try {
      const resp = await fetch(url, opt);
  
      if (!resp.status === 200) {
        return {};
      }
  
      const data = await resp.json();
  
      if (data === null || data === undefined) {
        return console.log("Hubo un error al añadir la reservacion");
      }
  
      return data;
  
    } catch (err) {
      console.log("[addReservation] Error : ", err);
    }
};
  
  export default addReservation;
  