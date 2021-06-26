import React, { useState } from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function CheckoutSuccess(props) {
  const [visible, setVisible] = useState();
  return (
    <Segment placeholder>
      <Header icon>
        <Icon color="green" name="check circle" />
        Your order has been successfully submitted. Your order ID is:{" "}
        {props.orderId}
      </Header>
      <Button color="orange" as={Link} to="/">
        Continue Shopping
      </Button>
    </Segment>
  );
}

export default CheckoutSuccess;
