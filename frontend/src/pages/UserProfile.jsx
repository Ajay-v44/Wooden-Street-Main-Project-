import { faCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const url = "http://127.0.0.1:8000/";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const customername = useSelector((state) => state.customer);
  const [value, setvalue] = useState("confirmed");
  useEffect(() => {
    if (!localStorage.getItem("id") || !localStorage.getItem("token")) {
      navigate("/login");
    } else {
      try {
        const getItems = async () => {
          setLoading(true);
          const response = await axios.get(
            `/api/order/${localStorage.getItem("id")}/`,
            {
              headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
              },
            }
          );
          const newdata = response.data.filter((item) => item.status === value);
          setData(newdata);
          setLoading(false);
        };
        getItems();
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  }, [localStorage.getItem("id"), localStorage.getItem("token"), value]);
  const handleOnclick = (val) => {
    try {
      console.log(data);
      setvalue(val);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteItem = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/order/${id}`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      });
      toast.warning(response.data.message);
      setvalue("confirmed");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
          <div className="flex justify-between items-center p-5 shadow-lg w-60 rounded-md m-2">
            <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                class="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="capitalize cursor-pointer text-orange-400">Welcome {customername}</div>
          </div>
          <div className="pt-5 pb-5 px-10 md:px-14 flex flex-row gap-10 ">
            <div className="shadow-lg p-2 w-72 h-60 ">
              <p className="text-lg md:text-xl font-semibold pl-5 pb-2">
                Filter
              </p>
              <hr />
              <h1
                className="pt-3 pb-2 pl-3 text-gray-400 hover:text-orange-400 cursor-pointer hover:underline text-lg"
                onClick={() => {
                  handleOnclick("confirmed");
                }}
              >
                Ordered
              </h1>
              <h1
                className="pt-3 pb-2 pl-3 text-gray-400 hover:text-orange-400 cursor-pointer hover:underline text-lg"
                onClick={() => {
                  handleOnclick("dispatched");
                }}
              >
                Dispatched
              </h1>
              <h1
                className="pt-3 pb-2 pl-3 text-gray-400 hover:text-orange-400 cursor-pointer hover:underline text-lg"
                onClick={() => {
                  handleOnclick("delivered");
                }}
              >
                Delivered
              </h1>
              <h1
                className="pt-3 pb-2 pl-3 text-gray-400 hover:text-orange-400 cursor-pointer hover:underline text-lg"
                onClick={() => {
                  handleOnclick("cancled");
                }}
              >
                Canceled
              </h1>
            </div>
            <div className="pt-3 pb-3 px-5 md:pb-10 flex flex-col justify-between items-center gap-5">
              {data.length > 0 ? (
                <>
                  {data?.map((item) => (
                    <div>
                      {/* cards */}
                      <Link
                        to={`/detailorder/${item.id}`}
                        className="shadow-md border rounded-md p-2 flex items-center flex-col md:flex-row hover:border-orange-400 cursor-pointer gap-10"
                      >
                        <img
                          src={url + item.product.img1}
                          alt=""
                          className="w-32 md:w-52"
                        />
                        <div>
                          <h1 className="capitalize text-sm font-semibold">
                            {item.product.pname}
                          </h1>
                          <small className="text-gray-400">
                            Brand: {item.product.brand}
                          </small>
                        </div>
                        <div className="flex flex-col text-sm font-semibold">
                          {" "}
                          RS {item.total}
                          <small>
                            Total{" "}
                            <sub>
                              * including all orders in this single purchase
                            </sub>
                          </small>
                        </div>
                        <div className="flex flex-col items-center">
                          <h1 className=" text-sm font-semibold">
                            <FontAwesomeIcon
                              icon={faCircle}
                              className="text-green-500 pr-3"
                            />
                            Ordered On
                          </h1>
                          <span>{item.date}</span>
                        </div>
                      </Link>
                      {item.status === "cancled" && (
                        <button
                          className="bg-red-500 text-white p-1 rounded-lg "
                          onClick={() => {
                            deleteItem(item.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} className="px-2" />
                          Delete
                        </button>
                      )}
                      {item.status !== "dispatched" &&
                        item.status !== "cancled" &&
                        item.status !== "delivered" && (
                          <>
                            <Modal id={item.id} order_id={item.order_id} />
                          </>
                        )}
                      {/* end cards */}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="flex justify-center items-center bg-white rounded-md shadow-lg h-48 mt-10 md:mt-20 ">
                    <img
                      src="https://study91.co.in/Scripts/assets/images/prasad_img/no-product-found.png"
                      alt=""
                      className="w-auto"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserProfile;
