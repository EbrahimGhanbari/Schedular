import React from 'react';


import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import { useVisualMode } from "../../hooks/useVisualMode";


import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment (props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //transition to create
  const transitionToCreate = (event) => {
    event.preventDefault();
    transition(CREATE);
  }


  return (
    <>
      {mode === CREATE && (
        <Form
        interviewers={ props.interviewers }
        onSave={ props.onSave }
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

