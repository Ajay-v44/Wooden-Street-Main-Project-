import { faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
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
        <div className="flex flex-col md:flex-row mb-10">
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
        <hr />
      </div>

      {/* setcion start */}
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

        <hr />
      </div>
      <div className="pt-5 px-5">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <h3 className="text-2xl font-serif font-bold">
              Living Room Furniture
            </h3>
            <small className="pb-3 font-bold text-gray-400 ">
              Let’s Brew N Binge
            </small>
          </div>
          <div>
            <button className="bg-gray-300 p-2 border-black border focus:border-orange-300 rounded-sm">
              VIEW ALL <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10">
          <div className="pt-0 md:pt-10">
            <img
              src="/images/living-furniture1.jpg"
              alt=""
              className="w-[50rem]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex pl-0 md:pl-10 gap-3 pt-5 md:pt-10">
              <div>
                <img
                  src="/images/living-furniture2.jpg"
                  alt=""
                  className="w-96"
                />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
              <div>
                <img
                  src="/images/living-furniture3.jpg"
                  alt=""
                  className="w-96"
                />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
            </div>
            <div className="flex justify-between gap-3 pl-0 md:pl-10">
              <div>
                <img
                  src="/images/living-furniture4.jpg"
                  alt=""
                  className="w-96"
                />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
              <div>
                <img
                  src="/images/living-furniture5.jpg"
                  alt=""
                  className="w-96"
                />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="pt-5 px-5">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <h3 className="text-3xl font-serif font-bold">Sofa Cum Beds</h3>
            <p className="pb-3  text-gray-400 ">Best Of Both The Worlds</p>
          </div>
          <div>
            <button className="bg-gray-300 p-2 border-black border focus:border-orange-300 rounded-sm">
              VIEW ALL <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>

        {/* carousel */}

        <div className="pt-5 px-5">
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
                      src="/images/sfc1.webp"
                      alt="Image"
                    />
                    <p>
                      Nectar Sofa Cum Bed With Box Storage (Exotic Teak Finish)
                    </p>

                    <p>
                      <b>Rs 33,898 </b>
                      <del>Rs 63,898 </del>
                      <span className="text-green-300 pl-3">29% OFF</span>
                    </p>
                  </div>
                  <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/sfc2.webp"
                      alt="Image"
                    />
                    <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                    <p>
                      <b>Rs 43,898 </b>
                      <del>Rs 73,898 </del>
                      <span className="text-green-300 pl-3">39% OFF</span>
                    </p>
                  </div>
                  <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/sfc3.webp"
                      alt="Image"
                    />
                    <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                    <p>
                      <b>Rs 43,898 </b>
                      <del>Rs 73,898 </del>
                      <span className="text-green-300 pl-3">39% OFF</span>
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
                      src="/images/sfc4.webp"
                      alt="Image"
                    />
                    <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                    <p>
                      <b>Rs 43,898 </b>
                      <del>Rs 73,898 </del>
                      <span className="text-green-300 pl-3">39% OFF</span>
                    </p>
                  </div>

                  <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/sfc5.webp"
                      alt="Image"
                    />
                    <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                    <p>
                      <b>Rs 43,898 </b>
                      <del>Rs 73,898 </del>
                      <span className="text-green-300 pl-3">39% OFF</span>
                    </p>
                  </div>
                  <div class="relative w-48 md:w-[30rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/sfc1.webp"
                      alt="Image"
                    />
                    <p>Walken Bed With Storage (King Size, Honey Finish)</p>

                    <p>
                      <b>Rs 43,898 </b>
                      <del>Rs 73,898 </del>
                      <span className="text-green-300 pl-3">39% OFF</span>
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

      <div className="pt-3 pb-3 px-10 bg-pink-50">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <h3 className="text-3xl font-serif font-bold">
              Home Furnishing Items
            </h3>
            <p className="pb-3  text-gray-400 ">
              Give Your Home A Touch Of WOW
            </p>
          </div>
          <div>
            <button className="bg-gray-300 p-2 border-black border focus:border-orange-300 rounded-sm">
              VIEW ALL <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>

        <div className="pt-3 flex flex-col gap-3  overflow-hidden pb-4">
          <div className="flex justify-center gap-4 h-24 md:h-96">
            <div class=" w-48 md:w-[25rem] h-52 md:h-96 overflow-hidden bg-white p-2 rounded-md flex flex-col ">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                src="/images/curtain.jpg"
                alt="Image"
              />
              <p className="pt-2 pb-2 text-center">
                <h2 className="text-xl">Curtains</h2>
                <h6 className=""> 560+Options | From Rs 380</h6>
              </p>
            </div>
            <div class=" w-48 md:w-[25rem] h-52 md:h-96 overflow-hidden bg-white p-2 rounded-md flex flex-col ">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                src="/images/bed.webp"
                alt="Image"
              />
              <p className="pt-2 pb-2 text-center">
                <h2 className="text-xl">Curtains</h2>
                <h6 className=""> 560+Options | From Rs 380</h6>
              </p>
            </div>
            <div class=" w-48 md:w-[25rem] h-52 md:h-96 overflow-hidden bg-white p-2 rounded-md flex flex-col ">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                src="/images/sofacover.jpg"
                alt="Image"
              />
              <p className="pt-2 pb-2 text-center">
                <h2 className="text-xl">Curtains</h2>
                <h6 className=""> 560+Options | From Rs 380</h6>
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 h-24 md:h-96">
            <div class=" w-48 md:w-[25rem] h-52 md:h-96 overflow-hidden bg-white p-2 rounded-md flex flex-col ">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                src="/images/mat.jpg"
                alt="Image"
              />
              <p className="pt-2 pb-2 text-center">
                <h2 className="text-xl">Curtains</h2>
                <h6 className=""> 560+Options | From Rs 380</h6>
              </p>
            </div>
            <div class=" w-48 md:w-[25rem] h-52 md:h-96 overflow-hidden bg-white p-2 rounded-md flex flex-col ">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                src="/images/bed2.webp"
                alt="Image"
              />
              <p className="pt-2 pb-2 text-center">
                <h2 className="text-xl">Curtains</h2>
                <h6 className=""> 560+Options | From Rs 380</h6>
              </p>
            </div>
            <div class=" w-48 md:w-[25rem] h-52 md:h-96 overflow-hidden bg-white p-2 rounded-md flex flex-col ">
              <img
                class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                src="/images/table.jpg"
                alt="Image"
              />
              <p className="pt-2 pb-2 text-center">
                <h2 className="text-xl">Curtains</h2>
                <h6 className=""> 560+Options | From Rs 380</h6>
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="p-5 flex gap-3 flex-col md:flex-row justify-center">
        <img
          src="/images/new-mattress-banner.jpg"
          alt=""
          className="w-auto md:w-[45rem]"
        />
        <img
          src="/images/new-temple-banner.jpg"
          alt=""
          className="w-auto md:w-[45rem]"
        />
      </div>

      <div className="pt-5 px-5">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <h3 className="text-2xl font-serif font-bold">
              Dining Room Furniture
            </h3>
            <small className="pb-3 font-bold text-gray-400 ">
              To Experience The Luxury Dining
            </small>
          </div>
          <div>
            <button className="bg-orange-300 p-1 font-serif border-black border focus:border-orange-300 rounded-2xl text-white hover:bg-orange-500">
              VIEW ALL <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10">
          <div className="pt-0 md:pt-10">
            <img src="/images/dt1.jpg" alt="" className="w-[50rem]" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex pl-0 md:pl-10 gap-3 pt-5 md:pt-10 overflow-hidden">
              <div className="hover:text-orange-300 cursor-pointer">
                <img
                  src="/images/dt2.webp"
                  alt=""
                  class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
              <div className="hover:text-orange-300 cursor-pointer">
                <img
                  src="/images/dt3.webp"
                  alt=""
                  class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
            </div>
            <div className="flex pl-0 md:pl-10 gap-3 pt-5 md:pt-10 overflow-hidden">
              <div className="hover:text-orange-300 cursor-pointer">
                <img
                  src="/images/dt4.webp"
                  alt=""
                  class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
              <div className="hover:text-orange-300 cursor-pointer">
                <img
                  src="/images/dt5.webp"
                  alt=""
                  class="object-cover rounded-md transition-transform transform-gpu hover:scale-105 w-auto h-72 "
                />
                <p className="text-xl font-mono">Fabric sofa</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="pt-5 px-5 bg-gradient-to-b from-white to-blue-100">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <h3 className="text-3xl font-serif font-bold">
              Don't Underestimate The Power Of
            </h3>
            <p className="pb-3  text-gray-400 ">Lighting Up Your Home</p>
          </div>
          <div>
            <button className="bg-gray-300 p-2 border-black border focus:border-orange-300 rounded-xl hover:bg-orange-300 hover:text-white hover:border-blue-500">
              VIEW ALL <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>

        {/* carousel */}

        <div className="pt-5 px-5">
          <div
            id="default-carousel"
            className="relative w-[29rem] md:w-[1450px] h-60 md:h-[400px] "
            data-carousel="slide"
          >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-[30rem]">
              {/* Item 1 */}
              <div
                className=" hidden duration-700 ease-in-out "
                data-carousel-item=""
              >
                <div className="flex justify-center gap-10">
                  <div class="relative w-48 md:w-[20rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/dd1.webp"
                      alt="Image"
                    />
                    <p>Floor Lamps</p>

                    <p>310+ Options | From Rs1,883</p>
                  </div>
                  <div class="relative w-48 md:w-[20rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/dd2.webp"
                      alt="Image"
                    />
                    <p>Floor Lamps</p>

                    <p>310+ Options | From Rs1,883</p>
                  </div>
                  <div class="relative w-48 md:w-[20rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/dd3.webp"
                      alt="Image"
                    />
                    <p>Floor Lamps</p>

                    <p>310+ Options | From Rs1,883</p>
                  </div>
                </div>
              </div>
              <div
                className=" hidden duration-700 ease-in-out "
                data-carousel-item=""
              >
                <div className="flex justify-center gap-10">
                  <div class="relative w-48 md:w-[20rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/dd4.webp"
                      alt="Image"
                    />
                    <p>Floor Lamps</p>

                    <p>310+ Options | From Rs1,883</p>
                  </div>
                  <div class="relative w-48 md:w-[20rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/dd5.webp"
                      alt="Image"
                    />
                    <p>Floor Lamps</p>

                    <p>310+ Options | From Rs1,883</p>
                  </div>
                  <div class="relative w-48 md:w-[20rem] h-96 md:h-[40rem] overflow-hidden cursor-pointer">
                    <img
                      class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                      src="/images/dd6.jpg"
                      alt="Image"
                    />
                    <p>Floor Lamps</p>

                    <p>310+ Options | From Rs1,883</p>
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
      <div className="p-3 ">
        <p className="text-center text-3xl font-serif pb-10 pt-5">
          90+ Experience Stores Across India
        </p>
        <div className="flex text-center gap-3 flex-col ">
          <div className="flex items-center  justify-center gap-5">
            <div className="relative group">
              <img
                className="h-auto w-96 rounded-lg transition-transform transform-gpu group-hover:scale-105"
                src="/images/8.jpg"
                alt="image description"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-gray-700 p-3 rounded-lg  ">
                Mumbai
              </p>
            </div>
            <div className="relative group">
              <img
                className="h-auto w-96 rounded-lg transition-transform transform-gpu group-hover:scale-105"
                src="/images/12.jpg"
                alt="image description"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-gray-700 p-3 rounded-lg  ">
                Bangalore
              </p>
            </div>
            <div className="relative group">
              <img
                className="h-auto w-96 rounded-lg transition-transform transform-gpu group-hover:scale-105"
                src="/images/23.jpg"
                alt="image description"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-gray-700 p-3 rounded-lg  ">
                Delhi
              </p>
            </div>
          </div>
          <div className="flex items-center  justify-center gap-5">
            <div className="relative group">
              <img
                className="h-auto w-96 rounded-lg transition-transform transform-gpu group-hover:scale-105"
                src="/images/37.jpg"
                alt="image description"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-gray-700 p-3 rounded-lg  ">
                Udaipur
              </p>
            </div>
            <div className="relative group">
              <img
                className="h-auto w-96 rounded-lg transition-transform transform-gpu group-hover:scale-105"
                src="/images/lucknow.jpg"
                alt="image description"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-gray-700 p-3 rounded-lg  ">
                Lucknow
              </p>
            </div>
            <div className="relative group">
              <img
                className="h-auto w-96 rounded-lg transition-transform transform-gpu group-hover:scale-105"
                src="/images/kirtinagar.jpg"
                alt="image description"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-gray-700 p-3 rounded-lg  ">
                Krithinagar
              </p>
            </div>
          </div>
          <div>
            <button className="bg-orange-600 rounded-md text-white h-10 w-60 cursor-pointer capitalize hover:translate-x-1 items-center text-center">
              explore all experience stores
            </button>
          </div>{" "}
        </div>
      </div>

      <div className="pt-3 pb-3 px-5 bg-blue-50">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <h3 className="text-3xl font-serif font-bold">
              Their Words, Our Pride
            </h3>
            <p className="pb-3  text-gray-400 ">
              Happy Words of our Happy Customers
            </p>
          </div>
          <div>
            <button
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Add Review
            </button>
            <div
              id="authentication-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Sign in to our platform
                    </h3>
                    <button
                      type="button"
                      class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div class="p-4 md:p-5">
                    <form class="space-y-4" action="#">
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div class="flex justify-between">
                        <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input
                              id="remember"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                            />
                          </div>
                          <label
                            for="remember"
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="#"
                          class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Lost Password?
                        </a>
                      </div>
                      <button
                        type="submit"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Login to your account
                      </button>
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{" "}
                        <a
                          href="#"
                          class="text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Create account
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 px-5">
          <div
            id="default-carousel"
            className="relative w-[29rem] md:w-[1450px] h-60 md:h-[500px] "
            data-carousel="slide"
          >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-[30rem]">
              {/* Item 1 */}
              <div
                className=" hidden duration-700 ease-in-out "
                data-carousel-item=""
              >
                <div className="flex justify-center gap-10">
                  <div class="relative w-48 md:w-[25rem] h-96 md:h-[30rem] overflow-hidden cursor-pointer bg-white p-2">
                    <div className="flex justify-center items-center">
                      <img
                        class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                        src="/images/r1.webp"
                        alt="Image"
                        className="w-72 "
                      />
                    </div>
                    <p className="overflow-hidden pt-0 md:pt-10 px-5 text-justify text-xs md:text-lg ">
                      This dining table was exactly the one that I was looking
                      for. I loved the design of this dining set. The seats of
                      the chairs are plush and comfortable.
                    </p>
                    <hr />
                    <p className="text-center text-orange-300">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <p>Ajay v (Kerala) </p>
                    </p>
                  </div>
                  <div class="relative w-48 md:w-[25rem] h-96 md:h-[30rem] overflow-hidden cursor-pointer bg-white p-2">
                    <div className="flex justify-center items-center">
                      <img
                        class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                        src="/images/r2.webp"
                        alt="Image"
                        className="w-72 "
                      />
                    </div>
                    <p className="overflow-hidden pt-0 md:pt-14 px-5 text-justify text-xs md:text-lg ">
                      This dining table was exactly the one that I was looking
                      for. I loved the design of this dining set. The seats of
                      the chairs are plush and comfortable.
                    </p>
                    <hr />
                    <p className="text-center text-orange-300">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <p>Ajay v (Kerala) </p>
                    </p>
                  </div>
                  <div class="relative w-48 md:w-[25rem] h-96 md:h-[30rem] overflow-hidden cursor-pointer bg-white p-2">
                    <div className="flex justify-center items-center">
                      <img
                        class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                        src="/images/dd1.webp"
                        alt="Image"
                        className="w-72 "
                      />
                    </div>
                    <p className="overflow-hidden pt-0 md:pt-14 px-5 text-justify text-xs md:text-lg ">
                      This dining table was exactly the one that I was looking
                      for. I loved the design of this dining set. The seats of
                      the chairs are plush and comfortable.
                    </p>
                    <hr />
                    <p className="text-center text-orange-300">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <p>Ajay v (Kerala) </p>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" hidden duration-700 ease-in-out "
                data-carousel-item=""
              >
                <div className="flex justify-center gap-10">
                <div class="relative w-48 md:w-[25rem] h-96 md:h-[30rem] overflow-hidden cursor-pointer bg-white p-2">
                    <div className="flex justify-center items-center">
                      <img
                        class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                        src="/images/dd1.webp"
                        alt="Image"
                        className="w-72 "
                      />
                    </div>
                    <p className="overflow-hidden pt-0 md:pt-14 px-5 text-justify text-xs md:text-lg ">
                      This dining table was exactly the one that I was looking
                      for. I loved the design of this dining set. The seats of
                      the chairs are plush and comfortable.
                    </p>
                    <hr />
                    <p className="text-center text-orange-300">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <p>Ajay v (Kerala) </p>
                    </p>
                  </div>
                  <div class="relative w-48 md:w-[25rem] h-96 md:h-[30rem] overflow-hidden cursor-pointer bg-white p-2">
                    <div className="flex justify-center items-center">
                      <img
                        class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                        src="/images/dd1.webp"
                        alt="Image"
                        className="w-72 "
                      />
                    </div>
                    <p className="overflow-hidden pt-0 md:pt-14 px-5 text-justify text-xs md:text-lg ">
                      This dining table was exactly the one that I was looking
                      for. I loved the design of this dining set. The seats of
                      the chairs are plush and comfortable.
                    </p>
                    <hr />
                    <p className="text-center text-orange-300">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <p>Ajay v (Kerala) </p>
                    </p>
                  </div>
                  <div class="relative w-48 md:w-[25rem] h-96 md:h-[30rem] overflow-hidden cursor-pointer bg-white p-2">
                    <div className="flex justify-center items-center">
                      <img
                        class="object-cover rounded-md transition-transform transform-gpu hover:scale-105"
                        src="/images/dd1.webp"
                        alt="Image"
                        className="w-72 "
                      />
                    </div>
                    <p className="overflow-hidden pt-0 md:pt-14 px-5 text-justify text-xs md:text-lg ">
                      This dining table was exactly the one that I was looking
                      for. I loved the design of this dining set. The seats of
                      the chairs are plush and comfortable.
                    </p>
                    <hr />
                    <p className="text-center text-orange-300">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <p>Ajay v (Kerala) </p>
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
    </div>
  );
};

export default Homepage;
