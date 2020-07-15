import React from "react";
import "components/InterviewList.scss"
import PropTypes from "prop-types";
import InterviewerListItem from "components/InterviewerListItem"

// this section create the interview list
export default function InterviewList (props) {


  return(
    <section className="interviewers">
      <h4 className="interviewers__header text--light">
      {props.interviewers.map((interviewer) => 
        <InterviewerListItem
          key={interviewer.id}
          name={ interviewer.name }
          avatar={ interviewer.avatar }
          selected={ interviewer.id===props.interviewer }
          setInterviewer={(event) => props.setInterviewer(interviewer.id)}
        />
      )}
      </h4>
      <ul className="interviewers__list"></ul>
    </section>

  );
}

// InterviewList.propTypes = {
//   value: PropTypes.number,
//   onChange: PropTypes.func.isRequired
// };