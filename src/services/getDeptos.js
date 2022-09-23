const getDeptos = async () => {
  
  const url = `http://localhost:8000/api/deptos/`;

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
      return console.log("Hubo un error al obtener departamentos");
    }

    const result = data.deptos;

    return result;

  } catch (err) {
    console.log("[getDeptos] Error : ", err);
  }
};

export default getDeptos;
