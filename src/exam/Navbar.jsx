import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div>

      <h2>Event Management</h2>

      <Link to="/">Home</Link> | 
      <Link to="/register">Register Event</Link> | 
      <Link to="/events">View Events</Link> | 
      <Link to="/api">API Demo</Link>

    </div>

  );

}

export default Navbar;