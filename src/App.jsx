import { useState } from "react";
import Nav from "./components/Navigation/Nav.jsx";
import Product from "./components/Products/Product.jsx";
import Recommended from "./components/Recommended/Recommended.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Products from "./db/data.js";
import Card from "./components/Card.jsx";
import "./index.css";

function App() {
  const [selected, setselected] = useState(null);
  const [query, setQuery] = useState("");
  const Handleinput = (e) => {
    setQuery(e.target.value);
  };
  const Handlechange = (e) => {
    setselected(e.target.value);
  };
  const Handleclick = (e) => {
    setselected(e.target.value);
  };
  const filtereditems = Products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );
  function FilteredData(Products, select, query) {
    let Filteredproducts = Products;
    if (query) {
      Filteredproducts = filtereditems;
    }
    if (select) {
      Filteredproducts = Filteredproducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === select ||
          color === select ||
          company === select ||
          newPrice === select ||
          title === select
      );
    }
    return Filteredproducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const Result = FilteredData(Products, selected, query);
  return (
    <>
      <div>
        <Sidebar Handlechange={Handlechange} />
        <Nav query={query} Handleinput={Handleinput} />
        <Recommended Handleclick={Handleclick} />
        <Product Result={Result} />
      </div>
    </>
  );
}

export default App;
