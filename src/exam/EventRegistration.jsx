import React, { useState } from "react";

function EventRegistration() {

  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const registerEvent = (e) => {

    e.preventDefault();

    const event = { eventName, location, date };

    let events = JSON.parse(localStorage.getItem("events")) || [];

    events.push(event);

    localStorage.setItem("events", JSON.stringify(events));

    alert("Event Registered Successfully");

  };

  return (

    <div>

      <h2>Event Registration</h2>

      <form onSubmit={registerEvent}>

        <input
          type="text"
          placeholder="Event Name"
          onChange={(e) => setEventName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <br /><br />

        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <br /><br />

        <button type="submit">Register Event</button>

      </form>

    </div>

  );

}

export default EventRegistration;