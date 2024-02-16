import {
  faArrowRight,
  faCircle,
  faCoins,
  faDownload,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
const Detailedorder = () => {
  const { id } = useParams();
  const url = "http://127.0.0.1:8000/";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const customername = useSelector((state) => state.customer);
  useEffect(() => {
    if (!localStorage.getItem("id") || !localStorage.getItem("token")) {
      navigate("/login");
    } else {
      try {
        const getItems = async () => {
          setLoading(true);
          const response = await axios.get(`/api/dtorder/${id}/`, {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          });
          setData(response.data);
          setLoading(false);
        };
        getItems();
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  }, [localStorage.getItem("id"), localStorage.getItem("token")]);

  const downloadInvoice = () => {
    const doc = new jsPDF({
      unit: "pt",
      format: [595, 842],
      orientation: "portrait",
    });

    const font = '"Roboto", sans-serif';
    const logo = "/images/Wooden_Street-Logo.wine.png";

    doc.addImage(logo, "png", 10, 10, 40, 40, undefined, "FAST");
    doc.setFont(font);

    let startY = 50;

    data.forEach((item) => {
      doc.setFontSize(16);
      doc.text("Order Invoice", 250, startY, { align: "center" });
      doc.setLineWidth(0.5);
      doc.line(100, startY + 10, 500, startY + 10); // Underline below the heading

      doc.setFontSize(12);
      doc.text("Wooden Stores", 100, startY + 40, { align: "left" });
      doc.text("No 12  DubaiStreet, Abudabi, Dubai", 100, startY + 60, {
        align: "left",
      });

      const productsData = [["", item.product.pname, item.product.price]];

      const productTable = doc.autoTable({
        startY: startY + 90,
        head: [["Image", "Product Name", "Price"]],
        body: productsData,
        theme: "striped",
        styles: {
          fontSize: 10,
          margin: { top: 5, bottom: 5 },
          padding: { top: 2, bottom: 2 },
        },
        didDrawCell: (data) => {
          if (data.column.index === 0 && data.cell.section === "body") {
            const imageSize = 40;
            doc.addImage(
              url + item.product.img1,
              "JPEG",
              data.cell.x + 2,
              data.cell.y + 2,
              imageSize,
              imageSize,
              undefined,
              "FAST",
              function (success) {
                if (!success) {
                  console.error("Failed to load image:", item.product.img1);
                }
              }
            );
          }
        },
      });

      startY = productTable.lastAutoTable.finalY + 30;

      const customerData = [
        ["Customer Name", customername],
        ["Address", item.address.address],
      ];

      const customerTable = doc.autoTable({
        startY: startY,
        body: customerData,
        theme: "striped",
        styles: {
          fontSize: 10,
          margin: { top: 5, bottom: 5 },
          padding: { top: 2, bottom: 2 },
        },
      });
      startY = customerTable.lastAutoTable.finalY + 30;
      doc.text("Total:", 470, startY);
      doc.text(`${item.total}`, 550, startY, { align: "right" });
      startY += 30;
      const footerText = `${
        item.order_id
      } | Generated on ${new Date().toLocaleString()}`;
      const footer = doc.splitTextToSize(footerText, 500);
      doc.text(footer, 10, doc.internal.pageSize.getHeight() - 20, {
        align: "left",
      });

      doc.save(`order_invoice_${item.id}.pdf`);

      doc.setPage(1);
    });
  };

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {data.map((item) => (
            <div className="pt-3 pb-3 px-10 md:px-20">
              <div className="flex justify-start text-center gap-2">
                <Link
                  to={"/"}
                  className="text-sm text-gray-600 hover:text-orange-400"
                >
                  Home
                </Link>
                <div>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className="flex justify-start text-center gap-2">
                  <Link
                    to={"/userprofile"}
                    className="text-sm text-gray-600 hover:text-orange-400"
                  >
                    UserProfile
                  </Link>
                  <div>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="flex justify-start text-center gap-2">
                  <Link
                    to={`/detailorder/${id}`}
                    className="text-sm text-gray-600 hover:text-orange-400"
                  >
                    Order
                  </Link>
                </div>
              </div>
              <div>
                <h1>Welcome {customername}</h1>
              </div>
              <div className="mt-3 border-r-none md:border-r shadow-md flex flex-col md:flex-row cursor-pointer items-center justify-center gap-5 md:gap-20">
                <div className="pt-3 pb-3 border-r px-4">
                  <h1 className="text-xl ">
                    Delivery Address{" "}
                    <FontAwesomeIcon
                      icon={faLocation}
                      className="text-green-500"
                    />{" "}
                  </h1>
                  <p className="text-sm pt-2 text-justify">
                    {item.address.address}
                  </p>
                  <p className="text-lg pt-2">Phone number</p>
                  <p>
                    {" "}
                    {item.address.mob1},{item.address.mob2}
                  </p>
                </div>
                <div className="pt-3 pb-3 border-r-none md:border-r pr-4">
                  <h1 className="text-xl ">
                    Reward{" "}
                    <FontAwesomeIcon
                      icon={faCoins}
                      className="text-orange-500"
                    />{" "}
                  </h1>
                  <p className="text-sm pt-2 text-justify">
                    8 SuperCoins Cashback
                  </p>
                  <small className="text-gray-400">
                    Use it to save on your next order
                  </small>
                </div>
                <div className="pt-3 pb-3  pr-4">
                  <h1 className="text-xl cursor-pointer ">
                    Download
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="text-blue-500 pl-3"
                    />{" "}
                  </h1>
                  <div className="flex gap-5 items-center">
                    <p className="text-sm pt-2 text-justify">
                      Download Invoice
                    </p>
                    <button
                      className="border p-2 bg-blue-500 text-white rounded-md hover:bg-orange-400"
                      onClick={downloadInvoice}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-3 pb-3 px-5 md:pb-10 flex flex-col justify-between items-center gap-5 w-auto ">
                {/* cards */}
                <div className="shadow-md border rounded-md p-2 flex items-center justify-between hover:border-orange-400 cursor-pointer gap-10 w-auto md:w-[85rem] h-auto md:h-60">
                  <img
                    src={url + item.product.img1}
                    alt=""
                    className="w-32 md:w-52"
                  />
                  <div>
                    <h1 className="capitalize text-sm font-semibold">
                      {item.product.pname}
                    </h1>
                    <small className="text-gray-400">Brand: walkaro</small>
                  </div>
                  <h1 className=" text-sm font-semibold"> RS {item.total}</h1>
                  <div className="flex flex-col items-center ">
                    <h1 className=" text-sm font-semibold">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-green-500 pr-3"
                      />
                      Ordered On <span className="px-5">{item.date}</span>
                    </h1>
                  </div>
                  <div className="p-1 border rounded border-green-400 w-24 mx-3">
                    <h2 className="text-lg text-center capitalize">
                      {item.status}
                    </h2>
                  </div>
                </div>

                {/* end cards */}

                <p className="text-lg text-orange-500 ">Status</p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className={` text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ${
                      item.status === "delivered"
                        ? "bg-green-400"
                        : item.status === "cancled"
                        ? "bg-red-600"
                        : item.status === "disptched"
                        ? "bg-yellow-300"
                        : item.status === "confirmed"
                        ? "bg-blue-500"
                        : "bg-orange-500"
                    }`}
                    style={{
                      width:
                        item.status === "confirmed"
                          ? "40%"
                          : item.status === "dispatched"
                          ? "70%"
                          : item.status === "delivered"
                          ? "100%"
                          : item.status === "canceled"
                          ? "0%"
                          : "auto",
                    }}
                  >
                    {" "}
                    {item.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Detailedorder;
