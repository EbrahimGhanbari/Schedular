import React, { useState, useEffect } from "react";

import axios from "axios";

import "components/Application.scss";
import DayList from  "components/DayList";
import Appointment from "components/Appointment/index";
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from "../helpers/selectors";

export default function Application(props) {

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    setState({...state, appointments});

    axios.put(`/api/appointments/${id}`, appointment);
  }

  const cancelInterview = (id, interviewe) => {
    console.log(id, interviewe);

  }
  
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });
  
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
  
  
  let appointments = getAppointmentsForDay(state, state.day);
  let interviewers =getInterviewersForDay(state, state.day);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList 
        days={ state.days }
        day={ state.day }
        setDay={ setDay }/>
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {
          appointments.map((appointment) =>  { 
          return <Appointment
            key={ appointment.id }
            id={ appointment.id }
            time={ appointment.time }
            interview={ getInterview(state, appointment.interview) }
            interviewers={ interviewers }
            bookInterview = { bookInterview }
            cancelInterview = { cancelInterview }
          />
        })
       }
      </section>
    </main>
  );
}
