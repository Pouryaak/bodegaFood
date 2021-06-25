import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "semantic-ui-react";
import { login } from "../../features/userSlice";
import { auth, db } from "../../firebase";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setName("");
      setEmail("");
      setPassword("");
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              db.collection("users")
                .add({
                  uid: userAuth.user.uid,
                  email: userAuth.user.email,
                  displayName: name,
                  addresses: "",
                })
                .then((res) => {
                  dispatch(
                    login({
                      docId: res.id,
                      email: userAuth.user.email,
                      uid: userAuth.user.uid,
                      displayName: name,
                      addresses: "",
                    })
                  );
                });
            });
        })
        .catch((err) => alert(err));
    } else {
      alert("You need to fill all the fields!");
    }
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Name</label>
          <Input
            required
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button fluid color="blue" type="submit" onClick={onRegister}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
