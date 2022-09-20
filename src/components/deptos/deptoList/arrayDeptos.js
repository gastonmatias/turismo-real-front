import imgDepto1 from '../../../assets/deptos/depto1.jpg'
import imgDepto2 from '../../../assets/deptos/depto2.jpg'
import imgDepto3 from '../../../assets/deptos/depto3.jpg'
import imgDepto4 from '../../../assets/deptos/depto4.jpg'

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
            "img": imgDepto3
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
            "img": imgDepto2
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
            "img": imgDepto1
        },
      ]

      return deptos
}