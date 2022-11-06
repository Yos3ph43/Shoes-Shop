import React, { Component } from "react";
import styles from "./Shoes.module.css";

export default class Shoes extends Component {
  render() {
    const item = this.props.product;
    const { name, price, image } = this.props.product;
    const setSelectedItem = this.props.select;
    const addToCart = this.props.addToCart;
    return (
      <div className={styles.item}>
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p>{price}$</p>
        <button onClick={() => addToCart(item)}>Add to Cart 🛒</button>
        <button
          onClick={() => {
            setSelectedItem(item);
          }}
        >
          More Info ℹ
        </button>
      </div>
    );
  }
}
