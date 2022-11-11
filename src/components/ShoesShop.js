import React, { Component } from "react";
import Shoes from "./Shoes";
import ShoesDetails from "./ShoesDetails";
import Cart from "./Cart";
import styles from "./ShoesShop.module.css";
export default class ShoesShop extends Component {
  state = {
    selectedItem: null,
    isShowCart: false,
    cart: [],
  };

  shoesList = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  setSelectedItem = (childItem) => {
    this.setState({ selectedItem: childItem });
  };
  renderShoes = () => {
    const html = this.shoesList.map((item) => {
      return (
        <div key={item.id} className={styles.col}>
          <Shoes
            product={item}
            select={this.setSelectedItem}
            addToCart={this.addToCart}
          />
        </div>
      );
    });
    return html;
  };
  // html cart
  showCart = () => {
    this.setState({
      isShowCart: true,
    });
  };
  hideCart = () => {
    this.setState({
      isShowCart: false,
    });
  };

  // add to cart
  addToCart = (shoes) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => shoes.id === item.prod.id);
    const cartItem = {
      prod: shoes,
      quantity: 1,
    };
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      cloneCart.push(cartItem);
    }
    this.setState(
      {
        cart: cloneCart,
      },
      () => console.log(this.state.cart)
    );
  };
  //deleteCart
  deleteCart = (id) => {
    const cloneCart = [...this.state.cart];
    const index = cloneCart.findIndex((item) => id === item.prod.id);
    if (window.confirm("Xóa khỏi giỏ hàng?")) cloneCart.splice(index, 1);
    this.setState({
      cart: cloneCart,
    });
  };
  // Tăng số lượng
  addQuantity = (id) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => id === item.prod.id);
    if (foundItem) {
      foundItem.quantity += 1;
    }
    this.setState({
      cart: cloneCart,
    });
  };
  // Giảm số lượng
  deductQuantity = (id) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => id === item.prod.id);
    if (!foundItem) return;
    if (foundItem.quantity === 1) {
      if (window.confirm("Xóa khỏi giỏ hàng?")) {
        const index = cloneCart.findIndex((item) => id === item.prod.id);
        cloneCart.splice(index, 1);
      }
    } else foundItem.quantity -= 1;

    this.setState({
      cart: cloneCart,
    });
  };
  //purchase
  purchase = () => {
    this.setState({
      cart: [],
    });
    alert("Thanh toán thành công");
  };

  countShoes = () => {
    return this.state.cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };
  //close detail
  closeDetail = () => {
    this.setState({
      selectedItem: null,
    });
  };
  // render
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h3 className="text-end p-3">
            <button
              className="btn btn-dark"
              style={{ cursor: "pointer" }}
              onClick={this.showCart}
            >
              🛒{this.countShoes()}
            </button>
          </h3>
          <h2 className={styles.title}>Shoes Shop</h2>
          <div className={styles.row}>{this.renderShoes()}</div>
        </div>
        {this.state.selectedItem ? (
          <ShoesDetails
            item={this.state.selectedItem}
            closeDetail={this.closeDetail}
          />
        ) : null}
        {this.state.isShowCart && (
          <Cart
            hideCart={this.hideCart}
            cart={this.state.cart}
            deleteCart={this.deleteCart}
            addQuantity={this.addQuantity}
            deductQuantity={this.deductQuantity}
            purchase={this.purchase}
          />
        )}
      </div>
    );
  }
}
