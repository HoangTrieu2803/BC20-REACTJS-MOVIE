import React, { Component } from 'react';
import CinemaSystem from './CinemaSystem';
import DetailCinema from './DetailCinema';

export default class ListCinema extends Component {
  render() {
    return <div className='row container m-auto'>
      <div className='col-2'>
        <CinemaSystem/>
      </div>
      <div className='col-10'>
        <DetailCinema/>
      </div>
    </div>;
  }
}
