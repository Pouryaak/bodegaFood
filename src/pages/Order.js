import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Divider, Grid, Image, Label, Segment } from "semantic-ui-react";
import { selectOrders } from "../features/ordersSlice";
import "./Order.css";

function Order() {
  let { orderId } = useParams();
  const orders = useSelector(selectOrders);
  const order = orders.find((order) => order.orderId === orderId);

  const orderItems = order.items.map((item) => (
    <div className="order__items">
      <div className="order__itemImage">
        <Image src={item.prodImg} circular size="small" />
      </div>
      <div className="order__itemName">{item.name}</div>
      <div className="order__itemPrice">RM{item.totalPrice}</div>
      <div className="order__itemQty">Qty: {item.value}</div>
    </div>
  ));

  const orderSummary = (title, value) => (
    <div className="order__summary">
      <div>{title}</div>
      <div>RM{value}</div>
    </div>
  );

  return (
    <Segment className="order__segment">
      <div className="order">
        <div className="order__header">
          Order <span>#{order.orderId}</span>{" "}
          <Label color="blue" size="medium">
            {order.delivery === "10" ? "Express" : "Standard"}
          </Label>
        </div>
        <div className="order__date">Placed on {order.date}</div>
        {orderItems}
        <div className="order__details">
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Segment>
                  <div>
                    <span>Customer Name:</span> {order.name}
                  </div>
                  <div>
                    <span>Customer Address:</span> {order.address}
                  </div>
                  <div>
                    <span>Customer HP:</span> {order.phone}
                  </div>
                </Segment>
              </Grid.Column>
              <Grid.Column width={8}>
                <Segment>
                  <h3>Total Summary</h3>
                  {orderSummary(
                    "Subtotal",
                    parseInt(order.total) - parseInt(order.delivery)
                  )}
                  {orderSummary("Shipping Fee", order.delivery)}
                  <Divider />
                  {orderSummary("Total", order.total)}
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </Segment>
  );
}

export default Order;
