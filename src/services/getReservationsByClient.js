import { url_django } from "../env";

const getReservationsByClientId = async (id) => {
  
    const url = `${url_django}/api_web/reservas/${id}`;
  
    const opt = {
      method: "GET"
    };
  
    try {
      const resp = await fetch(url, opt);
  
      if (!resp.status === 200) {
        return {};
      }
  
      const data = await resp.json();
  
      if (data === null || data === undefined) {
        return console.log("Hubo un error al obtener reservations");
      }
  
      const result = data.services;
  
      return result;
  
    } catch (err) {
      console.log("[getReservationsByClient] Error : ", err);
    }
};
  
  export default getReservationsByClientId;
  