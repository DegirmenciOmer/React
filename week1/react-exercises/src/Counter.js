import React from "react";

const Counter = () => {
  const count = 0;
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
