import { Container } from "@material-ui/core";
import BannerList from "./BannerList";
import BannerSlide from "./BannerSlide";
const Banner = () => {
  return (
    <Container>
      <BannerSlide />
      <BannerList />
    </Container>
  );
};

export default Banner;
