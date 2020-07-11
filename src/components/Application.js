import React, { useState, useEffect } from "react";

import axios from "axios";

import "components/Application.scss";
import DayList from  "components/DayList";
import Appointment from "components/Appointment";
import getAppointmentsForDay from "../helpers/selectors";


export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: []
  });
  
  const setDay = day => setState({ ...state, day });
  const setDays = days => setState(prev => ({ ...prev, days }));
  const setAppointment = appointments => setState(prev => ({ ...prev, appointments }));

  useEffect(() => {
    
    axios.get("/api/days")
    .then((response) => {
      setDays(response.data);
    })

    axios.get("/api/appointments")
    .then((response) => {

      //this part convert appointment api to array
      const appointmentArray = [];
      for (let appointment in response.data) {   
        appointmentArray.push(response.data[appointment]);
      }
      
      setAppointment(appointmentArray);
    });

  }, [])


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
        days={state.days}
        day={state.day}
        setDay={setDay}/>
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {state.appointments.map((appintment) => 
        { 
          return <Appointment
            key={ appintment.id }
            {...appintment}
          />}
        )}
      </section>
    </main>
  );
}
