import React from "react";

const Hobbies = ({ hobby }) => {
  return (
    <>
      <li>{hobby}</li>
    </>
  );
};

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <div>
      <ol>
        {hobbies.map((hobby, index) => (
          <Hobbies hobby={hobby} key={index} />
        ))}
      </ol>
    </div>
  );
};

export default HobbyList;
