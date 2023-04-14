import React, { useContext } from "react";
// import context
import { HouseContext } from "./HouseContext";
// import components
import House from "./House";
import "./cssFiles/HouseListStyle.css";

const HouseList = () => {
  const { houses, setHouses } = useContext(HouseContext);
  return (
    <section className="house-list mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return <House house={house} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
