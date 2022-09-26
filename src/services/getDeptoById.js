const getDeptoById = async (id) => {
  
    const url = `http://127.0.0.1:8000/api_web/deptos/${id}`;
  
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
        return console.log("Hubo un error al obtener departamento");
      }
  
      const result = data.deptos[0];
  
      return result;
  
    } catch (err) {
      console.log("[getDeptoById] Error : ", err);
    }
  };
  
  export default getDeptoById;
  