import React from "react";
import { FaDumbbell } from "react-icons/fa";
import {
  GiApothecary,
  GiBarbecue,
  GiCakeSlice,
  GiDrinkMe,
  GiMilkCarton,
  GiMoneyStack,
  GiSandwich,
  GiTeapotLeaves,
} from "react-icons/gi";
import { List } from "semantic-ui-react";

function CategoryList() {
  return (
    <List divided relaxed selection>
      <List.Item>
        <List.Icon name="utensils" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>Food</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon size="large" verticalAlign="middle">
          <GiBarbecue />
        </List.Icon>
        <List.Content>
          <List.Header>Kebab</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon size="large" verticalAlign="middle">
          <GiSandwich />
        </List.Icon>
        <List.Content>
          <List.Header>Sandwich</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon size="large" verticalAlign="middle">
          <GiApothecary />
        </List.Icon>
        <List.Content>
          <List.Header>Stews</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon size="large" verticalAlign="middle">
          <GiTeapotLeaves />
        </List.Icon>
        <List.Content>
          <List.Header>Breakfast</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon size="large" verticalAlign="middle">
          <GiMilkCarton />
        </List.Icon>
        <List.Content>
          <List.Header>Dairy</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon size="large" verticalAlign="middle">
          <GiDrinkMe />
        </List.Icon>
        <List.Content>
          <List.Header>Drinks</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon size="large" verticalAlign="middle">
          <GiCakeSlice />
        </List.Icon>
        <List.Content>
          <List.Header>Sides</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon size="large" verticalAlign="middle">
          <GiMoneyStack color="#ff4500" />
        </List.Icon>
        <List.Content>
          <List.Header>Sales</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon size="large" verticalAlign="middle">
          <FaDumbbell color="#ff4500" />
        </List.Icon>
        <List.Content>
          <List.Header>Diet Food</List.Header>
        </List.Content>
      </List.Item>
    </List>
  );
}

export default CategoryList;
