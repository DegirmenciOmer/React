import React from "react";

export default function FriendProfile({ friend }) {
  return (
    <ul>
      <li>
        Name : {friend.name.title} {friend.name.first} {friend.name.last}
      </li>
      <li>
        Address: {friend.location.city}, {friend.location.country}
      </li>
      <li>Email : {friend.email}</li>
      <li>Tel : {friend.phone}</li>
    </ul>
  );
}
