import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faLocationDot,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTruck,
  faStore,
  faPhone,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = () => {
      setToken(localStorage.getItem("token"));
    };

    getToken();
  }, [localStorage.getItem("token")]);

  axios.defaults.withCredentials = true;

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/api/logout/",
        {},
        {
          headers: {
            Authorization: `token ${token}`,
          },
          withCredentials: true,
        }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("id");

      setToken(null);
      navigate("/");
      console.log("Logout response:", response);

      if (response.status === 200) {
        toast.info(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <>
      <div className="bg-slate-100 md:px-40 pl-10">
        <div className="flex pt-5 pb-3 justify-between items-center">
          <div className="flex justify-start gap-3 items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className=" font-normal text-base">
              Find a store
              <span className="font-extralight">
                -Enter Pincode
                <FontAwesomeIcon
                  icon={faPen}
                  className="text-orange-400 cursor-pointer"
                />
              </span>
            </p>
          </div>
          <div className="md:flex items-center ml-4 hidden md:visible ">
            <span className=" cursor-pointer">
              <FontAwesomeIcon icon={faPhone} />
              <span className="font-light hover:text-orange-500 pl-2">
                +91-9314444747
              </span>
            </span>
            <span className="pl-2 pr-2">|</span>
            <span className=" cursor-pointer">
              <FontAwesomeIcon icon={faTruck} className="" />
              <span className="font-light hover:text-orange-500 pl-2 ">
                Track Order
              </span>
            </span>
            <span className="pl-2 pr-2">|</span>
            <span className=" cursor-pointer">
              <FontAwesomeIcon icon={faCircleQuestion} className="" />
              <span className="font-light hover:text-orange-500 pl-2 ">
                Help Center
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-between"></div>
      </div>
      <div className="md:mx-40 mx-0 flex justify-between items-center flex-col md:flex-row">
        <Link to={"/"}>
          <img
            src="/images/Wooden_Street-Logo.wine.png"
            alt="logo"
            width={"250px"}
          />
        </Link>

        <form>
          <div className="flex">
            <label
              for="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>

            <div id="dropdown"></div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5  z-20 text-sm text-gray-100 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 rounded-l-md w-[15rem] md:w-[25rem]"
                placeholder="Search Products..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-400 rounded-e-lg border   focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <div className="flex gap-5 font-sans mt-5 md:mt-0 ">
          <Link
            to={"/product"}
            className="flex flex-col justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faStore}
              className="text-orange-300 text-2xl hover:text-orange-500"
            />

            <span className="text-xs hover:underline">Stores</span>
          </Link>

          <button
            id="dropdownDelayButton"
            data-dropdown-toggle="dropdownDelay"
            data-dropdown-delay="500"
            data-dropdown-trigger="hover"
            type="button"
          >
            <Link
              to={"/userprofile"}
              className="flex flex-col justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-orange-300 text-2xl hover:text-orange-500"
              />

              <span className="text-xs hover:underline">Profile</span>
            </Link>
          </button>

          <div
            id="dropdownDelay"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDelayButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              {token ? (
                ""
              ) : (
                <>
                  <li>
                    <Link
                      to={"/login"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/register"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <Link
            to={"/whishlist"}
            className="flex flex-col justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="text-orange-300 text-2xl hover:text-orange-500"
            />

            <span className="text-xs hover:underline">Whishlist (0)</span>
          </Link>
          <Link
            to={"/cart"}
            className="flex flex-col justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-orange-300 text-2xl hover:text-orange-500"
            />

            <span className="text-xs hover:underline">Cart (0)</span>
          </Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="block px-4 py-2 bg-red-600 text-white rounded-3xl"
            >
              <FontAwesomeIcon icon={faPowerOff} />
            </button>
          ) : (
            <h1></h1>
          )}
        </div>
      </div>
      <div className="md:mx-40 mx-0 flex justify-between items-center text-gray-500 ">
        <Link
          className="hover:text-orange-300 hover:underline "
          to={"products/sofa"}
        >
          Sofas
        </Link>
        <Link
          className="hover:text-orange-300 hover:underline  "
          to={"products/living"}
        >
          Living
        </Link>
        <Link
          className="hover:text-orange-300 hover:underline "
          to={"products/bed"}
        >
          Bedroom
        </Link>
        <Link
          className="hover:text-orange-300 hover:underline "
          to={"products/dining"}
        >
          Dining & Kitchen
        </Link>
        <Link
          className="hover:text-orange-300 hover:underline "
          to={"products/storage"}
        >
          Storage
        </Link>
        <Link
          className="hover:text-orange-300 hover:underline "
          to={"products/study"}
        >
          Study & Office
        </Link>
      </div>
      <hr className="mt-3 " />
    </>
  );
};

export default Header;
