import React, { useState } from 'react';

import InterviewerList from "components/InterviewList";
import Button from "components/Button";


const reset = (setName, setInterviewer) => {
  setName("");
  setInterviewer(null);
};

export default function Form(props) {

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
  
    setError("");
    props.onSave(name, interviewer);
  }

  const [error, setError] = useState("");


  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            value={name}
            className="appointment__create-input text--semi-bold"
            name={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => {setName(event.target.value)}}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{ error }</section>
        <InterviewerList interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={ (event) => {props.onCancel(); reset(setName, setInterviewer);}}>Cancel</Button>
          <Button confirm onClick={ (event) => validate()}>Save</Button>
        </section>
      </section>
    </main>
  );

}

