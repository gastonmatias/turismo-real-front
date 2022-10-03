//https://www.npmjs.com/package/react-dates
// https://react-dates.github.io/react-dates/?path=/story/sdp-day-props--with-some-blocked-dates

import React, { useState, useEffect } from 'react';

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

const DateDisponibilityReactDate = () => {
   
  const [startDate, setStartDate] = useState(new Date());
  const [endDate,   setEndDate]   = useState(new Date());

  const handleChangeDate = (startDate, endDate) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }
  
  
  return (
    <DateRangePicker
      startDate={startDate} // momentPropTypes.momentObj or null,
      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      endDate={endDate} // momentPropTypes.momentObj or null,
      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={({ startDate, endDate }) => handleChangeDate(startDate, endDate)} // PropTypes.func.isRequired,
      //focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      //onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
    />
  )
}

export default DateDisponibilityReactDate