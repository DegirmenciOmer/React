import React from "react";

export default function FriendProfile({ friend }) {
  const {
    name: { title, first, last },
    email,
    phone,
    location: { city, country },
  } = friend;
  return (
    <ul>
      <li>
        Name : {title} {first} {last}
      </li>
      <li>
        Address: {city}, {country}
      </li>
      <li>Email : {email}</li>
      <li>Tel : {phone}</li>
    </ul>
  );
}
