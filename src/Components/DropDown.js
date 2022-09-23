import React from "react";
import "./DropDown.css";

const DropDown = () => {
  return (
    <React.Fragment>
      <div className="select" tabindex="1">
        <input className="selectopt" name="test" type="radio" id="opt1" checked />
        <label for="opt1" class="option">
          Oranges
        </label>
        <input className="selectopt" name="test" type="radio" id="opt2" />
        <label for="opt2" class="option">
          Apples
        </label>
        <input className="selectopt" name="test" type="radio" id="opt3" />
        <label for="opt3" class="option">
          Grapefruit
        </label>
        <input className="selectopt" name="test" type="radio" id="opt4" />
        <label for="opt4" class="option">
          Bananas
        </label>
        <input className="selectopt" name="test" type="radio" id="opt5" />
        <label for="opt5" class="option">
          Watermelon
        </label>
      </div>
    </React.Fragment>
  );
};
export default DropDown;
