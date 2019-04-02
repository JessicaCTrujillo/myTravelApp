import React from "react";
// import RegisterService from "../../services/RegisterService";
// import queryString from "query-string";
// import RegisterFormTemplate from "./RegisterFormTemplate";
import { Container, Row, Col } from "reactstrap";
import RegisterFormTemplate from "./RegisterFormTemplate";
import NavigationBar from "../landingPage/NavigationBar";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleInitial: "",
      lastName: "",
      email: "",
      password: ""
    };
  }

  onPostSuccess = resp => {
    console.log(resp);
    this.props.history.push("/login");
  };

  onPostError = error => {
    console.log(error);
  };

  render() {
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
          <RegisterFormTemplate
            onPostSuccess={this.onPostSuccess}
            onPostError={this.onPostError}
            onClick={this.onClick}
          />
        </Col>
      </React.Fragment>
    );
  }
}

export default RegisterPage;
