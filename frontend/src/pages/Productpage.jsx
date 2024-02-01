import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Productpage = () => {
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
        const response = await axios.get("/api/products/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    // <>
    //   {products.map((product) => (
    //     <div key={product.id}>
    //       <h1>{product.pname}</h1>
    //       <p>Price: {product.price}</p>
    //       <img src={url + product.img1} alt="fgd" />
    //     </div>
    //   ))}
    //   <h1 className="m-10">Product pages</h1>
    // </>

    <>
      {products ? (
        <div className=" pt-2 pb-3 bg-gradient-to-r from-white to-orange-100 ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-5  px-5 items-center justify-center">
            {products?.map((product) => (
              <Link
                to={"/dtproduct"}
                className="card bg-white shadow-lg rounded-md p-2 hover:-translate-y-1 hover:transition-all hover:shadow-2xl w-60 md:w-96  overflow-hidden h-auto"
              >
                <img
                  src={url + product.img1}
                  alt="img"
                  className="w-96 h-72"
                />
                <div className="pt-3 flex flex-col justify-between items-start gap-3">
                
                  <h6>{product.pname} <small>{product.pdesc}</small></h6>
                  <small className="text-gray-500">{product.brand}</small>
                  <small>

                  <RatingStars rating={product.rating} />
                   
                    
                  </small>
                </div>
                <p>
                  <span className="font-semibold">RS <Calcprice  prices={product.price}  offers={product.offer}/> </span>
                  <span className="font-light text-gray-500 pl-2 text-base line-through">
                    RS {product.price}
                  </span>
                  <span className="pl-3 text-lg text-green-300">{product.offer} % off</span>
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
  );
};

export default Productpage;
