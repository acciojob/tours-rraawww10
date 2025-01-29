import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h3>{name}</h3>
        <h4>${price}</h4>
        <p>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "See less" : "Show more"}
          </button>
        </p>
        <button className="remove-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
