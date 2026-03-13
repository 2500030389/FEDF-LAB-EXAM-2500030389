import React from "react";

function ViewEvent() {

  const events = JSON.parse(localStorage.getItem("events")) || [];

  return (

    <div>

      <h2>Registered Events</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Event Name</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {events.map((event, index) => (

            <tr key={index}>
              <td>{event.eventName}</td>
              <td>{event.location}</td>
              <td>{event.date}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default ViewEvent;