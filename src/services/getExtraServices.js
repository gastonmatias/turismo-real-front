import { url_django } from "../env";

const getExtraServices = async () => {
  const url = `${url_django}/api_web/servicios_extra/`;

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
      return console.log("Hubo un error al obtener servicios_extra");
    }

    const result = data.services;

    return result;

  } catch (err) {
    console.log("[getExtraServices] Error : ", err);
  }
};

export default getExtraServices;
