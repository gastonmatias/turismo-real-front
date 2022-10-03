//https://www.npmjs.com/package/react-date-range 

import React, { useState, useEffect } from 'react';
import {subDays } from 'date-fns'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css fil

import { DateRange } from 'react-date-range';

const DateDisponibility = ({disabledDates}) => {
   
    const [range, setRange] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key:'selection'
        }
    ]);
    

    const handleDateRangeChange = (e) => {
        setRange([e.selection])
    }
    
    console.log('disabledDates',disabledDates);

    return (
    <>

        <DateRange
        editableDateInputs={true}
        onChange={handleDateRangeChange}
        moveRangeOnFirstSelection={false}
        ranges={range}
        weekStartsOn={1}
        months={2}
        direction="horizontal"
        //minDate={subDays(new Date(),1)}
        minDate={new Date()}
        disabledDates={disabledDates}
        />
    
    </>
  )
}

export default DateDisponibility