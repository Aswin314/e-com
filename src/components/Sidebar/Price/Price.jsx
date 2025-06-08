import React from "react";
import Input from "../../Input";

const Price = ({ Handlechange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={Handlechange} value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <Input
        Handlechange={Handlechange}
        value={100}
        name="test2"
        title="$0 - $100"
      />
      <Input
        Handlechange={Handlechange}
        value={500}
        name="test2"
        title="$100 - $500"
      />
      <Input
        Handlechange={Handlechange}
        value={1000}
        name="test2"
        title="$500 - $1000"
      />
      <Input
        Handlechange={Handlechange}
        value={2000}
        name="test2"
        title="$1500 - $2000"
      />
    </div>
  );
};

export default Price;
