import React from "react";
import AccountsService from "../../services/AccountServices";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormGroup, Label, Input, Col } from "reactstrap";
import { whiteBright } from "ansi-colors";
// import Facebook from "../facebook/Facebook";
// import GoogleAuth from "../google/GoogleAuth";

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .required("Password Required")
    .min(6, "Minimum of 6 Characters")
    .max(100, "Maximum 100 characters"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  )
});

const RegisterFormTemplate = props => {
  return (
    <Col
      style={{
        padding: "0%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="col-sm-6  animated fadeIn faster" id="registerCard">
        <header className="card-header">
          <h2 className="card-title  mt-2" style={{ textAlign: "center" }}>
            Register
          </h2>
        </header>
        <article className="card-body">
          <Formik
            enableReinitialize={true}
            initialValues={{
              firstName: props.firstName,
              middleInitial: props.middleInitial,
              lastName: props.lastName,
              email: props.email,
              password: ""
            }}
            validationSchema={props.registerSchema}
            onSubmit={(values, actions) => {
              AccountsService.register(
                values,
                props.onPostSuccess,
                props.onPostError
              );
              actions.setSubmitting(false);
            }}
            render={({
              handleSubmit,
              isSubmitting,
              handleChange,
              handleBlur,
              onClick
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  {/* <Label>First Name</Label> */}
                  <Input
                    type="firstName"
                    value={props.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Middle Initial</Label> */}
                  <Input
                    type="middleInitial"
                    value={props.middleInitial}
                    placeholder="Middle Initial"
                    name="middleInitial"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Last Name</Label> */}
                  <Input
                    type="lastName"
                    value={props.lastName}
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Email</Label> */}
                  <Input
                    type="email"
                    value={props.email}
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Password</Label> */}
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>{" "}
                <FormGroup>
                  {/* <Label>Confirm Password</Label> */}
                  <Input
                    type="password"
                    name="passwordConfirm"
                    placeholder="ConfirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  <button
                    className="form-control btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Register
                  </button>

                  <div className="text-center">
                    Have an account?{" "}
                    <a href="/login" className="">
                      Log In
                    </a>
                  </div>
                </FormGroup>
              </Form>
            )}
          />
        </article>
      </div>
    </Col>
  );
};

export default RegisterFormTemplate;
