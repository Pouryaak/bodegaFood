import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";
import { selectCart } from "../features/cartSlice";
import CartItem from "../components/Cart/CartItem";
import "./Checkout.css";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import { selectUser } from "../features/userSlice";

function Checkout() {
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const [paid, setPaid] = useState(false);

  const cartSummary = cart.map((item) => (
    <CartItem key={item.name} item={item} />
  ));
  const cartTotal = (title, amount) => (
    <div className="checkout__totalItem">
      <h5>{title}</h5>
      <div>RM{amount}</div>
    </div>
  );

  return (
    <>
      {!user && (
        <Segment placeholder>
          <Header icon>
            <Icon name="info circle" />
            You need to Register/Login to checkout.
          </Header>
          <Button as={Link} to="/profile" primary>
            Register / Login
          </Button>
        </Segment>
      )}
      {user && (
        <div className="checkout">
          <h1>Checkout</h1>

          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Segment color="orange">
                  <h3>Shipping Address</h3>
                  <Divider />
                  <CheckoutForm />
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment color="green">
                  <h3>Card Summary</h3>
                  <List celled ordered>
                    {cartSummary}
                  </List>
                  <div className="checkout__total">
                    {cartTotal("Subtotal", 23)}
                    {cartTotal("Shipping", 6)}
                    {cartTotal("Tax", 0)}
                  </div>
                  <div>
                    <Divider />
                    {cartTotal("Total", 29)}
                  </div>
                  <Button color="orange" fluid>
                    <Icon name="credit card outline" />
                    Pay
                  </Button>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )}
    </>
  );
}

export default Checkout;
