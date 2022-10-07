
export const dateFormater = (dateIn) => {(
        
    dateIn = new Date().toLocaleString("en-US", {
        day: "numeric",
        year: "numeric",
        month: "numeric"
    })
   
)}