import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';
import { actFetchListMovie } from "../modules/action";
class Carousel extends Component {
  componentDidMount() {
    this.props.fetchListMovie();
  }

  renderListMovieImage = () => {
    return this.props.data?.map((movie) => {
      return <div key={movie.maPhim} className="img-container">
        <img className="img-carousel" src={movie.hinhAnh}></img>
      </div>
    });
  };
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      loop: true,
      speed: 3000,
      dots:true,
    };
    return (
      <div className="container-fluid">
        <div className="mx-3">
          <Slider {...settings}>
            {this.renderListMovieImage()}
          </Slider>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actFetchListMovie());
    }
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carousel);