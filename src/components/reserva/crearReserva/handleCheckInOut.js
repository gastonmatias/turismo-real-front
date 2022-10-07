
const handleCheckInOut = (startDate,endDate,setCheckIn,setCheckOut) => {
    
    let startDateFormat = startDate
    startDateFormat = new Date().toLocaleDateString("en-US", {
        day: "numeric",
        year: "numeric",
        month: "numeric"
    })

    let endDateFormat = endDate
    endDateFormat = new Date().toLocaleDateString("en-US", {
        day: "numeric",
        year: "numeric",
        month: "numeric"
    })

    setCheckIn(startDateFormat)
    setCheckOut(endDateFormat)

    
}

export default handleCheckInOut