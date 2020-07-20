import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames";


export default function InterviewerListItem(props) {
  //change class if it is selected
  let interviewerClass = classnames("interviewers__item", {
    "--selected": props.selected
  });

  interviewerClass = interviewerClass.replace(/\s/g, '');

  return (
    <li className={ interviewerClass }
    onClick={ props.setInterviewer }>
      <img
        className="interviewers__item-image"
        src={ props.avatar }
        alt={ props.name }
      />
      { props.name }
    </li>
  );

}