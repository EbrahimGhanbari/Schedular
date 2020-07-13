import React from 'react';

import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status"
import { useVisualMode } from "../../hooks/useVisualMode";

import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";

export default function Appointment (props) {
  
  const save = (name, interviewer) => {
    
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)   
    transition(SHOW);
  }

  //transition to create
  const transitionToCreate = (event) => {
    event.preventDefault();
    transition(CREATE);
  }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


  return (
    <>
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
        />
      )}
    </>
    );
}

