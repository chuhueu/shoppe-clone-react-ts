import React, { useEffect, useState } from "react";
import { CustomLink } from "../../index";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { FormatListBulleted, KeyboardArrowDown } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { proTypeState } from "../../../redux/reducers/productTypeReducer";
import { getListBrandProType } from "../../../redux/actions/productTypeAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {},
    styleCategory: {},
    styleLink: { textDecoration: "none", color: "inherit" },
    styleHeading: {
      padding: "15px 0",
      borderBottom: "1px solid rgba(0,0,0,.12)",
    },
    styleIconCat: { marginRight: "10px", fontSize: "18px" },
  })
);

interface Params {
  id: string;
}

interface Props {
  getFilterUrl: any;
}

const Category = ({ getFilterUrl }: Props) => {
  const classes = useStyles();

  const [toggle, setToggle] = useState<number>(0);

  const params: Params = useParams();

  const dispatch = useDispatch();

  const listBrandProType = useSelector<RootState, proTypeState>(
    (state) => state.listBrandProType
  );
  const { proTypeInfo, isFetching, error } = listBrandProType;

  useEffect(() => {
    dispatch(getListBrandProType(params.id));
  }, [dispatch, params?.id]);

  const handleToggle = (index: number) => {
    setToggle(index);
  };

  return (
    <Box className={classes.styleWrapper}>
      <Box className={classes.styleCategory}>
        <Link to={`/shop/${params.id}`} className={classes.styleLink}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.styleHeading}
          >
            <FormatListBulleted className={classes.styleIconCat} />
            <Typography variant="caption">Danh Mục</Typography>
          </Box>
        </Link>
        <Box padding="10px 0">
          {isFetching ? (
            <CircularProgress />
          ) : (
            proTypeInfo?.map((item, index) => (
              <CustomLink
                key={item._id}
                to={getFilterUrl({ type: item.slug })}
                label={item.productType}
              />
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Category;
