import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contactus = () => {
    const [btnval,setBtnval]=useState(" SUBMIT YOUR REQUEST")
  const [values, setValues] = useState({
    name: "",
    email: "",
    mob: "",
    reason: "",
    img: "",
    message: "",
  });
  const handleOnChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setValues((prev) => {
      return { ...prev, [name]: val };
    });
  };
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      setBtnval(" SUBMITING YOUR REQUEST...");
  
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('mob', values.mob);
      formData.append('reason', values.reason);
      formData.append('img', e.target.img.files[0]); // Assuming values.img is the File object
      formData.append('message', values.message);
  console.log(values.img)
      const response = await axios.post("/api/contactus/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      setValues({
        name: "",
        email: "",
        mob: "",
        reason: "",
        img: "",
        message: "",
      });
  
      setBtnval(" SUBMITED YOUR REQUEST");
  
      console.log(response);
      if (response.status === 201) {
        toast.success(response.data.message);
      } else {
        toast.warning(response.data.message);
      }
    } catch (error) {
      setBtnval(" FAILED...");
  
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  
  return (
    <div className="p-10 bg-gray-100 flex justify-center items-center">
      <div className=" bg-white border w-auto md:w-1/2 ">
        <div className="header p-3 text-center border-b-2 border-b-orange-400">
          <h1 className="text-lg md:text-2xl text text-orange-500 cursor-pointer">
            New Complaint Or Feedback ?
          </h1>
          <h1 className="text-gray-300 ">Ladies and Gentleman welcome</h1>
        </div>

        <div className="flex p-10 items-center gap-2">
          <FontAwesomeIcon icon={faPlay} className="text-orange-400" />
          <h1 className="font-bold">
            Let us know what you think of our products
          </h1>
        </div>
        <form
          onSubmit={handleOnSubmit}
          className="pt-3 flex flex-col items-start justify-center gap-5 px-10"
          encType="multipart/form-data"
        >
          <div className="flex items-center gap-3">
            <p className="text-bold text-lg md:text-xl">
              Name <span className="text-red-600 text-sm font-bold">*</span>
            </p>
            <input
              type="text"
              className="w-auto md:w-80 rounded-md border border-gray-300 ml-10"
              name="name"
              value={values.name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-bold text-lg md:text-xl">
              Email <span className="text-red-600 text-sm font-bold">*</span>
            </p>
            <input
              type="email"
              className="w-auto md:w-80 rounded-md border border-gray-300 ml-10"
              name="email"
              value={values.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-bold text-lg md:text-xl">
              Mobile No{" "}
              <span className="text-red-600 text-sm font-bold">*</span>
            </p>
            <input
              type="number"
              className="w-auto md:w-80 rounded-md border border-gray-300"
              name="mob"
              value={values.mob}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-bold text-lg md:text-xl">
              Reason<span className="text-red-600 text-sm font-bold">*</span>
            </p>
            <select
              name="reason"
              id=""
              onChange={handleOnChange}
              value={values.reason}
              className="w-auto md:w-80 h-10 rounded-md border border-gray-300 text-center ml-9"
              required
            >
              <option value="">-- Select Reson --</option>
              <option value="website feddback">Website Feedback</option>
              <option value="Order Related Query">Order Related Query</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-bold text-lg md:text-xl">Upload File </p>
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              value={values.img}
              onChange={handleOnChange}
              className="w-auto md:w-80 rounded-md border border-gray-300 ml-2"
              name="img"
            />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-bold text-lg md:text-xl">
              Message <span className="text-red-600 text-sm font-bold">*</span>
            </p>
            <textarea
              className="w-auto md:w-80 rounded-md border border-gray-300 ml-5"
              name="message"
              onChange={handleOnChange}
              placeholder="Your Comment"
              value={values.message}
              required
            ></textarea>
          </div>
          <button className="bg-orange-500 rounded-md hover:bg-orange-700 text-white text-center  px-5 h-10 mb-5">
            {btnval}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
