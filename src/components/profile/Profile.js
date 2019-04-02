import React from "react";
// import Geolocation from "../google/Geolocation";
import MyTrips from "../myTrips/MyTrips";
import ProfileNavbar from "../profile/ProfileNavbar";
import TripsService from "../../services/TripsService";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      image: "",
      title: "",
      startDate: 0,
      endDate: 0,
      location: "",
      description: "",
      submitBtnText: "Submit"
    };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      const id = this.props.match.params.id;
      this.setState({
        id: id,
        submitBtnText: "Update"
      });
      TripsService.getTripById(id, this.getTripByIdSuccess, this.onPostError);
    }
  }

  getTripByIdSuccess = resp => {
    this.setState(
      {
        image: resp.data.Item.Image,
        title: resp.data.Item.Title,
        startDate: resp.data.Item.StartDate,
        endDate: resp.data.Item.EndDate,
        location: resp.data.Item.Location,
        description: resp.data.Item.Description
      },
      () => console.log(this.state)
    );
  };

  onPostSuccess = resp => {
    this.props.history.push("/displayTrips");
  };

  changeImageState = image => {
    this.setState({ image: image });
  };

  onError = error => {
    console.log(error);
  };

  onCancelClick = () => {
    this.props.history.push("/displayTrips");
  };

  render() {
    return (
      <React.Fragment>
        {/* <Geolocation /> */}
        <ProfileNavbar />
        <MyTrips
          changeImageState={this.changeImageState}
          onPostSuccess={this.onPostSuccess}
          onPostError={this.onError}
          id={this.state.id}
          image={this.state.image}
          title={this.state.title}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          location={this.state.location}
          description={this.state.description}
          onClick={this.onCancelClick}
        />
      </React.Fragment>
    );
  }
}

export default Profile;
