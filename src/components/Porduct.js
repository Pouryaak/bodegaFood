import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Divider, Grid, Icon, Image, Segment } from "semantic-ui-react";
import { selectProducts } from "../features/productsSlice";
import "./Product.css";

function Porduct() {
  const products = useSelector(selectProducts);
  const { prodId } = useParams();
  const product = products.find((prod) => prod.prodId === prodId);
  console.log(product);
  return (
    <div className="product">
      <Segment>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Image src={product.image} />
            </Grid.Column>
            <Grid.Column width={8}>
              <h1>{product.name}</h1>
              <div className="product__price">RM{product.price}</div>
              <div className="product__desc">{product.description}</div>
              <div className="product__action">
                <Button className="product_btn">ADD TO CART</Button>
              </div>
              <div className="product__wishlist">
                <Icon name="heart outline" /> Add to wishlist
              </div>
              <Divider />
              <div className="product__number">
                <div>
                  <span>SKU:</span> N/A
                </div>
                <div>
                  <span>Categories:</span> Food
                </div>
                <div>
                  <span>Share:</span> N/A
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default Porduct;
