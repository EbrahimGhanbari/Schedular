import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

// this funcation format the spots
const formatSpots = (spots) => {
  if (spots > 1) {
    return `${spots} spots remaining`;
  }
  if (spots === 1) {
    return `${spots} spot remaining`;
  }
  if (spots === 0) {
    return `no spots remaining`;
  }
};

export default function DayListItem(props) {
  //define the class if its selected
  let dayListClass = classnames("day-list__item", {
    "--selected": props.selected,
    "--full": !props.spots
  });
  dayListClass = dayListClass.replace(/\s/g, '');

  return (
    <li  data-testid="day" 
      className={dayListClass}
      onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{ formatSpots(props.spots) }</h3>
    </li>
  );
}


  