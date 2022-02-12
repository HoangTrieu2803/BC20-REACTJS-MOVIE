import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Tabs, Radio, Space } from 'antd';
import { getListCinemalAction } from './modules/actions';
import { NavLink } from 'react-router-dom';
import * as moment from 'moment';
const { TabPane } = Tabs;
class ListCinema extends Component {
  componentDidMount() {
    this.props.fetchListCinema();
  }
  state = {
    tabPosition: 'left',
  };
  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };
  renderCinemaSystem = () => {
    return this.props.data?.map((cinema, index) => {
      let { tabPosition } = this.state;
      return <TabPane tab={<img src={cinema.logo} className="rounded-circle" width="50" alt={cinema.maHeThongRap} />} key={index}>
        <Tabs tabPosition={tabPosition}>
          {cinema.lstCumRap?.slice(0, 7).map((cumRap, index) => {
            return <TabPane tab={
              <div style={{ width: '300px', textAlign: 'left' }}>
                <img src={cumRap.hinhAnh} className="rounded mr-2" width="50" alt={cumRap.tenCumRap} />
                {cumRap.tenCumRap}
              </div>} key={index}>
              {/* Load film */}
              {cumRap.danhSachPhim.map((film, index) => {
                return <Fragment key={index}>
                  <div style={{ display: 'flex', textAlign: 'left' }} className="my-2">
                    <div style={{ display: 'flex' }}>
                      <img src={film.hinhAnh} alt={film.tenPhim} width="80" height="90" className='rounded mr-3' />
                      <div>
                        <h5 className='ml-2'>{film.tenPhim}</h5>
                        <p>{cumRap.diaChi}</p>
                        <div className='row'>
                          {film.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                            return <div className='col-3 py-2' key={index}>
                              <a to="/" className='text-success'>
                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                              </a>
                            </div>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              })}
            </TabPane>
          })}

        </Tabs>
      </TabPane>
    })
  }
  render() {
    const { tabPosition } = this.state;
    return (<div className='container'>
      <Tabs tabPosition={tabPosition}>
        {this.renderCinemaSystem()}
      </Tabs>
    </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchListCinema: () => {
      dispatch(getListCinemalAction());
    }
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.getListCinemaReducer.cinSystem
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCinema);