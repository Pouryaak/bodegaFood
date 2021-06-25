import React, { useState } from "react";
import { Form } from "semantic-ui-react";
const options = [
  { key: "m", text: "Standard", value: "5" },
  { key: "f", text: "Express", value: "10" },
];
function CheckoutForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [phone, setPhone] = useState("");
  const [delivery, setDelivery] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Full Name</label>
          <input required value={name} placeholder="Enter your full name" />
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <input
            required
            value={email}
            type="email"
            placeholder="Enter your full Email"
          />
        </Form.Field>
      </Form.Group>
      <Form.TextArea required value={address} label="Shipping Address" />
      <Form.Group widths="equal">
        <Form.Field required>
          <label>Postal Code</label>
          <input
            required
            value={postal}
            type="number"
            placeholder="Enter your postal code"
          />
        </Form.Field>
        <Form.Field required>
          <label>Phone Number</label>
          <input
            required
            value={phone}
            type="text"
            placeholder="Enter your phone number"
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Select
          fluid
          label="Delivery"
          options={options}
          placeholder="Choose Delivery Option"
          required
          value={delivery}
        />
        <Form.Field required>
          <label>Delivery Date</label>
          <input
            required
            value={deliveryTime}
            type="date"
            placeholder="Choose Delivery Date"
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
}

export default CheckoutForm;
