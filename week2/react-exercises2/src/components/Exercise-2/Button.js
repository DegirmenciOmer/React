import React from "react";

const Button = ({ getDogPhotos }) => {
  return <button onClick={getDogPhotos}>Get a Dog!</button>;
};

export default Button;
