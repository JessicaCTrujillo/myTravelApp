import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Col,
  CardImg,
  CardBody,
  CardLink,
  CardSubtitle
} from "reactstrap";
import ProfileNavbar from "../profile/ProfileNavbar";
import TripsService from "../../services/TripsService";

class DisplayTrips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    TripsService.getTrips(this.onGetAllTripsSuccess, this.onError);
  }

  onGetAllTripsSuccess = resp => {
    console.log("++++++++++++++++++++++++++++++++++", resp);
    this.setState({
      trips: resp.data.Items
    });
  };

  onError = error => {
    console.log("----------------------------------", error);
  };

  editTrip = evt => {
    const id = evt.target.id;
    this.props.history.push("/profile/" + id);
  };
  onClick = e => {
    TripsService.delete(e.target.id, this.onDeleteSuccess, this.onError);
  };

  onDeleteSuccess = resp => {
    window.location.reload();
  };

  render() {
    // console.log("===================", this.state.trips);
    // const style = { marginBottom: 12, marginLeft: 12 };
    return (
      <React.Fragment>
        <ProfileNavbar />
        <Col
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80")`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="col-sm-4 offset-4" style={{ padding: "1em" }}>
            {this.state.trips.map(trip => (
              <div>
                <Card
                  body
                  outline
                  color="secondary"
                  className=""
                  style={{ padding: "1em" }}
                  key={trip.Id}
                >
                  <img
                    style={{ height: "90px", width: "120px" }}
                    src={trip.Image}
                  />
                  <h2>{trip.Title}</h2>
                  <h4>{trip.Location}</h4>
                  <CardText>{trip.Description}</CardText>
                  <CardText>Start Date: {trip.StartDate}</CardText>
                  <CardText>End Date: {trip.EndDate}</CardText>
                  <div className="row">
                    <button
                      id={trip.Id}
                      type="button"
                      className="btn btn-info col-sm-3"
                      onClick={this.editTrip}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger
                                btn-block col-sm-3"
                      type="button"
                      id={trip.Id}
                      onClick={this.onClick}
                    >
                      Delete
                    </button>
                  </div>
                </Card>
                <br />
              </div>
            ))}
          </div>
        </Col>
      </React.Fragment>
    );
  }
}
export default DisplayTrips;
