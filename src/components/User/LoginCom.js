import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";

function LoginCom() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
            })
          );
          setIsLoading(false);
        })
        .catch((err) => {
          alert(err);
          setIsLoading(false);
        });
    } else {
      alert("Please fill up all the fields!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button
          loading={isLoading}
          fluid
          color="green"
          type="submit"
          onClick={loginHandler}
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default LoginCom;
