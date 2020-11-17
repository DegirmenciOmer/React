import React, { useState } from "react";
import DogPhoto from "./DogPhoto";
import Button from "./Button";

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState({ status: false, message: "" });

  async function getDogPhotos() {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      const data = await response.json();
      console.log(data);
      setDogPhotos([...dogPhotos, data.message]);
      setLoading(false);
    } catch (error) {
      setError({ status: true, message: error.message });
      setLoading(false);
    }
  }

  return (
    <div>
      <Button getDogPhotos={getDogPhotos} />
      {isLoading && <p>Loading ...</p>}
      {!hasError.status && <DogPhoto dogPhotos={dogPhotos} />}
      {hasError.status && <p>OOPS!!! {hasError.message}</p>}
    </div>
  );
}
