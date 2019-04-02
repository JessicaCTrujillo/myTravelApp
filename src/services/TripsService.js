import axios from "axios";

class TripsService {
  static register(data, onSuccess, onError) {
    console.log(data);
    axios
      .post(`/api/tripAdd`, data)
      .then(onSuccess)
      .catch(onError);
  }
  static getTrips(onSuccess, onError) {
    axios
      .get(`/api/displayTrips`)
      .then(onSuccess)
      .catch(onError);
  }
  static getTripById(id, onSuccess, onError) {
    axios
      .get(`/api/getTripById/${id}`)
      .then(onSuccess)
      .catch(onError);
  }

  static update(data, onSuccess, onError) {
    axios
      .put(`/api/updateTrip`, data)
      .then(onSuccess)
      .catch(onError);
  }
  static delete(id, onSuccess, onError) {
    axios
      .delete(`/api/deleteTrip/${id}`)
      .then(onSuccess)
      .catch(onError);
  }
}

export default TripsService;
