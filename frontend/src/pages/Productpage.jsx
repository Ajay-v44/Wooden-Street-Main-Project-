import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

const Productpage = () => {
  const {id}=useParams()
  console.log("data",id)
  const [loading, Setloading] = useState(false);
  const RatingStars = ({ rating }) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} className="text-orange-300" />
    ));

    return <div>{stars}</div>;
  };
  const Calcprice = ({ prices, offers }) => {
    const discountedPrice = parseInt(prices - (prices * offers) / 100);

    return <>{discountedPrice}</>;
  };

  const url = "http://127.0.0.1:8000/";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        Setloading(true);
        if (id){
          const response = await axios.get(`/api/products/${id}/`);
          setProducts(response.data);

        }else{
          const response = await axios.get("/api/products/");
          setProducts(response.data);
        }
        
        Setloading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  },[id]);

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
        <>
             {products && products.length > 0 ?  (
        <div className=" pt-2 pb-3 bg-gradient-to-r from-white to-orange-100  px-5 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-5  px-5 items-center justify-center">
            {products?.map((product) => (
              <Link key={product.id}
                to={`/dtproduct/${product.id}`}
                className="card bg-white shadow-lg rounded-md p-2 hover:-translate-y-1 hover:transition-all hover:shadow-2xl w-60 md:w-96  overflow-hidden h-auto"
              >
                <img src={url + product.img1} alt="img" className="w-96 h-72" />
                <div className="pt-3 flex flex-col justify-between items-start gap-3">
                  <h6>
                    {product.pname} <small>{product.pdesc}</small>
                  </h6>
                  <small className="text-gray-500">{product.brand}</small>
                  <small>
                    <RatingStars rating={product.rating} />
                  </small>
                </div>
                <p>
                  <span className="font-semibold">
                    RS{" "}
                    <Calcprice prices={product.price} offers={product.offer} />{" "}
                  </span>
                  <span className="font-light text-gray-500 pl-2 text-base line-through">
                    RS {product.price}
                  </span>
                  <span className="pl-3 text-lg text-green-300">
                    {product.offer} % off
                  </span>
                </p>
                <p className="pt-3 text-red-500 capitalize font-serif">
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="text-orange-300 hover:text-green-300"
                  />
                  <span className="pl-3">*</span>Ship in 2 days
                </p>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex  flex-col justify-between  items-center p-10">
          <div className="bg-black shadow-2xl rounded-lg p-3  hover:bg-white hover:transition-all">
            <img
              src="https://saferoomdesigns.com/wp-content/uploads/2021/06/item_no.png"
              alt=""
            />
          </div>
          <div className="items-center p-3 bg-red-300 rounded-b-xl text-white">
            <h1>No item found</h1>
          </div>
        </div>
      )}
        </>
      )}
 
    </>
  );
};

export default Productpage;
