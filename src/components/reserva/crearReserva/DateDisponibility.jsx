//https://www.npmjs.com/package/react-date-range 
import React, { useState, useEffect } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import Form from 'react-bootstrap/Form';

import { DateRange } from 'react-date-range';

import getDisponibilityByDepto from '../../../services/getDisponibilityByDepto';

const DateDisponibility = ({range,setRange,days,setDays,setCheckIn,setCheckOut}) => {
   
    useEffect(() => {
        getDisponibility()
    }, []);

    const [disabledDates, setDisabledDates] = useState([]);

    // obtiene fechas NO disponibles x depto y las setea
    const getDisponibility = async() => {
        const resp = await getDisponibilityByDepto(1)
        let resp_parsed = resp.map((e) => new Date(e))
        setDisabledDates(resp_parsed)
    }
          
    const handleDateRangeChange = (e) => {

      setRange([e.selection])
      let startDate = [e.selection][0].startDate
      let endDate = ([e.selection][0].endDate)

      const difference = endDate - startDate
      const cantidadDias = (Math.ceil(difference / (1000 * 3600 * 24))) +1 
      
      setDays(cantidadDias)
      setCheckIn(startDate)
      setCheckOut(endDate)
      
    }


    return (
    <>
      <Form.Group className="mb-3">
        <Form.Label className='p'>Fecha Ingreso/Salida</Form.Label>

        <DateRange
            editableDateInputs={true}
            onChange={handleDateRangeChange}
            moveRangeOnFirstSelection={false}
            ranges={range}
            weekStartsOn={1}
            months={2}
            direction="horizontal"
            minDate={new Date()}
            disabledDates={disabledDates}
            />
        </Form.Group>
    </>
  )
}

export default DateDisponibility