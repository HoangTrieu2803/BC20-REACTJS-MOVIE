import React, { Component } from "react";
import { actDetailMovieCinemaFetch } from "./modules/action";
import { connect } from "react-redux";
import * as moment from "moment";
import { Link } from "react-router-dom";
class DetailMovieCinema extends Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.fetchData(id);
  }
  renderLichChieu() {
    const { data } = this.props;
    return data?.heThongRapChieu.map((cinema) => {
      return cinema.cumRapChieu.map((ten, index) => {
        return (
          <div className=" mt-5" style={{ width: "75%" }} key={index}>
            <h4
              style={{
                margin: "0",
                backgroundColor: "orange",
                width: "50%",
                padding: "5px",
              }}
            >
              <span>{ten.tenCumRap}</span>
            </h4>
            <div style={{ border: "0.5px solid grey" }}>
              <p className="card-text p-4">
                {ten.lichChieuPhim.map((gio, index) => {
                  if (localStorage.User) {
                    return (
                      <Link to={`/booking/${gio.maLichChieu}`} className="btn btn-success m-2">
                        {moment(gio.ngayChieuGioChieu).format("hh:mm A")}
                      </Link>
                    );
                  } else {
                    return (
                      <Link to="/login" className="btn btn-success m-2">
                        {moment(gio.ngayChieuGioChieu).format("hh:mm A")}
                      </Link>
                    );
                  }
                })}
              </p>
            </div>
          </div>
        );
      });
    });
  }
  render() {
    const { data } = this.props;
    if (data) {
      console.log(data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0]);
    }
    return (
      <div>
        <div>
          <hr></hr>
          <span className="mr-4">Chọn ngày:</span>
          <input type="date" id="date" />
          <span className="mr-4 ml-5">Chọn rạp:</span>
          <select id="select">
            <option value="">Tất cả</option>
          </select>
        </div>
        {this.renderLichChieu()}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(actDetailMovieCinemaFetch(id));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieCinemaReducer.loading,
    data: state.detailMovieCinemaReducer.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovieCinema);
