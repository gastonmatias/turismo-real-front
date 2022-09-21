import vigna1 from '../assets/deptos/vigna1.jpg'
import castro1 from '../assets/deptos/castro1.jpg'
import corral1 from '../assets/deptos/corral1.jpg'
import catchagua1 from '../assets/deptos/catchagua1.jpg'

export const getDeptos = () => {
    let deptos = [
        {
            "id": 1,
            "status": "Disponible",
            "price": "99.990",
            "region": "Valdivia",
            "commune": "Corral",
            "adress": "rio callecalle #434",
            "short_description": "Loft",
            "long_description": "Departamento adecuado para 2 personas",
            "capacity":2,
            "qty_rooms":1,
            "img": corral1
        },
        {
            "id": 2,
            "status": "Disponible",
            "price": "58.990",
            "region": "Chiloe",
            "commune": "Castro",
            "adress": "el caleuche #5456",
            "short_description": "Familiar",
            "long_description": "Departamento adecuado para 3-6 personas",
            "capacity":6,
            "qty_rooms":3,
            "img": castro1
        },
        {
            "id": 3,
            "status": "Disponible",
            "price": "128.990",
            "region": "Valparaiso",
            "commune": "Viña del Mar",
            "adress": "viñatienefestival #868",
            "short_description": "Familiar",
            "long_description": "Departamento adecuado para 3-6 personas",
            "capacity":6,
            "qty_rooms":3,
            "img": vigna1
        },
        {
            "id": 4,
            "status": "Disponible",
            "price": "158.990",
            "region": "Valparaíso",
            "commune": "Catchagua",
            "adress": "perritopapurripapa #564",
            "short_description": "Familiar",
            "long_description": "Departamento adecuado para 3-6 personas",
            "capacity":6,
            "qty_rooms":4,
            "img": catchagua1
        },
      ]

      return deptos
}