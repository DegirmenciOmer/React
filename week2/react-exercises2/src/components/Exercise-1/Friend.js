import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import Button from "./Button";

export default function Friend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState({ status: false });

  async function getFriend() {
    setLoading(true);
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      setFriend(data.results[0]);
      setLoading(false);
    } catch (error) {
      setError({ status: true, message: error.message });
      setLoading(false);
    }
  }

  return (
    <div>
      <Button getFriend={getFriend} />
      {isLoading && <p>Loading ...</p>}
      {!hasError.status && friend.name && <FriendProfile friend={friend} />}
      {hasError.status && <p>OOPS!!! {hasError.message}</p>}
    </div>
  );
}
