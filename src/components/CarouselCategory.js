import React from "react";
import { Grid, Image } from "semantic-ui-react";
import CategoryList from "./CategoryList";
import MainSlider from "./MainSlider";

function CarouselCategory() {
  return (
    <Grid celled stackable>
      <Grid.Row>
        <Grid.Column width={13}>
          <MainSlider />
        </Grid.Column>
        <Grid.Column width={3}>
          <CategoryList />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CarouselCategory;
