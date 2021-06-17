import React from "react";
import { Divider, Grid, Header, Label, Segment } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";
import ghorme from "../assets/foods/ghorme.jpeg";
import vaziri from "../assets/foods/Vaziri.jpeg";
import mahicheh from "../assets/foods/Mahiche.jpeg";
import kubide from "../assets/foods/kubide1.jpeg";

function MenuSection() {
  return (
    <Segment className="segmentBorder">
      <Header as="h2">Our Menu</Header>
      <Divider section />
      <Card.Group itemsPerRow={4} stackable>
        <Card>
          <div className="image">
            <div class="ui red right ribbon label">-20%</div>
            <img src={ghorme} alt="food-pic" />
          </div>
          <Card.Content>
            <Card.Header>Ghorme sabzi</Card.Header>
            <Card.Description>
              Chopped parsley, cilantro, baby leeks, kidney beans and herbs,
              cooked with tender beef stew.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="left floated heart">
              <a>
                <Icon name="heart" />
              </a>
            </span>
            <span className="right floated star">
              <Header as="h4">
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "12px",
                    color: "#828282",
                  }}
                >
                  RM32.00{" "}
                </span>
                RM23.00
              </Header>
            </span>
          </Card.Content>
          <div
            class="ui bottom attached button animated fade"
            style={{ backgroundColor: "#ff4500", color: "#fff" }}
          >
            <div class="hidden content">Add To Cart</div>
            <div class="visible content">
              <i class="shop icon"></i>
            </div>
          </div>
        </Card>
        <Card>
          <Image src={vaziri} />
          <Card.Content>
            <Card.Header>Vaziri Kebab</Card.Header>
            <Card.Description>
              Tender ground lamb and whole tomato, skewered and char-grilled to
              perfection.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="left floated heart">
              <a>
                <Icon name="heart" />
              </a>
            </span>
            <span className="right floated star">
              <Header as="h4">RM33.00</Header>
            </span>
          </Card.Content>
          <div
            class="ui bottom attached button animated fade"
            style={{ backgroundColor: "#ff4500", color: "#fff" }}
          >
            <div class="hidden content">Add To Cart</div>
            <div class="visible content">
              <i class="shop icon"></i>
            </div>
          </div>
        </Card>
        <Card>
          <Image src={mahicheh} />
          <Card.Content>
            <Card.Header>Shivid Polo with Lamb Shank</Card.Header>
            <Card.Description>
              Fresh and delicious lamb shank with special and secret ingredients
              with shivid polo will make the taste unforgettable.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="left floated heart">
              <a>
                <Icon name="heart" />
              </a>
            </span>
            <span className="right floated star">
              <Header as="h4">RM41.00</Header>
            </span>
          </Card.Content>
          <div
            class="ui bottom attached button animated fade"
            style={{ backgroundColor: "#ff4500", color: "#fff" }}
          >
            <div class="hidden content">Add To Cart</div>
            <div class="visible content">
              <i class="shop icon"></i>
            </div>
          </div>
        </Card>
        <Card>
          <Image src={kubide} />
          <Card.Content>
            <Card.Header>Lamb Kebab (1 Skewer)</Card.Header>
            <Card.Description>
              One skewer tender ground lamb and whole tomato, skewered and
              char-grilled to perfection.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="left floated heart">
              <a>
                <Icon name="heart" />
              </a>
            </span>
            <span className="right floated star">
              <Header as="h4">RM13.00</Header>
            </span>
          </Card.Content>
          <div
            class="ui bottom attached button animated fade"
            style={{ backgroundColor: "#ff4500", color: "#fff" }}
          >
            <div class="hidden content">Add To Cart</div>
            <div class="visible content">
              <i class="shop icon"></i>
            </div>
          </div>
        </Card>
        <Card>
          <div className="image">
            <div class="ui red right ribbon label">-20%</div>
            <img src={ghorme} alt="food-pic" />
          </div>
          <Card.Content>
            <Card.Header>Ghorme sabzi</Card.Header>
            <Card.Description>
              Chopped parsley, cilantro, baby leeks, kidney beans and herbs,
              cooked with tender beef stew.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="left floated heart">
              <a>
                <Icon name="heart" />
              </a>
            </span>
            <span className="right floated star">
              <Header as="h4">
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "12px",
                    color: "#828282",
                  }}
                >
                  RM32.00{" "}
                </span>
                RM23.00
              </Header>
            </span>
          </Card.Content>
          <div
            class="ui bottom attached button animated fade"
            style={{ backgroundColor: "#ff4500", color: "#fff" }}
          >
            <div class="hidden content">Add To Cart</div>
            <div class="visible content">
              <i class="shop icon"></i>
            </div>
          </div>
        </Card>
        <Card>
          <Image src={vaziri} />
          <Card.Content>
            <Card.Header>Vaziri Kebab</Card.Header>
            <Card.Description>
              Tender ground lamb and whole tomato, skewered and char-grilled to
              perfection.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="left floated heart">
              <a>
                <Icon name="heart" />
              </a>
            </span>
            <span className="right floated star">
              <Header as="h4">RM33.00</Header>
            </span>
          </Card.Content>
          <div
            class="ui bottom attached button animated fade"
            style={{ backgroundColor: "#ff4500", color: "#fff" }}
          >
            <div class="hidden content">Add To Cart</div>
            <div class="visible content">
              <i class="shop icon"></i>
            </div>
          </div>
        </Card>
        <Card>
          <Image src={mahicheh} />
          <Card.Content>
            <Card.Header>Shivid Polo with Lamb Shank</Card.Header>
            <Card.Description>
              Fresh and delicious lamb shank with special and secret ingredients
              with shivid polo will make the taste unforgettable.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="left floated heart">
              <a>
                <Icon name="heart" />
              </a>
            </span>
            <span className="right floated star">
              <Header as="h4">RM41.00</Header>
            </span>
          </Card.Content>
          <div
            class="ui bottom attached button animated fade"
            style={{ backgroundColor: "#ff4500", color: "#fff" }}
          >
            <div class="hidden content">Add To Cart</div>
            <div class="visible content">
              <i class="shop icon"></i>
            </div>
          </div>
        </Card>
        <Card>
          <Image src={kubide} />
          <Card.Content>
            <Card.Header>Lamb Kebab (1 Skewer)</Card.Header>
            <Card.Description>
              One skewer tender ground lamb and whole tomato, skewered and
              char-grilled to perfection.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="left floated heart">
              <a>
                <Icon name="heart" />
              </a>
            </span>
            <span className="right floated star">
              <Header as="h4">RM13.00</Header>
            </span>
          </Card.Content>
          <div
            class="ui bottom attached button animated fade"
            style={{ backgroundColor: "#ff4500", color: "#fff" }}
          >
            <div class="hidden content">Add To Cart</div>
            <div class="visible content">
              <i class="shop icon"></i>
            </div>
          </div>
        </Card>
      </Card.Group>
    </Segment>
  );
}

export default MenuSection;
