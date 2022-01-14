import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      fontFamily: "Roboto",
      fontSize: "15px",
      color: "rgba(0,0,0,.87)",
      padding: ".5rem .625rem .5rem 0",
      lineHeight: "1rem",
      "&.active": {
        color: "#ee4d2d",
        fontWeight: 500,
      },
    },
    styleIcon: { fontSize: "18px", color: "#ee4d2d" },
    styleLink: { textDecoration: "none", color: "inherit" },
  })
);

const CustomLink = ({ label, to, activeOnlyWhenExact }: any) => {
  const classes = useStyles();

  let match = useRouteMatch({ path: to, exact: activeOnlyWhenExact });

  return (
    <Box
      display="flex"
      alignItems="center"
      className={`${classes.styleBox} ${match ? "active" : ""}`}
    >
      {match && <ArrowRight className={classes.styleIcon} />}
      <Link to={to} className={classes.styleLink}>
        {label}
      </Link>
    </Box>
  );
};

export default CustomLink;
