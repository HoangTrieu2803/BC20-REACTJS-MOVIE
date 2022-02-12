import React, { Component } from 'react'
import ThongTinGhe from './ThongTinGhe';
import HangGhe from './HangGhe';
import { actFetchListBooking } from './modules/action';
import { connect } from 'react-redux';
import Ghe from './Ghe';
import Navbar from '../_Component/Navbar';
class BookingTicket extends Component {
    componentDidMount(){
      this.props.fetchListBooking();
  }
    renderHangGhe = () =>{
      return this.props.data?.map(ghe=>{
          let i = 0;
          for(let j=0; j<=10; j++){
            if(i <= 15){
                return <div key={ghe.maGhe}>
                <Ghe tenGhe={ghe.tenGhe}/>
            </div>
            }
          }
      })
    }
    render() {
        return (
            <div className="bookingMovie"style={{position:'fixed',width:'100%',height:'100%',backgroundImage:'url(./img/bgMovie.jpg)',backgroundSize:'100%'}}>
                <div style={{backgroundColor:'rgba(0,0,0,0.8)',position:'fixed',width:'100%',height:'100%'}}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8'>
                                <div style={{fontSize:45}}className='text-warning text-center'>ĐẶT VÉ XEM PHIM CYBERLEARN</div>
                                <div className="text-light  text-center mt-1" style={{fontSize:'25px'}}>Màn hình</div>
                                <div className="mt-1" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                    <div className='screen'></div>
                                </div>  
                                {this.renderHangGhe()}     
                            </div>
                            <div className='col-4'>
                                <div style={{fontSize:'35px'}}className='text-light'>DANH SÁCH GHẾ BẠN CHỌN</div>
                                {/* <ThongTinGhe/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
  return {
      fetchListBooking:()=>{
          dispatch(actFetchListBooking());
      }
  }
}
const mapStateToProps = (state) =>{
  return {
      loading: state.listBookingReducer.loading,
      data: state.listBookingReducer.data
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookingTicket);