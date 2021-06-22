import React from "react";
import { List, Image, ButtonGroup, Button, Icon } from "semantic-ui-react";

function CartItem(props) {
  const onAddHandler = () => {
    props.addMore(props.item.prodId);
  };
  const onReduceHandler = () => {
    props.reduceItem(props.item.prodId);
  };
  return (
    <List.Item>
      <List.Content floated="right">
        X {props.item.value}{" "}
        <ButtonGroup>
          <Button icon color="green" onClick={onAddHandler}>
            <Icon name="plus" />
          </Button>
          <Button icon color="red" onClick={onReduceHandler}>
            <Icon name="minus" />
          </Button>
        </ButtonGroup>
        {/* X <Input type="number" size="mini" value={item.value} /> */}
      </List.Content>
      <Image avatar src={props.item.prodImg} />
      <List.Content>
        <List.Header>{props.item.name}</List.Header>
        RM{props.item.totalPrice}
      </List.Content>
    </List.Item>
  );
}

export default CartItem;
