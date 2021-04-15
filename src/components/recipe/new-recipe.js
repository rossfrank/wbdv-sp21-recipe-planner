import React from "react";
import "./recipe-profile.css";

const NewRecipe = () => {
  return (
    <div className="whole-page">
      <div className="percentage70-item center-element">
        <form>
          <div className="form-group">
            <label>Dish Name</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Image Link</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Cooking Time</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Ingredients</label>
            <div className="row">
              <div className="col-6">
                <input className="form-control" placeholder="Ingredient Name" />
              </div>
              <div className="col-6">
                <input className="form-control" placeholder="quantity" />
              </div>
            </div>
            <br />
            <div className="row">
              <a className="col-6 pwd-info">Add new ingredients</a>
              <a className="col-6 pwd-info align-to-right">
                Adjust ingredients
              </a>
            </div>
          </div>
          <div className="form-group">
            <label>Instructions</label>
            <textarea
                placeholder="Type instructions here."
                className="form-control instruction-box">
            </textarea>
          </div>
          <div className="form-group">
            <a className="btn btn-primary btn-block wbdv-login bg-theme border-0" href="">
              Upload
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
