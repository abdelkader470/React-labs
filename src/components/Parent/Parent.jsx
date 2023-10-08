import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      this.setState({ products: JSON.parse(storedProducts) });
    } else {
      this.setState({
        products: [
          { id: 1, name: "oppo", price: 5000, model: "Mobile" },
          { id: 2, name: "LG", price: 6000, model: "TV" },
          { id: 3, name: "Iphone", price: 7000, model: "Mobile" },
          { id: 4, name: "Lenovo", price: 8000, model: "Laptop" },
        ],
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.products));
  }

  updatePrice = (index) => {
    const products = [...this.state.products];
    products[index].price += 10;
    this.setState({ products });
  };
  daleteProduct = (id) => {
    let products = [...this.state.products];
    products = products.filter((product) => product.id !== id);
    this.setState({ products });
  };
  addProduct = () => {
    const product = {
      id: this.state.products.length + 1,
      name: "Realme",
      price: 5000,
      model: "Mobile",
    };
    let products = [...this.state.products];
    products = [...products, product];
    this.setState({ products });
  };

  render() {
    return (
      <>
        <div
          className="container-fluid vh-100"
          style={{ backgroundColor: "#421C59" }}
        >
          <div className="row">
            {this.state.products.map((product, index) => (
              <Child
                key={index}
                productDatails={product}
                updatePrice={this.updatePrice}
                daleteProduct={this.daleteProduct}
                index={index}
              />
            ))}
          </div>
          <button className="btn btn-dark mt-3 " onClick={this.addProduct}>
            Add Product
          </button>
        </div>
      </>
    );
  }
}
