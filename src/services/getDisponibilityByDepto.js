import { url_django } from "../env";

const getDisponibilityByDepto = async (id) => {
  
    const url = `${url_django}/api_web/disponibilidad_depto/${id}`;
  
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
        return console.log("Hubo un error al obtener disponibilidad del departamento");
      }
  
      const result = data.fechasNoDisponibles;
  
      return result;
  
    } catch (err) {
      console.log("[getDisponibilityByDepto] Error : ", err);
    }
};
  
  export default getDisponibilityByDepto;
  