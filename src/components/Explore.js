import React from "react";
import "../style.css";
const Explore = ({ title, placesAPI }) => {
  return (
    <>
      <div id="explore-1" className="relative my-10 md:mt-10">
        <div className="travigo-container">
          <div className="flex items-center justify-center text-center mb-11 md:mb-17">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
          </div>
          <div className="grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {placesAPI?.map((val, i) => (
              <div
                key={i}
                className="item flex items-center gap-5 sm:gap-3 rounded-lg hover:bg-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="corner-image flex items-center">
                  <img
                    src={val.placeImg}
                    alt={val.location}
                    className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg"
                  />
                </div>
                <div className="flex items-start flex-col text-slate-900">
                  <h1 className="text-lg sm:text-sm font-bold">
                    {val.location}
                  </h1>

                  <p className="font-normal lg:text-sm text-base sm:text-xs">
                    {val.distance}
                  </p>
                </div>

                <a href={val.link} target="_blank">
                  <button className="bg-white-500 hover:bg-grey-700 text-black font-bold py-2 px-4 rounded-full">
                    Explore Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
