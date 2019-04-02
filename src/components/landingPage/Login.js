import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, withRouter } from "react-router-dom";
// import Facebook from "../facebook/Facebook";
import { Container, Row, Col } from "reactstrap";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";
import { login } from "../../Actions";
import AccountsService from "../../services/AccountServices";

const mapStateToProps = state => {
  return {
    email: state.profile.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: email => dispatch(login(email))
  };
};

class Login extends React.Component {
  handleSubmit = values => {
    this.props.login(values.email);
    AccountsService.login(values, this.onLoginSuccess, this.onError);
  };

  onLoginSuccess = resp => {
    this.props.history.push("/displayTrips");
  };

  onError = error => {
    console.log(error);
  };

  render() {
    const loginSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid email")
        .required("Required"),
      password: Yup.string()
        .min(6, "Minimum of 6 characters")
        .max(50, "Too long")
        .required("Required")
    });

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 100,
              paddingBottom: 100
            }}
          >
            <h2 className="">
              Log In
              <hr />
            </h2>

            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              validationSchema={loginSchema}
              onSubmit={this.handleSubmit}
              render={formProps => {
                return (
                  <Form>
                    <div className="form-group ">
                      <label>Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        style={{
                          width: "25vw"
                        }}
                      />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="form-group ">
                      <label>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        style={{
                          width: "25vw"
                        }}
                      />
                      <ErrorMessage name="password" />
                    </div>
                    <div className="form-group">
                      <button
                        className="form-control btn-primary"
                        type="submit"
                        disabled={formProps.isSubmitting}
                        style={{
                          width: "25vw"
                        }}
                      >
                        Sign In
                      </button>
                    </div>
                    <br />
                  </Form>
                );
              }}
            />

            {/* <Facebook type="SignIn" /> */}
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
