import React from "react";

function Trial() {
  fetch("https://sigviewauth.sigmoid.io/api/v1/getData"),
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ a: 1, b: 2 }),
    }),
      .then((res) => res.json())
      .then((result) => console.log(result));

  return <div></div>;
}

export default Trial;
