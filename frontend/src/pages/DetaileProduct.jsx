import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faBoltLightning,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const DetailProduct = () => {
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(null);
  const Calcprice = ({ prices, offers }) => {
    const discountedPrice = parseInt(prices - (prices * offers) / 100);
    setDiscount(discountedPrice);
    return <>{discountedPrice}</>;
  };
  const url = "http://127.0.0.1:8000/";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  const { id } = useParams();

  const RatingStars = ({ rating }) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} className="text-orange-300" />
    ));
    return <div>{stars}</div>;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    const getDetailProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/dtproducts/${id}/`);
        setProducts([response.data]);
        setSelectedImage(response.data?.img1);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailProduct();
  }, [id]);

  axios.defaults.withCredentials = true;

  const handleAddToCart = async (pid, pname) => {
    try {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");
      if (token && id) {
        const response = await axios.post(
          "/api/cart/",
          {
            user: id,
            product: pid,
            product_name: pname,
            price: discount,
          },
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (response) {
          toast.success(response.data.message);
        }
      } else {
        navigate("/login");
        toast.warning("Login to continue !");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "An error occurred while adding to cart. Please try again later."
      );
    }
  };
  return (
    <>
      {loading ? (
        <div className=" p-10 flex justify-center flex-col items-center ">
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <button
            disabled
            type="button"
            className="py-2.5  mt-5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
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
        products.map((product) => (
          <div key={product.id} className="pt-5 pb-5 px-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={url + selectedImage}
                  alt=""
                  className="w-96 md:w-[38rem] h-96"
                />
                <div className="flex items-center justify-center gap-5 pt-3">
                  <img
                    src={url + product.img2}
                    alt=""
                    className="w-32 md:w-40 hover:border-2 hover:border-orange-300 hover:rounded-md"
                    onClick={() => handleImageClick(product.img2)}
                  />
                  <img
                    src={url + product.img3}
                    alt=""
                    className="w-32 md:w-40 hover:border-2 hover:border-orange-300 hover:rounded-md"
                    onClick={() => handleImageClick(product.img3)}
                  />
                  <img
                    src={url + product.img4}
                    alt=""
                    className="w-32 md:w-40 hover:border-2 hover:border-orange-300 hover:rounded-md"
                    onClick={() => handleImageClick(product.img4)}
                  />
                  {product.img5 && (
                    <img
                      src={url + product.img5}
                      alt=""
                      className="w-32 md:w-40 hover:border-2 hover:border-orange-300 hover:rounded-md"
                      onClick={() => handleImageClick(product.img5)}
                    />
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif">{product.pname}</h3>
                <small>(Queen Size, Honey Finish)</small>
                <p className="flex gap-2 items-center capitalize">
                  <RatingStars rating={product.rating} />
                  {product.rating}
                  <span className="hover:text-orange-300 cursor-pointer">
                    <FontAwesomeIcon icon={faHeart} className="pl-10 pr-3" />
                    Add to whishlist
                  </span>
                </p>

                <p>
                  <span className="font-semibold text-3xl">
                    <span className="pr-3"> RS</span>
                    <Calcprice
                      prices={product.price}
                      offers={product.offer}
                    />{" "}
                  </span>
                  <span className="font-light text-gray-500 pl-2 text-base line-through">
                    RS {product.price}
                  </span>
                  <span className="pl-3 text-lg text-green-300">
                    {product.offer} % off
                  </span>
                </p>

                <p className="w-96 text-justify">{product.pdesc}</p>

                <p className="pt-3">
                  <span className="text-lg text-orange-300">
                    Special offers
                  </span>

                  <ul className="text-sm text-justify w-96 ">
                    <li className="pt-3">
                      <span className="text-green-400">{">"}</span>
                      <span className="font-semibold">
                        {" "}
                        Valentine Day Sale
                      </span>{" "}
                      - Apply Coupon LOVEIT10 & Get Upto 20% Off (price
                      inclusive of discount){" "}
                      <span className="text-blue-400 cursor-pointer">T&C</span>
                    </li>
                    <li className="pt-3">
                      <span className="text-green-400">{">"}</span>
                      <span className="font-semibold"> Store Discount</span> -
                      Get upto 10% off on orders placed at your nearest
                      experience stores{" "}
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
                      Available on ICICI and HDFC for Net Cart Value of Rs
                      30,000 and above for 6 months.{" "}
                      <span className="text-blue-400 cursor-pointer">T&C</span>
                    </li>
                  </ul>
                </p>

                <div className="flex justify-between items-center pt-5">
                  <button
                    className="p-2 rounded-lg text-white bg-gradient-to-r from-orange-300 to-orange-500 w-60 h-14 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 "
                    onClick={() => {
                      handleAddToCart(product.id, product.pname);
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="pr-3" />{" "}
                    ADD TO CART
                  </button>
                  <button className="p-2 ml-5 rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-300 w-60 h-14 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-500 ">
                    <FontAwesomeIcon icon={faBoltLightning} className="pr-3" />
                    BUY NOW
                  </button>
                </div>

                <div className="pt-3 capitalize ">
                  <p className="text-lg">Product Overview</p>
                  <hr />
                  <p className="text-gray-700 pt-3">
                    Material <span className="pl-10">: {product.material}</span>
                  </p>
                  <p className="text-gray-700 pt-3">
                    Waranty <span className="pl-10">: {product.warranty}</span>
                  </p>

                  <p className="text-gray-700 pt-3">
                    brand <span className="pl-10">: {product.brand}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default DetailProduct;
