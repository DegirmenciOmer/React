import React, { useState } from "react";
import { nanoid } from "nanoid";
export default function DogPhoto({ dogPhotos }) {
  const [id] = useState(nanoid);
  return (
    <>
      {dogPhotos.map((dog) => (
        <img className="dog-img" src={dog} key={id} alt="Nice Dog" />
      ))}
    </>
  );
}
