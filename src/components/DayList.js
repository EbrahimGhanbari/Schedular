import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList (props) {

  return(
    <ul>
      {props.days.map((singleDay) => 
         
        <DayListItem
        key={singleDay.id}
        name={singleDay.name}
        spots={singleDay.spots}
        selected={singleDay.name === props.day}
        setDay={(event) => props.setDay(singleDay.name)}   />
        )}

    </ul>
  );
}
