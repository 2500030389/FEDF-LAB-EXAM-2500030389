import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>

      <h2>Event Management</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/eventregistration">Add Event</Link>
        <Link to="/viewevent">View Events</Link>
        <Link to="/api">API Demo</Link>
      </nav>

    </div>
  )
}