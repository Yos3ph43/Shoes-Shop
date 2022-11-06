import React, { Component } from "react";

export default class ShoesDetails extends Component {
  render() {
    const { name, price, description, quantity, image } = this.props.item;
    return (
      <div style={{ border: "1px solid black", padding: 20 }}>
        <h4>Tên SP: {name}</h4>
        <img src={image} alt="" style={{ width: 200 }} />
        <h4>Giá: {price} </h4>
        <h4>Mô tả: {description} </h4>
        <h4>Số Lượng: {quantity}</h4>
      </div>
    );
  }
}
