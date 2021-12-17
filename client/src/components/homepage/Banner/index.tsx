import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import BannerList from "./BannerList";
import BannerSlide from "./BannerSlide";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      margin: "15px auto",
      padding: "0",
    },
  })
);
const Banner = () => {
  const classes = useStyles();
  return (
    <Container className={classes.styleContainer}>
      <BannerSlide />
      <BannerList />
    </Container>
  );
};

export default Banner;
