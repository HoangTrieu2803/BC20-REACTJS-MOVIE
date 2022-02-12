import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import style from './Booking.module.css';
import './BookingTicket.css'
import { actBookingTicket, actFetchListBooking } from './modules/action';
import { CloseOutlined } from '@ant-design/icons';
import * as ActionType from './modules/constant';
import { ThongTinDatVe } from '../../../_core/models/ThongTinDatVe';
class BookingTicket extends Component {
    componentDidMount() {
        this.props.fetchListBooking();
    }
    renderSeats = () => {
        const { danhSachGhe } = this.props.data;
        const { danhSachGheDangDat } = this.props;
        return danhSachGhe.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = '';
            //ktra từng ghế
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
            if (indexGheDD != -1) {
                classGheDangDat = 'gheDangDat';
            }
            return <Fragment key={index}>
                <button onClick={() => {
                    this.props.datGhe(ghe)
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} text-center`} key={index}>
                    {ghe.daDat ? <CloseOutlined style={{ marginBottom: 7.5 }} /> : ghe.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }
    render() {
        const { thongTinPhim } = this.props.data;
        return (
            <div>
                <div className='container m-auto'>
                    <div className='row mt-3'>
                        <div className='col-9'>
                            <div className={`${style['screen']}`}></div>
                            <div className={`${style['trapezoid']}`}></div>
                            <div className='text-center mt-2'>
                                {this.renderSeats()}
                            </div>
                        </div>
                        <div className='col-3'>
                            <h3 className='text-center text-success'>
                            {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                                return tongTien += gheDangDat.giaVe;
                                            }, 0).toLocaleString()}
                            </h3>
                            <hr />
                            <h3 className='text-center booking-info'>{thongTinPhim.tenPhim}</h3>
                            <p className='booking-info' style={{fontWeight: 600}}>Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
                            <p className='booking-info' style={{fontWeight: 600}}>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
                            <hr />
                            <div className='d-flex flex-row'>
                                <table className="table" border="3">
                                    <thead>
                                        <tr style={{ fontSize: 20 }} className="text-success">
                                            <th>Số ghế</th>
                                            <th>Giá</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-success'>
                                        {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                            return <tr key={index}>
                                                <td>{gheDangDat.stt}</td>
                                                <td>{gheDangDat.giaVe}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr className='text-success font-weight-bold'>
                                            <td>Tổng tiền</td>
                                            <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                                return tongTien += gheDangDat.giaVe;
                                            }, 0).toLocaleString()}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <hr />
                            <div className='mb-0'>
                                <button className='btn btn-success w-100' onClick={()=>{
                                    const { danhSachGheDangDat } = this.props;
                                    const thongTinDatVe = new ThongTinDatVe();
                                    thongTinDatVe.maLichChieu = this.props.match.params.id;
                                    thongTinDatVe.danhSachVe = danhSachGheDangDat;
                                    this.props.fetchDatVe();
                                }}>ĐẶT VÉ</button>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchListBooking: () => {
            dispatch(actFetchListBooking());
        },
        datGhe: (gheDuocChon) => {
            dispatch({
                type: ActionType.LIST_BOOKING_TICKET,
                gheDuocChon
            })
        },
        fetchDatVe: ()=>{
            dispatch(actBookingTicket());
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.listBookingReducer.detail,
        danhSachGheDangDat: state.listBookingReducer.danhSachGheDangDat
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingTicket);
