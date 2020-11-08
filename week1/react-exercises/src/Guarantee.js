import React from "react";
import payback from "./files/payback.PNG";
import shipping from "./files/shipping.PNG";
import support from "./files/online-support.PNG";

//import Services from "./Services.js";

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

function GuaranteeItem({ img, title, desc }) {
  return (
    <div className="services-items">
      <img src={img} alt="service-imgs" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
const Guarantee = () => {
  return (
    <div className="services-container">
      {Services.map((service) => (
        <GuaranteeItem
          img={service.img}
          title={service.title}
          desc={service.description}
        />
      ))}
    </div>
  );
};
export default Guarantee;
