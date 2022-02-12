import {actFetchListMovie} from "./modules/action"
import React, { Component } from 'react'
import { connect } from 'react-redux';
class Movie extends Component {
    componentDidMount() {
        this.props.fetchListMovie();
    }
    renderMovie(){
        return this.props.data?.map((movie,index)=>{
            if(movie.dangChieu){
                movie.dangChieu = "true";
            }
            else{
                movie.dangChieu = "false";
            }
            return <tr key={index}>
                <td>{movie.maPhim}</td>
                <td>{movie.tenPhim}</td>
                <td><img height="100px" width="100px" src={movie.hinhAnh}/></td>
                <td>{movie.dangChieu}</td>
                <td>{movie.ngayKhoiChieu}</td>
                <td><button className="btn btn-danger">Delete</button>
                </td>
                <td>
                <button className="btn btn-primary">Edit</button>
                </td>
            </tr>
        })
    }
  render() {
      if(this.props.data){
        console.log(this.props.data[0].dangChieu)
      }
    return (
        <div className="row">
        <div className="col-sm-12">
   <table className="table table-striped table-sm">
     <thead>
       <tr className="bg-primary text-white">
         <th>ID</th>
         <th>Tên</th>
         <th>Hình ảnh</th>
         <th>Đang chiếu</th>
         <th>Ngày chiếu</th>
         <th className="text-center" colSpan={2}>Action</th>
       </tr>
     </thead>
     <tbody>
        {this.renderMovie()}
     </tbody>
   </table>
 </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Movie);