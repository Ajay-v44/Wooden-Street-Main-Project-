import React, { useState } from "react";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const Login = () => {
  const navigate=useNavigate()
  const [datas, Setdatas] = useState({
    name: "",
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
        "/api/login/",
        {
          username: datas.name,
          password: datas.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      localStorage.setItem("token",resposnse.data.token)
      localStorage.setItem("id",resposnse.data.id)
      console.log("token",localStorage.getItem('token'),"id",localStorage.getItem('id'))
      navigate('/')
      Setdatas({ name: "", password: "" });
      if (resposnse.data.status === 200) {
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
              src="/images/login-bg.jpg"
              alt=""
              className="object-fill w-96 h-96 md:h-[35rem]  md:w-[28em]"
            />
          </div>
          <div className="font-mono">
            <h2 className="text-xl md:text-2xl">Login</h2>
            <small>Track your order, create wishlist & more</small>
            <form
              className="pt-3 flex flex-col justify-between items-center pr-2"
              onSubmit={handleOnSubmit}
            >
              <input
                type="text"
                name="name"
                id=""
                value={datas.name}
                onChange={handleOnChange}
                placeholder=" User Name"
                className="w-50 md:w-80 rounded-md "
                required
                minLength={3}
              />

              <input
                type="password"
                name="password"
                value={datas.password}
                id=""
                onChange={handleOnChange}
                placeholder="Password"
                className="w-50 md:w-80 rounded-md mt-5 mr-1"
                required
                minLength={5}
                pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
              />

              <button className="p-2 ml-5 rounded-lg text-white bg-gradient-to-r mt-3 from-orange-500 to-orange-300 w-60 h-10 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-500 ">
                Login
              </button>
            </form>
            <p className="pt-3 pb-3 text-base text-center">
              {" "}
              New to Woodenstreet?{" "}
              <Link to={"/register"} className="text-orange-400 cursor-pointer">
                Register Here
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

export default Login;
