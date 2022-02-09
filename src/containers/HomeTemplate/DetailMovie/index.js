import React, { Component } from 'react'
import { actDetailFetch } from './modules/action';
import {connect} from "react-redux";
class DetailMovie extends Component {
    // componentDidMount(){
    //     //lay id tu url
    //     const {id} = this.props.match.params;
    //     this.props.fetchData(id);
    // }
    renderLichChieu = () =>{
        const {data} = this.props;
        console.log(data);
        return data?.lichChieu?.map((item)=>{
            return <tr key={item.maLichChieu}>
                <td>
                    {item.thongTinRap.tenCumRap}
                </td>
                <td>
                    {item.thongTinRap.tenRap}
                </td>
                <td>
                    {new Date(item.ngayChieuGioChieu).toLocaleDateString()}
                </td>
                <td>
                {new Date(item.ngayChieuGioChieu).toLocaleTimeString()}
                </td>
                <td>
                    <button className='btn btn-success'>Book</button>
                </td>
            </tr> 
        })
    }
    render() {
        const {data,loading} = this.props
        if( loading) return <div>Loading...</div>;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img height={400} className='img-fluid' src={data && data.hinhAnh} alt='hinh'/>
                    </div>
                    <div className='col-md-6'>
                        <table className='table'>
                           <tbody>
                           <tr>
                                <td>Ten Phim</td>
                                <td>{data && data.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Mo Ta</td>
                                <td>{data && data.moTa}</td>
                            </tr>
                           </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Ten Cum Rap</th>
                                    <th>Ten Rap</th>
                                    <th>Ngay Chieu</th>
                                    <th>Gio Chieu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderLichChieu()}
                            </tbody>
                        </table>
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