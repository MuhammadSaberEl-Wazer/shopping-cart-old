import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { PureComponent } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faShoppingBag,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export class Header extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const cartItem = this.props.cartItem;
    const handleAddProduct = this.props.handleAddProduct;
    const handleRemoveProduct = this.props.handleRemoveProduct;
    const handleOn = this.props.handleOn;

    const totalPrice = cartItem.reduce(
      (price, item) => price + item.quantity * item.price,
      0
    );

    return (
     
        
          <div className="header-container">
            <div className="header-row" >
              <div className="header-left">
                <ul>
                  <li className="header-women">
                    <Link to="/women" className="linko">
                      WOMEN
                    </Link>
                  </li>

                  <li className="header-men">
                    <Link to="/" className="linko">
                      MEN
                    </Link>
                  </li>

                  <li className="header-kids">
                    <Link to="/child" className="linko">
                      KIDS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header-middle">
                <span className="">
                  <Link to="/bag" className="bag-link">
                    <FontAwesomeIcon
                      icon={faShoppingBag}
                      className="bag-icon"
                    ></FontAwesomeIcon>
                  </Link>
                </span>
              </div>
              <div className="header-right">
                <span className="">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        className="dollar-icon"
                      ></FontAwesomeIcon>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dorpo">
                      <Dropdown.Item
                        href="#/action-1"
                        className="drop-item-cur"
                      >
                        $ USD
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        className="drop-item-cur"
                      >
                        € EUR
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        className="drop-item-cur"
                      >
                        ¥ JPY
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
                <span className="">
                  <Dropdown onClick={handleOn} classname="cart-icon-parent">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        className="cart-icon"
                      ></FontAwesomeIcon>
                      <div className="carto-head">
                        <p className="carto-head-no">{cartItem.length}</p>
                      </div>
                    </Dropdown.Toggle>

                    
                    <Dropdown.Menu>
                      <div className="carto-item">
                        <div className="containero3">
                          <h2 className="carto-item-header">
                            My BAG, {cartItem.length} item/s
                          </h2>

                          {(cartItem || []).length === 0 && (
                            <div className="carto-items-empty">
                              No items here
                            </div>
                          )}

                          {cartItem.map((item) => (
                            <div key={item.id} className="carto-item-list">
                              <div className="carto-item-left">
                                <div className="carto-item-name">
                                  {item.name}
                                </div>
                                <div className="carto-item-price">
                                  {" "}
                                  $ {item.price}
                                </div>
                                <div className="carto-item-size">
                                  <button className="carto-item-size-small">
                                    S
                                  </button>
                                  <button className="carto-item-size-medium">
                                    M
                                  </button>
                                </div>
                              </div>
                              <div className="carto-item-right">
                                <div className="carto-item-right-1">
                                  <button
                                    className="carto-item-add"
                                    onClick={() => handleAddProduct(item)}
                                  >
                                    +
                                  </button>

                                  <div className="carto-item-quantity">
                                    {item.quantity}
                                  </div>
                                  <button
                                    className="carto-item-remove"
                                    onClick={() => handleRemoveProduct(item)}
                                  >
                                    -
                                  </button>
                                </div>
                                <div className="carto-item-right-2">
                                  <img
                                    className="carto-items-image"
                                    src={require(`./${item.image}`).default}
                                    alt={item.name}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}

                          <div className="carto-item-total-price-name">
                            <div className="carto-item-total-price-left">
                              Total Price
                            </div>

                            <div className="carto-item-total-price-right">
                              ${totalPrice}
                            </div>
                          </div>
                          <div class="carto-buttons">
                            <Link to="/bag" className="bag-link">
                              <button className="carto-buttons-bag">
                                VIEW BAG
                              </button>
                            </Link>
                            <button className="carto-buttons-check">
                              CHECK OUT
                            </button>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </div>
            </div>
          </div>
        
      
    );
  }
}

export default Header;
