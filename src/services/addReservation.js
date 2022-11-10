import { url_django } from "../env";

const addReservation = async (
  total_amount,
  reservation_amount,
  qty_customers,
  check_in,
  check_out,
  user_id,
  department_id,
  selectedServices,
  servicesInfo
  ) => {
  
  const url = `${url_django}/api_web/reserve/`;

  let arrayServices

  // si usuario no elige ningun servicio extra en form, setearlo como 0 (equivalente a NA en bd)
  // de lo contrario, setearlo como el array qe venga
  if (selectedServices.length > 0) {
    arrayServices = selectedServices
  }else {
    arrayServices = [0]
  }

  const body ={
    total_amount,
    reservation_amount,
    qty_customers,
    check_in,
    check_out,
    user_id,
    department_id,
    selectedServices: arrayServices,
    servicesInfo
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

      console.log(data)
  
      return data;
  
    } catch (err) {
      console.log("[addReservation] Error : ", err);
    }
};
  
  export default addReservation;
  