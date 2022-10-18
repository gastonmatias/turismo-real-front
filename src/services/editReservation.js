import { url_django } from "../env";

const editReservation = async (id_reservation, qty_customers) => {
  
  const url = `${url_django}/api_web/editar_reserva/${id_reservation}`;

  const body ={
    qty_customers
  }

  const opt = {
      method: "PUT",
      body: JSON.stringify(body)
  };
  
  try {
      const resp = await fetch(url, opt);
  
      if (!resp.status === 200) {
        return {};
      }
  
      const data = await resp.json();
  
      if (data === null || data === undefined) {
        return console.log("Hubo un error al editar la reservacion");
      }

      console.log(data)
  
      return data;
  
    } catch (err) {
      console.log("[editReservation] Error : ", err);
    }
};
  
  export default editReservation;
  