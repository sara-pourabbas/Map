import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import { Map, TileLayer, Marker } from "react-leaflet";
import { GetDataList } from "../Redux/Actions";
import Select from "react-select";

class Home extends Component {
  state = {
    subBoxUser: false,
    sideBarAbs: false,
    options_prov: [],
    options_city: [],
    lat: 35.6892,
    lon: 51.389,
    zoom: 13,
    addressData: "",
  };

  async componentDidMount() {
    await this.props.dispatch(GetDataList(this.state.addressData));
    this.fillProvince();
  }
  fillProvince = () => {
    let options_prov = [];
    this.props.DataList.list.map((el) =>
      options_prov.push({ value: el.province, label: el.province })
    );
    this.setState({ options_prov });
  };
  fillCity = (prov) => {
    let options_city = [];
    let filterProvince = this.props.DataList.list.find(
      (item) => item.province === prov.value
    );
    filterProvince.Cities.map((el) =>
      options_city.push({ value: el, label: el.name })
    );
    this.setState({ options_city });
  };
  // getCity=(city)=>{
  //     this.setState({addressData:city});
  //     let params = {};
  //     params.text = city;
  //     params.select = '';
  //     params.$filte = `province eq ${province}`;
  //     params.location = {
  //         "type": "Point",
  //         "coordinates": [0, 0]
  //     }
  // };

  subBoxUser = () => {
    this.setState((prevState) => ({ subBoxUser: !prevState.subBoxUser }));
  };
  sideBarAbs = () => {
    this.setState((prevState) => ({ sideBarAbs: !prevState.sideBarAbs }));
  };
  render() {
    return (
      <Container>
        <div className="box-main">
          <div className="bars" onClick={this.sideBarAbs}>
            <i className="fa fa-bars" />
          </div>
          <div className="logo">
            <img src="img/logo.png" alt="logo" />
          </div>
          <Row>
            <Col className="col-12 d-flex justify-content-between">
              <div
                className={this.state.sideBarAbs ? "side-bar-abs" : "side-bar"}
              >
                <ul>
                  <li>
                    <a>
                      <i className="fa fa-plus-square-o" />
                      <span> ثبت درخواست حمل </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-plus-square-o" />
                      <span> لیست سفارش ها </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-plus-square-o" />
                      <span>سفارش های خارج از سیستم </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-plus-square-o" />
                      <span> مدیر مالی </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-plus-square-o" />
                      <span> اعلانات </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-plus-square-o" />
                      <span> پشتیبانی </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-plus-square-o" />
                      <span> ارسال نظرات </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-plus-square-o" />
                      <span> خروج از حساب کاربری </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-plus-square-o" />
                      <span> کد معرف </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="map-box">
                <div className="d-flex justify-content-between">
                  <Button className="map-help">راهنما نقشه</Button>
                  <div className="box-user position-relative">
                    <div className="box-user-name" onClick={this.subBoxUser}>
                      <i className="fa fa-user-circle-o" />
                      <span> pourabbas </span>
                      <i
                        className={
                          this.state.subBoxUser
                            ? `fa fa-chevron-up`
                            : `fa fa-chevron-down`
                        }
                      />
                    </div>
                    {this.state.subBoxUser && (
                      <div className="sub-box-user">
                        <div className="item justify-content-between">
                          <span> امتیاز شما</span>
                          <div className="item-star">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                        <div className="item item-link">
                          <i className="fa fa-home ml-2" />
                          <span> صفحه اصلی </span>
                        </div>
                        <div className="item item-link">
                          <i className="fa fa-sign-out ml-2" />
                          <span> خروج از حساب کاربری </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-2 mb-5 position-relative">
                  <Map
                    center={[this.state.lat, this.state.lon]}
                    zoom={12}
                    maxZoom={18}
                    attributionControl={true}
                    zoomControl={false}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                  >
                    <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                    <Marker position={[this.state.lat, this.state.lon]} />
                  </Map>
                  <div className="input-custom">
                    <Select
                      options={this.state.options_prov}
                      onChange={(prov) => {
                        this.fillCity(prov);
                      }}
                    />
                    {this.state.options_city.length > 0 && (
                      <Select
                        options={this.state.options_city}
                        onChange={(city) => {
                          this.setState({
                            lat: city.value.coordinate.lat,
                            lon: city.value.coordinate.lon,
                          });
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="map-footer px-3">
                  <div>
                    <p>شماره تماس: </p>
                    <p> وبلاگ </p>
                    <p> قوانین و مقررات بارمپ </p>
                  </div>
                  <div className="social">
                    <img src="img/aparat.png" alt="آپارات" />
                    <img src="img/insta.png" alt="اینیستاگرام" />
                    <img src="img/telegram.png" alt="تلگرام" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  DataList: state.DataListReducer,
});

export default connect(mapStateToProps)(Home);
