import React from "react";
import { Icon, Label, Menu, Sidebar } from "semantic-ui-react";

function SideBarMenu(props) {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      onHide={() => props.closeSideBar(false)}
      vertical
      visible={props.open}
      width="wide"
      dimmed={props.open}
    >
      <Menu.Item as="a">
        <Icon name="user" /> My Account
      </Menu.Item>
      <Menu.Item as="a">
        <Label circular color="orange">
          2
        </Label>
        <Icon name="shopping cart" /> Cart
      </Menu.Item>
      <Menu.Item as="a">
        <Label circular color="orange">
          0
        </Label>
        <Icon name="heart" /> Favourites
      </Menu.Item>
    </Sidebar>
  );
}

export default SideBarMenu;
