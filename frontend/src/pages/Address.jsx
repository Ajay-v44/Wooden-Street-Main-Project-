import { faBuyNLarge } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Notification from "../components/Notification";
import useRazorpay from "react-razorpay";

const Address = () => {
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();
  const { totaloffer, totalprice, todaydeal } = useParams();
  const [method, setMethod] = useState(null);
  const [loading, setLoading] = useState(null);
  const [paymentmethod, setPaymentmethod] = useState("cod");
  const [data, Setdata] = useState({
    id: "",
    mob1: "",
    mob2: "",
    postalcode: "",
    society: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const getMethod = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/address/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
          withCredentials: true,
        });
        setMethod("put");
        Setdata({
          id: response.data[0].id,
          mob1: response.data[0].mob1,
          mob2: response.data[0].mob2,
          postalcode: response.data[0].postalcode,
          society: response.data[0].address,
          area: response.data[0].area,
          landmark: response.data[0].landmark,
          city: response.data[0].city,
          state: response.data[0].state,
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
        setMethod("post");
      }
    };
    getMethod();
  }, []);
  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    Setdata((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (method == "post") {
        setLoading(true);
        const response = await axios.post(
          "/api/address/",
          {
            user: localStorage.getItem("id"),
            mob1: data.mob1,
            mob2: data.mob2,
            postalcode: data.postalcode,
            address: data.society,
            area: data.area,
            landmark: data.landmark,
            city: data.city,
            state: data.state,
          },
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
          }
        );
        console.log(response.data.mob1);
        Setdata({
          id: response.data.id,
          mob1: response.data.mob1,
          mob2: response.data.mob2,
          postalcode: response.data.postalcode,
          society: response.data.address,
          area: response.data.area,
          landmark: response.data.landmark,
          city: response.data.city,
          state: response.data.state,
        });
        setLoading(false);
        toast.success("Adress added successfully");
      } else if (method == "put") {
        setLoading(true);
        const response = await axios.put(
          `/api/address/${localStorage.getItem("id")}/`,
          {
            mob1: data.mob1,
            mob2: data.mob2,
            postalcode: data.postalcode,
            address: data.society,
            area: data.area,
            landmark: data.landmark,
            city: data.city,
            state: data.state,
          },
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
            withCredentials: true,
          }
        );
        Setdata({
          id: response.data.id,
          mob1: response.data.mob1,
          mob2: response.data.mob2,
          postalcode: response.data.postalcode,
          society: response.data.address,
          area: response.data.area,
          landmark: response.data.landmark,
          city: response.data.city,
          state: response.data.state,
        });
        setLoading(false);
        toast.success("Updated Successfully ");
      } else {
        toast.warning("Something went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (response.data.message) {
        toast.error(response.data.message);
      }
    }
  };

  const handlePayment = async (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature
  ) => {
    setLoading(true);
    const response = await axios.post(
      "/api/order/",
      {
        cart: 0,
        user: localStorage.getItem("id"),
        address: data.id,
        total: Number(totalprice) - Number(todaydeal),
        mode: "online",
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      }
    );
    const payment_response = await axios.post("/api/razorpay/complete/", {
      amount: Number(totalprice) - Number(todaydeal),
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      signature: razorpay_signature,
    });
    toast.success(payment_response.data.message);
    setLoading(false);
    navigate("/cart");
    return payment_response;
  };

  const handleOrder = async () => {
    try {
      if (
        !data.mob1 ||
        !data.mob2 ||
        !data.postalcode ||
        !data.society ||
        !data.state ||
        !data.city ||
        !data.area ||
        !data.landmark
      ) {
        toast.warning("Fill You Address !");
      } else {
        if (paymentmethod === "cod") {
          setLoading(true);
          const response = await axios.post(
            "/api/order/",
            {
              cart: 0,
              user: localStorage.getItem("id"),
              address: data.id,
              total: Number(totalprice) - Number(todaydeal),
              mode: "cod",
            },
            {
              headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
              },
              withCredentials: true,
            }
          );
          setLoading(false);
          toast.success(response.data.message);
          navigate("/userprofile");
          <Notification message={response.data.message} />;
        } else {
          setLoading(true);
          const response = await axios.post("/api/razorpay/create/", {
            amount: Number(totalprice) - Number(todaydeal),
            currency: "INR",
          });
          const order_id = response.data.data.id;

          // razorpay code

          const options = {
            key: import.meta.env.VITE_RAZORPPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            name: "Wooden Street",
            description: "Wooden Street Furnitures",
            image: "/images/Wooden_Street-Logo.wine.png",
            order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
              toast.success(
                handlePayment(
                  response.razorpay_payment_id,
                  response.razorpay_order_id,
                  response.razorpay_signature
                )
              );
              // alert(response.razorpay_payment_id);
              // alert(response.razorpay_order_id);
              // alert(response.razorpay_signature);
            },
            prefill: {
              name: "Piyush Garg",
              email: "youremail@example.com",
              contact: "9999999999",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#f3ca2b",
            },
          };
          const rzp1 = new Razorpay(options);
          rzp1.on("payment.failed", function (response) {
            toast.error("payment failed try again");
            // alert(response.error.code);
            // alert(response.error.description);
            // alert(response.error.source);
            // alert(response.error.step);
            // alert(response.error.reason);
            // alert(response.error.metadata.order_id);
            // alert(response.error.metadata.payment_id);
          });
          rzp1.open();
          // end razorpay code

          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      toast.error("Sorry unexpected error occured .please try again");
      console.log(error);
    }
  };
  return (
    <>
      {loading ? (
        <>
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
        </>
      ) : (
        <>
          <div className=" x-10 md:px-20 pt-5 pb-5  flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 ">
            <form
              className="bg-white border p-3 border-orange-400 shadow-sm w-96 md:w-[35rem] rounded-md"
              onSubmit={handleOnSubmit}
            >
              <p className="text-lg font-medium">Delivery & Billing Address</p>
              <hr className="pt-3 pb-3" />
              <div className="flex justify-start gap-10 items-center text-gray-500 pb-3">
                <p>Mobile No 1*</p>
                <input
                  type="number"
                  name="mob1"
                  id=""
                  className="w-56 md:w-96"
                  placeholder="95XXXXXX09"
                  onChange={handleOnChange}
                  value={data.mob1}
                  minLength={10}
                  maxLength={10}
                  required
                />
              </div>
              <div className="flex justify-start gap-10 items-center text-gray-500 pb-3">
                <p>Mobile No 2*</p>
                <input
                  type="number"
                  name="mob2"
                  id=""
                  value={data.mob2}
                  onChange={handleOnChange}
                  className="w-56 md:w-96"
                  placeholder="95XXXXXX09"
                  minLength={10}
                  maxLength={10}
                  required
                />
              </div>
              <div className="flex justify-start gap-10 items-center text-gray-500 pb-3">
                <p>Postal Code *</p>
                <input
                  type="number"
                  name="postalcode"
                  id=""
                  onChange={handleOnChange}
                  value={data.postalcode}
                  className="w-56 md:w-96"
                  placeholder="Enter PinCode"
                  minLength={6}
                  maxLength={6}
                  required
                />
              </div>
              <div className="flex justify-start gap-[4.5rem] items-center text-gray-500 pb-3">
                <p>Society *</p>
                <input
                  type="text"
                  name="society"
                  id=""
                  value={data.society}
                  onChange={handleOnChange}
                  className="w-56 md:w-96"
                  placeholder="Flat,House no,Building,Company,Appartment"
                  required
                />
              </div>
              <div className="flex justify-start gap-[5.5rem] items-center text-gray-500 pb-3">
                <p>Area *</p>
                <input
                  type="text"
                  name="area"
                  id=""
                  onChange={handleOnChange}
                  value={data.area}
                  className="w-56 md:w-96"
                  placeholder="Area,Street,Sector,Village"
                  required
                />
              </div>
              <div className="flex justify-start gap-12 items-center text-gray-500 pb-3">
                <p>Landmark *</p>
                <input
                  type="text"
                  name="landmark"
                  id=""
                  onChange={handleOnChange}
                  value={data.landmark}
                  className="w-56 md:w-96"
                  placeholder="Landmark"
                  required
                />
              </div>
              <div className="flex justify-start gap-[5.5rem] items-center text-gray-500 pb-3">
                <p>City *</p>
                <input
                  type="text"
                  name="city"
                  id=""
                  onChange={handleOnChange}
                  value={data.city}
                  className="w-56 md:w-96"
                  placeholder="City"
                  required
                />
              </div>
              <div className="flex justify-start gap-[5rem] items-center text-gray-500 pb-3">
                <p>State *</p>
                <select
                  name="state"
                  id=""
                  onChange={handleOnChange}
                  value={data.state}
                  className="w-56 md:w-96 h-10 text-center"
                  required
                >
                  <option value="">Select state</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">
                    Dadra and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala" selected>
                    Kerala
                  </option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div className="flex justify-center items-center mt-5">
                <button
                  className="p-2 rounded-lg text-white bg-gradient-to-r from-orange-300 to-orange-500 w-60 md:w-96 h-10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="w-96 bg-white shadow-sm mt-5 p-2 border border-orange-400 h-96">
              <p className="text-lg font-medium">Price Detail</p>
              <hr />
              <p className="text-sm font-medium pt-3 pb-3 flex justify-start gap-40">
                <span className="">MRP</span>
                <span>Rs {totalprice}</span>
              </p>
              <hr />
              <p className="text-sm font-medium pt-3 flex justify-start gap-40">
                <span className="">OFFER</span>
                <span className="text-green-400">{totaloffer}%</span>
              </p>
              <hr />
              <p className="text-sm font-medium pt-3 flex justify-start gap-32">
                <span className="">Today Deal</span>
                <span className="text-green-400">Rs {todaydeal}</span>
              </p>
              <hr />
              <p className="text-xl font-medium pt-3 flex justify-start gap-32 mt-3">
                <span className="">Total Payable</span>
                <span className="text-orange-400">
                  Rs {Number(totalprice) - Number(todaydeal)}
                  <br />
                  <small className="text-gray-400 text-xs">
                    (Inclusive of all taxes)
                  </small>
                </span>
              </p>
              <div className=" pb-3">
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center ps-3">
                      <input
                        id="horizontal-list-radio-license"
                        type="radio"
                        value="COD"
                        name="payment"
                        onClick={() => {
                          setPaymentmethod("cod");
                        }}
                        checked
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="horizontal-list-radio-license"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        COD
                      </label>
                    </div>
                  </li>
                  <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center ps-3">
                      <input
                        id="horizontal-list-radio-id"
                        type="radio"
                        value="online"
                        name="payment"
                        onClick={() => {
                          setPaymentmethod("online");
                        }}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="horizontal-list-radio-id"
                        class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Online Payment
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center mt-5">
                <button
                  className="p-2 rounded-lg text-white bg-gradient-to-r from-orange-300 to-orange-500 w-60 h-14 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 "
                  onClick={handleOrder}
                >
                  <FontAwesomeIcon icon={faBuyNLarge} className="pr-3" /> Buy
                  Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Address;
