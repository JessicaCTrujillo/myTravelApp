import React from "react";
import {
  Button,
  // Collapse,
  Jumbotron
  // Navbar,
  // NavbarToggler,
  // NavbarBrand,
  // Nav,
  // NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
import { Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Carousel from "./Carousel";
import { white } from "ansi-colors";
import { componentFromStreamWithConfig } from "recompose";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <div>
          <Jumbotron
            style={{
              backgroundSize: "100% 100%",
              height: "70vh",
              width: "100vw",
              justifyContent: "center",
              backgroundImage: `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80)`
            }}
          >
            <h1 className="display-3 text-white" style={{ color: white }}>
              <img src="https://firebasestorage.googleapis.com/v0/b/mytravelapp-1553555775757.appspot.com/o/images%2Fcawm.png?alt=media&token=bff9b2f0-e101-42ca-a475-12c3d6426207" />
            </h1>
            <p className="lead text-white" style={{ color: white }}>
              Create trips and invite people to join you.
            </p>
            <p className="lead">
              <Button color="primary" href="/register">
                Register
              </Button>
            </p>
          </Jumbotron>
        </div>
        <Carousel />
      </React.Fragment>
    );
  }
}
