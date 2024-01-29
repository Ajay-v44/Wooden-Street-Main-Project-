import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
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
        <img
          src="/images/Wooden_Street-Logo.wine.png"
          alt="logo"
          width={"250px"}
        />

        <form>
          <div className="flex">
            <label
              for="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>

            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            ></div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5  z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 rounded-l-md"
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
          <div className="flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faStore} className="text-orange-300" />

            <p className="">Stores</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="text-orange-300" />

            <p className="text-base">Profile</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faHeart} className="text-orange-300" />

            <p className="text-base">Whishlist (0)</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-orange-300"
            />

            <p className="text-base">Cart (0)</p>
          </div>
        </div>
      </div>
      <div className="md:mx-40 mx-0 flex justify-between items-center text-gray-500 ">
        <h5 className="hover:text-orange-300 hover:underline ">Sofas</h5>
        <h5 className="hover:text-orange-300 hover:underline ">Living</h5>
        <h5 className="hover:text-orange-300 hover:underline ">Bedroom</h5>
        <h5 className="hover:text-orange-300 hover:underline ">
          Dining & Kitchen
        </h5>
        <h5 className="hover:text-orange-300 hover:underline ">Storage</h5>
        <h5 className="hover:text-orange-300 hover:underline ">
          Study & Office
        </h5>
      </div>
      <hr className="mt-3 " />
    </>
  );
};

export default Header;
