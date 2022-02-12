import React, { Component } from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import { actFetchListMovie } from './modules/action';
import Slider from "react-slick";
import './MultipleRowSlick.css';
class ListMovie extends Component {
    componentDidMount() {
        this.props.fetchListMovie();
    }

    renderListMovie = () => {
        return this.props.data?.slice(0,16).map((movie) => {
            return <div key={movie.maPhim}>
                <Movie movie={movie} />
            </div>
        });
    };

    render() {
        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block", background: "white" }}
                    onClick={onClick}
                />
            );
        }
        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block", background: "white" }}
                    onClick={onClick}
                />
            );
        }
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "15px",
            slidesToShow: 2,
            speed: 500,
            rows: 2,
            slidesPerRow: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className='container m-auto'>
                <Slider {...settings} >
                    {this.renderListMovie()}
                </Slider>
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);