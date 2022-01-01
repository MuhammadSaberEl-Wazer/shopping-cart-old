import React from "react";
import { PureComponent } from "react";
import "./Bag.css";

export class Bag extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const cartItem = this.props.cartItem;
    const handleAddProduct = this.props.handleAddProduct;
    const handleRemoveProduct = this.props.handleRemoveProduct;
    const handleOff = this.props.handleOff;

    const mainName = [cartItem.name];

    // const handleCartClearance = this.props.handleCartClearance;
    // {const names = name.split(" ");
    // const mainName = names[0];
    // let secondName = `${names[1]} ${names[2]}`;}
    // const totalPrice = cartItem.reduce(
    //   (price, item) => price + item.quantity * item.price,
    //   0
    // );
    return (
      <div className="cart-item">
        <div className="containero2">
          <div id="routingPage" onClick={handleOff}></div>
          <h2 className="cart-item-header">CART</h2>

          {(cartItem || []).length === 0 && (
            <div className="cart-item-border">
              <div className="cart-items-empty">No Items Here</div>
            </div>
          )}

          {cartItem.map((item) => (
            <div className="cart-item-border">
              <div key={item.id} className="cart-item-list">
                <div className="cart-item-left">
                  <div className="cart-item-name">
                    <div className="cart-item-name-main">
                      {item.name.split(" ", 1)}
                    </div>
                    <div className="cart-item-name-second">
                      {item.name.split(" ")[1] + " " + item.name.split(" ")[2]}
                    </div>
                  </div>
                  <div className="cart-item-price"> $ {item.price}</div>
                  <div className="cart-item-size">
                    <button className="cart-item-size-small">S</button>
                    <button className="cart-item-size-medium">M</button>
                  </div>
                </div>
                <div className="cart-item-right">
                  <div className="cart-item-right-1">
                    <button
                      className="cart-item-add"
                      onClick={() => handleAddProduct(item)}
                    >
                      +
                    </button>

                    <div className="cart-item-quantity">{item.quantity}</div>
                    <button
                      className="cart-item-remove"
                      onClick={() => handleRemoveProduct(item)}
                    >
                      -
                    </button>
                  </div>
                  <div className="cart-item-right-2">
                    <img
                      className="cart-items-image"
                      src={require(`./${item.image}`).default}
                      alt={item.name}
                    />
                  </div>
                </div>
              
              </div>
            </div>
          ))}
        </div>

        {/* <div className="cart-item-total-price-name">
            Total Price
            <div className="cart-item-total-price">${totalPrice}</div>
          </div> */}
      </div>
    );
  }
}

export default Bag;
