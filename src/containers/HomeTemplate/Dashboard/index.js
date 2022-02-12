import React from 'react';
import "../style.css";
import MyCarousel from './MyCarousel';
import ListCinema from './ListCinema';
import ListMovie from './ListMovie';

export default function Dashboard() {
  return <div>
      <MyCarousel/>
      <ListMovie/>
      <ListCinema/>
  </div>;
}
