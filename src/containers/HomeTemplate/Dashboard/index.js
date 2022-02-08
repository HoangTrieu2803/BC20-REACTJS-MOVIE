import React from 'react';
import "../style.css";
import Carousel from './Carousel';
import ListCinema from './ListCinema';
import ListMovie from './ListMovie';

export default function Dashboard() {
  return <div>
      <Carousel/>
      <ListMovie/>
      <ListCinema/>
  </div>;
}
