import React from "react";
import { Formik } from "formik";
import "./_authForm.scss";

const AuthorizationForm = () => {
  const formValues = { username: "", password: "" };
  const validateForm = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  // const onSubmit = async (
  //   // values,
  //   // { setSubmitting, setErrors, setStatus, resetForm }
  // // ) => {
  // //   console.log(values);
  // //   const headers = new Headers();
  // //   headers.append("Content-Type", "application/json");
  // //   await axios
  // //     .post(
  // //       "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/authorization",
  // //       values,
  // //       headers
  // //     )
  // //     .then((response) => {
  // //       console.log(response);
  // //       // setStatus({confirm: response});
  // //     })
  // //     .catch((error) => {
  // //       const errorResponse = error.response.data;
  // //       setErrors({ username: errorResponse.message.ua });
  // //       console.log("ERROR", errorResponse.request);
  // //     });
  // };

  const onSubmit = () => {
    let message = document.getElementById("message");
    message.innerHTML = "You Entered";
  };
  return (
    <>
      <div className="c-auth-form">
        <div className="c-auth-form__wrapper">
          <div className="c-auth-form__title">
            <h3 className="e-auth-form__title">I already have an account</h3>
          </div>

          <Formik
            initialValues={{ formValues }}
            validate={(values) => validateForm(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="c-form-authorization">
                <span className="c-form-authorization__text">
                  Enter your user name
                </span>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  style={{ width: "100%" }}
                  className="c-form-authorization__input username"
                />

                <p style={{ textAlign: "end", height: "20px" }}>
                  {errors.username && touched.username && errors.username}
                </p>
                <span className="c-form-authorization__text">
                  Enter your password
                </span>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="c-form-authorization__input password"
                />

                <p style={{ textAlign: "end", height: "20px" }} id="message">
                  {errors.password && touched.password && errors.password}
                </p>
                <button
                  className="c-form-authorization__btn"
                  type="submit"
                  disabled={isSubmitting}
                  onClick={onSubmit}
                >
                  Log In
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AuthorizationForm;
