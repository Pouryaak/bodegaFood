import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "semantic-ui-react";
import { selectUser } from "../../features/userSlice";
const options = [
  { key: "m", text: "Standard", value: "5" },
  { key: "f", text: "Express", value: "10" },
];
function CheckoutForm(props) {
  // const user = useSelector(selectUser);

  // useEffect(() => {
  //   props.setName(user.displayName);
  //   props.setEmail(user.email);
  //   props.setAddress(user.addresses);
  // }, [props, user]);

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Full Name</label>
          <input
            required
            onChange={(e) => props.setName(e.target.value)}
            value={props.name}
            placeholder="Enter your full name"
          />
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <input
            required
            onChange={(e) => props.setEmail(e.target.value)}
            value={props.email}
            type="email"
            placeholder="Enter your full Email"
          />
        </Form.Field>
      </Form.Group>
      <Form.TextArea
        onChange={(e) => props.setAddress(e.target.value)}
        required
        value={props.address}
        label="Shipping Address"
      />
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Postal Code</label>
          <input
            required
            onChange={(e) => props.setPostal(e.target.value)}
            value={props.postal}
            type="number"
            placeholder="Enter your postal code"
          />
        </Form.Field>
        <Form.Field required>
          <label>Phone Number</label>
          <input
            required
            onChange={(e) => props.setPhone(e.target.value)}
            value={props.phone}
            type="text"
            placeholder="Enter your phone number"
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Select
          fluid
          onChange={(e, { value }) => props.setDelivery(value)}
          label="Delivery"
          options={options}
          placeholder="Choose Delivery Option"
          required
          value={props.delivery}
        />
        <Form.Field required>
          <label>Delivery Date</label>
          <input
            required
            onChange={(e) => props.setDeliveryTime(e.target.value)}
            value={props.deliveryTime}
            type="date"
            placeholder="Choose Delivery Date"
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
}

export default CheckoutForm;
