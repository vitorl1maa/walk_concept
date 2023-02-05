import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import Card from "react-bootstrap/Card";

const CalendarRealease = () => {
  const { releases } = useContext(DataContext);
  return (
    <div className=" container d-flex justify-content-center">
      <div id="calendar" className="row w-100 ">
        {releases[0].map((calendar) => (
          <div className="col-md-4 px-2 py-2">
            <Card style={{ width: "100%" }} key={calendar.id}>
              <Card.Img variant="top" src={calendar.image} />
              <Card.Body>
                <Card.Title>{calendar.title}</Card.Title>
                <h3>{calendar.subtitle}</h3>
                <Card.Text style={{ color: "#ff0000" }}>
                  Disponível: {calendar.date_release}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarRealease;


        // <div key={calendar.id}>
        //   <h3>{calendar.title}</h3>
        //   <img src={calendar.image} alt="" />
        //   <p>{calendar.date_release} </p>
        //   <p>{calendar.price}</p>
        // </div>