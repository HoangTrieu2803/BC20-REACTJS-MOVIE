import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class Movie extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className='col my-5 h-100'>
                <div className="card h-100">
                    <img className="card-img-top" src={movie.hinhAnh} alt="" />
                    <div className="card-body">
                        <h6 className="card-title">{movie.tenPhim}</h6>
                        <button className="btn btn-outline-success text-center" to={`/detail/${movie.maPhim}`}>Chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
