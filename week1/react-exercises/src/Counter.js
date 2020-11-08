import React from "react";

const Counter = () => {
  return (
    <div>
      <Count />
      <Button />
    </div>
  );
};

const Count = () => {
  return <div></div>;
};

const Button = () => {
  return <button>Count</button>;
};

export default Counter;
