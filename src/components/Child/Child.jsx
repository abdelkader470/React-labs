import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { id, name, price, model } = this.props.productDatails;
    return (
      <>
        <div className="col-md-4">
          <div className=" card ms-2 mt-3 px-2">
            <h1 className="text-center">{name}</h1>
            <h3>Price: {price}$</h3>
            <h4 className="">Model: {model}</h4>
            <button
              onClick={() => this.props.updatePrice(this.props.index)}
              className="btn btn-dark me-2 mb-3"
            >
              Update
            </button>
            <button
              onClick={() => this.props.daleteProduct(id)}
              className="btn btn-danger  mb-3"
            >
              delete
            </button>
          </div>
        </div>
      </>
    );
  }
}
