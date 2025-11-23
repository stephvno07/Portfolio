import React from 'react';
import ProfilePic from "../assets/profile.png"; // Note: path changed to '../assets/'

export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero-left">
        <img src={ProfilePic} alt="Profile" />
      </div>
      <div className="hero-right">
        <p className="subtitle">Dangal Greetings! I am Stephanie Gapang</p>
        <h1>A Dangal Programmer & Creative Designer</h1>
        <p>
          Building elegant, user-centric digital experiences. Focused on front-end architecture and user-centric design principles, as a student from the College of Computing Studies.
        </p>
        <div className="buttons">
          <a href="#projects" className="explore button">Explore My Work</a>
        </div>
      </div>
    </header>
  );
}