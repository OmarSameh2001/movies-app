import { useState } from "react";

function Register() {
    const [showError, setShowError] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    nameError: null,
    emailError: null,
    usernameError: null,
    passwordError: null,
    confirmPasswordError: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formErrors.nameError || formErrors.emailError || formErrors.usernameError || formErrors.passwordError || formErrors.confirmPasswordError){
        setShowError(true);
        return
    }
    alert("FORM SUBMITTED" + JSON.stringify(formValues));
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setFormValues({
        ...formValues,
        name: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        nameError: e.target.value.length === 0 ? "Required" : null,
      });
    }
    if (e.target.name === "email") {
      setFormValues({
        ...formValues,
        email: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        emailError:
          e.target.value.length === 0
            ? "Required"
            : !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                e.target.value
              )
            ? "Invalid email format"
            : null,
      });
    }
    if (e.target.name === "username") {
      setFormValues({
        ...formValues,
        username: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        usernameError: e.target.value.length === 0 ? "Required" : null,
      });
    }
    if (e.target.name === "password") {
      setFormValues({
        ...formValues,
        password: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        passwordError:
          e.target.value.length === 0
            ? "Required"
            : e.target.value.length < 8
            ? "Min length is 8 character"
            : null,
      });
    }
    if (e.target.name === "confirmPassword") {
      setFormValues({
        ...formValues,
        confirmPassword: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        confirmPasswordError: !formValues.password
          ? "Type password first"
          : e.target.value.length === 0
          ? "Required"
          : e.target.value.length < 8
          ? "Min length is 8 character"
          : e.target.value !== formValues.password
          ? "Password does not match"
          : null,
      });
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2>Register Form</h2>
      <hr />
      <form onSubmit={handleSubmit} style={{ maxWidth: "50vw" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${
              formErrors.nameError && showError ? "border-danger" : ""
            }`}
            id="exampleInputName"
            aria-describedby="emailHelp"
            value={formValues.name}
            onChange={handleChange}
            name="name"
          />
          {formErrors.nameError && showError && (
            <div id="nameHelp" className="form-text text-danger">
              {formErrors.nameError}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email
          </label>
          <textarea
            className={`form-control ${
              formErrors.emailError && showError ? "border-danger" : ""
            }`}
            id="exampleInputEmail"
            rows={5}
            value={formValues.email}
            onChange={handleChange}
            name="email"
          >
            {" "}
          </textarea>
          {formErrors.emailError && showError && (
            <div id="emailHelp" className="form-text text-danger">
              {formErrors.emailError}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">
            Username
          </label>
          <textarea
            className={`form-control ${
              formErrors.usernameError && showError ? "border-danger" : ""
            }`}
            id="exampleInputUsername"
            rows={1}
            value={formValues.username}
            onChange={handleChange}
            name="username"
          >
            {" "}
          </textarea>
          {formErrors.usernameError && showError && (
            <div id="usernameHelp" className="form-text text-danger">
              {formErrors.usernameError}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <textarea
            className={`form-control ${
              formErrors.passwordError && showError ? "border-danger" : ""
            }`}
            id="exampleInputPassword"
            rows={1}
            value={formValues.password}
            onChange={handleChange}
            name="password"
          >
            {" "}
          </textarea>
          {formErrors.passwordError && showError && (
            <div id="passwordHelp" className="form-text text-danger">
              {formErrors.passwordError}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <textarea
            className={`form-control ${
              formErrors.confirmPasswordError && showError ? "border-danger" : ""
            }`}
            id="exampleInputPConfirmPassword"
            rows={1}
            value={formValues.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          >
            {" "}
          </textarea>
          {formErrors.confirmPasswordError && showError && (
            <div id="confirmPasswordHelp" className="form-text text-danger">
              {formErrors.confirmPasswordError}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
