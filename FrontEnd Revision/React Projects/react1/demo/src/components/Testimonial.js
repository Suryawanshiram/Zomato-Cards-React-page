import React from 'react';
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
      return (
            <div className="work-section-wrapper">
                  <div className="work-section-top">
                        <p className="primary-subheading">Testimonial</p>
                        <h1 className="primary-heading">What They Are Saying</h1>
                        <p className="primary-text">
                              Great atmosphere, delicious food, and friendly service.
                              I highly recommend this restaurant for a wonderful dining experience.
                        </p>
                  </div>
                  <div className="testimonial-section-bottom">
                        <img src={ProfilePic} alt="" />
                        <p>
                              Absolutely delicious! The meal was fresh, flavorful, and beautifully presented. I highly recommend it!
                        </p>

                        <div className="testimonials-stars-container">
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                        </div>
                        <h2>John Doe</h2>
                  </div>
                  <div className="testimonial-section-bottom">
                        <img src={ProfilePic} alt="" />
                        <p>
                              I had a wonderful experience with the meal - the flavors were amazing, the portions generous, and the presentation was impressive. I would definitely order again
                        </p>

                        <div className="testimonials-stars-container">
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />

                        </div>
                        <h2>Ram Suryawanshi</h2>
                  </div>
            </div>
      )
}

export default Testimonial