import { Container, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      "& a": {
        textDecoration: "none",
        color: "#05a",
      },
      "& svg": {
        margin: "0 5px",
        fontSize: "21px",
        color: "gray",
      },
      "& span": {
        color: "rgba(0,0,0,.87)",
      },
    },
  })
);

const DirectoryProduct = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box
        mt={2}
        display="flex"
        alignItems="center"
        className={classes.styleBox}
      >
        <Link to="/">Shopee</Link>
        <KeyboardArrowRightIcon />
        <Box component="span">Clothes</Box>
        <KeyboardArrowRightIcon />
        <Box component="span">
          💃 Áo Sweater Nỉ Nữ Tay Nơ Khoét Vai Tay Bồng 2 Màu
        </Box>
      </Box>
    </Container>
  );
};

export default DirectoryProduct;
