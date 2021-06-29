import React from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import { Card, Header, Icon, Image } from "semantic-ui-react";
import "react-toastify/dist/ReactToastify.min.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { name, prodId, salePrice, price, image, description, sale } =
    props.prod;
  const dispatch = useDispatch();

  const discount = (
    ((parseInt(price) - parseInt(salePrice)) * 100) /
    parseInt(price)
  ).toFixed(0);

  const addToCartHandler = () => {
    let currentPrice = sale ? salePrice : price;
    dispatch(
      addToCart({
        id: prodId,
        name,
        image,
        price: parseInt(currentPrice),
        value: 1,
      })
    );
    toast.success("✅ " + name + " Added to cart !");
  };
  return (
    <Card>
      <div className="image">
        {sale && (
          <div className="ui red right ribbon label dicount__label">{`-${discount}%`}</div>
        )}
        <Image as={Link} to={`/product/${prodId}`} src={image} alt="food-pic" />
      </div>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span className="left floated heart">
          <a>
            <Icon name="heart" />
          </a>
        </span>
        <span className="right floated star">
          <Header as="h4">
            {sale && (
              <span
                style={{
                  textDecoration: "line-through",
                  fontSize: "12px",
                  color: "#828282",
                }}
              >
                {`RM${price} `}
              </span>
            )}
            {sale ? ` RM${salePrice}` : `RM${price}`}
          </Header>
        </span>
      </Card.Content>
      <button
        className="ui bottom attached button animated fade"
        style={{ backgroundColor: "#ff4500", color: "#fff" }}
        onClick={addToCartHandler}
      >
        <div className="hidden content">Add To Cart</div>
        <div className="visible content">
          <i className="shop icon"></i>
        </div>
      </button>
      <ToastContainer transition={Slide} autoClose={2000} />
    </Card>
  );
}

export default ProductCard;
