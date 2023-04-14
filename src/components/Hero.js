import React, { useContext } from "react";
import "./cssFiles/HeroStyles.css";
import { AiOutlineSearch } from "react-icons/ai";
import Video from "../assets/maldivesVideo.mp4";
import { searchLink } from "../data";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="content home">
        <span className="text1">Your Journey Your Story</span>
        <span className="text1">Choose Your favourite Destination</span>

        <div>
          <SearchBar
            placeholder="Enter Destination Here ..."
            data={searchLink}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
