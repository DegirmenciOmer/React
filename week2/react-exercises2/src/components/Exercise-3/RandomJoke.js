import React, { useState, useEffect } from "react";
import Joke from "./Joke";

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    const jokify = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();
        setJoke(data);
        setLoading(false);
      } catch (error) {
        setError({ status: true, message: error.message });
        setLoading(false);
      }
    };
    jokify();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {!hasError.status && <Joke joke={joke} />}
      {hasError.status && <p>OOPS!!! {hasError.message}</p>}
    </div>
  );
}
