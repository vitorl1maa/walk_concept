import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const CalendarRealease = () => {
  const { releases } = useContext(DataContext);
  return (
    <div>
      {releases[0].map((calendar) => (
        <div key={calendar.id}>
          <h3>{calendar.title}</h3>
          <img src={calendar.image} alt="" />
          <p>{calendar.date_release} </p>
          <p>{calendar.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CalendarRealease;
