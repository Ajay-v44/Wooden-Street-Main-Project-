import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="  flex justify-between px-5 ">
        <div
          id="default-carousel"
          className="relative w-[1050px] "
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-[40rem]">
            {/* Item 1 */}
            <div
              className=" hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src="/images/banner-6.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 2 */}
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src="/images/banner-5.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 3 */}
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src="/images/banner-4.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 4 */}
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item=""
            >
              <img
                src="/images/banner-3.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to={0}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to={1}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to={2}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to={3}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to={4}
            />
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div className="hidden md:flex flex-row md:flex-col gap-3 px-3 pt-10 ">
          <img src="/images/new-launch.jpg" alt="" />
          <img src="/images/new-launch2.jpg" alt="" className=" md:visible " />
        </div>
      </div>
      <div className="banner">
        <img src="/images/emi-banner.jpg" alt="" />
      </div>
      <div className="pt-5 px-0 md:px-60">
        <h1 className="font-serif text-center text-2xl">Top Picks For You</h1>
        <p className="text-center">Immensive Collection For Your Dream Home</p>
        <div className="flex gap-10 flex-col md:flex-row pt-5">
          <div className="flex justify-between gap-5 ">
            <div className="items-center cursor-pointer">
              <img src="/images/icon1.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Sofa Sets
              </p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon2.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">Beds</p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon3.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Dining Table Sets
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-5 ">
            <div className="items-center cursor-pointer">
              <img src="/images/icon4.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Sofa Cum Bed
              </p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon6.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Study Table
              </p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon7.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Book Shelf
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-col md:flex-row pt-5 pb-3">
          <div className="flex justify-between gap-5">
            <div className="items-center cursor-pointer">
              <img src="/images/icon8.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Coffee Tables
              </p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon9.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Study Tables
              </p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon10.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Home Decor
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="items-center cursor-pointer">
              <img src="/images/icon11.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Home Furnishing
              </p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon12.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Lamp And Light
              </p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon5.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">Sale</p>
            </div>
          </div>
        </div>
        <hr className="" />
      </div>

      <div className="banner pt-5 ">
        <img src="/images/store-mid-banner.jpg" alt="" />
      </div>

      <div className="pt-5 px-10">
        <h1 className="font-serif text-center text-xl md:text-3xl">
          India's Finest Online Furniture Brand{" "}
        </h1>
        <p className="text-center text-xs md:text-xl">
          Buy Furniture Online from our extensive collection of wooden furniture
          units{" "}
        </p>

        <div className="pt-3 flex flex-col gap-3  overflow-hidden">
          <div className="flex justify-center gap-4 h-24 md:h-96">
            <div class=" w-48 md:w-[30rem] h-52 md:h-96 overflow-hidden ">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 "
                src="/images/beds-banner.jpg"
                alt="Image"
              />
            </div>
            <div class="relative w-48 md:w-[30rem] h-96 overflow-hidden">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                src="/images/dining-set-banner.jpg"
                alt="Image"
              />
            </div>
            <div class="relative w-48 md:w-[30rem] h-96 overflow-hidden">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                src="/images/dressing-table-banner.jpg"
                alt="Image"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 h-24 md:h-96">
            <div class="relative w-48 md:w-[30rem] h-96 overflow-hidden ">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 "
                src="/images/space-save-banner.jpg"
                alt="Image"
              />
            </div>
            <div class="relative w-48 md:w-[30rem] h-96 overflow-hidden">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                src="/images/wfh-banner.jpg"
                alt="Image"
              />
            </div>
            <div class="relative w-48 md:w-[30rem] h-96 overflow-hidden">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                src="/images/wooden-sofa-banner.jpg"
                alt="Image"
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="pt-5 px-5">
        <h3 className="text-2xl font-serif font-bold">Recomended For You</h3>
        <p className="pb-3 ">Dive Into Your Tailored Selections Today!</p>
        <div className="flex flex-col md:flex-row">
          <div className="pt-0 md:pt-10">
            <div className="cursor-pointer relative top-8">
              <span className="bg-orange-400 text-white rounded-l-md p-1">
                BIG DEAL
              </span>
              <span className="bg-black text-white p-1 rounded-r-md">58%</span>
            </div>
            <img src="/images/cst1.webp" alt="" />
            <p className="text-xl font-mono">Fabric sofa</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex pl-0 md:pl-10 gap-3">
              <div>
                <div className="cursor-pointer relative top-8">
                  <span className="bg-orange-400 text-white rounded-l-md p-1">
                    BIG DEAL
                  </span>
                  <span className="bg-black text-white p-1 rounded-r-md">
                    58%
                  </span>
                </div>
                <img src="/images/cst2.webp" alt="" className="w-96" />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
              <div>
                <div className="cursor-pointer relative top-8">
                  <span className="bg-orange-400 text-white rounded-l-md p-1">
                    BIG DEAL
                  </span>
                  <span className="bg-black text-white p-1 rounded-r-md">
                    58%
                  </span>
                </div>
                <img src="/images/cst3.webp" alt="" className="w-96" />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
            </div>
            <div className="flex justify-between gap-3 pl-0 md:pl-10">
              <div>
                <div className="cursor-pointer relative top-8">
                  <span className="bg-orange-400 text-white rounded-l-md p-1">
                    BIG DEAL
                  </span>
                  <span className="bg-black text-white p-1 rounded-r-md">
                    58%
                  </span>
                </div>
                <img src="/images/cst1.webp" alt="" className="w-96" />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
              <div>
                <div className="cursor-pointer relative top-8">
                  <span className="bg-orange-400 text-white rounded-l-md p-1">
                    BIG DEAL
                  </span>
                  <span className="bg-black text-white p-1 rounded-r-md">
                    58%
                  </span>
                </div>
                <img src="/images/cst1.webp" alt="" className="w-96" />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 px-5">
        <h3 className="text-2xl font-serif pb-3 font-bold">
          Best-Sellers Of The Season
        </h3>

        <div
          id="default-carousel"
          className="relative w-[29rem] md:w-[1450px] h-60 md:h-[500px] "
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-[40rem]">
            {/* Item 1 */}
            <div
              className=" hidden duration-700 ease-in-out "
              data-carousel-item=""
            >
              <div className="flex justify-between">
                <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                  <img
                    class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                    src="/images/cs1.webp"
                    alt="Image"
                  />
                  <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                  <p>
                    <b>Rs 43,898 </b>
                    <del>Rs 73,898 </del>
                    <span className="text-green-300 pl-3">39% OFF</span>
                  </p>
                  <p className="text-orange-400">
                    <FontAwesomeIcon icon={faTruck} />
                    Ship in 2 Days
                  </p>
                </div>
                <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                  <img
                    class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                    src="/images/cs2.webp"
                    alt="Image"
                  />
                  <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                  <p>
                    <b>Rs 43,898 </b>
                    <del>Rs 73,898 </del>
                    <span className="text-green-300 pl-3">39% OFF</span>
                  </p>
                  <p className="text-orange-400">
                    <FontAwesomeIcon icon={faTruck} />
                    Ship in 2 Days
                  </p>
                </div>
                <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                  <img
                    class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                    src="/images/cs4.webp"
                    alt="Image"
                  />
                  <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                  <p>
                    <b>Rs 43,898 </b>
                    <del>Rs 73,898 </del>
                    <span className="text-green-300 pl-3">39% OFF</span>
                  </p>
                  <p className="text-orange-400">
                    <FontAwesomeIcon icon={faTruck} />
                    Ship in 2 Days
                  </p>
                </div>
              </div>
            </div>
            <div
              className=" hidden duration-700 ease-in-out "
              data-carousel-item=""
            >
              <div className="flex justify-between">
                <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                  <img
                    class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                    src="/images/cs3.webp"
                    alt="Image"
                  />
                  <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                  <p>
                    <b>Rs 43,898 </b>
                    <del>Rs 73,898 </del>
                    <span className="text-green-300 pl-3">39% OFF</span>
                  </p>
                  <p className="text-orange-400">
                    <FontAwesomeIcon icon={faTruck} />
                    Ship in 2 Days
                  </p>
                </div>

                <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                  <img
                    class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                    src="/images/cs5.webp"
                    alt="Image"
                  />
                  <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                  <p>
                    <b>Rs 43,898 </b>
                    <del>Rs 73,898 </del>
                    <span className="text-green-300 pl-3">39% OFF</span>
                  </p>
                  <p className="text-orange-400">
                    <FontAwesomeIcon icon={faTruck} />
                    Ship in 2 Days
                  </p>
                </div>
                <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                  <img
                    class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                    src="/images/cs6.webp"
                    alt="Image"
                  />
                  <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                  <p>
                    <b>Rs 43,898 </b>
                    <del>Rs 73,898 </del>
                    <span className="text-green-300 pl-3">39% OFF</span>
                  </p>
                  <p className="text-orange-400">
                    <FontAwesomeIcon icon={faTruck} />
                    Ship in 2 Days
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to={0}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to={1}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to={2}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to={3}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to={4}
            />
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
