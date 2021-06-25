import React from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import { Card, Header, Icon } from "semantic-ui-react";
import "react-toastify/dist/ReactToastify.min.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function ProductCard(props) {
  const { name, prodId, price, image, description, sale, discount } =
    props.prod;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: prodId,
        name,
        image,
        price,
        value: 1,
      })
    );
    toast.success("✅ " + name + " Added to cart !");
  };
  return (
    <Card>
      <div className="image">
        {sale && (
          <div className="ui red right ribbon label">{`-${discount}%`}</div>
        )}
        <img src={image} alt="food-pic" />
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
                RM32.00
              </span>
            )}
            {`RM${price}`}
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
