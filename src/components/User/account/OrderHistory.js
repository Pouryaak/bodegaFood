import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Icon, Table } from "semantic-ui-react";
import { selectOrders } from "../../../features/ordersSlice";
import { Link } from "react-router-dom";

function OrderHistory() {
  const orders = useSelector(selectOrders);

  return (
    <div>
      <h3>Order History</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Order</Table.HeaderCell>
            <Table.HeaderCell>Order ID</Table.HeaderCell>
            <Table.HeaderCell>Items</Table.HeaderCell>
            <Table.HeaderCell>Delivery</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {orders.map((order) => (
            <Table.Row>
              <Table.Cell>
                <Link to={`/orders/${order.orderId}`}>
                  <Icon name="eye" /> View
                </Link>
              </Table.Cell>
              <Table.Cell>{order.orderId}</Table.Cell>
              <Table.Cell>{order.items.length}</Table.Cell>
              <Table.Cell>
                {order.delivery === "10" ? "Express" : "Standard"}
              </Table.Cell>
              <Table.Cell>{order.date}</Table.Cell>
              <Table.Cell>RM{order.total}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default OrderHistory;
