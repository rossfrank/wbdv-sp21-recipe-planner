import React from "react";
import "./recipe-profile.css";

const Directions = ({recipe}) => {
  return (
    <>
      <div className="row center-element percentage70-item">
        <div className="col">
          <h4>Directions</h4>
        </div>
      </div>
      <ol className="percentage70-item center-element">
        {recipe.instructions && 
        <>
        <div dangerouslySetInnerHTML ={{__html:recipe.instructions}} />
        </>
        }
        {!recipe.instructions && 
        <>
          <h6>{'Please follow the instructions in '}
          {<a href={recipe.sourceUrl}>{recipe.title}</a>}
          {'.'}
          </h6>
        </>
        }
      </ol>
    </>
  );
};

export default Directions;
