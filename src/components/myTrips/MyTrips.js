import React from "react";
import TripsService from "../../services/TripsService";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormGroup, Label, Input, Col } from "reactstrap";
import { GoogleMap } from "react-google-maps";
import FileUpload from "../fileUpload/FileUpload";
import { blueBright, bgGreen } from "ansi-colors";

const TripFormTemplate = props => {
  return (
    <Col
      style={{
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80)`,
        padding: "0%",
        justifyContent: "center",
        alignItems: "center"
        
      }}
    >
      <div
        className="col-sm-4 offset-4 card animated fadeIn faster"
        id="registerCard"
      >
        <header className="card-header">
          <h4 className="card-title mt-2" style={{ textAlign: "center" }}>
            Create a Trip
          </h4>
        </header>
        <article className="card-body">
          <Formik
            enableReinitialize={true}
            initialValues={{
              id: props.id,
              image: props.image,
              title: props.title,
              startDate: props.startDate,
              endDate: props.endDate,
              location: props.location,
              description: props.description,
              submitBtnText: props.submitBtnText
            }}
            onSubmit={(values, actions) => {
              if (!values.id) {
                TripsService.register(
                  values,
                  props.onPostSuccess,
                  props.onPostError
                );
              } else {
                TripsService.update(
                  values,
                  props.onPostSuccess,
                  props.onPostError
                );
              }
              actions.setSubmitting(false);
              console.log(values);
            }}
            render={({
              values,
              handleSubmit,
              isSubmitting,
              handleChange,
              handleBlur
            }) => (
              <Form key={values.id}>
                <FormGroup>
                  <FileUpload
                    value={values.image}
                    changeImageState={props.changeImageState}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Title</Label> */}
                  <Input
                    type="text"
                    value={values.title}
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    value={values.startDate}
                    placeholder="Start Date"
                    name="startDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    value={values.endDate}
                    placeholder="End Date"
                    name="endDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Location</Label> */}
                  <Input
                    type="text"
                    value={values.location}
                    placeholder="Location"
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label>Description</Label> */}
                  <Input
                    type="textarea"
                    value={values.description}
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>

                <FormGroup>
                  <button
                    className="btn btn-primary
                                            btn-block"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Create Trip
                  </button>
                  <button
                    className="btn btn-danger
                                            btn-block"
                    type="button"
                    disabled={isSubmitting}
                    onClick={props.onClick}
                  >
                    Cancel
                  </button>
                </FormGroup>
              </Form>
            )}
          />
        </article>
      </div>
    </Col>
  );
};
export default TripFormTemplate;
