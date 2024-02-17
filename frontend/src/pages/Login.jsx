import React from "react";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addCustomer } from "../slices/Customerslice";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("/api/login/", {
        username: values.name,
        password: values.password,
      });

      setSubmitting(false);

      if (response.data.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        toast.success(response.data.message);
        dispatch(addCustomer(response.data.username));
        navigate("/");
      } else {
        toast.warning(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="border shadow-lg hover:shadow-2xl bg-white rounded-lg md:w-[55rem]">
        <div className="flex items-center gap-5 flex-col md:flex-row md:p-0">
          <div className="">
            <img
              src="/images/login-bg.jpg"
              alt=""
              className="object-fill w-96 h-96 md:h-[35rem] md:w-[28em]"
            />
          </div>
          <div className="font-mono">
            <h2 className="text-xl md:text-2xl">Login</h2>
            <small>Track your order, create wishlist & more</small>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="pt-3 flex flex-col justify-between items-center pr-2">
                  <Field
                    type="text"
                    name="name"
                    placeholder="User Name"
                    className="w-50 md:w-80 rounded-md"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="error text-xs text-red-500"
                  />

                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-50 md:w-80 rounded-md mt-5 mr-1"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="error text-xs text-red-500"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="p-2 ml-5 rounded-lg text-white bg-gradient-to-r mt-5 from-orange-500 to-orange-300 w-60 h-10 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-500"
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                </Form>
              )}
            </Formik>
            <p className="pt-3 pb-3 text-base text-center">
              New to Woodenstreet?{" "}
              <Link to="/register" className="text-orange-400 cursor-pointer">
                Register Here
              </Link>{" "}
            </p>
            <hr />
            <p className="text-center pt-3 text-gray-500 items-center">
              OR Continue With{" "}
              <span className="text-orange-300 hover:text-orange-700 text-xl cursor-pointer">
                <FontAwesomeIcon icon={faGoogle} />
              </span>{" "}
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-400 cursor-pointer text-xl hover:text-blue-600"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
