import { url_django } from "../env";

const getServicesByReservation = async (id) => {
  
    const url = `${url_django}/api_web/services_by_reservation/${id}`;
  
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
        return console.log("Hubo un error al obtener los servicios de la reserva");
      }
  
      const servicios = data.services.map((e) => e.servicio_extra)

      return servicios;
  
    } catch (err) {
      console.log("[getServicesByReservation] Error : ", err);
    }
};
  
  export default getServicesByReservation;
  