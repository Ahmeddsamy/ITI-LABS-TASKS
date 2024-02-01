import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  let navigate = useNavigate();
  async function register(userData) {
    console.log(userData);
    let { data } = await axios.post("http://localhost:4000/signup", userData);
    console.log(data);
    if (
      data.message == "user email already registered" ||
      "User created successfully"
    ) {
      navigate("/auth/login");
    }
  }
  const validationSchema = Yup.object({
    userName: Yup.string()
      .max(20, "Name is Long")
      .min(3, "Name is Short")
      .required("Required Field"),
    email: Yup.string().email("Invalid Email").required("Required Field"),
    password: Yup.string().required("Password Required"),
    Cpassword: Yup.string()
      .required("Password Required")
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password Should Match"
      ),
    phoneNumber: Yup.string().required("Required Field"),
    addresses: Yup.array().of(
      Yup.object().shape({
        street: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
      })
    ),
  });
  let registerForm = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      Cpassword: "",
      phoneNumber: "",
      addresses: [{ street: "", city: "", country: "" }],
    },
    validationSchema,
    onSubmit: register,
  });
  // Function to handle changes in address fields
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    const updatedAddresses = registerForm.values.addresses.map(
      (address, index) => {
        if (index === 0) {
          // Assuming single address for simplicity
          return { ...address, [name]: value };
        }
        return address;
      }
    );

    registerForm.setFieldValue("addresses", updatedAddresses);
  };
  return (
    <form className="w-50 mx-auto my-5" onSubmit={registerForm.handleSubmit}>
      <div className="form-groug mb-3 ">
        <label htmlFor="">User Name:</label>
        <input
          name="userName"
          className="form-control mb-3"
          type="text"
          value={registerForm.values.userName}
          onChange={registerForm.handleChange}
          onBlur={registerForm.handleBlur}
        />
        {registerForm.errors.userName && registerForm.touched.userName ? (
          <div className="alert alert-danger">
            {registerForm.errors.userName}
          </div>
        ) : null}
      </div>

      <div>
        <label htmlFor="">Email:</label>
        <input
          name="email"
          className="form-control mb-3"
          type="email"
          value={registerForm.values.email}
          onChange={registerForm.handleChange}
          onBlur={registerForm.handleBlur}
        />
        {registerForm.errors.email && registerForm.touched.email ? (
          <div className="alert alert-danger">{registerForm.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="">Password:</label>
        <input
          name="password"
          className="form-control mb-3"
          type="password"
          value={registerForm.values.password}
          onChange={registerForm.handleChange}
          onBlur={registerForm.handleBlur}
        />
        {registerForm.errors.password && registerForm.touched.password ? (
          <div className="alert alert-danger">
            {registerForm.errors.password}
          </div>
        ) : null}
      </div>

      <div>
        <label htmlFor="">Confirm Password: </label>
        <input
          name="Cpassword"
          className="form-control mb-3"
          type="password"
          value={registerForm.values.Cpassword}
          onChange={registerForm.handleChange}
          onBlur={registerForm.handleBlur}
        />
        {registerForm.errors.Cpassword && registerForm.touched.Cpassword ? (
          <div className="alert alert-danger">
            {registerForm.errors.Cpassword}
          </div>
        ) : null}
      </div>

      <div>
        <label htmlFor="">Phone Number:</label>
        <input
          name="phoneNumber"
          className="form-control mb-3"
          type="tel"
          value={registerForm.values.phoneNumber}
          onChange={registerForm.handleChange}
          onBlur={registerForm.handleBlur}
        />
        {registerForm.errors.phoneNumber && registerForm.touched.phoneNumber ? (
          <div className="alert alert-danger">
            {registerForm.errors.phoneNumber}
          </div>
        ) : null}
      </div>

      {/* Address fields */}
      {registerForm.values.addresses.map((address, index) => (
        <div key={index}>
          <label htmlFor="">Address</label>
          <hr />
          <label htmlFor="">Street:</label>
          <input
            name={`addresses[${index}].street`}
            className="form-control mb-3"
            type="text"
            value={address.street}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          {registerForm.errors.addresses?.[index]?.street &&
            registerForm.touched.addresses?.[index]?.street && (
              <div className="alert alert-danger">
                {registerForm.errors.addresses[index].street}
              </div>
            )}

          <label htmlFor="">City:</label>
          <input
            name={`addresses[${index}].city`}
            className="form-control mb-3"
            type="text"
            value={address.city}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          {registerForm.errors.addresses?.[index]?.city &&
            registerForm.touched.addresses?.[index]?.city && (
              <div className="alert alert-danger">
                {registerForm.errors.addresses[index].city}
              </div>
            )}

          <label htmlFor="">Country:</label>
          <input
            name={`addresses[${index}].country`}
            className="form-control mb-3"
            type="text"
            value={address.country}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          {registerForm.errors.addresses?.[index]?.country &&
            registerForm.touched.addresses?.[index]?.country && (
              <div className="alert alert-danger">
                {registerForm.errors.addresses[index].country}
              </div>
            )}
        </div>
      ))}
      <button className="btn btn-info my-2 ms-auto d-block">Register</button>
    </form>
  );
}
