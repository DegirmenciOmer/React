import React from "react";
import HobbyItem from "./HobbyItem";

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
          <HobbyItem hobby={hobby} key={index} />
        ))}
      </ol>
    </div>
  );
};

export default HobbyList;
