import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ShopInfoTop from "./ShopInfoTop";
import ShopInfoBottom from "./ShopInfoBottom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { brandState } from "../../../redux/reducers/brandReducer";
import { getBrand } from "../../../redux/actions/brandAction";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleRoot: {
      backgroundColor: "#fff",
      paddingTop: "1.25rem",
      boxShadow: "0 1px 1px rgb(0 0 0 / 5%)",
    },
  })
);

interface Params {
  id: string;
}

const ShopInfo = () => {
  const classes = useStyles();

  const params: Params = useParams();

  const dispatch = useDispatch();

  const brand = useSelector<RootState, brandState>((state) => state.brand);
  const { brandInfo, isFetching, error } = brand;

  useEffect(() => {
    dispatch(getBrand(params.id));
  }, [dispatch, params?.id]);

  return (
    <Box className={classes.styleRoot}>
      <ShopInfoTop brandInfo={brandInfo} />
      <ShopInfoBottom />
    </Box>
  );
};

export default ShopInfo;
