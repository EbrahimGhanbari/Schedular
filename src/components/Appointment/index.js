import React from 'react';

import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status"
import Confirm from "components/Appointment/Confirm"
import { useVisualMode } from "../../hooks/useVisualMode";

import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";


export default function Appointment (props) {

  const { mode, transition, back } = useVisualMode(
    (props.interview) ? SHOW : EMPTY
  );
  
  //this function handle saving new appointment
  const save = (name, interviewer) => {
    
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => {transition(SHOW);})
    
  };

  //this function delete the appointment
  const deleteAppointment = (event) => {
    transition(DELETE);
    props.cancelInterview(props.id)
    .then(() => {transition(EMPTY);});
  }

  //this function shows the confirm message 
  const showConfirmMessage = (event) => {
    event.preventDefault()
    transition(CONFIRM);
  }


  //transition to create
  const transitionToCreate = (event) => {
    event.preventDefault();
    transition(CREATE);
  };

  return (
    <>
      {mode === DELETE && <Status message={ "Deleting" }/>}}
      {mode === CONFIRM && <Confirm onCancel={ back } onConfirm={ deleteAppointment }/>}
      {mode === SAVING && <Status message={ "Saving" }/>}
      {mode === CREATE && (
        <Form
        interviewers={ props.interviewers }
        onSave={ save }
        onCancel={ back }
        />
        )}
      {mode === EMPTY && <Empty onAdd={ transitionToCreate } />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete = { showConfirmMessage }
        />
      )}
    </>
    );
}

