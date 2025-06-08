import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";
import "./Sidebar.css";
const Sidebar = ({ Handlechange }) => {
  return (
    <section className="sidebar">
      {" "}
      <div className="logo-container">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm1.83-3.41A1.996 1.996 0 0 0 17 13H7l-.94-4H21a1 1 0 0 0 0-2H6.42l-.94-4H2v2h2l3.6 7.59-1.35 2.44C5.16 17.37 5.52 18 6.09 18H19v-2H6.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21 4H5.21l-.94-2H0v2h2l3.6 7.59-1.35 2.44C3.16 17.37 3.52 18 4.09 18H19v-2H6.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21 4H5.21l-.94-2H0v2h2l3.6 7.59-1.35 2.44C3.16 17.37 3.52 18 4.09 18H19v-2z" />
          </svg>
        </h1>
      </div>
      <Category Handlechange={Handlechange} />
      <Price Handlechange={Handlechange} />
      <Color Handlechange={Handlechange} />
    </section>
  );
};

export default Sidebar;
