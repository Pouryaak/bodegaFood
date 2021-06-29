import React, { useEffect, useState } from "react";
import { Dimmer, Label, Loader, Table } from "semantic-ui-react";
import { db } from "../../firebase";

function AdminOrders() {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("orders").onSnapshot((snp) => {
      setOrders(
        snp.docs.map((doc) => ({
          orderId: doc.id,
          address: doc.data().address,
          date: doc.data().date,
          delivery: doc.data().delivery,
          deliveryTime: doc.data().deliveryTime,
          items: doc.data().items,
          name: doc.data().name,
          phone: doc.data().phone,
          postalCode: doc.data().postalCode,
          total: doc.data().total,
          userDocId: doc.data().userDocId,
          userId: doc.data().userId,
        }))
      );
      setLoading(false);
    });
  });

  return (
    <>
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
      <div>
        <h2>Orders</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Order ID</Table.HeaderCell>
              <Table.HeaderCell>Items</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Delivery</Table.HeaderCell>
              <Table.HeaderCell>Delivery Time</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {orders?.map((order) => (
              <Table.Row>
                <Table.Cell>{order.orderId}</Table.Cell>
                <Table.Cell>{order.items.length}</Table.Cell>
                <Table.Cell>{order.date}</Table.Cell>
                <Table.Cell>{order.name}</Table.Cell>
                <Table.Cell>
                  <Label color="blue">
                    {order.delivery === "10" ? "Express" : "Standard"}
                  </Label>
                </Table.Cell>
                <Table.Cell>{order.deliveryTime}</Table.Cell>
                <Table.Cell>RM{order.total}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default AdminOrders;
