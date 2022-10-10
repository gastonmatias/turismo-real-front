//https://www.npmjs.com/package/react-date-range 
import React, { useState, useEffect } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import Form from 'react-bootstrap/Form';

import { DateRange } from 'react-date-range';

import getDisponibilityByDepto from '../../../services/getDisponibilityByDepto';
import Loader from '../../UI/Spinner';

const DateDisponibility = ({range,setRange,setDays,setCheckIn,setCheckOut,idDepto}) => {
   
    useEffect(() => {
        getDisponibility()
    }, []);

    const [disabledDates, setDisabledDates] = useState([]);

    // obtiene fechas NO disponibles x depto y las setea
    const getDisponibility = async() => {
        
      const resp = await getDisponibilityByDepto(idDepto)
        
      let resp_parsed = resp.map((e) => {
          const [YYYY, MM, DD] = e.split('-')
          // Please pay attention to the month (MM); JavaScript counts months from 0 !
          const mydate = new Date(YYYY,MM-1,DD); 
          return mydate
      })
      
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
      <Form.Group className="mb-3 row">
        <Form.Label className='p col-12'>Fecha Ingreso/Salida</Form.Label>

        {disabledDates.length>0 ?
        <DateRange className='col-8'
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
        :
        <div className='d-flex text-center justify-content-center align-items-center'
        style={{width: "20rem", height: "25rem"}} 
          >
          <div className="spinner-border " 
            style={{width: "3rem", height: "3rem"}} 
            role="status">  
          </div>
        </div>
      }
            
        </Form.Group>
    </>
  )
}

export default DateDisponibility