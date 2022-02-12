import React, { Component } from 'react'
import { actDetailFetch } from './modules/action';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading';
import DetailMovieCinema from './DetailMovieCinema';
class DetailMovie extends Component {
    componentDidMount(){
        const {id} = this.props.match.params
        this.props.fetchData(id)
    }
    render() {
        const {data,loading} = this.props
        const {id} = this.props.match.params
        if( loading) return <div><Loading></Loading></div>;
        return (
            <div className='container mt-5'>
                <div className='row mb-5 p-5'>
                    <div className='col-md-4'>
                        <img height={400} className='img-fluid' src={data && data.hinhAnh} alt='hinh'/>
                    </div>
                    <div className='col-md-8'>
                        <table className='table'>
                           <tbody>
                           <tr>
                                <td>Ten Phim: </td>
                                <td style={{color:"red"}}>{data && data.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Mo Ta:</td>
                                <td>{data && data.moTa}</td>
                            </tr>
                            <tr>
                                <td>Danh gia:</td>
                                <td>{data && data.danhGia}</td>
                            </tr>
                           </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                    <DetailMovieCinema id={id}></DetailMovieCinema>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        fetchData:(id) =>{
            dispatch(actDetailFetch(id));
        }
    }
}
const mapStateToProps = (state) =>{
    return{
        loading : state.detailMovieReducer.loading,
        data : state.detailMovieReducer.data,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);