import React from "react";
import { useSelector } from "react-redux";
import { Form, Label } from "semantic-ui-react";
import { selectUser } from "../../../features/userSlice";

function ProfileAccount() {
  const user = useSelector(selectUser);
  return (
    <div>
      <h3>Profile</h3>
      <Form>
        <Form.Field>
          <Label>Full Name</Label>
          <input type="text" value={user.displayName} />
        </Form.Field>
        <Form.Field>
          <Label>Email</Label>
          <input type="text" value={user.email} />
        </Form.Field>
      </Form>
    </div>
  );
}

export default ProfileAccount;
