import classes from "./Navbar.module.css";
import React, { useRef, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import logo from "../../assets/bodega-logo.png";
import { FaShoppingCart, FaUserAlt, FaWhatsapp } from "react-icons/fa";
import SearchBar from "./SearchBar";
import SideBarMenu from "./SideBarMenu";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cartSlice";
import CartItems from "../Cart/CartItems";
import emptyCartImage from "../../assets/empryCart.svg";

function Navbar() {
  const cart = useSelector(selectCart);
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [cartSideOpen, setCartSideOpen] = useState(false);

  const closeSideBar = () => {
    setSideBarVisible(false);
  };
  const openeSideBar = () => {
    setSideBarVisible(true);
  };
  const openCartSide = () => {
    setCartSideOpen(true);
  };

  const cartItems = (
    <Segment className={classes.cartSide}>
      <Header as="h3">
        <Icon name="cart" style={{ color: "#ff4500" }} /> Cart Items
      </Header>
      {cart.length > 0 && <CartItems />}
      {cart.length < 1 && (
        <Image size="medium" verticalAlign="middle" src={emptyCartImage} />
      )}
    </Segment>
  );

  const cartSideBar = (
    <Sidebar
      as={Segment}
      direction="right"
      width="very wide"
      icon="labeled"
      visible={cartSideOpen}
      vertical
      animation="overlay"
      onHide={() => setCartSideOpen(false)}
      style={{ backgroundColor: "white" }}
    >
      {cartItems}
    </Sidebar>
  );

  return (
    <>
      {cartSideBar}
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

            <Menu.Item as="a" onClick={openCartSide}>
              <Icon name="shopping cart" /> Cart
              <Label circular color="orange">
                {cart.length}
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
