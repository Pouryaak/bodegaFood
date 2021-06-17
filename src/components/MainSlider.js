import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import food1 from "../assets/food-1.jpeg";
import food2 from "../assets/food-2.jpeg";
import food3 from "../assets/food-3.jpeg";
import food4 from "../assets/food-4.jpeg";
import food5 from "../assets/food-5.jpeg";

function MainSlider() {
  return (
    <Carousel autoPlay showThumbs={false} width="100%" infiniteLoop={true}>
      <div>
        <img src={food1} />
      </div>
      <div>
        <img src={food2} />
      </div>
      <div>
        <img src={food3} />
      </div>
      <div>
        <img src={food4} />
      </div>
      <div>
        <img src={food5} />
      </div>
    </Carousel>
  );
}

export default MainSlider;
