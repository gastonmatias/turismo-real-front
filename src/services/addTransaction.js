import { url_django } from "../env";

const addTransaction = async (reservation_id,amount) => {
  
  const url = `${url_django}/api_web/add_transaction/`;

  const status = 'ap'; //aprobado x default
  const transaction_type = 1; // 1: reservation

  const body ={
    reservation_id,
    amount,
    status,
    transaction_type
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
        return console.log("Hubo un error al crear la Transaction");
      }

      return data;
  
    } catch (err) {
      console.log("[addTransaction] Error : ", err);
    }
};
  
  export default addTransaction;
  