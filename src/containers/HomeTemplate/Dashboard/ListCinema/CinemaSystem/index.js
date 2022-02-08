import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCinemaSystem } from "./modules/action";
class CinemaSystem extends Component {
    componentDidMount(){
        this.props.fetchCinemaSystem();
    }

    renderCinemaSystem = () =>{
        return this.props.data?.map((item)=>{
            return <div className='col-12' key={item.biDanh}>
                <button className='btn btn-light'>
                <img src={item.logo} className="cin-logo"></img>
                </button>
            </div>
        });
    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderCinemaSystem()}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchCinemaSystem:()=>{
            dispatch(actFetchCinemaSystem());
        }
    }
}
const mapStateToProps = (state) =>{
    return {
        loading: state.cinemaSystemReducer.loading,
        data: state.cinemaSystemReducer.data
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CinemaSystem);