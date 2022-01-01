import { Routes, Route } from "react-router-dom";
import React from "react";
import Women from "../Main/Women";
import Child from "../Main/Child";
import Men from "../Main/Men";
import Bag from "../Bag/Bag";
import Product from "../Product/Product";
import { PDP } from "../Product/Product";
import "./Routing.css";


const Routing = ({
  womenProduct,
  menProduct,
  childProduct,
  cartItem,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  handleOn,
  handleOff,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/women"
          exact
          element={
            <Women
              womenProduct={womenProduct}
              handleAddProduct={handleAddProduct}
              handleOn={handleOn}
              handleOff={handleOff}
            />
          }
        ></Route>
        <Route
          path="/men"
          exact
          element={
            <Men
              menProduct={menProduct}
              handleAddProduct={handleAddProduct}
              handleOff={handleOff}
            />
          }
        ></Route>
        <Route
          path="/child"
          exact
          element={
            <Child
              childProduct={childProduct}
              handleAddProduct={handleAddProduct}
              handleOff={handleOff}
            />
          }
        ></Route>
        <Route
          path="/bag"
          exact
          element={
            <Bag
              cartItem={cartItem}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
              handleOn={handleOn}
              handleOff={handleOff}
            />
          }
        ></Route>



        <Route
          path={`/product/:id/:image/:price/:name`}
          exact
          element={
            <Product
              cartItem={cartItem}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
              handleOn={handleOn}
              handleOff={handleOff}
            />
          }
        ></Route>

        <Route

          element={
            <PDP
              cartItem={cartItem}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
              handleOn={handleOn}
              handleOff={handleOff}
            />
          }
        ></Route>

        <Route
          path="/shopping-cart-old/"
          exact
          element={
            <Women
              womenProduct={womenProduct}
              handleAddProduct={handleAddProduct}
              handleOn={handleOn}
              handleOff={handleOff}
            />
          }
        ></Route>



        {/* <Route path="/product" exact element={<Women womenProduct={womenProduct} />}></Route> */}
      </Routes>
    </div>
  );
};

export default Routing;
