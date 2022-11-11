import React, { Component } from "react";

export default class ShoesDetails extends Component {
  render() {
    const { name, price, description, quantity, image } = this.props.item;
    return (
      <div
        className="position-fixed w-100 h-100 top-0 left-0 pt-5"
        style={{ background: "rgb(0,0,0,0.5)" }}
      >
        <div className="bg-white container position-relative p-5 mt-5  border border-dark rounded">
          <h4>Tên SP: {name}</h4>
          <img src={image} alt="" style={{ width: 200 }} />
          <h4>Giá: {price} </h4>
          <h4>Mô tả: {description} </h4>
          <h4>Số Lượng: {quantity}</h4>
          <button
            className="btn btn-dark m-3"
            style={{ position: "absolute", top: 0, right: 0 }}
            onClick={this.props.closeDetail}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}
