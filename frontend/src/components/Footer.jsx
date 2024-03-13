import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCreditCard,
  faMedal,
  faStore,
  faThumbsUp,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-10">
      <div className="content pt-3 md:px-32 px-10">
        <h4>
          Buy Furniture Online at WoodenStreet- India’s One-Stop Solution for
          All Your Needs
        </h4>
        <p className="text-gray-600 text-justify pt-4">
          Getting wooden furniture online in India, which perfectly blends with
          your home decor is now easy. Wooden Street provides you with
          ready-made and customized solid wood furniture online. At
          WoodenStreet, we are committed to serving our customers an exclusive
          range of home furniture products like sofa set, coffee tables,
          wardrobes, dining tables, all crafted from premium-quality solid wood.
          Along with this, you can explore our home decor range which includes
          wall art, photo frames, indoor plants, tableware, glassware, kitchen
          organizer and many more which are just few clicks away from you. We
          offer you a huge variety of online furniture to choose from. You can
          browse among various designs, dimensions, colors and finish options,
          all at your convenience. From modern to traditional styles,
          contemporary to loft ones, space saving furniture pieces to huge ones,
          we provide every type of modern furniture online to match your home
          needs. Take a pick from the exquisite collection of home furniture or
          get it customized as per your requirements, all possible at
          WoodenStreet.
        </p>
      </div>
      <div className="content pt-3 md:px-32 px-10">
        <h4>
          Explore Different Products at WoodenStreet for Your Humble Abode
        </h4>
        <p className="text-gray-600 text-justify pt-4">
          WoodenStreet houses an extensive range of furniture and furnishing,
          available in various designs to meet every liking. Once you visit our
          furniture store or check our website, you can understand how diverse
          how designs are. Here's a list of categories that you can expect on
          visiting our furniture stores or website:
        </p>
      </div>
      <div className="content pt-3 md:px-32 px-10">
        <h4>
          Buy Amazing Furniture Online at Affordable Prices On WoodenStreet
        </h4>
        <p className="text-gray-600 text-justify pt-4">
          Buying an item of furniture online with a package of high quality and
          matches the budget is a difficult task. A lot of people think it's a
          huge investment and settle up with what they have. WoodenStreet
          understands this and ensures no one will disappoint at India’s prime
          furniture online store. Browse to any category, either the living
          room, dining room, bedroom, study room, outdoor furniture, and even
          home furnishings, and we offer premium quality home furniture at
          reasonable prices you can afford. Trust us with your furniture styles
          and preferences and buy beautiful furniture online at WoodenStreet
          without worrying about the prices. 90+ Experience Stores Across India
          350
        </p>
      </div>
      <hr className="mt-5" />
      <div className=" md:px-40 px-10 pt-10 pb-10 flex justify-between items-center flex-col md:flex-row gap-10">
        {/* card start */}
        <div className="flex justify-between">
          <FontAwesomeIcon
            icon={faStore}
            className="text-orange-400 text-4xl"
          />
          <div className="pl-5 text-xl">
            90+
            <p className="text-sm w-32">Experience Stores Across India</p>
          </div>
        </div>
        {/* card end */}
        <div className="flex justify-between">
          <FontAwesomeIcon
            icon={faTruck}
            className="text-orange-400 text-4xl"
          />
          <div className="pl-5 text-xl">
            350+
            <p className="text-sm w-32">Delivery Centers Across India </p>
          </div>
        </div>
        {/* card start */}
        <div className="flex justify-between">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="text-orange-400 text-4xl"
          />
          <div className="pl-5 text-xl">
            10 Lakh <span>+</span>
            <p className="text-sm w-32">Satisfied Customers</p>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="flex justify-between">
          <FontAwesomeIcon
            icon={faAward}
            className="text-orange-400 text-4xl"
          />
          <div className="pl-5 text-xl">
            Lowest Price
            <p className="text-sm w-32">Guarantee</p>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className="flex justify-between">
          <FontAwesomeIcon
            icon={faMedal}
            className="text-orange-400 text-4xl"
          />
          <div className="pl-5 text-xl">
            36 Months <span>*</span>
            <p className="text-sm w-32">Warranty</p>
          </div>
        </div>
        {/* card end */}
      </div>
      <hr className="" />

      <div className="mt-10 bg-gray-100 px-10 md:px-32 pt-10 pb-10">
        <div className="flex  flex-col md:flex-row gap-10 md:gap-20 justify-center">
          <div className="flex justify-between gap-10">
            <div>
              <h4 className="text-lg">OUR COMPANY</h4>
              <ul className="cursor-pointer pt-5 ">
                <li className="hover:text-orange-300">About Us</li>
                <li className="hover:text-orange-300">Career</li>
                <li className="hover:text-orange-300">Media</li>
                <li className="hover:text-orange-300">Blog</li>
                <li className="hover:text-orange-300">Customer Stories</li>
                <li className="hover:text-orange-300">Our Stories</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg">USEFUL LINKS</h4>
              <ul className="cursor-pointer pt-5">
                <li className="hover:text-orange-300">Custom Furniture</li>
                <li className="hover:text-orange-300">Exporters</li>
                <li className="hover:text-orange-300">Buy in Bulk</li>
                <li className="hover:text-orange-300">Blog</li>
                <li className="hover:text-orange-300">Hotel Furniture</li>
                <li className="hover:text-orange-300">Our Stories</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between gap-10">
            <div>
              <h4 className="text-lg">SHOP BY ROOM</h4>
              <ul className="cursor-pointer pt-5">
                <li className="hover:text-orange-300">Living Room</li>
                <li className="hover:text-orange-300">Bedroom</li>
                <li className="hover:text-orange-300">Dining Room</li>
                <li className="hover:text-orange-300">Kids Room</li>
                <li className="hover:text-orange-300">Modular Furniturew</li>
                <li className="hover:text-orange-300">Modular Kitchen</li>

                <li className="hover:text-orange-300">Modular Wardrobe</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg"> PARTNERS</h4>
              <ul className="cursor-pointer pt-5">
                <li className="hover:text-orange-300">Become a Franchise </li>
                <li className="hover:text-orange-300">Sell on Wooden Street</li>
                <li className="hover:text-orange-300">Design Partner</li>
                <li className="hover:text-orange-300">Design Services</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between gap-10">
            <div>
              <h4 className="text-lg">NEED HELP</h4>
              <ul className="cursor-pointer pt-5">
                <li className="hover:text-orange-300">Help Center</li>
                <Link to={'/contactus'} className="hover:text-orange-300">Contact Us</Link>
                <li className="hover:text-orange-300"> Ask Experts</li>
                <li className="hover:text-orange-300">Track yor Order</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-30 pt-10 pb-10">
          <hr />
          <div className="flex justify-between pt-5">
            <div className="w-2/3 md:w-1/3 ">
              <p>
                <b>We Deliver in </b>: Ahmedabad, Bangalore, Bhopal, Chandigarh,
                Chennai, Coimbatore, Faridabad, Ghaziabad, Goa, Gurgaon,
                Hyderabad, Indore, Jaipur and
                <span className="text-orange-300">More Cities</span>
              </p>
            </div>
            <div>
              <p>We accept All cards</p>
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-orange-400 text-4xl pt-3"
              />
            </div>
            <div>
              <p>Download App</p>
              <img
                src="/images/stores.jpeg"
                alt=""
                width={"50px"}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex">
            <img
              src="/images/Wooden_Street-Logo.wine.png"
              alt="logo"
              width={"180px"}
            />
            <p className="text-xs md:text-sm cursor-pointer pt-10 pl-20 ">
              <p>
                <span className="hover:text-orange-300"> Terms Of Use</span> |{" "}
                <span className="hover:text-orange-300"> Security</span> |{" "}
                <span className="hover:text-orange-300"> Return & Refund</span>{" "}
                |<span className="hover:text-orange-300"> Payment Policy</span>{" "}
                | <span className="hover:text-orange-300"> Gerevance Cell</span>{" "}
                |
              </p>
              ©️ 2024 WoodenStreet . All rights reserved
              {/* <p>Developed By :Ajay v</p> */}
            </p>
          </div>
          <div className="flex justify-between gap-5 pt-5 md;pt-0">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-400 text-2xl cursor-pointer hover:text-blue-600"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-pink-400 text-2xl cursor-pointer hover:text-pink-600"
            />
             <FontAwesomeIcon
              icon={faXTwitter}
              className="text-gray-600 text-2xl cursor-pointer hover:text-black"
            />
             <FontAwesomeIcon
              icon={faYoutube}
              className="text-red-500 text-2xl cursor-pointer hover:text-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
