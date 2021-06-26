import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Icon, Label, Menu, Segment } from "semantic-ui-react";
import { setOrders } from "../../features/ordersSlice";
import { logoutApp, selectUser } from "../../features/userSlice";
import { db } from "../../firebase";
import "./Account.css";
import Addresses from "./account/Addresses";
import OrderHistory from "./account/OrderHistory";
import ProfileAccount from "./account/ProfileAccount";

function Account() {
  const [activeTab, setActivetab] = useState("profile");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [orderNo, setOrderNo] = useState(0);
  const ordersObj = [];

  useEffect(() => {
    db.collection("orders")
      .where("userId", "==", user.uid)
      .get()
      .then((snp) => {
        snp.forEach((order) => {
          ordersObj.push({
            ...order.data(),
            orderId: order.id,
          });
        });
        dispatch(setOrders(ordersObj));
        setOrderNo(ordersObj.length);
      });
  }, []);

  const onTabClick = (e, { name }) => {
    setActivetab(name);
  };

  const logoutHandler = () => {
    dispatch(logoutApp());
  };

  return (
    <Segment>
      <h2>My Account</h2>
      <Grid>
        <Grid.Column width={4}>
          <Menu stackable fluid vertical tabular>
            <Menu.Item
              onClick={onTabClick}
              active={activeTab === "profile"}
              name="profile"
            >
              <Icon name="user" />
              Profile
            </Menu.Item>
            <Menu.Item
              onClick={onTabClick}
              active={activeTab === "addresses"}
              name="addresses"
            >
              <Icon name="map signs" />
              Addresses
            </Menu.Item>
            <Menu.Item
              onClick={onTabClick}
              active={activeTab === "history"}
              name="history"
            >
              <Label circular color="orange">
                {orderNo}
              </Label>
              Order History
            </Menu.Item>
            <Menu.Item
              as="a"
              className="account__logoutBtn"
              name="logout"
              onClick={logoutHandler}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Segment>
            {activeTab === "history" && <OrderHistory />}
            {activeTab === "profile" && <ProfileAccount />}
            {activeTab === "addresses" && <Addresses />}
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default Account;
