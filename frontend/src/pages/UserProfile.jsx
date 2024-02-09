import { faCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("id") || !localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [localStorage.getItem("id"), localStorage.getItem("token")]);
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="pt-5 pb-5 px-10 md:px-14 flex flex-row gap-10 ">
            <div className="shadow-lg p-2 w-72 h-40 ">
              <p className="text-lg md:text-xl font-semibold pl-5 pb-2">
                Filter
              </p>
              <hr />
              <h1 className="pt-3 pb-2 pl-3 text-gray-400 hover:text-orange-400 cursor-pointer hover:underline text-lg">
                Delivered
              </h1>
              <h1 className="pt-3 pb-2 pl-3 text-gray-400 hover:text-orange-400 cursor-pointer hover:underline text-lg">
                Canceled
              </h1>
            </div>

            <div className="pt-3 pb-3 px-5 md:pb-10 flex flex-col justify-between items-center gap-5">
              {/* cards */}
              <div className="shadow-md border rounded-md p-2 flex items-center hover:border-orange-400 cursor-pointer gap-10">
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
                <div className="flex flex-col items-center">
                  <h1 className=" text-sm font-semibold">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-green-500 pr-3"
                    />
                    Ordered On
                  </h1>
                  <span>08/02/2024</span>
                </div>
                <button className="bg-red-500 text-white p-1 rounded-lg">
                  <FontAwesomeIcon icon={faTrash} className="px-2" />
                  cancel
                </button>
              </div>

              {/* end cards */}
              {/* cards */}
              <div className="shadow-md border rounded-md p-2 flex items-center hover:border-orange-400 cursor-pointer gap-10">
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
                <div className="flex flex-col items-center">
                  <h1 className=" text-sm font-semibold">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-green-500 pr-3"
                    />
                    Ordered On
                  </h1>
                  <span>08/02/2024</span>
                </div>
                <button className="bg-red-500 text-white p-1 rounded-lg">
                  <FontAwesomeIcon icon={faTrash} className="px-2" />
                  cancel
                </button>
              </div>

              {/* end cards */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserProfile;
