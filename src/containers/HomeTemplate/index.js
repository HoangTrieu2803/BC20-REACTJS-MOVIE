import React from 'react';
import BookingTicket from './BookingTicket';
import "./style.css";
import Footer from './_Component/Footer';
import Navbar from './_Component/Navbar';
import {Route} from 'react-router-dom'
export default function HomeTemplate(props){
  const { exact, path, component } = props;
  return <div>
      <Navbar/>
      <Route exact={exact} path={path} component={component} />
      {/* <BookingTicket/> */}
      <Footer/>
      
  </div>;
}
