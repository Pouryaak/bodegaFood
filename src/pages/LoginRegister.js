import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import LoginCom from "../components/User/LoginCom";
import Register from "../components/User/Register";

function LoginRegister() {
  return (
    <div>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <LoginCom />
            </Grid.Column>

            <Grid.Column>
              <Register />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default LoginRegister;
