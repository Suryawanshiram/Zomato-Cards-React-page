import React from 'react';
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
      const workInfoData = [
            {
                  image: PickMeals,
                  title: "Pick Meals",
                  text: "A meal section in a restaurant is a grouping of dishes that are typically served together for a specific meal, such as breakfast, lunch, or dinner. These sections may also include appetizers or desserts.",
            },
            {
                  image: ChooseMeals,
                  title: "Choose How Often",
                  text: " Customers can choose from various categories such as appetizers, entrees, desserts, and beverages.  ",
            },
            {
                  image: DeliveryMeals,
                  title: "Fast Deliveries",
                  text: "Delivery meals are a convenient option for customers who want to enjoy restaurant-quality meals in the comfort of their own homes without having to cook or go out to a restaurant.",
            },
      ];
      return (
            <div className="work-section-wrapper">
                  <div className="work-section-top">
                        <p className="primary-subheading">Work</p>
                        <h1 className="primary-heading">How It Works</h1>
                        <p className="primary-text">
                              Browse through a menu, place an order, and pay through the app. Once the user places an order, the restaurant confirms it and provides an estimated delivery or pickup time.
                              The app may offer recommendations based on the user's previous orders or location.
                        </p>
                  </div>
                  <div className="work-section-bottom">
                        {workInfoData.map((data) => (
                              <div className="work-section-info" key={data.title}>
                                    <div className="info-boxes-img-container">
                                          <img src={data.image} alt="" />
                                    </div>
                                    <h2>{data.title}</h2>
                                    <p>{data.text}</p>
                              </div>
                        ))}
                  </div>
            </div>
      )
}

export default Work