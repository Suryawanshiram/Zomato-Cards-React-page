import React from 'react';
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
      return (
            <div className="about-section-container">
                  <div className="about-background-image-container">
                        <img src={AboutBackground} alt="" />
                  </div>
                  <div className="about-section-image-container">
                        <img src={AboutBackgroundImage} alt="" />
                  </div>
                  <div className="about-section-text-container">
                        <p className="primary-subheading">About</p>
                        <h1 className="primary-heading">
                              Food Is An Important Part Of A Balanced Diet
                        </h1>
                        <p className="primary-text">
                              Eating a balanced and nutritious diet can help you maintain a healthy weight,
                              reduce the risk of chronic diseases such as heart
                        </p>
                        <p className="primary-text">
                              A healthy diet can also help to boost your immune system,
                              making you less susceptible to illness and infection.
                              eating a healthy and balanced diet can have a profound impact on your physical and mental well-being.
                        </p>
                        <div className="about-buttons-container">
                              <button className="secondary-button">Learn More</button>
                              <button className="watch-video-button">
                                    <BsFillPlayCircleFill /> Watch Video
                              </button>
                        </div>
                  </div>
            </div>
      )
}

export default About