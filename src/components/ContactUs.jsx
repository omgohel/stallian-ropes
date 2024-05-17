import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify
import Spinner from "react-bootstrap/Spinner";

const ContactUs = () => {
  const { Formik } = formik;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    phone: yup.number().required("Contact number is required"),
    name: yup.string().required("Name is required"),
    message: yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true); // Set form submission state to true
    try {
      await axios.post(
        "https://stallian-ropes-backend.onrender.com/sendmail",
        values
      );
      resetForm();
      toast.success("Thank you for contacting us!"); // Show success toast
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong"); // Show error toast
    } finally {
      setIsSubmitting(false); // Reset form submission state to false regardless of success or failure
    }
  };

  return (
    <div id="contactUs" className="row d-flex align-items-center">
      <div className="col-lg-6 text-left">
        <h1 className="fw-bold">
          <span style={{ color: "#006BB5" }}>Contact</span> with us today
        </h1>
        <p>
          Let's start a conversation to discover comprenhensive solutions for
          all your rope requirements.
        </p>
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            email: "",
            phone: "",
            name: "",
            message: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="validationFormikName">
                <Form.Label>
                  Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={touched.name && !!errors.name}
                  placeholder="Enter name"
                  className="custom-input"
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">
                  {touched.name && errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationFormikEmail">
                <Form.Label>
                  Email <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && !!errors.email}
                  placeholder="Enter email"
                  className="custom-input"
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">
                  {touched.email && errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="validationFormikContactNo"
              >
                <Form.Label>
                  Contact No <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={touched.phone && !!errors.phone}
                  placeholder="Enter contact number"
                  className="custom-input"
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">
                  {touched.phone && errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationFormikMessage">
                <Form.Label>
                  Message <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={touched.message && !!errors.message}
                  placeholder="Enter message"
                  className="custom-input"
                />
                <Form.Control.Feedback type="invalid">
                  {touched.message && errors.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                type="submit"
                className="button-class"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Get in touch"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="col-lg-6">
        <img
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "617px",
            maxHeight: "400px",
          }}
          src="/contact-us/map.png"
        />
      </div>
    </div>
  );
};

export default ContactUs;
