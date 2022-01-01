import React from "react";
import { PureComponent } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

const PDP = () => {
  const { id, name, image, price } = useParams();
  console.log(id, name, image, price);

  const names = name.split(" ");
  const mainName = names[0];
  const secondName = `${names[1]} ${names[2]}`;
  return (
    <div>
      <div className="PDP-container">
        <div className="PDP-min-cont">
          <div className="PDP-left">
            <img
              src={require(`./pics/${image}`).default}
              alt="Product Image Here"
              srcset=""
            />
            <img
              src={require(`./pics/${image}`).default}
              alt="Product Image Here"
              srcset=""
            />
            <img
              src={require(`./pics/${image}`).default}
              alt="Product Image Here"
              srcset=""
            />
          </div>
          <div className="PDP-middle">
            <img
              src={require(`./pics/${image}`).default}
              alt="Product Image Here"
              srcset=""
              className="PDP-main-image"
            />
          </div>
          <div className="PDP-right">
            <div className="PDP-right-1">
              <h2 className="PDP-main-title">{mainName}</h2>
              <h2 className="PDP-second-title">{secondName}</h2>
            </div>

            <div className="PDP-right-2">
              <h5>SIZE:</h5>
              <div className="PDP-right-buttons" >
                <button className="PDP-size-button invalid-button-1">XS</button>
                <button className="PDP-size-button black-button-2">S</button>
                <button className="PDP-size-button">M</button>
                <button className="PDP-size-button">L</button>
              </div>
            </div>
            <div className="PDP-right-3">
              <h5>PRICE:</h5>
              <p>${price}</p>
            </div>
            <div className="PDP-right-4">
              <button >ADD TO CART</button>
            </div>
            <div className="PDP-right-5">
              <p>
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all favorite brands
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PDP };

export class Product extends PureComponent {
  render() {
    const handleOff = this.props.handleOff;

    return (
      <div>
        <div onClick={handleOff} id="routingPage"></div>
        <PDP />
      </div>
    );
  }
}
export default Product;
