import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class Movie extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className='col-sm-4 col-lg-2 my-5'>
                <div className="card">
                    <img className="card-img-top" src={movie.hinhAnh} alt="" />
                    <div className="card-body">
                        <h6 className="card-title">{movie.tenPhim}</h6>
                        <button className="btn btn-outline-success text-center ml-lg-3 ml-sm-5" to={`/detail/${movie.maPhim}`}>Chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
