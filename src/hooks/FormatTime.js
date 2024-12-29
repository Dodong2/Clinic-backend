 const formatTimeTo12Hour =(time24) => {
    const [hours, minutes] = time24.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours % 12 || 12; // Convert "0" hour to "12"
    return `${String(adjustedHours).padStart(2, '0')}:${minutes} ${period}`;
}

export const formatTimeTo24Hour = (time12) => {
    const [time, period] = time12.split(' ');
    let [hours, minutes] = time.split(':');
    if (period === 'PM' && hours !== '12') {
        hours = parseInt(hours, 10) + 12;
    } else if (period === 'AM' && hours === '12') {
        hours = '00';
    }
    return `${String(hours).padStart(2, '0')}:${minutes}`;
}

export const handleTimeChange = (event, setter) => {
    const time24 = event.target.value; // e.g., "13:38"
    const time12 = formatTimeTo12Hour(time24); // Convert to "01:38 PM"
    console.log('Converted Time:', time12); // For debugging
    setter(time12); // Store the time in 12-hour format
}
