import React, { Fragment } from 'react';
import ReactDOM from "react-dom";

import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"




import "components/Appointment/styles.scss";

export default function Appointment (props) {
  return (
    <>
    <Header time={props.time} />
    { !props.interview && <Empty /> }
    { props.interview && <Show student={props.interview.student} interviewer={props.interview.interviewer}/> }
    
    </>
    );
}

// ReactDOM.render(<Application />, document.getElementById("root"));
