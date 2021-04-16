import React from "react";
import "./recipe-profile.css";

const Ingredients = ({ ingred = [] }) => {
  return (
    <>
      <div className="row center-element percentage70-item">
        <div className="col-8">
          <h4>Ingredients</h4>
        </div>
      </div>
      <table className="center-element table-frame">
        <tbody>
          {ingred.map((ingredient) => (
            <tr key={ingredient.id}>
              <td className="align-to-left">{ingredient.nameClean}</td>
              <td className="align-to-right">{`${ingredient.amount} ${ingredient.unit}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};


export default Ingredients;
