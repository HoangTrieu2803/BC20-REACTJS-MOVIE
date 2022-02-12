import React from 'react';
import BookingTicket from './BookingTicket';
import Dashboard from './Dashboard';
import "./style.css";
import Footer from './_Component/Footer';
import Navbar from './_Component/Navbar';
export default function HomeTemplate(){
  return <div>
      <Navbar/>
      <Dashboard/>
      {/* <BookingTicket/> */}
      <Footer/>
      
  </div>;
}
