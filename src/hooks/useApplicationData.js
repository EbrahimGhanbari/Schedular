import { useState, useEffect } from "react";
import axios from "axios";

// useApplicationData Hook will return an object with four keys.

// The state object will maintain data.
// The setDay action can be used to set the current day.
// The bookInterview action makes an HTTP request and updates the local state.
// The cancelInterview action makes an HTTP request and updates the local state.

export const useApplicationData = () => {


  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.put(`/api/appointments/${id}`, appointment)
    .then(() => {setState({...state, appointments});})
  }


  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: {
        student: "Just changed this",
        interviewer: 3
        }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    setState({...state, appointments});
    return axios.delete(`/api/appointments/${id}`, { params: { id: "interview" }});
  }

  const setDay = day => setState({ ...state, day });

  //this section get data from api 
  useEffect(() => {

    Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers")),
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers:all[2].data }));
    })
    
  }, []);


  return { state, setDay, bookInterview,  cancelInterview};

}