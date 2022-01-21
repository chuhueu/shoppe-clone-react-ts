import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import { Header, Footer, SideBarAccount } from "../../components/index";
import { renderRoutes } from "react-router-config";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      display: "flex",
      marginTop: "30px",
    },
    styleBox: {
      position: "relative",
      flexGrow: 1,
      width: "100%",
      minWidth: "0",
      boxSizing: "border-box",
      background: "#fff",
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 13%)",
      borderRadius: ".125rem",
    },
  })
);

const AccountPage = ({ route }: any) => {
  //styles
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.styleContainer}>
        <SideBarAccount />
        <Box ml={3} className={classes.styleBox}>
          {renderRoutes(route.routes)}
        </Box>
      </Container>
      <Footer show={false} />
    </>
  );
};

export default AccountPage;
