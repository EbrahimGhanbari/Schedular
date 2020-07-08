import React from "react";
import "components/InterviewerListItem.scss"
import classnames from "classnames";


export default function InterviewerListItem(props) {

  let interviewerClass = classnames("interviewers__item", {
    "--selected": props.selected
  });

  interviewerClass = interviewerClass.replace(/\s/g, '');

  return (
    <li className={ interviewerClass }
    onClick={() => props.setInterviewer(props.name)}>
      <img
        className="interviewers__item-image"
        src={ props.avatar }
        alt="Sylvia Palmer"
      />
      { props.name }
    </li>
  );

}