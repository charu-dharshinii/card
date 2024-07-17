import React, { useState } from "react";
import "./StudentCard.css";
import Photo from "./picc.jpeg";

const StudentCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="photo-img" />
      <h2 className="title">Name: CHARU K</h2>
      <p className="details">Registration No: 212221240016</p>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p>Artificial Intelligence and Machine Learning</p>
        </div>
      )}
    </div>
  );
};

export default StudentCard;