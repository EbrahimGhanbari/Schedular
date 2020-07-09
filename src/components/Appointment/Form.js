import React, { useState } from 'react';

import InterviewerList from "components/InterviewList";
import Button from "components/Button";


export default function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);


return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            value={name}
            className="appointment__create-input text--semi-bold"
            name={name}
            type="text"
            onChange={(event) => {setName(event.target.value)}}
          />
        </form>
        <InterviewerList interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={ (event) => props.onCancel()  }>Cancel</Button>
          <Button confirm onClick={ (event) => props.onSave(name, interviewer)}>Save</Button>
        </section>
      </section>
    </main>
  );

}