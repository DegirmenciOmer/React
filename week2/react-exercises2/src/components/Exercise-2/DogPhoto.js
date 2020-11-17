import React from "react";

export default function DogPhoto({ dogPhotos }) {
  return (
    <>
      {dogPhotos.map((dog, index) => (
        <img src={dog} key={index} width="100px" />
      ))}
    </>
  );
}
