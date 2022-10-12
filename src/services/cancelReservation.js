import { url_django } from "../env";

const cancelReservation = async (id) => {
  
    const url = `${url_django}/api_web/cancelar_reserva/${id}`;
  
    const opt = {
      method: "PUT"
    };
  
    try {
      const resp = await fetch(url, opt);
  
      if (!resp.status === 200) {
        return {};
      }
  
      const data = await resp.json();
  
      if (data === null || data === undefined) {
        return console.log("Hubo un error al cancelar la reserva");
      }
  
      return data;
  
    } catch (err) {
      console.log("[cancelReservation] Error : ", err);
    }
};
  
  export default cancelReservation;
  