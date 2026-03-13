import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./exam/Navbar";
import Home from "./exam/Home";
import EventRegistration from "./exam/EventRegistration";
import ViewEvent from "./exam/ViewEvent";
import ApiDemo from "./exam/ApiDemo";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<EventRegistration />} />

        <Route path="/events" element={<ViewEvent />} />

        <Route path="/api" element={<ApiDemo />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;