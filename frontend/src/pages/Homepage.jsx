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
          <div className="flex justify-between gap-5">
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
          <div className="flex justify-between gap-5">
            <div className="items-center cursor-pointer">
              <img src="/images/icon4.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Sofa Cum Bed
              </p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon6.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">Study Table</p>
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
              <p className="text-center pt-2 hover:text-orange-400">Study Tables</p>
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
              <p className="text-center pt-2 hover:text-orange-400">Lamp And Light</p>
            </div>
            <div className="items-center cursor-pointer">
              <img src="/images/icon5.jpg" alt="" width={"150px"} />
              <p className="text-center pt-2 hover:text-orange-400">
                Sale
              </p>
            </div>
          </div>
          
        </div>
        <hr className="" />
      </div>

      <div className="banner">

      </div>
    </div>
  );
};

export default Homepage;
