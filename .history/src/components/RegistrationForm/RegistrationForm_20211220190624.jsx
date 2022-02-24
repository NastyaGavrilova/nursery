import React from "react";
import { Formik } from "formik";
import axios from "axios";
import "./_registerForm.scss";

const RegistrationForm = () => {
  const formValues = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  };
  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
      if (!values.username) {
        errors.username = "Required";
        if (!values.firstName) {
          errors.firstName = "Required";
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (!values.confirm) {
            errors.confirm = "Required";
          } else if (values.confirm !== values.password) {
            errors.confirm = "Password mismatch";
          }
        }
      }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    console.log(values);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    await axios
      .post(
        "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration",
        values,
        headers
      )
      .then((response) => {
        if (response.success) {
          document.getElementById("success").innerHTML = "User Added";
        }
      })
      .catch((error) => {
        const errorResponse = error.response.data;
        setErrors({ email: errorResponse.message.ua });
        console.log("ERROR", errorResponse.request);
      });
  };

  return (
    <>
      <div className="c-register-form">
        <div className="c-register-form__wrapper">
          <div className="c-register-form__title">
            <h3 className="e-register-form__title">I don't have an account</h3>
          </div>
          <Formik
            initialValues={{ formValues }}
            validate={(values) => validateForm(values)}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="c-form-registration">
                <span className="c-form-registration__text">
                  Enter your user name
                </span>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className="c-form-registration__input username"
                />

                <p
                  style={{ textAlign: "end", height: "20px" }}
                  className="error"
                >
                  {errors.username && touched.username && errors.username}
                </p>
                <span className="c-form-registration__text">
                  Enter your name
                </span>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className="c-form-registration__input name"
                />

                <p
                  style={{ textAlign: "end", height: "20px" }}
                  className="error"
                >
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
                <p
                  style={{ textAlign: "end", height: "20px" }}
                  id="success"
                ></p>
                <span className="c-form-registration__text">
                  Enter your surname
                </span>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  style={{ width: "100%" }}
                  className="c-form-registration__input surname"
                />

                <p
                  style={{ textAlign: "end", height: "20px" }}
                  className="error"
                >
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
                <span className="c-form-registration__text">
                  Enter your email
                </span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  style={{ width: "100%" }}
                  className="c-form-registration__input email"
                />

                <p
                  style={{ textAlign: "end", height: "20px" }}
                  className="error"
                >
                  {errors.email && touched.email && errors.email}
                </p>
                <span className="c-form-registration__text">
                  Enter your password
                </span>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="c-form-registration__input password"
                />

                <p
                  style={{ textAlign: "end", height: "20px" }}
                  className="error"
                >
                  {errors.password && touched.password && errors.password}
                </p>
                <span className="c-form-registration__text">
                  Confirm your password
                </span>
                <input
                  type="password"
                  name="confirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm}
                  className="c-form-registration__input confirm"
                />

                <p
                  style={{ textAlign: "end", height: "20px" }}
                  className="error"
                >
                  {errors.confirm && touched.confirm && errors.confirm}
                </p>
                <p
                  style={{ textAlign: "end", height: "20px" }}
                  id="success"
                ></p>
                <button
                  className="c-form-registration__btn "
                  type="submit"
                  disabled={isSubmitting}
                  // onClick={(e) => e.preventDefault()}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
