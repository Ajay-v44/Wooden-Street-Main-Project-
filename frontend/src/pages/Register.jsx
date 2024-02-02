import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [datas, Setdatas] = useState({
    name: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    let names = e.target.name;
    let val = e.target.value;
    Setdatas((prev) => {
      return { ...prev, [names]: val };
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposnse = await axios.post(
        "/api/register/",
        {
          username: datas.name,
          first_name: datas.fname,
          last_name: datas.lname,
          email: datas.email,
          password: datas.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Setdatas({ name: "", fname: "", lname: "", email: "", password: "" });

      console.log(resposnse.data.message);

      if (resposnse.data.status === 201) {
        toast.success(resposnse.data.message);
      } else {
        toast.warning(resposnse.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="  border  shadow-lg hover:shadow-2xl bg-white  rounded-lg  md:w-[55rem] ">
        <div className="flex items-center gap-5 flex-col md:flex-row   md:p-0">
          <div className="">
            <img
              src="/images/reg.jpg"
              alt=""
              className="object-fill w-96 h-96 md:h-[35rem]  md:w-[28em]"
            />
          </div>
          <div className="font-mono">
            <h2 className="text-xl md:text-2xl">Register</h2>
            <small>Get exclusive discounts, newsletters and more</small>
            <form
              className="pt-3 flex flex-col justify-between items-center pr-2"
              onSubmit={handleOnSubmit}
            >
              <input
                type="text"
                name="name"
                id=""
                value={datas.name}
                placeholder=" User Name"
                className="w-50 md:w-80 rounded-md "
                required
                minLength={3}
                onChange={handleOnChange}
              />
              <div className="flex gap-1 pt-5">
                <input
                  type="text"
                  name="fname"
                  value={datas.fname}
                  placeholder=" First Name"
                  className="w-40 md:w-40 rounded-md "
                  required
                  minLength={3}
                  onChange={handleOnChange}
                />
                <input
                  type="text"
                  name="lname"
                  value={datas.lname}
                  placeholder=" Last Name"
                  className="w-40 md:w-40 rounded-md "
                  required
                  minLength={3}
                  onChange={handleOnChange}
                />
              </div>
              <input
                type="email"
                name="email"
                value={datas.email}
                id=""
                placeholder="Email"
                className="w-50 md:w-80 rounded-md mt-5"
                required
                minLength={5}
                onChange={handleOnChange}
              />

              <div className="relative flex">
                <input
                  type="password"
                  name="password"
                  value={datas.password}
                  id=""
                  placeholder="Password"
                  className="w-50 md:w-80 rounded-md mt-5 mr-1"
                  required
                  minLength={5}
                  onChange={handleOnChange}
                />

                <button
                  data-tooltip-target="tooltip-dark"
                  type="button"
                  className="text-green-500 pt-3"
                >
                  ?
                </button>

                <div
                  id="tooltip-dark"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Password can contain alphabets, numbers and underscore. It
                  should contain a minimum of 8 and a maximum of 12 characters.
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <p className="text-xs pt-3">
                By continuing, I agree to the{" "}
                <span className="text-orange-400 cursor-pointer">
                  Terms of Use{" "}
                </span>
                &{" "}
                <span className="text-orange-300 cursor-pointer">
                  Privacy Policy
                </span>
              </p>
              <button className="p-2 ml-5 rounded-lg text-white bg-gradient-to-r mt-3 from-orange-500 to-orange-300 w-60 h-10 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-500 ">
                REGISTER
              </button>
            </form>
            <p className="pt-3 pb-3 text-base text-center">
              {" "}
              Already have an account?{" "}
              <Link to={"/login"} className="text-orange-400 cursor-pointer">
                Sign in
              </Link>{" "}
            </p>
            <hr />
            <p className="text-center pt-3 text-gray-500 items-center">
              OR Continue With{" "}
              <span className="text-orange-300 hover:text-orange-700 text-xl cursor-pointer">
                {" "}
                <FontAwesomeIcon icon={faGoogle} />
              </span>{" "}
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-400  cursor-pointer  text-xl hover:text-blue-600"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
