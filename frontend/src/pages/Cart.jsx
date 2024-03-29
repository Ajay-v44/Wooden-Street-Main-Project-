import { faBuyNLarge } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPlus,
  faShoppingBag,
  faSubtract,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { Axios } from "axios";
import Loader from "../components/Loader";
const Cart = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const url = "http://127.0.0.1:8000/";
  const id = localStorage.getItem("id");
  const [cartItems, setCartItems] = useState([]);
  const [cartleng, setCartleng] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!token || !id) {
      navigate("/login");
      toast.warning("Login To Continue");
    } else {
      const getCartItem = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`/api/cart/${id}/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
            withCredentials: true,
          });
          setCartItems([response.data]);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching cart item:", error);
        }
      };
      getCartItem();
    }
  }, [token, id, navigate]);
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      setCartleng(cartItems[0].length);
      localStorage.setItem("cart", cartleng);
    }
  }, [cartItems]);
  const totalOffers = Math.floor(
    cartItems[0]?.reduce(
      (totalOffer, item) => totalOffer + item.product.offer,
      0
    )
  );

  const averageOfferPercent = Math.floor(totalOffers / cartItems[0]?.length);
  const totalPrice = cartItems[0]?.reduce(
    (tprice, item) => ((tprice + item.price)*item.qty),
    0
  );
  const todaysDeal = 2000;

  const states = {
    totaloffer: totalOffers,
    totalprice: totalPrice,
    todaydeal: todaysDeal,
  };
  const removeCartItems = async (id) => {
    try {
      const response = await axios.delete(`/api/cart/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
        withCredentials: true,
      });
      if ((response.data.status = 202)) {
        toast.success(response.data.message);
        const updatedCartItems = cartItems[0].filter((item) => item.id !== id);
        setCartItems([updatedCartItems]);
        navigate("/cart");
      } else {
        toast.warning(response.data.message);
      }
    } catch (error) {
      console.log("error");
      toast.error("Erroro Occured ! Try Again");
    }
  };
  const handleQuantity = async (itemId, action) => {
    try {
      const itemIndex = cartItems[0].findIndex((item) => item.id === itemId);
      if (itemIndex === -1) {
        console.log("Item not found in cart");
        return;
      }
      const updatedCartItems = [...cartItems[0]];
      const itemToUpdate = updatedCartItems[itemIndex];
      if (action === "desc" && itemToUpdate.qty > 1) {
        itemToUpdate.qty -= 1;
      } else if (
        action === "inc" &&
        itemToUpdate.qty < itemToUpdate.product.stock_count
      ) {
        itemToUpdate.qty += 1;
        1;
      } else {
        toast.warning("Maximum/minimum quantity reached");
        return;
      }
      updatedCartItems[itemIndex] = itemToUpdate;
      setCartItems([updatedCartItems]);
      const response = await axios.patch(
        `/api/cart/${itemId}/`,
        {
          qty: itemToUpdate.qty,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {cartleng > 0 ? (
            <>
              <div className="pt-3 pb-2 px-5 md:px-32 bg-blue-50">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="w-[35rem] md:w-[50rem] mt-5 border-2 bg-white shadow-lg rounded-md mb-3 pb-3">
                    <div className="flex pt-2 px-2 justify-between items-center">
                      <span className="font-semibold text-lg pr-10">
                        My Cart ({cartleng})
                      </span>
                      <div className="flexitems-center">
                        <span className="text-xl text-gray-400 pr-3">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="pr-3"
                          />
                          Deliver to
                        </span>
                        <div className="relative w-60 ">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10"
                            placeholder="Enter location"
                            required
                          />
                          <button
                            type="submit"
                            className="text-white absolute end-1 bottom-1  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>

                    <hr className="mt-3" />
                    {/* single item */}

                    {cartItems[0]?.map((item) => (
                      <div key={item.id}>
                        <div className="pt-3 flex justify-start items-center px-2 pb-2 gap-10 ">
                          <div className="w-32 h-28">
                            <img src={url + item.product.img1} alt="" />
                          </div>
                          <div>
                            <h2 className="text-sm font-semibold cursor-pointer hover:text-orange-300">
                              {item.product_name}
                            </h2>
                            <small className="text-gray-400 truncate overflow-hidden">
                              {item.product.pdesc}
                            </small>
                            <div className="pt-3 flex items-center">
                              <div className="flex items-center">
                                Quantity
                                <div className="border flex ml-2">
                                  <div
                                    className="cursor-pointer border-r px-2"
                                    onClick={() => {
                                      handleQuantity(item.id, "desc");
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faSubtract} />
                                  </div>
                                  <div className="px-4">{item.qty}</div>
                                  <div
                                    className="cursor-pointer border-l px-2"
                                    onClick={() => {
                                      handleQuantity(item.id, "inc");
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faPlus} />
                                  </div>
                                </div>
                              </div>
                              <h2 className="font-semibold text-xl">
                                <span className="pr-1 pl-2">Rs</span>{" "}
                                {item.price}
                              </h2>
                              <p className="text-green-400 pl-3">
                                {item.product.offer}% Off
                              </p>
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
                          <p
                            onClick={() => {
                              removeCartItems(item.id);
                            }}
                            className=" hover:text-red-500 cursor-pointer"
                          >
                            <FontAwesomeIcon icon={faTrash} className="pr-3" />
                            <span className="hover:text-orange-400 ">
                              Remove
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                    {/* end sinle item */}
                  </div>
                  <div className="w-96 bg-white shadow-sm mt-5 p-2 border border-orange-400 h-96">
                    <p className="text-lg font-medium">Price Detail</p>
                    <hr />
                    <p className="text-sm font-medium pt-3 pb-3 flex justify-start gap-40">
                      <span className="">MRP</span>
                      <span>Rs {totalPrice}</span>
                    </p>
                    <hr />
                    <p className="text-sm font-medium pt-3 flex justify-start gap-40">
                      <span className="">OFFER</span>
                      <span className="text-green-400">
                        {averageOfferPercent}%
                      </span>
                    </p>
                    <hr />
                    <p className="text-sm font-medium pt-3 flex justify-start gap-32">
                      <span className="">Today Deal</span>
                      <span className="text-green-400">Rs {todaysDeal}</span>
                    </p>
                    <hr />
                    <p className="text-xl font-medium pt-3 flex justify-start gap-32 mt-3">
                      <span className="">Total Payable</span>
                      <span className="text-orange-400">
                        Rs {totalPrice - todaysDeal}
                        <br />
                        <small className="text-gray-400 text-xs">
                          (Inclusive of all taxes)
                        </small>
                      </span>
                    </p>
                    <Link
                      className="flex justify-center items-center mt-5"
                      to={`/address/${averageOfferPercent}/${totalPrice}/${todaysDeal}`}
                    >
                      {/* <Link className="flex justify-center items-center mt-5" to={{pathname:'/address',state:{states}}}> */}
                      <button className="p-2 rounded-lg text-white bg-gradient-to-r from-orange-300 to-orange-500 w-60 h-14 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 ">
                        <FontAwesomeIcon icon={faBuyNLarge} className="pr-3" />{" "}
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="flex justify-center items-center ">
              <img src="https://expresshub.com.bd/img/404.png" alt="" />
              <span className="bg-white p-2 rounded-lg shadow-lg">
                No Product{" "}
                <Link
                  to={"/product"}
                  className="underline text-orange-300 px-3 "
                >
                  Shop Now
                </Link>{" "}
                <FontAwesomeIcon icon={faShoppingBag} />
              </span>
            </p>
          )}
        </>
      )}
    </>
  );
};

export default Cart;
