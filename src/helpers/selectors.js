export default function getAppointmentsForDay(state, day) {

  // return empty array if days is emppty
  if (!state.days.length) return [];

  const appointmentsObjectForDay = state.days.filter(stateDay => stateDay.name === day);
  
  //return empty array if it can not find the day
  if (!appointmentsObjectForDay.length) return [];  
  const appointmentsArrayForDay = appointmentsObjectForDay[0].appointments;
  
  const appointmentsArray = [];

  appointmentsArrayForDay.forEach((appointmentDay) => {
        
    for (let appoinment in state.appointments) {
      
      if (Number(appoinment) === appointmentDay) 
        appointmentsArray.push(state.appointments[appoinment]);
    }
  });

  return appointmentsArray;

}