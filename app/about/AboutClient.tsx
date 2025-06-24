"use client";
import "./about.css";
import DiscoverButton from "../../components/Buttons/DiscoverButton/DiscoverButton";

const AboutContent = () => (
  <div className="aboutBody">
    <div className="aboutMainContainer">
      <p className="aboutText">
        UUGGHHH!!! Finding a country that matches your needs can be challenging...
      </p>
      <p className="aboutText">
        Well, nice to meet you, at <span className="boldText">First Step Country</span>, we set out to do just that!
      </p>
      <p className="aboutText">
        Do a short and fun questionnaire, and discover every country that matches your needs!
      </p>
    </div>
    <DiscoverButton label="Begin" id="beginButton" />
  </div>
);

export default AboutContent;
