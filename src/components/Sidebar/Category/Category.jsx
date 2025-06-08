import React from "react";
import "./Category.css";
import Input from "../../Input";

const Category = ({ Handlechange }) => {
  return (
    <div>
      <h2 className="sidebar-title">catogory</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" onChange={Handlechange} value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          Handlechange={Handlechange}
          value="sneakers"
          name="test"
          title="sneakers"
        />
        <Input
          Handlechange={Handlechange}
          value="flats"
          name="test"
          title="flats"
        />
        <Input
          Handlechange={Handlechange}
          value="sandals"
          name="test"
          title="sandals"
        />
        <Input
          Handlechange={Handlechange}
          value="heels"
          name="test"
          title="heels"
        />
         <Input
          Handlechange={Handlechange}
          value="shoes"
          name="test"
          title="shoes"
        />

      </div>
    </div>
  );
};

export default Category;
