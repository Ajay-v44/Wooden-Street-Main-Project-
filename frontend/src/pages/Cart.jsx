import { faBuyNLarge } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPlus,
  faSubtract,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = () => {
  return (
    <div className="pt-3 pb-2 px-5 md:px-32 bg-blue-50">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-[35rem] md:w-[50rem] mt-5 border-2 bg-white shadow-lg rounded-md">
          <div className="flex pt-2 px-2 justify-between items-center">
            <span className="font-semibold text-lg pr-10">My Cart (1)</span>

            <div
              className="flex
             items-center"
            >
              <span className="text-xl text-gray-400 pr-3">
                <FontAwesomeIcon icon={faLocationDot} className="pr-3" />
                Deliver to
              </span>
              <div class="relative w-60 ">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10"
                  placeholder="Enter location"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-1 bottom-1  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <hr className="mt-3" />
          {/* single item */}
          <div>
            <div className="pt-3 flex justify-start items-center px-2 pb-2 gap-10">
              <div className="w-32 h-28">
                <img src="/images/bed.webp" alt="" />
              </div>
              <div>
                <h2 className="text-sm font-semibold cursor-pointer hover:text-orange-300">
                  Adolph Sheesham Wood Bed With Side Storage
                </h2>
                <small className="text-gray-400">
                  Queen Size, Walnut Finish
                </small>
                <div className="pt-3 flex items-center">
                  <div className="flex items-center">
                    Quantity
                    <div className="border flex ml-2">
                      <div className="cursor-pointer border-r px-2">
                        <FontAwesomeIcon icon={faSubtract} />
                      </div>
                      <div className="px-4">1</div>
                      <div className="cursor-pointer border-l px-2">
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                  <h2 className="font-semibold text-xl">
                    <span className="pr-1 pl-2">Rs</span> 44,898
                  </h2>
                  <p className="text-green-400 pl-3">38% Off</p>
                </div>
              </div>
            </div>
            <div className="px-20 md:px-52 text-gray-400 flex gap-5">
              <p>
                <FontAwesomeIcon icon={faHeart} className="pr-3" />
                <span className="hover:text-orange-400 cursor-pointer">
                  {" "}
                  Save For Later
                </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faTrash} className="pr-3" />
                <span className="hover:text-orange-400 cursor-pointer">
                  Remove
                </span>
              </p>
            </div>
          </div>
          {/* end sinle item */}
          {/* single item */}
          <div>
            <div className="pt-3 flex justify-start items-center px-2 pb-2 gap-10">
              <div className="w-32 h-28">
                <img src="/images/bed.webp" alt="" />
              </div>
              <div>
                <h2 className="text-sm font-semibold cursor-pointer hover:text-orange-300">
                  Adolph Sheesham Wood Bed With Side Storage
                </h2>
                <small className="text-gray-400">
                  Queen Size, Walnut Finish
                </small>
                <div className="pt-3 flex items-center">
                  <div className="flex items-center">
                    Quantity
                    <div className="border flex ml-2">
                      <div className="cursor-pointer border-r px-2">
                        <FontAwesomeIcon icon={faSubtract} />
                      </div>
                      <div className="px-4">1</div>
                      <div className="cursor-pointer border-l px-2">
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                  <h2 className="font-semibold text-xl">
                    <span className="pr-1 pl-2">Rs</span> 44,898
                  </h2>
                  <p className="text-green-400 pl-3">38% Off</p>
                </div>
              </div>
            </div>
            <div className="px-20 md:px-52 text-gray-400 flex gap-5">
              <p>
                <FontAwesomeIcon icon={faHeart} className="pr-3" />
                <span className="hover:text-orange-400 cursor-pointer">
                  {" "}
                  Save For Later
                </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faTrash} className="pr-3" />
                <span className="hover:text-orange-400 cursor-pointer">
                  Remove
                </span>
              </p>
            </div>
          </div>
          {/* end sinle item */}
          {/* single item */}
          <div>
            <div className="pt-3 flex justify-start items-center px-2 pb-2 gap-10">
              <div className="w-32 h-28">
                <img src="/images/bed.webp" alt="" />
              </div>
              <div>
                <h2 className="text-sm font-semibold cursor-pointer hover:text-orange-300">
                  Adolph Sheesham Wood Bed With Side Storage
                </h2>
                <small className="text-gray-400">
                  Queen Size, Walnut Finish
                </small>
                <div className="pt-3 flex items-center">
                  <div className="flex items-center">
                    Quantity
                    <div className="border flex ml-2">
                      <div className="cursor-pointer border-r px-2">
                        <FontAwesomeIcon icon={faSubtract} />
                      </div>
                      <div className="px-4">1</div>
                      <div className="cursor-pointer border-l px-2">
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                  <h2 className="font-semibold text-xl">
                    <span className="pr-1 pl-2">Rs</span> 44,898
                  </h2>
                  <p className="text-green-400 pl-3">38% Off</p>
                </div>
              </div>
            </div>
            <div className="px-20 md:px-52 text-gray-400 flex gap-5">
              <p>
                <FontAwesomeIcon icon={faHeart} className="pr-3" />
                <span className="hover:text-orange-400 cursor-pointer">
                  {" "}
                  Save For Later
                </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faTrash} className="pr-3" />
                <span className="hover:text-orange-400 cursor-pointer">
                  Remove
                </span>
              </p>
            </div>
          </div>
          {/* end sinle item */}
        </div>
        <div className="w-96 bg-white shadow-sm mt-5 p-2 border border-orange-400 h-96">
          <p className="text-lg font-medium">Price Detail</p>
          <hr />
          <p className="text-sm font-medium pt-3 pb-3 flex justify-start gap-40">
            <span className="">MRP</span>
            <span>Rs 72,099</span>
          </p>
          <hr />
          <p className="text-sm font-medium pt-3 flex justify-start gap-40">
            <span className="">OFFER</span>
            <span className="text-green-400">30%</span>
          </p>
          <hr />
          <p className="text-sm font-medium pt-3 flex justify-start gap-32">
            <span className="">Today Deal</span>
            <span className="text-green-400">Rs 2000</span>
          </p>
          <hr />
          <p className="text-xl font-medium pt-3 flex justify-start gap-32 mt-3">
            <span className="">Total Payable</span>
            <span className="text-orange-400">
              Rs 2000
              <br />
              <small className="text-gray-400 text-xs">
                (Inclusive of all taxes)
              </small>
            </span>
          </p>
          <div className="flex justify-center items-center mt-5">
            <button className="p-2 rounded-lg text-white bg-gradient-to-r from-orange-300 to-orange-500 w-60 h-14 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 ">
              <FontAwesomeIcon icon={faBuyNLarge} className="pr-3" /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
