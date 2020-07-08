import React from "react";
import "components/InterviewList.scss"
import InterviewerListItem from "components/InterviewerListItem"


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
          setInterviewer={props.setInterviewer}
        />
      )}
      </h4>
      <ul className="interviewers__list"></ul>
    </section>

  );
}
