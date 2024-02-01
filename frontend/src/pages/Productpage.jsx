import React, { useEffect, useState } from "react";
import axios from "axios";

const Productpage = () => {
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
    </>
  );
};

export default Productpage;
