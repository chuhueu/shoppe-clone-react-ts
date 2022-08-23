import { Container, Box, Button, Typography, Grid } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Forum, Storefront } from "@material-ui/icons";
import axios from "../../axios";
import { useEffect, useState } from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      background: "#fff",
      "& img": {
        width: "100px",
        borderRadius: "50%",
      },
    },
    styleGrid: {
      alignItems: "center",
    },
    styleBoxLeft: {
      borderRight: "1px solid rgba(0,0,0,.05)",
      padding: "1.5625rem",
      width: "450px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    styleButton: {
      [theme.breakpoints.down("md")]: {
        display: "block",
      },
      "& button": {
        height: "34px",
        minWidth: "60px",
        padding: "0 15px",
        textTransform: "capitalize",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
      "& button:nth-child(1)": {
        marginRight: theme.spacing(2),
        color: "#ee4d2d",
        background: "rgba(255,87,34,0.1)",
        border: "1px solid #ee4d2d",
      },
      "& button:nth-child(1):hover": {
        background: "#fff",
      },
      "& button:nth-child(2)": {
        color: "#555",
        border: "1px solid rgba(0,0,0,.09)",
        boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
      },
    },
    styleBoxRight: {
      padding: "1.5625rem",
      paddingLeft: "3.4375rem",
      "& label": {
        textTransform: "capitalize",
        color: "rgba(0,0,0,.4)",
        marginRight: ".625rem",
        marginBottom: "1.25rem",
      },
      "& span": {
        color: "#ee4d2d",
      },
    },
    styleLabel: {
      textTransform: "capitalize",
      color: "rgba(0,0,0,.4)",
    },
    styleStats: {
      color: "#ee4d2d",
    },
  })
);
interface brandModel {
  _id?: string;
  name?: string;
  image?: string;
  content?: Array<string>;
}

interface Params {
  name?: string;
  infoID?: string;
}
const ShopProduct = () => {
  //styles
  const classes = useStyles();
  //state
  const [product, setProduct] = useState();
  const [brand, setBrand] = useState<brandModel>();
  const params: Params = useParams();
  useEffect(() => {
    const getCategory = async () => {
      try {
        const resProduct = await axios.get("/product/" + params?.infoID);
        const resBrand = await axios.get("/brand/" + resProduct.data.brand);
        setProduct(resProduct.data);
        setBrand(resBrand.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, [params?.infoID]);

  return (
    <Container>
      <Box mt={3} mb={3} className={classes.styleBox}>
        <Grid container spacing={2} className={classes.styleGrid}>
          <Grid item xs={12} sm={6} md={5}>
            <Box display="flex" className={classes.styleBoxLeft}>
              <Link to={{ pathname: "/shop/" + brand?._id }}>
                <img src={brand?.image} alt={brand?.name} />
              </Link>
              <Box
                pl={1}
                margin="auto 0"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h4">{brand?.name}</Typography>
                <Typography variant="h4" className={classes.styleLabel}>
                  Online 11 minutes ago.
                </Typography>
                <Box pt={1} display="flex" className={classes.styleButton}>
                  <Button variant="outlined">
                    <Forum /> Chat Now
                  </Button>
                  <Button variant="outlined">
                    <Storefront /> View The Shop
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <Box
              display="flex"
              alignItems="center"
              className={classes.styleBoxRight}
            >
              <Box mr={5} display="flex" flexDirection="column">
                <Box display="flex">
                  <Box component="label">Access</Box>
                  <Box component="span">8k</Box>
                </Box>
                <Box display="flex">
                  <Box component="label">Product</Box>
                  <Box component="span">211</Box>
                </Box>
              </Box>
              <Box mr={5} display="flex" flexDirection="column">
                <Box display="flex">
                  <Box component="label">response rate</Box>
                  <Box component="span">98%</Box>
                </Box>
                <Box display="flex">
                  <Box component="label">response time</Box>
                  <Box component="span">in a few hours</Box>
                </Box>
              </Box>
              <Box mr={5} display="flex" flexDirection="column">
                <Box display="flex">
                  <Box component="label">participate</Box>
                  <Box component="span">8 months ago</Box>
                </Box>
                <Box display="flex">
                  <Box component="label">Followers</Box>
                  <Box component="span">214,2k</Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ShopProduct;
