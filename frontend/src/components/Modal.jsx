import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Modal = ({ id, order_id }) => {
  const [input, setinput] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleOnclick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/cancel/${order_id}/`,
        {
          order: id,
          reason: input,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );
      
      if (response.data.message) {
        setinput("")
        toast.warning(response.data.message);
      }
    } catch (error) {
      toast.error("Sorry Try Again");
      console.log(error);
    }
  };
  return (
    <>
      <button
        data-modal-target="crud-modal"
        onClick={toggleModal}
        className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
        type="button"
      >
        Cancel
      </button>

      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden={!isOpen}
        className={`${
          isOpen ? "fixed" : "hidden"
        } overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        {/* Modal content */}
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cancel Product
              </h3>
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5" onSubmit={handleOnclick}>
              {/* Form fields */}
              <div className="col-span-2">
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reason
                </label>
                <textarea
                  id="description"
                  value={input}
                  rows="4"
                  onChange={(e) => {
                    setinput(e.target.value);
                  }}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write product cancel reason here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white mt-3 inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cancel Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
