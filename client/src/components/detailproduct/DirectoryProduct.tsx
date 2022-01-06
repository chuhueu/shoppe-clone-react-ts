import { Container, Box } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import axios from "../../axios";
import { useEffect, useState } from "react";
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
interface productName {
  name?: string;
}
interface Params {
  infoID?: string;
}
interface categoryModel {
  _id?: string;
  category?: string;
  productType?: Array<string>;
}
interface productType {
  productType?: string;
}

const DirectoryProduct = () => {
  //styles
  const classes = useStyles();
  //state
  const [product, setProduct] = useState<productName>();
  const [category, setCategory] = useState<categoryModel>();
  const [productType, setProductType] = useState<productType>();
  const params: Params = useParams();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const resProduct = await axios.get("/product/" + params?.infoID);
        const resCategory = await axios.get(
          "/category/" + resProduct.data.category
        );
        const resProductType = await axios.get(
          "/productType/" + resProduct.data.productType
        );
        setProduct(resProduct.data);
        setCategory(resCategory.data);
        setProductType(resProductType.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, [params?.infoID]);

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
        <Box component="span">{category?.category}</Box>
        <KeyboardArrowRightIcon />
        <Box component="span">{productType?.productType}</Box>
        <KeyboardArrowRightIcon />
        <Box component="span">{product?.name}</Box>
      </Box>
    </Container>
  );
};

export default DirectoryProduct;
