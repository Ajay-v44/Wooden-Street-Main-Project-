import {
  faArrowRight,
  faCircle,
  faCoins,
  faDownload,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Detailedorder = () => {
  return (
    <div className="pt-3 pb-3 px-10 md:px-20">
      <div className="flex justify-start text-center gap-2">
        <Link to={"/"} className="text-sm text-gray-600 hover:text-orange-400">
          Home
        </Link>
        <div>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="flex justify-start text-center gap-2">
          <Link
            to={"/userprofile"}
            className="text-sm text-gray-600 hover:text-orange-400"
          >
            UserProfile
          </Link>
          <div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className="flex justify-start text-center gap-2">
          <Link
            to={"/detailorder"}
            className="text-sm text-gray-600 hover:text-orange-400"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="mt-3 border-r-none md:border-r shadow-md flex flex-col md:flex-row cursor-pointer items-center justify-center gap-5 md:gap-20">
        <div className="pt-3 pb-3 border-r px-4">
          <h1 className="text-xl ">
            Delivery Address{" "}
            <FontAwesomeIcon icon={faLocation} className="text-green-500" />{" "}
          </h1>
          <p className="text-sm pt-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            laborum facilis distinctio deleniti vitae. Soluta deleniti
          </p>
          <p className="text-lg pt-2">Phone number</p>
          <p> 123456789,123456789</p>
        </div>
        <div className="pt-3 pb-3 border-r-none md:border-r pr-4">
          <h1 className="text-xl ">
            Reward{" "}
            <FontAwesomeIcon icon={faCoins} className="text-orange-500" />{" "}
          </h1>
          <p className="text-sm pt-2 text-justify">8 SuperCoins Cashback</p>
          <small className="text-gray-400">
            Use it to save on your next order
          </small>
        </div>
        <div className="pt-3 pb-3  pr-4">
          <h1 className="text-xl ">
            Download
            <FontAwesomeIcon
              icon={faDownload}
              className="text-blue-500 pl-3"
            />{" "}
          </h1>
          <div className="flex gap-5 items-center">
            <p className="text-sm pt-2 text-justify">Download Invoice</p>
            <button className="border p-2 bg-blue-500 text-white rounded-md hover:bg-orange-400">
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-3 px-5 md:pb-10 flex flex-col justify-between items-center gap-5 w-auto ">
        {/* cards */}
        <div className="shadow-md border rounded-md p-2 flex items-center justify-between hover:border-orange-400 cursor-pointer gap-10 w-auto md:w-[85rem] h-auto md:h-60">
          <img
            src="https://rukminim2.flixcart.com/image/jxxkvww0/shoe/r/x/5/15545-6-walkaroo-black-grey-original-imafga85stnhaugk.jpeg"
            alt=""
            className="w-32 md:w-52"
          />
          <div>
            <h1 className="capitalize text-sm font-semibold">
              Walkaroo Walking shoe for men
            </h1>
            <small className="text-gray-400">Brand: walkaro</small>
          </div>
          <h1 className=" text-sm font-semibold"> RS 1000</h1>
          <div className="flex flex-col items-center ">
            <h1 className=" text-sm font-semibold">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-green-500 pr-3"
              />
              Ordered On  <span className="px-5">08/02/2024</span>
            </h1>
           
          </div>
          <div className="p-1 border rounded border-green-400 w-24 mx-3">
            <h2 className="text-lg text-center">Orderd</h2>

            

          </div>

        </div>
       
        {/* end cards */}

       <p className="text-lg text-orange-500 ">Status</p>
  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
   
    <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"15%"}}> ordered</div>
  </div>

      </div>

    </div>
  );
};

export default Detailedorder;
