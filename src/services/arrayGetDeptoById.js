import { getDeptos } from "./arrayGetDeptoList"

export const getDeptoById = (idDepto) => {
    
    const deptos = getDeptos()

    return  deptos.find((e) => e.id === idDepto)

}