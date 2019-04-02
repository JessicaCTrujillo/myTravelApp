import axios from "axios";

class GoogleMapService {
  static getLocation(data, onSuccess, onError) {
    axios
      .post(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=AIzaSyD48ucEk-g8SxELSZivmh1NM_7w2BKsIR8`,
        data,
        { "Access-Control-Allow-Origin": "http://localhost:3000" }
      )
      .then(onSuccess)
      .catch(onError);
  }
}

export default GoogleMapService;
