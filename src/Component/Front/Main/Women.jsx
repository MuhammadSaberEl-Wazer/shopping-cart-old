import React from "react";
import { PureComponent } from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export class Women extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const womenProduct1 = this.props.womenProduct.productItems;
    const handleAddProduct = this.props.handleAddProduct;
    const handleOff = this.props.handleOff;

    return (
      <div className="containero">
        <div id="routingPage" onClick={handleOff}></div>
        <div className="min-cont">
          <h2 className="head">Women</h2>
        </div>
        <div className="min-cont">
          {womenProduct1.map((product) => (
            <div className={"card"} key={product.id}>
              <Link
                to={`/product/${product.id}/${product.image}/${product.price}/${product.name}`}
              >
                {" "}
                <div className="img-and-p">
                  <img className="product-image" src={require(`./${product.image}`)} />

                  <h5 className="out-of-stock">OUT OF STOCK</h5>
                </div>
              </Link>
              <div className="lower">
                <div>
                  <h3 className="product-name"> {product.name} </h3>
                </div>
                <div className="product-price"> ${product.price} </div>
                <div>
                  <button
                    className="product-add-button"
                    onClick={() => handleAddProduct(product)}
                  >
                    <FontAwesomeIcon
                      icon={faCartPlus}
                      className="cart-icon"
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Women;
