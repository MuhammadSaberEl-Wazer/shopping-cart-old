import React from 'react';
import Header from "./Component/Front/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { women, men, child } from "./Component/Back/data/data";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Routing from "./Component/Front/Routes/Routing";

function App() {
  const womenProduct = women;
  const menProduct = men;
  const childProduct = child;

  const [cartItem, setCarItem] = useState([]);
  

  const handleAddProduct = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist) {
      setCarItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCarItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCarItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCarItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCarItem([]);
  };

  const handleOn = () => {
    document.getElementById("routingPage").style.display = "block";
  }
  
  const handleOff = () => {
    document.getElementById("routingPage").style.display = "none";
  }

  return (
    <div className="App fw-bold">
      <Router>
        <Header 
          womenProduct={womenProduct}
          menProduct={menProduct}
          childProduct={childProduct}
          cartItem={cartItem}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
          handleOn={handleOn}
          handleOff={handleOff}
        />
        <Routing  id="Routero"
          womenProduct={womenProduct}
          menProduct={menProduct}
          childProduct={childProduct}
          cartItem={cartItem}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
          handleOn={handleOn}
          handleOff={handleOff}
          
        />
      </Router>
    </div>
  );
}

export default App;
