import axios from "axios";

class AccountsService {
  static register(data, onSuccess, onError) {
    console.log(data);
    axios
      .post(`/api/account/register`, data, { withCredentials: true })
      .then(onSuccess)
      .catch(onError);
  }

  static getTripSpecials(onSuccess, onError) {
    axios
      .get(`/api/displaySpecials`)
      .then(onSuccess)
      .catch(onError);
  }

  static login(data, onSuccess, onError) {
    axios
      .post(`/api/login`, data)
      .then(onSuccess)
      .catch(onError);
  }
}

export default AccountsService;
