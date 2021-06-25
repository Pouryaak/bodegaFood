import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Icon, Label, Menu, Segment } from "semantic-ui-react";
import { logoutApp } from "../../features/userSlice";
import "./Account.css";
import Addresses from "./account/Addresses";
import OrderHistory from "./account/OrderHistory";
import ProfileAccount from "./account/ProfileAccount";

function Account() {
  const [activeTab, setActivetab] = useState("profile");
  const dispatch = useDispatch();

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
                1
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
