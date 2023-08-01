import React from "react";
import { name, city } from "../../data/user"; // Update the file path

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>Your Name is a Web Developer from {city}</h1>
    </div>
  );
}

export default Home;