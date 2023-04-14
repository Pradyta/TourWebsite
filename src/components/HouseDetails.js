import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { housesData } from "../data";
import Navbar from "./Navbar";

const HouseDetails = () => {
  const { id } = useParams();
  console.log(Number(id));
  const [data, setData] = useState(housesData);
  return (
    <>
      <Navbar />
      <div className="container mt-2 ">
        <h1 className="text-center">House Details Page</h1>
        <section className="container mt-3">
          <div className="iteamsdetails space-y-10 ">
            {data.map((ele) => {
              return (
                <>
                  <div className="flex justify-center">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
                      <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={ele.image}
                        alt=""
                      />
                      <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">
                          {ele.name}
                        </h5>
                        <p className="text-gray-700 text-base mb-4">
                          {ele.description}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {ele.surface}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {ele.bedrooms}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {ele.bathrooms}
                        </p>
                        <p className="text-gray-600 text-xs">
                          ${ele.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default HouseDetails;
