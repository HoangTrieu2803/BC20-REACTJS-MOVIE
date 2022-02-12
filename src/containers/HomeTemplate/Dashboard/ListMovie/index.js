import React, { Component } from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import { actFetchListMovie } from "../modules/action";
class ListMovie extends Component {
    componentDidMount(){
        this.props.fetchListMovie();
    }

    renderListMovie = () =>{
        return this.props.data?.map((movie)=>{
            return <Movie key={movie.maPhim} movie={movie}/>
        });
    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderListMovie()}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchListMovie:()=>{
            dispatch(actFetchListMovie());
        }
    }
}
const mapStateToProps = (state) =>{
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListMovie);