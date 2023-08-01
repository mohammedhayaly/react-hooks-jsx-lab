import React from "react";
import { image } from "../../data/user"; // Update the file path

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I'm a passionate web developer who loves building awesome applications.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;