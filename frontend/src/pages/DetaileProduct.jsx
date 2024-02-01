import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faBoltLightning,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DetaileProduct = () => {
  const [loading, Setloading] = useState(false);
  const { id } = useParams();
  console.log(id);
  const RatingStars = ({ rating }) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} className="text-orange-300" />
    ));

    return <div>{stars}</div>;
  };
  return (
    <>
      {loading ? (
        <div className=" p-10 flex justify-center flex-col items-center ">
          <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-700 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-700 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <button
            disabled
            type="button"
            class="py-2.5  mt-5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
            Loading...
          </button>
        </div>
      ) : (
        <div className="pt-5 pb-5 px-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fbrixton-sheesham-wood-bed-with-storage-drawers-king-size-honey-finish%2F1-810x702.jpg"
                alt=""
                className="w-96 md:w-[38rem]"
              />
              <div className="flex items-center justify-center gap-5 pt-3">
                <img
                  src="https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fbrixton-sheesham-wood-bed-with-storage-drawers-king-size-honey-finish%2F1-810x702.jpg"
                  alt=""
                  className="w-32 md:w-40 hover:border-2 hover:border-orange-300 hover:rounded-md"
                />
                <img
                  src="https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fbrixton-sheesham-wood-bed-with-storage-drawers-king-size-honey-finish%2F1-810x702.jpg"
                  alt=""
                  className="w-32 md:w-40 hover:border-2 hover:border-orange-300 hover:rounded-md"
                />
                <img
                  src="https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fbrixton-sheesham-wood-bed-with-storage-drawers-king-size-honey-finish%2F1-810x702.jpg"
                  alt=""
                  className="w-32 md:w-40 hover:border-2 hover:border-orange-300 hover:rounded-md"
                />
                <img
                  src="https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fbrixton-sheesham-wood-bed-with-storage-drawers-king-size-honey-finish%2F1-810x702.jpg"
                  alt=""
                  className="w-32 md:w-40 hover:border-2 hover:border-orange-300 hover:rounded-md"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif">
                Brixton Sheesham Wood Bed With Box Storage
              </h3>
              <small>(Queen Size, Honey Finish)</small>
              <p className="flex gap-2 items-center capitalize">
                <RatingStars rating={4} />4
                <span className="hover:text-orange-300 cursor-pointer">
                  <FontAwesomeIcon icon={faHeart} className="pl-10 pr-3" />
                  Add to whishlist
                </span>
              </p>

              <p>
                <span className="font-semibold">
                  RS10000
                  {/* <Calcprice prices={product.price} offers={product.offer} />{" "} */}
                </span>
                <span className="font-light text-gray-500 pl-2 text-base line-through">
                  RS 200000
                </span>
                <span className="pl-3 text-lg text-green-300">20 % off</span>
              </p>

              <p className="w-96 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                quod laboriosam aliquid vel rem quam consectetur vitae dolore
                dolores eaque illum autem adipisci, quos praesentium facere,
                iure, blanditiis accusantium eum!
              </p>

              <p className="pt-3">
                <span className="text-lg text-orange-300">Special offers</span>

                <ul className="text-sm text-justify w-96 ">
                  <li className="pt-3">
                    <span className="text-green-400">{">"}</span>
                    <span className="font-semibold"> Valentine Day Sale</span> -
                    Apply Coupon LOVEIT10 & Get Upto 20% Off (price inclusive of
                    discount){" "}
                    <span className="text-blue-400 cursor-pointer">T&C</span>
                  </li>
                  <li className="pt-3">
                    <span className="text-green-400">{">"}</span>
                    <span className="font-semibold"> Store Discount</span> - Get
                    upto 10% off on orders placed at your nearest experience
                    stores{" "}
                    <span className="text-blue-400 cursor-pointer">T&C</span>
                  </li>
                  <li className="pt-3">
                    <span className="text-green-400">{">"}</span>
                    <span className="font-semibold"> No Cost EMI</span> -
                    Available on Net Cart Value of Rs 39,990 and Above!{" "}
                    <span className="text-blue-400 cursor-pointer">T&C</span>
                  </li>
                  <li className="pt-3">
                    <span className="text-green-400">{">"}</span>
                    <span className="font-semibold"> Low Cost EMI </span> -
                    Available on ICICI and HDFC for Net Cart Value of Rs 30,000
                    and above for 6 months.{" "}
                    <span className="text-blue-400 cursor-pointer">T&C</span>
                  </li>
                </ul>
              </p>

              <div className="flex justify-between items-center pt-5">
                <button className="p-2 rounded-lg text-white bg-gradient-to-r from-orange-300 to-orange-500 w-60 h-14 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 ">
                  <FontAwesomeIcon icon={faCartShopping} className="pr-3" /> ADD
                  TO CART
                </button>
                <button className="p-2 rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-300 w-60 h-14 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-500 ">
                  <FontAwesomeIcon icon={faBoltLightning} className="pr-3" />
                  BUY NOW
                </button>
              </div>

              <div className="pt-3 capitalize ">
                <p className="text-lg">Product Overview</p>
                <hr />
                <p className="text-gray-700 pt-3">
                  Material <span className="pl-10">: shassam wood</span>
                </p>
                <p className="text-gray-700 pt-3">
                  Waranty <span className="pl-10">: 6 months</span>
                </p>

                <p className="text-gray-700 pt-3">
                  brand <span className="pl-10">: thakkaliz</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetaileProduct;
