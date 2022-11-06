import React, { Component } from "react";

export default class Cart extends Component {
  calcBill = () => {
    const cart = this.props.cart;
    return cart.reduce((total, item) => {
      return total + item.quantity * item.prod.price;
    }, 0);
  };

  render() {
    return (
      <div
        className="position-absolute w-100 h-100 top-0 left-0 "
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <div
          className="w-75 bg-white position-absolute p-3 rounded"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <button
            onClick={this.props.hideCart}
            className="btn btn-dark position-absolute"
            style={{
              top: 20,
              right: 20,
            }}
          >
            X
          </button>
          <h2 className="text-center fs-3">Giỏ hàng</h2>
          <table className="table ">
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Hình ảnh</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item) => {
                return (
                  <tr key={item.prod.id}>
                    <td>{item.prod.id}</td>
                    <td>{item.prod.name}</td>
                    <td>
                      <img
                        src={item.prod.image}
                        style={{ width: "100px" }}
                        alt=""
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => {
                          this.props.deductQuantity(item.prod.id);
                        }}
                      >
                        -
                      </button>
                      <span className="mx-2 fs-4">{item.quantity}</span>
                      <button
                        className="btn btn-info"
                        onClick={() => {
                          this.props.addQuantity(item.prod.id);
                        }}
                      >
                        +
                      </button>
                    </td>
                    <td>{item.prod.price}</td>
                    <td>{item.prod.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.deleteCart(item.prod.id);
                        }}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h6>
            Tổng tiền: <span>{this.calcBill()} $</span>
          </h6>

          <button
            onClick={() => {
              this.props.purchase();
            }}
          >
            Thanh toán
          </button>
        </div>
      </div>
    );
  }
}

// 1.Xóa
// 2.Chỉnh số lượng
// 3.Show tổng tiền
// 4.Thêm nút thanh toán => clear vỏ hàng, ẩn html giỏ hàng
