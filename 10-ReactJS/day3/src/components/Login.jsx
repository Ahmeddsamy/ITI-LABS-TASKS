import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();
  async function login(userData) {
    console.log(userData);
    let { data } = await axios.post("http://localhost:4000/signin", userData);
    console.log(data);
    if (data.message == "Welcome Home") {
      navigate("/");
      localStorage.setItem("token", data.token);
    }
  }
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required Field"),
    password: Yup.string().required("Password Required"),
  });
  let loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: login,
  });

  return (
    <form className="w-50 mx-auto my-5" onSubmit={loginForm.handleSubmit}>
      <div>
        <label htmlFor="">Email:</label>
        <input
          name="email"
          className="form-control mb-3"
          type="email"
          value={loginForm.values.email}
          onChange={loginForm.handleChange}
          onBlur={loginForm.handleBlur}
        />
        {loginForm.errors.email && loginForm.touched.email ? (
          <div className="alert alert-danger">{loginForm.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="">Password:</label>
        <input
          name="password"
          className="form-control mb-3"
          type="password"
          value={loginForm.values.password}
          onChange={loginForm.handleChange}
          onBlur={loginForm.handleBlur}
        />
        {loginForm.errors.password && loginForm.touched.password ? (
          <div className="alert alert-danger">{loginForm.errors.password}</div>
        ) : null}
      </div>

      <button className="btn btn-info my-2 ms-auto d-block">Login</button>
    </form>
  );
}
