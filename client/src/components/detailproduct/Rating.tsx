import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../assets/css/rating.css";

const Rating = ({ rating, setRating }: any) => {
  const [hover, setHover] = useState<any>();

  return (
    <div>
      {[...Array(5)].map((index, i) => {
        const ratingValue = i + 1;

        return (
          <label key={index}>
            <input type="radio" name="rating" value={ratingValue} />
            <FaStar
              className="star"
              size={38}
              color={ratingValue <= (hover || rating) ? "#eda500" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(ratingValue)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
