import React from 'react';
import "./Topic.css";
import {sai,
  child,  flower} from "./Images";

const Topic = () => {
  const columnData = [
    {
      topic: "Oil Painting",
      paragraph: "Oil painting is a traditional painting medium that uses pigments suspended in oil, typically linseed oil, as a binder. It's known for its richness and depth of color",
      image: sai,
      buttonText: "Find out more"
    },
    {
      topic: "Watercolor Painting",
      paragraph: "Watercolor painting uses pigments mixed with water as the primary medium. The paint is transparent, and the paper serves as the white in the artwork.",
      image: flower,
      buttonText: "Find out more"
    },
    {
      topic: "Digital Painting",
      paragraph: "Digital painting is created using digital tools, such as graphic tablets and software. It allows for a wide range of styles and techniques.",
      image: child,
      buttonText: "Find out more"
    }
  ];
  return (
    <div className="topics-container">
      {columnData.map((topic, index) => (
        <div key={index} className="column">
          <h2>{topic.topic}</h2>
          <img src={topic.image} alt={topic.topic} />
          <p>{topic.paragraph}</p>
          <button>{topic.buttonText}</button>
        </div>
      ))}
    </div>
  );
}

export default Topic;
