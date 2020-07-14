//This function return an array of appointment info for a sepecific day
export const getAppointmentsForDay = (state, day) => {

  // return empty array if days is empty
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

// this func return an object containing student and interviewer info
export const getInterview = (state, interview) => {

  if (!interview) return null;

  const outputInterviewer = {};
  const AllInterviewers = state.interviewers;

  for (let singleInterviewer in AllInterviewers) {
    
    if(AllInterviewers[singleInterviewer].id === interview.interviewer) {
      outputInterviewer.student = interview.student
      outputInterviewer.interviewer = AllInterviewers[singleInterviewer];
    }
  }

  return outputInterviewer;

}



//This function return an array of interviewer info for a sepecific day
export const getInterviewersForDay = (state, day) => {

  // return empty array if days is empty
  if (!state.days.length) return [];
  
  const interviewersObjectForDay = state.days.filter(stateDay => stateDay.name === day);
  
  //return empty array if it can not find the day
  if (!interviewersObjectForDay.length) return [];
  
  const interviewersArrayForDay = interviewersObjectForDay[0].interviewers;
  const interviewersArray = [];

  interviewersArrayForDay.forEach((interviewerDay) => {
        
    for (let interviewer in state.interviewers) {
      
      if (Number(interviewer) === interviewerDay) 
      interviewersArray.push(state.interviewers[interviewer]);
    }
  });

  return interviewersArray;
}