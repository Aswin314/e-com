import React from "react";
import "./Recommended.css";
import Button from "../Button";
const Recommended = ({ Handleclick }) => {
  return (
    <div>
      <h2 className="recommended-title">Recommended Products</h2>
      <div className="recommended-btns">
        <Button onClickHandler={Handleclick} value="" title="All" />
        <Button onClickHandler={Handleclick} value="Nike" title="Nike" />
        <Button onClickHandler={Handleclick} value="Adidas" title="Adidas " />
        <Button onClickHandler={Handleclick} value="Puma" title="Puma" />
        <Button onClickHandler={Handleclick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};

export default Recommended;
