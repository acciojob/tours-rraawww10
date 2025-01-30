import React, { useState } from "react";

const Tour = ({ tour, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id, name, info, image, price } = tour;

  const toggleInfo = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p id={`tour-item-para-${id}`}>{isExpanded ? info : `${info.substring(0, 200)}...`}</p>
      <button id={`delete-btn-${id}`} onClick={toggleInfo}>
  {isExpanded ? "See less" : "See more"}
</button>

      <p>${price}</p>
      <button id={`delete-btn-rec6d6T3q5EBIdCfD`} onClick={() => onDelete(id)}>Delete Tour</button>
    </div>
  );
};

export default Tour;
