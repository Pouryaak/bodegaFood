import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Icon } from "semantic-ui-react";
import { selectUser, updateAddressApp } from "../../../features/userSlice";

function Addresses() {
  const [address, setAddress] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setAddress(user.addresses);
  }, [user]);

  const updateAddressHandler = (e) => {
    e.preventDefault();
    dispatch(updateAddressApp(address));
    alert("Updated!");
  };

  return (
    <div>
      <h3>Address</h3>
      <Form>
        <Form.TextArea
          placeholder="Enter Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button color="green" onClick={updateAddressHandler}>
          <Icon name="save" /> Update
        </Button>
      </Form>
    </div>
  );
}

export default Addresses;
