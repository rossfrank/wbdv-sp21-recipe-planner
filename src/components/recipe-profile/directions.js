import React from "react";
import "./recipe-profile.css";

const Directions = () => {
  return (
    <>
      <div className="row center-element percentage70-item">
        <div className="col">
          <h4>Directions</h4>
        </div>
      </div>
      <ol className="percentage70-item center-element">
        <li>
          Place egg in a saucepan and cover with cold water. Bring water to a
          boil and immediately remove from heat. Cover and let eggs stand in hot
          water for 10 to 12 minutes. Remove from hot water, cool, peel and
          chop.
        </li>
        <li>
          Place the chopped eggs in a bowl, and stir in the mayonnaise, mustard
          and green onion. Season with salt, pepper and paprika. Stir and serve
          on your favorite bread or crackers.
        </li>
      </ol>
    </>
  );
};

export default Directions;
