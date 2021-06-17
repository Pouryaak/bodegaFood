import classes from "./Navbar.module.css";
import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Icon,
  Image,
  Label,
  Menu,
} from "semantic-ui-react";
import logo from "../../assets/bodega-logo.png";
import { FaShoppingCart, FaUserAlt, FaWhatsapp } from "react-icons/fa";
import SearchBar from "./SearchBar";
import SideBarMenu from "./SideBarMenu";

function Navbar() {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const closeSideBar = () => {
    setSideBarVisible(false);
  };
  const openeSideBar = () => {
    setSideBarVisible(true);
  };
  return (
    <>
      <SideBarMenu open={sideBarVisible} closeSideBar={closeSideBar} />
      <div className={classes.topMessage}>
        <Container>
          <Grid style={{ paddingTop: "15px" }}>
            <Grid.Column only="large screen" floated="left" width={5}>
              Welcome to Bodega food
            </Grid.Column>
            <Grid.Column floated="right" width={3}>
              <FaWhatsapp />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
      <Menu borderless>
        <Container>
          <Menu.Item>
            <Image size="small" src={logo} />
          </Menu.Item>
          <Menu.Item
            style={{ width: "50%" }}
            className={classes.manuLaptopOnly}
          >
            <SearchBar />
          </Menu.Item>
          <Menu.Menu position="right" className={classes.manuLaptopOnly}>
            <Menu.Item as="a">
              <Icon name="user" /> My Account
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="shopping cart" /> Cart
              <Label circular color="orange">
                2
              </Label>
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="heart" /> Favourites
              <Label circular color="orange">
                0
              </Label>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right" className={classes.manuMobileOnly}>
            <Menu.Item style={{ paddingTop: "30px" }}>
              <Button
                basic
                circular
                icon="bars"
                color="black"
                onClick={openeSideBar}
              />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  );
}

export default Navbar;