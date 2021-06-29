import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { emptyCart, selectCart, selectCartAmount } from "../features/cartSlice";
import CartItem from "../components/Cart/CartItem";
import "./Checkout.css";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import { selectUser } from "../features/userSlice";
import CheckoutSuccess from "../components/Checkout/CheckoutSuccess";
import { db } from "../firebase";

function Checkout() {
  const cart = useSelector(selectCart);
  const cartAmount = useSelector(selectCartAmount);
  const user = useSelector(selectUser);
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [phone, setPhone] = useState("");
  const [delivery, setDelivery] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [orderId, setOrderId] = useState("");

  const timeNow = Date.now();
  const today = new Date(timeNow);

  useEffect(() => {
    setName(user.displayName);
    setEmail(user.email);
    setAddress(user.addresses);
  }, [user]);

  const cartSummary = cart.map((item) => (
    <CartItem key={item.name} item={item} />
  ));
  const cartTotal = (title, amount) => (
    <div className="checkout__totalItem">
      <h5>{title}</h5>
      <div>RM{amount}</div>
    </div>
  );
  const payment = () => {
    setLoading(true);
    console.log({
      userId: user.uid,
      userDocId: user.docId,
      items: cart,
      name,
      email,
      address,
      postalCode: postal,
      phone,
      delivery,
      deliveryTime,
      total: parseInt(cartAmount) + parseInt(delivery),
      date: today.toDateString(),
    });
    db.collection("orders")
      .add({
        userId: user.uid,
        userDocId: user.docId,
        items: cart,
        name,
        email,
        address,
        postalCode: postal,
        phone,
        delivery,
        deliveryTime,
        total: parseInt(cartAmount) + parseInt(delivery),
        date: today.toDateString(),
      })
      .then((res) => {
        setLoading(false);
        setOrderId(res.id);
        setPaid(true);
        dispatch(emptyCart());
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {paid && <CheckoutSuccess orderId={orderId} />}
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
      {user && !paid && (
        <div className="checkout">
          <h1>Checkout</h1>

          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <Segment color="orange">
                  <h3>Shipping Address</h3>
                  <Divider />
                  <CheckoutForm
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    address={address}
                    setAddress={setAddress}
                    postal={postal}
                    setPostal={setPostal}
                    phone={phone}
                    setPhone={setPhone}
                    delivery={delivery}
                    setDelivery={setDelivery}
                    deliveryTime={deliveryTime}
                    setDeliveryTime={setDeliveryTime}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment color="green">
                  <h3>Card Summary</h3>
                  <List celled ordered>
                    {cartSummary}
                  </List>
                  <div className="checkout__total">
                    {cartTotal("Subtotal", parseInt(cartAmount))}
                    {cartTotal("Shipping", parseInt(delivery ? delivery : 0))}
                    {cartTotal("Tax", 0)}
                  </div>
                  <div>
                    <Divider />
                    {cartTotal(
                      "Total",
                      parseInt(cartAmount) + parseInt(delivery ? delivery : 0)
                    )}
                  </div>
                  <Button
                    onClick={payment}
                    loading={loading}
                    color="orange"
                    fluid
                  >
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
