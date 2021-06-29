import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Label, Menu, Segment } from "semantic-ui-react";
import { selectUser } from "../../features/userSlice";
import AdminProducts from "../../components/Admin/AdminProducts";
import AdminOrders from "../../components/Admin/AdminOrders";
import AdminUsers from "../../components/Admin/AdminUsers";
import { selectProducts } from "../../features/productsSlice";

function AdminDashboard() {
  const user = useSelector(selectUser);
  const [activeTab, setActiveTab] = useState("products");
  const products = useSelector(selectProducts);

  const openTab = (e, { name }) => {
    setActiveTab(name);
  };

  if (user?.role !== "admin" || !user) {
    return (
      <Segment placeholder>You are not allowed to access this page!</Segment>
    );
  }

  return (
    <Segment>
      <div className="dashboard">
        <Grid>
          <Grid.Column width={5}>
            <Menu vertical fluid>
              <Menu.Item
                name="products"
                active={activeTab === "products"}
                onClick={openTab}
              >
                <Label color="blue">{products.length}</Label>
                Products
              </Menu.Item>
              <Menu.Item
                name="orders"
                active={activeTab === "orders"}
                onClick={openTab}
              >
                <Label color="blue">14</Label>
                Orders
              </Menu.Item>
              <Menu.Item
                name="users"
                active={activeTab === "users"}
                onClick={openTab}
              >
                <Label color="blue">4</Label>
                Users
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={11}>
            <Segment>
              {activeTab === "products" && <AdminProducts />}
              {activeTab === "orders" && <AdminOrders />}
              {activeTab === "users" && <AdminUsers />}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </Segment>
  );
}

export default AdminDashboard;
