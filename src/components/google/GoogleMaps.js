import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import GoogleMapService from "../../services/GoogleMapsService";
import { compose, withProps } from "recompose";
import Geolocoation from "./Geolocation";
import ProfileNavbar from "../profile/ProfileNavbar";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD48ucEk-g8SxELSZivmh1NM_7w2BKsIR8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  console.log("These are the props", props);
  return (
    <GoogleMap defaultZoom={13} center={{ lat: props.lat, lng: props.lng }}>
      {props.isMarkerShown && (
        <Marker
          position={{ lat: props.lat, lng: props.lng }}
          onClick={props.onMarkerClick}
        />
      )}
    </GoogleMap>
  );
});

class MyFancyComponent extends React.PureComponent {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false,
      center: { lat: -44.6414024, lng: 167.8973801 },
      lat: -44.6414024,
      lng: 167.8973801,
      zoom: 13,
      address: ""
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 1000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  onChange = resp => {
    console.log(resp.target.value);
    this.setState({
      address: resp.target.value
    });
  };

  onClick = e => {
    GoogleMapService.getLocation(
      this.state.address,
      this.onGetLocSuccess,
      this.onGetLocError
    );
  };

  onGetLocSuccess = resp => {
    console.log(resp);
    this.setState({
      lat: resp.data.results[0].geometry.location.lat,
      lng: resp.data.results[0].geometry.location.lng
    });
    this.recenterMap(
      resp.data.results[0].geometry.location.lat,
      resp.data.results[0].geometry.location.lng
    );
  };

  recenterMap = (lat, lng) => {
    this.setState({
      center: { lat: lat, lng: lng }
    });
  };

  onGetLocError = error => {
    console.log(error);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  getGeolocation = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    });
  };

  render() {
    return (
      <React.Fragment>
        <ProfileNavbar />
        <div
          style={{
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80)`
          }}
        >
          <div
            className="col-sm-6 offset-3"
            style={{ paddingTop: 60, paddingBottom: 100 }}
          >
            <h1 style={{ textAlign: "center" }}>
              Explore your next vacation spot
            </h1>

            <div style={{ width: "50%" }}>
              <button
                style={{ width: "20%" }}
                size="sm"
                type="btn btn-success"
                onClick={this.onClick}
              >
                Search
              </button>
              <input
                size="sm"
                type="text"
                style={{ width: "80%" }}
                name="address"
                id="address"
                placeholder="Enter Zip Code"
                onChange={this.onChange}
              />
            </div>
            <MyMapComponent
              center={{ lat: this.state.lat, lng: this.state.lng }}
              position={{ lat: this.state.lat, lng: this.state.lng }}
              lat={this.state.lat}
              lng={this.state.lng}
              isMarkerShown={this.state.isMarkerShown}
              onMarkerClick={this.handleMarkerClick}
            />
            <Geolocoation />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MyFancyComponent;
