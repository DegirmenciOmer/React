import React from "react";
import GuaranteeItem from "./GuaranteeItem";
import payback from "./files/payback.PNG";
import shipping from "./files/shipping.PNG";
import support from "./files/online-support.PNG";

const Services = [
  {
    img: shipping,
    title: "Free Shipping",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, explicabo!",
  },
  {
    img: payback,
    title: "100% Money back",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, explicabo!",
  },
  {
    img: support,
    title: "Online support 24/7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, explicabo!",
  },
];

const Guarantee = () => {
  const [{ img, title, description }] = Services;
  return (
    <div className="services-container">
      {Services.map((index) => {
        return (
          <GuaranteeItem
            key={index}
            img={img}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};
export default Guarantee;
