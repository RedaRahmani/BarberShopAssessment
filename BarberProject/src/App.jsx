import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Barbers from "./pages/Barbers";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Appointment from "./pages/Appointment";
import MyAppointment from "./pages/MyAppointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-0 sn:mx-[10%] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/barbers" element={<Barbers/>} />
        <Route path="/barbers/:speciality" element={<Barbers/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/my-profile" element={<Profile/>} />
        <Route path="/my-appointments" element={<MyAppointment/>} />
        <Route path="/appointment/:barberId" element={<Appointment/>} />

      </Routes>
      <Footer></Footer>
    </div>
  )
}
export default App