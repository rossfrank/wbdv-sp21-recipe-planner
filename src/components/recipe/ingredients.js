import React from "react";
import "./recipe-profile.css"

const Ingredients = () => {
  return (
    <>
      <div className="row center-element percentage70-item">
        <div className="col-8">
          <h4>Ingredients</h4>
        </div>
        <div className="col-4 align-to-right">
          <i className="fas fa-shopping-basket"/>
        </div>
      </div>
        <table className="center-element table-frame">
          <tbody>
            <tr>
              <td className="align-to-left">Eggs</td>
              <td className="align-to-right">200g</td>
            </tr>
            <tr>
              <td className="align-to-left">Salad</td>
              <td className="align-to-right">20g</td>
            </tr>
            <tr>
              <td className="align-to-left">Sesame</td>
              <td className="align-to-right">10g</td>
            </tr>
          </tbody>
        </table>
    </>
  );
};

export default Ingredients;
