import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Icon, Image, Table } from "semantic-ui-react";
import { selectProducts } from "../../features/productsSlice";
import AdminAddProduct from "./AdminAddProduct";
import "./AdminProducts.css";

function AdminProducts() {
  const [addProductModal, setAddProductModal] = useState(false);
  const products = useSelector(selectProducts);

  const openAddProduct = () => {
    setAddProductModal(true);
  };
  const closeAddProduct = () => {
    setAddProductModal(false);
  };
  return (
    <div>
      <div className="adminProducts__header">
        <h2>Products</h2>
        <Button size="small" onClick={openAddProduct} color="green">
          Add Product
        </Button>
      </div>
      <AdminAddProduct
        open={addProductModal}
        openModal={openAddProduct}
        closeModal={closeAddProduct}
      />
      <Table celled compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Sale</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products.map((prod) => (
            <Table.Row>
              <Table.Cell>
                <Image src={prod.image} size="tiny" />
              </Table.Cell>
              <Table.Cell>{prod.name}</Table.Cell>
              <Table.Cell>RM{prod.price}</Table.Cell>
              <Table.Cell>{prod.sale ? "On" : "Off"}</Table.Cell>
              <Table.Cell>
                <Button icon="edit" color="blue" />{" "}
                <Button icon="trash" color="red" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default AdminProducts;
