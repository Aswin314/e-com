import React from "react";
import "./Color.css";
import Input from "../../Input";
const Color = ({ Handlechange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title color-title ">Colors</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={Handlechange} value="" name="test3" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        Handlechange={Handlechange}
        value="red"
        name="test3"
        title="Red"
        color="red"
      />
      <Input
        Handlechange={Handlechange}
        value="blue"
        name="test3"
        title="blue"
        color="blue"
      />
      <Input
        Handlechange={Handlechange}
        value="green"
        name="test3"
        title="green"
        color="green"
      />
      <Input
        Handlechange={Handlechange}
        value="black"
        name="test3"
        title="black"
        color="black"
      />
    </div>
  );
};

export default Color;
