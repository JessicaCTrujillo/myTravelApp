import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";
import AccountService from "../../services/AccountServices";
import NavigationBar from "../landingPage/NavigationBar";

class SpecialsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    AccountService.getTripSpecials(this.onGetAllTripsSuccess, this.onError);
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

  render() {
    // console.log("===================", this.state.trips);
    // const style = { marginBottom: 12, marginLeft: 12 };
    return (
      <React.Fragment>
        <NavigationBar />
        <Col
          style={{
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80)`
          }}
        >
          <h1 style={{ textAlign: "center" }}>Travel Deals!</h1>
          {this.state.trips.map(trip => (
            <div>
              <Card
                body
                outline
                color="secondary"
                className="col-md-4 offset-4"
              >
                <CardTitle>{trip.Title}</CardTitle>
                <CardText>{trip.Price}</CardText>
                <a href={trip.Link}>Click here for this trip!</a>
              </Card>
              <br />
            </div>
          ))}
        </Col>
      </React.Fragment>
    );
  }
}
export default SpecialsList;
