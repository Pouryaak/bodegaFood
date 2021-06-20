import React from "react";
import { useSelector } from "react-redux";
import { Divider, Grid, Header, Label, Segment } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";
import { selectProducts } from "../features/productsSlice";
import ProductCard from "./ProductCard";

function MenuSection() {
  const prods = useSelector(selectProducts);
  const products = prods.map((prod) => {
    return <ProductCard prod={prod} />;
  });

  return (
    <Segment className="segmentBorder">
      <Header as="h2">Our Menu</Header>
      <Divider section />
      <Card.Group itemsPerRow={4} stackable>
        {products}
      </Card.Group>
    </Segment>
  );
}

export default MenuSection;
